// Task data structure with detailed information
const taskData = [
    {
        id: 1,
        level: 1,
        title: "JavaScript Basics (Client-side logic)",
        completed: false,
        learnItems: [
            "Variables, functions, loops, conditionals",
            "DOM manipulation",
            "Events and basic input handling"
        ],
        project: {
            name: "Number Guessing Game",
            details: [
                "User inputs a number, app tells if it's high/low/right",
                "Learn Math.random, eventListener, if/else, and how to update the DOM"
            ]
        },
        explanation: `
            <p>This is your foundation in programming. JavaScript is the language of the web and essential for any web developer.</p>
            
            <h3>What to Learn:</h3>
            <ul>
                <li><strong>JavaScript Fundamentals</strong>: Variables (let, const), data types, operators, functions, loops (for, while), and conditionals (if/else)</li>
                <li><strong>DOM Manipulation</strong>: document.querySelector(), getElementById(), innerHTML, textContent</li>
                <li><strong>Event Handling</strong>: addEventListener(), click events, form submissions</li>
            </ul>
            
            <h3>Project: Number Guessing Game</h3>
            <p>This simple game will teach you core JavaScript concepts:</p>
            <ul>
                <li>Generate a random number with Math.random()</li>
                <li>Capture user input from a form</li>
                <li>Compare values with conditionals</li>
                <li>Update the DOM to show feedback</li>
            </ul>
            
            <h3>Resources:</h3>
            <ul>
                <li>freeCodeCamp's JavaScript Algorithms and Data Structures</li>
                <li>MDN Web Docs - JavaScript Guide</li>
                <li>JavaScript.info</li>
            </ul>
            
            <h3>Technologies Used:</h3>
            <div>
                <span class="tech-tag">HTML</span>
                <span class="tech-tag">CSS</span>
                <span class="tech-tag">JavaScript</span>
            </div>
        `
    },
    {
        id: 2,
        level: 2,
        title: "JavaScript + Local Storage",
        completed: false,
        learnItems: [
            "Arrays & objects",
            "localStorage",
            "Form handling"
        ],
        project: {
            name: "To-Do List App",
            details: [
                "Add, delete, edit tasks",
                "Store them in localStorage so they stay after refresh",
                "Responsive design using Tailwind or CSS Grid"
            ]
        },
        explanation: `
            <p>This level builds on your JavaScript basics and introduces data persistence using the browser's built-in storage.</p>
            
            <h3>What to Learn:</h3>
            <ul>
                <li><strong>JavaScript Data Structures</strong>: Working with arrays (map, filter, reduce) and objects</li>
                <li><strong>localStorage API</strong>: setItem(), getItem(), JSON.stringify(), JSON.parse()</li>
                <li><strong>Form Handling</strong>: preventDefault(), form validation, collecting input values</li>
                <li><strong>CSS Grid/Flexbox or Tailwind CSS</strong>: For responsive layouts</li>
            </ul>
            
            <h3>Project: To-Do List App</h3>
            <p>This classic project teaches fundamental web app concepts:</p>
            <ul>
                <li>Create, Read, Update, Delete (CRUD) operations</li>
                <li>Storing data in localStorage</li>
                <li>Dynamic DOM updates</li>
                <li>Form handling and validation</li>
                <li>Responsive design techniques</li>
            </ul>
            
            <h3>Resources:</h3>
            <ul>
                <li>MDN Web Docs - Web Storage API</li>
                <li>Tailwind CSS Documentation</li>
                <li>CSS-Tricks - A Complete Guide to Grid</li>
            </ul>
            
            <h3>Technologies Used:</h3>
            <div>
                <span class="tech-tag">HTML</span>
                <span class="tech-tag">CSS/Tailwind</span>
                <span class="tech-tag">JavaScript</span>
                <span class="tech-tag">localStorage</span>
            </div>
        `
    },
    {
        id: 3,
        level: 3,
        title: "APIs + Async JavaScript",
        completed: false,
        learnItems: [
            "fetch(), async/await",
            "Work with JSON data",
            "Basic error handling"
        ],
        project: {
            name: "Weather App",
            details: [
                "Input a city, show weather from OpenWeather API",
                "Display icon, temperature, conditions"
            ]
        },
        explanation: `
            <p>This level introduces you to connecting with external services and handling asynchronous operations.</p>
            
            <h3>What to Learn:</h3>
            <ul>
                <li><strong>Asynchronous JavaScript</strong>: Promises, async/await syntax</li>
                <li><strong>Fetch API</strong>: Making HTTP requests to external services</li>
                <li><strong>Working with JSON</strong>: Parsing and using data from APIs</li>
                <li><strong>Error Handling</strong>: try/catch blocks, handling API errors</li>
            </ul>
            
            <h3>Project: Weather App</h3>
            <p>This project introduces real-world API integration:</p>
            <ul>
                <li>Connect to OpenWeather API</li>
                <li>Handle API keys and URL parameters</li>
                <li>Process JSON responses</li>
                <li>Display dynamic content based on user input</li>
                <li>Handle loading states and errors</li>
            </ul>
            
            <h3>Resources:</h3>
            <ul>
                <li>OpenWeather API Documentation</li>
                <li>MDN Web Docs - Fetch API</li>
                <li>JavaScript.info - Async/await</li>
            </ul>
            
            <h3>Technologies Used:</h3>
            <div>
                <span class="tech-tag">HTML</span>
                <span class="tech-tag">CSS</span>
                <span class="tech-tag">JavaScript</span>
                <span class="tech-tag">Fetch API</span>
                <span class="tech-tag">OpenWeather API</span>
            </div>
        `
    },
    {
        id: 4,
        level: 4,
        title: "React Basics",
        completed: false,
        learnItems: [
            "Components, props, state",
            "useState, useEffect",
            "Handling events and inputs"
        ],
        project: {
            name: "React Counter App + Profile Card",
            details: [
                "Make a card with your name and image",
                "Add buttons to change theme or increment a number"
            ]
        },
        explanation: `
            <p>This level introduces you to React, the popular JavaScript library for building user interfaces.</p>
            
            <h3>What to Learn:</h3>
            <ul>
                <li><strong>React Components</strong>: Functional components, JSX syntax</li>
                <li><strong>React Hooks</strong>: useState for state management, useEffect for side effects</li>
                <li><strong>Props</strong>: Passing data between components</li>
                <li><strong>Event Handling in React</strong>: onClick, onChange, etc.</li>
            </ul>
            
            <h3>Project: React Counter App + Profile Card</h3>
            <p>This beginner-friendly project helps you understand React fundamentals:</p>
            <ul>
                <li>Create functional components</li>
                <li>Manage state with useState</li>
                <li>Pass props between components</li>
                <li>Handle events and update the UI</li>
                <li>Apply conditional styling</li>
            </ul>
            
            <h3>Resources:</h3>
            <ul>
                <li>React Documentation</li>
                <li>Create React App</li>
                <li>React Hooks Documentation</li>
            </ul>
            
            <h3>Technologies Used:</h3>
            <div>
                <span class="tech-tag">React</span>
                <span class="tech-tag">JSX</span>
                <span class="tech-tag">npm/yarn</span>
                <span class="tech-tag">CSS-in-JS</span>
            </div>
        `
    },
    {
        id: 5,
        level: 5,
        title: "React + Routing + API",
        completed: false,
        learnItems: [
            "React Router",
            "Reuse components",
            "Search/filter"
        ],
        project: {
            name: "Movie Search App",
            details: [
                "Search movies using OMDb API",
                "Show poster, title, and rating"
            ]
        },
        explanation: `
            <p>This level expands your React skills with routing and more complex API integration.</p>
            
            <h3>What to Learn:</h3>
            <ul>
                <li><strong>React Router</strong>: Setting up routes, navigation, dynamic routes</li>
                <li><strong>Component Reusability</strong>: Creating reusable UI components</li>
                <li><strong>API Integration with React</strong>: Using useEffect for data fetching</li>
                <li><strong>Search & Filter Functionality</strong>: Implementing search forms and filtering data</li>
            </ul>
            
            <h3>Project: Movie Search App</h3>
            <p>This project teaches important React patterns:</p>
            <ul>
                <li>Set up React Router for multiple pages</li>
                <li>Fetch data from OMDb API</li>
                <li>Create reusable card components for movies</li>
                <li>Implement search functionality</li>
                <li>Add loading states and error handling</li>
            </ul>
            
            <h3>Resources:</h3>
            <ul>
                <li>React Router Documentation</li>
                <li>OMDb API Documentation</li>
                <li>React Query (optional for more advanced data fetching)</li>
            </ul>
            
            <h3>Technologies Used:</h3>
            <div>
                <span class="tech-tag">React</span>
                <span class="tech-tag">React Router</span>
                <span class="tech-tag">CSS/Styled Components</span>
                <span class="tech-tag">OMDb API</span>
            </div>
        `
    },
    {
        id: 6,
        level: 6,
        title: "Backend with Node.js + Express",
        completed: false,
        learnItems: [
            "Node.js basics, Express routing",
            "RESTful APIs (GET, POST, PUT, DELETE)",
            "JSON handling"
        ],
        project: {
            name: "Notes API (Backend Only)",
            details: [
                "Build a REST API that stores notes in memory",
                "Use Postman to test endpoints"
            ]
        },
        explanation: `
            <p>This level introduces backend development with Node.js and Express.</p>
            
            <h3>What to Learn:</h3>
            <ul>
                <li><strong>Node.js Fundamentals</strong>: Event loop, modules, npm</li>
                <li><strong>Express.js Framework</strong>: Routes, middleware, request/response objects</li>
                <li><strong>RESTful API Design</strong>: HTTP methods, status codes, endpoints</li>
                <li><strong>API Testing</strong>: Using Postman to test your API endpoints</li>
            </ul>
            
            <h3>Project: Notes API</h3>
            <p>This backend-focused project teaches server-side development:</p>
            <ul>
                <li>Set up an Express server</li>
                <li>Create RESTful endpoints (GET, POST, PUT, DELETE)</li>
                <li>Implement in-memory data storage</li>
                <li>Handle JSON payloads</li>
                <li>Test API endpoints with Postman</li>
            </ul>
            
            <h3>Resources:</h3>
            <ul>
                <li>Node.js Documentation</li>
                <li>Express.js Documentation</li>
                <li>RESTful API Design Best Practices</li>
                <li>Postman Learning Center</li>
            </ul>
            
            <h3>Technologies Used:</h3>
            <div>
                <span class="tech-tag">Node.js</span>
                <span class="tech-tag">Express.js</span>
                <span class="tech-tag">RESTful API</span>
                <span class="tech-tag">Postman</span>
            </div>
        `
    },
    {
        id: 7,
        level: 7,
        title: "Full-Stack: React + Express",
        completed: false,
        learnItems: [
            "Connect frontend and backend",
            "Axios for requests",
            "Separate frontend/backend folders"
        ],
        project: {
            name: "Full-Stack To-Do App",
            details: [
                "Frontend in React, backend in Express",
                "Save tasks in a JSON file or MongoDB (next level)"
            ]
        },
        explanation: `
            <p>This level combines your frontend and backend skills to create a full-stack application.</p>
            
            <h3>What to Learn:</h3>
            <ul>
                <li><strong>Full-Stack Architecture</strong>: Setting up separate frontend and backend</li>
                <li><strong>Axios</strong>: Making HTTP requests from React to your API</li>
                <li><strong>CORS</strong>: Handling cross-origin requests</li>
                <li><strong>Environment Variables</strong>: Managing configuration separately</li>
            </ul>
            
            <h3>Project: Full-Stack To-Do App</h3>
            <p>This project connects all the pieces:</p>
            <ul>
                <li>Create a React frontend</li>
                <li>Build an Express backend API</li>
                <li>Connect them using Axios</li>
                <li>Implement full CRUD functionality</li>
                <li>Store data in a JSON file (or prepare for MongoDB)</li>
            </ul>
            
            <h3>Resources:</h3>
            <ul>
                <li>Axios Documentation</li>
                <li>CORS npm package</li>
                <li>dotenv for environment variables</li>
                <li>Project structure best practices</li>
            </ul>
            
            <h3>Technologies Used:</h3>
            <div>
                <span class="tech-tag">React</span>
                <span class="tech-tag">Node.js</span>
                <span class="tech-tag">Express.js</span>
                <span class="tech-tag">Axios</span>
                <span class="tech-tag">JSON File Storage</span>
            </div>
        `
    },
    {
        id: 8,
        level: 8,
        title: "MongoDB + Express (CRUD)",
        completed: false,
        learnItems: [
            "MongoDB basics (Atlas)",
            "Mongoose models",
            "Connect to cloud database"
        ],
        project: {
            name: "Blog API",
            details: [
                "Add posts with title/body",
                "GET all posts, DELETE a post"
            ]
        },
        explanation: `
            <p>This level introduces database integration with MongoDB to create persistent applications.</p>
            
            <h3>What to Learn:</h3>
            <ul>
                <li><strong>MongoDB Concepts</strong>: Documents, collections, BSON</li>
                <li><strong>MongoDB Atlas</strong>: Cloud database setup and connection</li>
                <li><strong>Mongoose</strong>: Schema design, models, queries</li>
                <li><strong>Database CRUD Operations</strong>: Create, read, update, delete with MongoDB</li>
            </ul>
            
            <h3>Project: Blog API</h3>
            <p>This project focuses on database integration:</p>
            <ul>
                <li>Set up MongoDB Atlas</li>
                <li>Design Mongoose schemas</li>
                <li>Implement CRUD operations</li>
                <li>Connect Express routes to MongoDB</li>
                <li>Test with Postman</li>
            </ul>
            
            <h3>Resources:</h3>
            <ul>
                <li>MongoDB Atlas Documentation</li>
                <li>Mongoose Documentation</li>
                <li>MongoDB University (free courses)</li>
            </ul>
            
            <h3>Technologies Used:</h3>
            <div>
                <span class="tech-tag">Node.js</span>
                <span class="tech-tag">Express.js</span>
                <span class="tech-tag">MongoDB</span>
                <span class="tech-tag">Mongoose</span>
                <span class="tech-tag">MongoDB Atlas</span>
            </div>
        `
    },
    {
        id: 9,
        level: 9,
        title: "Auth + Full Deployment",
        completed: false,
        learnItems: [
            "JWT authentication",
            "User login/register flow",
            "Deploy backend (Render) and frontend (Vercel or Netlify)"
        ],
        project: {
            name: "Auth-based Notes App",
            details: [
                "Users can sign up, log in, and manage their notes",
                "Store tokens, protect routes"
            ]
        },
        explanation: `
            <p>This level adds authentication and deployment to create production-ready applications.</p>
            
            <h3>What to Learn:</h3>
            <ul>
                <li><strong>JWT Authentication</strong>: JSON Web Tokens, authentication flow</li>
                <li><strong>Password Hashing</strong>: bcrypt for secure password storage</li>
                <li><strong>Protected Routes</strong>: In both frontend and backend</li>
                <li><strong>Deployment</strong>: Backend on Render, frontend on Vercel/Netlify</li>
            </ul>
            
            <h3>Project: Auth-based Notes App</h3>
            <p>This project adds security and goes live:</p>
            <ul>
                <li>Implement user registration and login</li>
                <li>Create and verify JWTs</li>
                <li>Protect API routes</li>
                <li>Store user-specific data</li>
                <li>Deploy both frontend and backend</li>
            </ul>
            
            <h3>Resources:</h3>
            <ul>
                <li>JWT.io</li>
                <li>bcrypt Documentation</li>
                <li>Render Documentation</li>
                <li>Vercel/Netlify Documentation</li>
            </ul>
            
            <h3>Technologies Used:</h3>
            <div>
                <span class="tech-tag">JWT</span>
                <span class="tech-tag">bcrypt</span>
                <span class="tech-tag">MERN Stack</span>
                <span class="tech-tag">Render</span>
                <span class="tech-tag">Vercel/Netlify</span>
            </div>
        `
    },
    {
        id: 10,
        level: 10,
        title: "Your Own Idea (Capstone)",
        completed: false,
        learnItems: [
            "Pick something meaningful to you"
        ],
        project: {
            name: "Capstone Project",
            details: [
                "Portfolio builder",
                "Habit tracker",
                "AI-assisted study planner"
            ]
        },
        explanation: `
            <p>This final level is where you apply everything you've learned to create a project you're passionate about.</p>
            
            <h3>What to Learn:</h3>
            <ul>
                <li><strong>Project Planning</strong>: Requirements gathering, wireframing, architecture</li>
                <li><strong>Independent Problem-Solving</strong>: Researching and implementing new features</li>
                <li><strong>Integration</strong>: Combining all your skills into one cohesive application</li>
                <li><strong>Additional Technologies</strong>: Based on your project needs (file uploads, real-time updates, etc.)</li>
            </ul>
            
            <h3>Project Ideas:</h3>
            <ul>
                <li><strong>Portfolio Builder</strong>: Create a tool for others to build their portfolios</li>
                <li><strong>Habit Tracker</strong>: Track daily habits with statistics and visualizations</li>
                <li><strong>AI-assisted Study Planner</strong>: Plan study sessions with AI recommendations</li>
                <li><strong>Your Unique Idea</strong>: Something that solves a problem you care about</li>
            </ul>
            
            <h3>Resources:</h3>
            <ul>
                <li>GitHub repositories for inspiration</li>
                <li>Stack Overflow for specific issues</li>
                <li>Documentation for any new technologies you incorporate</li>
            </ul>
            
            <h3>Technologies Used:</h3>
            <div>
                <span class="tech-tag">MERN Stack</span>
                <span class="tech-tag">Additional Libraries</span>
                <span class="tech-tag">Your Choice of Tech</span>
            </div>
        `
    }
];

