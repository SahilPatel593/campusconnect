// ============================================================
// CampusConnect - JavaScript Functionality
// Phase 2: Vanilla JavaScript
// ============================================================

/**
 * MAIN APP CONTROLLER
 * Manages all app functionality and state
 */
class CampusConnectApp {
    constructor() {
        this.isDarkMode = localStorage.getItem('darkMode') === 'true';
        this.init();
    }

    /**
     * Initialize the app
     */
    init() {
        console.log('🚀 CampusConnect App Initialized');
        
        // Set up dark mode if enabled
        if (this.isDarkMode) {
            this.enableDarkMode();
        }

        // Set up event listeners
        this.setupEventListeners();
        
        // Load saved data from localStorage
        this.loadFromStorage();
    }

    /**
     * Set up all event listeners
     */
    setupEventListeners() {
        // Dark mode toggle
        const darkModeToggle = document.getElementById('darkModeToggle');
        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', () => this.toggleDarkMode());
        }

        // Mobile menu toggle
        const navToggle = document.getElementById('navToggle');
        const navLinks = document.getElementById('navLinks');
        if (navToggle && navLinks) {
            navToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        }

        // Form submissions
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleContactForm(e));
        }

        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => this.handleLoginForm(e));
        }

        // Attendance calculator
        const attPresentBtns = document.querySelectorAll('.attendance-btn-present');
        const attAbsentBtns = document.querySelectorAll('.attendance-btn-absent');
        
        attPresentBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.markAttendance(e, 'present'));
        });
        
        attAbsentBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.markAttendance(e, 'absent'));
        });
    }

    /**
     * Toggle Dark Mode
     */
    toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
        localStorage.setItem('darkMode', this.isDarkMode);
        
        if (this.isDarkMode) {
            this.enableDarkMode();
        } else {
            this.disableDarkMode();
        }
        
        console.log(`🌙 Dark Mode: ${this.isDarkMode ? 'Enabled' : 'Disabled'}`);
    }

    /**
     * Enable Dark Mode Styles
     */
    enableDarkMode() {
        document.body.style.backgroundColor = '#1a1a1a';
        document.body.style.color = '#f0f0f0';
        
        // Add dark mode class to all cards
        document.querySelectorAll('.card, .form-container').forEach(card => {
            card.style.backgroundColor = '#2d2d2d';
            card.style.color = '#f0f0f0';
        });

        // Update input styles for dark mode
        document.querySelectorAll('input, textarea, select').forEach(input => {
            input.style.backgroundColor = '#333333';
            input.style.color = '#f0f0f0';
            input.style.borderColor = '#444444';
        });
    }

    /**
     * Disable Dark Mode Styles
     */
    disableDarkMode() {
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
        
        // Reset card styles
        document.querySelectorAll('.card, .form-container').forEach(card => {
            card.style.backgroundColor = '';
            card.style.color = '';
        });

        // Reset input styles
        document.querySelectorAll('input, textarea, select').forEach(input => {
            input.style.backgroundColor = '';
            input.style.color = '';
            input.style.borderColor = '';
        });
    }

    /**
     * Handle Contact Form Submission
     */
    handleContactForm(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('contactName').value,
            email: document.getElementById('contactEmail').value,
            phone: document.getElementById('contactPhone').value,
            subject: document.getElementById('contactSubject').value,
            message: document.getElementById('contactMessage').value,
            timestamp: new Date().toLocaleString()
        };

        // Save to localStorage
        let submissions = JSON.parse(localStorage.getItem('contactSubmissions')) || [];
        submissions.push(formData);
        localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

        // Show success message
        alert(`✓ Thank you ${formData.name}!\n\nYour message has been saved. We'll contact you soon!\n\nEmail: ${formData.email}\nSubject: ${formData.subject}`);
        
        console.log('📧 Contact Form Submitted:', formData);
        e.target.reset();
    }

    /**
     * Handle Login Form Submission
     */
    handleLoginForm(e) {
        e.preventDefault();
        
        const formData = {
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            rememberMe: document.getElementById('remember').checked,
            loginTime: new Date().toLocaleString()
        };

        // Save user session
        if (formData.rememberMe) {
            localStorage.setItem('userEmail', formData.email);
        }

        // Save login history
        let loginHistory = JSON.parse(localStorage.getItem('loginHistory')) || [];
        loginHistory.push({
            email: formData.email,
            timestamp: formData.loginTime
        });
        localStorage.setItem('loginHistory', JSON.stringify(loginHistory));

        alert(`✓ Welcome ${formData.email}!\n\nLogin successful!\n\nNote: Phase 2 - No actual backend yet. Data stored in localStorage.`);
        
        console.log('🔐 Login Attempted:', formData);
    }

    /**
     * Mark Attendance
     */
    markAttendance(e, status) {
        const btn = e.target;
        const attendanceItem = btn.closest('.attendance-item');
        
        if (status === 'present') {
            attendanceItem.style.backgroundColor = '#d4edda';
            btn.style.backgroundColor = '#28a745';
            btn.style.color = 'white';
        } else {
            attendanceItem.style.backgroundColor = '#f8d7da';
            btn.style.backgroundColor = '#dc3545';
            btn.style.color = 'white';
        }

        // Save to localStorage
        const attendance = {
            date: new Date().toLocaleDateString(),
            status: status,
            timestamp: new Date().toLocaleString()
        };

        let attendanceList = JSON.parse(localStorage.getItem('attendance')) || [];
        attendanceList.push(attendance);
        localStorage.setItem('attendance', JSON.stringify(attendanceList));

        console.log(`✓ Attendance marked as ${status}:`, attendance);
    }

    /**
     * Load data from localStorage
     */
    loadFromStorage() {
        const savedEmail = localStorage.getItem('userEmail');
        if (savedEmail) {
            console.log(`👤 User: ${savedEmail} (Remembered)`);
        }
    }
}

