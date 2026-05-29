import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'
import authService from '../services/apiClient'

const ServerStatusContext = createContext({
  isOnline: true,
  isChecking: false,
  checkConnection: async () => {}
})

export const useServerStatus = () => useContext(ServerStatusContext)

export const ServerStatusProvider = ({ children }) => {
  const [isOnline, setIsOnline] = useState(true)
  const [isChecking, setIsChecking] = useState(false)

  // Expose a global flag to allow apiClient to short-circuit requests when offline
  useEffect(() => {
    window.__SERVER_ONLINE = isOnline
  }, [isOnline])

  // Get active API URL from apiClient (relative or absolute)
  const getApiUrl = () => {
    const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'
    const trimmed = baseUrl.replace(/\/+$|^\s+|\s+$/g, '')
    const resolved = trimmed.startsWith('/') ? `${window.location.origin}${trimmed}` : trimmed
    return resolved.endsWith('/api') ? resolved : `${resolved}/api`
  }

  const checkConnection = async () => {
    if (isChecking) return
    setIsChecking(true)
    const activeUrl = getApiUrl()

    try {
      // Ping the explicit health check endpoint
      const resp = await axios.get(`${activeUrl}/health`, {
        timeout: 2500, // Timeout after 2.5 seconds
      })

      const data = resp?.data

      // Expect the backend to return success and connected database.
      // Local development may use mongodb:// and still be healthy.
      const healthy = data && data.success && data.database && data.database.connected

      if (healthy) {
        // If previously offline, notify recovery
        if (!isOnline) {
          window.dispatchEvent(new CustomEvent('api-online'))
          window.dispatchEvent(new CustomEvent('api-recovered'))
        }
        setIsOnline(true)
      } else {
        console.warn('[server-monitor] Backend health check indicates DB disconnected or non-atlas deployment:', data)
        setIsOnline(false)
        window.dispatchEvent(new CustomEvent('api-offline'))
      }
    } catch (error) {
      // If it fails (Network Error, timeout, etc.), set offline
      console.warn('[server-monitor] Failed to reach backend at:', activeUrl, error.message)
      setIsOnline(false)
      window.dispatchEvent(new CustomEvent('api-offline'))
    } finally {
      setIsChecking(false)
    }
  }

  // Effect to handle periodic reconnect attempts when offline
  useEffect(() => {
    let intervalId = null

    if (!isOnline) {
      console.log('[server-monitor] Backend is offline. Retrying every 3 seconds...')
      // Reconnect retry loop: check connection every 3 seconds
      intervalId = setInterval(() => {
        checkConnection()
      }, 3000)
    } else {
      // Regular background health-check ping every 10 seconds to ensure status is up to date
      intervalId = setInterval(() => {
        checkConnection()
      }, 10000)
    }

    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [isOnline])

  // Initial check on mount
  useEffect(() => {
    checkConnection()
    
    // Bind to custom event from apiClient to trigger offline state immediately on request failure
    const handleApiOffline = () => {
      setIsOnline(false)
    }
    
    window.addEventListener('api-offline', handleApiOffline)
    return () => {
      window.removeEventListener('api-offline', handleApiOffline)
    }
  }, [])

  return (
    <ServerStatusContext.Provider value={{ isOnline, isChecking, checkConnection }}>
      {children}
    </ServerStatusContext.Provider>
  )
}