// DOM Elements
const taskInput = document.getElementById('new-task');
const addButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('task-details-modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');
const closeModal = document.querySelector('.close');

// Load tasks from localStorage or use default taskData
let tasks = [];

// Initialize the app
function init() {
    loadTasks();
    renderTasks();
    setupEventListeners();
}

// Load tasks from localStorage
function loadTasks() {
    const savedTasks = localStorage.getItem('progressiveTasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
    } else {
        // Use default tasks if no saved tasks
        tasks = taskData;
        saveTasks();
    }
}

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem('progressiveTasks', JSON.stringify(tasks));
}

// Render tasks to the DOM
function renderTasks(filter = 'all') {
    taskList.innerHTML = '';
    
    const filteredTasks = filterTasks(tasks, filter);
    
    filteredTasks.forEach(task => {
        const taskItem = createTaskElement(task);
        taskList.appendChild(taskItem);
    });
}

// Filter tasks based on status
function filterTasks(tasks, filter) {
    switch(filter) {
        case 'active':
            return tasks.filter(task => !task.completed);
        case 'completed':
            return tasks.filter(task => task.completed);
        default:
            return tasks;
    }
}

// Create task element
function createTaskElement(task) {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.setAttribute('data-id', task.id);
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('task-checkbox');
    checkbox.checked = task.completed;
    
    const levelSpan = document.createElement('span');
    levelSpan.classList.add('task-level');
    levelSpan.textContent = `Level ${task.level}`;
    
    const taskText = document.createElement('span');
    taskText.classList.add('task-text');
    if (task.completed) {
        taskText.classList.add('completed');
    }
    taskText.textContent = task.title;
    
    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('task-actions');
    
    const infoButton = document.createElement('button');
    infoButton.classList.add('btn', 'btn-info');
    infoButton.innerHTML = '<i class="fas fa-info-circle"></i>';
    infoButton.title = 'View Details';
    
    const editButton = document.createElement('button');
    editButton.classList.add('btn', 'btn-edit');
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    editButton.title = 'Edit Task';
    
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-delete');
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteButton.title = 'Delete Task';
    
    actionsDiv.appendChild(infoButton);
    actionsDiv.appendChild(editButton);
    actionsDiv.appendChild(deleteButton);
    
    taskItem.appendChild(checkbox);
    taskItem.appendChild(levelSpan);
    taskItem.appendChild(taskText);
    taskItem.appendChild(actionsDiv);
    
    return taskItem;
}