// ============================================================
// TO-DO LIST MANAGER
// ============================================================

class ToDoList {
    constructor() {
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
        this.todoInput = document.getElementById('todoInput');
        this.todoBtn = document.getElementById('todoBtn');
        this.todoList = document.getElementById('todoList');
        this.init();
    }

    init() {
        if (!this.todoBtn) return;
        
        this.todoBtn.addEventListener('click', () => this.addTodo());
        this.todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTodo();
        });
        this.render();
    }

    addTodo() {
        const text = this.todoInput.value.trim();
        if (text === '') {
            alert('⚠️ Please enter a task!');
            return;
        }

        const todo = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toLocaleDateString()
        };

        this.todos.push(todo);
        this.save();
        this.render();
        this.todoInput.value = '';
        
        console.log('✓ Todo added:', todo);
    }

    completeTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.save();
            this.render();
            console.log(`✓ Todo completed: ${todo.text}`);
        }
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id);
        this.save();
        this.render();
        console.log(`✓ Todo deleted`);
    }

    save() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    render() {
        if (!this.todoList) return;
        
        this.todoList.innerHTML = '';
        
        if (this.todos.length === 0) {
            this.todoList.innerHTML = '<p style="text-align: center; color: #999;">No tasks yet. Add one to get started! 📝</p>';
            return;
        }

        this.todos.forEach(todo => {
            const li = document.createElement('li');
            li.style.cssText = `
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0.75rem;
                background: ${todo.completed ? '#f0f0f0' : '#fff'};
                border-bottom: 1px solid #eee;
                text-decoration: ${todo.completed ? 'line-through' : 'none'};
                color: ${todo.completed ? '#999' : '#333'};
            `;

            li.innerHTML = `
                <span>${todo.text}</span>
                <div style="display: flex; gap: 0.5rem;">
                    <button class="btn-primary" onclick="todoList.completeTodo(${todo.id})" style="padding: 0.25rem 0.75rem; font-size: 0.8rem;">
                        ${todo.completed ? '↩ Undo' : '✓ Done'}
                    </button>
                    <button class="btn-secondary" onclick="todoList.deleteTodo(${todo.id})" style="padding: 0.25rem 0.75rem; font-size: 0.8rem;">
                        🗑 Delete
                    </button>
                </div>
            `;

            this.todoList.appendChild(li);
        });
    }
}

// ============================================================
// ATTENDANCE CALCULATOR
// ============================================================

class AttendanceCalculator {
    constructor() {
        this.attendanceData = JSON.parse(localStorage.getItem('attendanceData')) || {};
    }

    /**
     * Calculate attendance percentage
     * @param {number} classesAttended - Number of classes attended
     * @param {number} totalClasses - Total number of classes
     * @return {number} Attendance percentage
     */
    calculatePercentage(classesAttended, totalClasses) {
        if (totalClasses === 0) return 0;
        return Math.round((classesAttended / totalClasses) * 100);
    }

    /**
     * Get status based on attendance
     */
    getStatus(percentage) {
        if (percentage >= 85) return '✓ Good';
        if (percentage >= 75) return '⚠ Fair';
        return '✗ Poor';
    }

    /**
     * Add attendance record
     */
    addRecord(subject, classesAttended, totalClasses) {
        const percentage = this.calculatePercentage(classesAttended, totalClasses);
        
        this.attendanceData[subject] = {
            classesAttended,
            totalClasses,
            percentage,
            status: this.getStatus(percentage),
            updatedAt: new Date().toLocaleDateString()
        };

        localStorage.setItem('attendanceData', JSON.stringify(this.attendanceData));
        console.log(`✓ Attendance record added for ${subject}:`, this.attendanceData[subject]);
    }