// Setup event listeners
function setupEventListeners() {
    // Add new task
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
    
    // Task list event delegation
    taskList.addEventListener('click', handleTaskActions);
    
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            renderTasks(filter);
        });
    });
    
    // Modal close button
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Add new task
function addTask() {
    const taskTitle = taskInput.value.trim();
    
    if (taskTitle) {
        const newTask = {
            id: Date.now(),
            level: tasks.length + 1,
            title: taskTitle,
            completed: false,
            learnItems: [],
            project: {
                name: "Custom Project",
                details: []
            },
            explanation: `<p>This is a custom task you added to your coding journey.</p>`
        };
        
        tasks.push(newTask);
        saveTasks();
        renderTasks();
        
        taskInput.value = '';
        taskInput.focus();
    }
}

// Handle task actions (check, info, edit, delete)
function handleTaskActions(e) {
    const target = e.target;
    const taskItem = target.closest('.task-item');
    
    if (!taskItem) return;
    
    const taskId = parseInt(taskItem.getAttribute('data-id'));
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    
    if (taskIndex === -1) return;
    
    // Checkbox - toggle completion
    if (target.classList.contains('task-checkbox')) {
        toggleTaskCompletion(taskIndex);
    }
    
    // Task text - show details
    if (target.classList.contains('task-text')) {
        showTaskDetails(tasks[taskIndex]);
    }
    
    // Info button - show details
    if (target.classList.contains('btn-info') || target.closest('.btn-info')) {
        showTaskDetails(tasks[taskIndex]);
    }
    
    // Edit button - edit task
    if (target.classList.contains('btn-edit') || target.closest('.btn-edit')) {
        editTask(taskIndex);
    }
    
    // Delete button - delete task
    if (target.classList.contains('btn-delete') || target.closest('.btn-delete')) {
        deleteTask(taskIndex);
    }
}

// Toggle task completion
function toggleTaskCompletion(taskIndex) {
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    saveTasks();
    renderTasks();
}

// Show task details in modal
function showTaskDetails(task) {
    modalTitle.textContent = `Level ${task.level}: ${task.title}`;
    
    let content = '';
    
    // Learning items
    if (task.learnItems && task.learnItems.length > 0) {
        content += `<h3>📘 Learn:</h3><ul>`;
        task.learnItems.forEach(item => {
            content += `<li>${item}</li>`;
        });
        content += `</ul>`;
    }
    
    // Project details
    if (task.project) {
        content += `<h3>🎯 Project: ${task.project.name}</h3>`;
        if (task.project.details && task.project.details.length > 0) {
            content += `<ul>`;
            task.project.details.forEach(detail => {
                content += `<li>${detail}</li>`;
            });
            content += `</ul>`;
        }
    }
    
    // Add explanation
    if (task.explanation) {
        content += `<h3>Detailed Explanation:</h3>`;
        content += task.explanation;
    }
    
    modalContent.innerHTML = content;
    modal.style.display = 'block';
}

// Edit task
function editTask(taskIndex) {
    const task = tasks[taskIndex];
    const newTitle = prompt('Edit task:', task.title);
    
    if (newTitle !== null && newTitle.trim() !== '') {
        task.title = newTitle.trim();
        saveTasks();
        renderTasks();
    }
}

// Delete task
function deleteTask(taskIndex) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks.splice(taskIndex, 1);
        saveTasks();
        renderTasks();
    }
}

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);