    /**
     * Get all records
     */
    getAllRecords() {
        return this.attendanceData;
    }
}

// ============================================================
// NOTES MANAGER
// ============================================================

class NotesManager {
    constructor() {
        this.notes = JSON.parse(localStorage.getItem('userNotes')) || [];
    }

    /**
     * Add a new note
     */
    addNote(title, subject, description) {
        const note = {
            id: Date.now(),
            title,
            subject,
            description,
            createdAt: new Date().toLocaleDateString(),
            likes: 0
        };

        this.notes.push(note);
        this.save();
        console.log('✓ Note added:', note);
        return note;
    }

    /**
     * Get notes by subject
     */
    getNotesBySubject(subject) {
        return this.notes.filter(note => note.subject === subject);
    }

    /**
     * Search notes
     */
    searchNotes(query) {
        const lowerQuery = query.toLowerCase();
        return this.notes.filter(note => 
            note.title.toLowerCase().includes(lowerQuery) ||
            note.description.toLowerCase().includes(lowerQuery)
        );
    }

    /**
     * Like a note
     */
    likeNote(id) {
        const note = this.notes.find(n => n.id === id);
        if (note) {
            note.likes++;
            this.save();
            console.log(`❤ Note liked: ${note.title}`);
        }
    }

    /**
     * Delete a note
     */
    deleteNote(id) {
        this.notes = this.notes.filter(n => n.id !== id);
        this.save();
        console.log('✓ Note deleted');
    }

    /**
     * Save to localStorage
     */
    save() {
        localStorage.setItem('userNotes', JSON.stringify(this.notes));
    }

    /**
     * Get all notes
     */
    getAllNotes() {
        return this.notes;
    }
}

// ============================================================
// EVENTS MANAGER
// ============================================================

class EventsManager {
    constructor() {
        this.events = JSON.parse(localStorage.getItem('userEvents')) || [];
        this.interested = JSON.parse(localStorage.getItem('interestedEvents')) || [];
    }

    /**
     * Add event to interested list
     */
    markInterested(eventName) {
        if (!this.interested.includes(eventName)) {
            this.interested.push(eventName);
            this.save();
            console.log(`✓ Interested in: ${eventName}`);
        }
    }

    /**
     * Remove from interested list
     */
    removeInterested(eventName) {
        this.interested = this.interested.filter(e => e !== eventName);
        this.save();
        console.log(`✗ Removed interest: ${eventName}`);
    }

    /**
     * Get all interested events
     */
    getInterestedEvents() {
        return this.interested;
    }

    /**
     * Save to localStorage
     */
    save() {
        localStorage.setItem('interestedEvents', JSON.stringify(this.interested));
    }
}

// ============================================================
// SEARCH FUNCTIONALITY
// ============================================================

class SearchManager {
    /**
     * Generic search function
     */
    static search(items, query, fields) {
        const lowerQuery = query.toLowerCase();
        return items.filter(item => {
            return fields.some(field => {
                const value = item[field];
                return value && value.toString().toLowerCase().includes(lowerQuery);
            });
        });
    }

    /**
     * Highlight search results
     */
    static highlightResults(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark style="background-color: yellow;">$1</mark>');
    }
}

// ============================================================
// NOTIFICATION SYSTEM
// ============================================================

class NotificationManager {
    /**
     * Show notification
     */
    static show(message, type = 'info', duration = 3000) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem;
            background-color: ${
                type === 'success' ? '#28a745' :
                type === 'error' ? '#dc3545' :
                type === 'warning' ? '#ffc107' :
                '#0099FF'
            };
            color: white;
            border-radius: 8px;
            z-index: 1000;
            animation: slideDown 0.3s ease-in-out;
            max-width: 300px;
        `;

        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, duration);
    }
}

// ============================================================
// INITIALIZE APP ON PAGE LOAD
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('📱 CampusConnect Phase 2 - JavaScript Loaded');
    
    // Initialize main app
    window.app = new CampusConnectApp();
    
    // Initialize individual managers
    window.todoList = new ToDoList();
    window.attendanceCalc = new AttendanceCalculator();
    window.notesManager = new NotesManager();
    window.eventsManager = new EventsManager();
    
    console.log('✓ All managers initialized');
    console.log('Available objects:', {
        app: window.app,
        todoList: window.todoList,
        attendanceCalc: window.attendanceCalc,
        notesManager: window.notesManager,
        eventsManager: window.eventsManager
    });
});
