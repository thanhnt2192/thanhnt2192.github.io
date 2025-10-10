class EventBus {
    constructor() {
        this.listeners = {};
    }

    // Subscribe to an event
    on(eventName, callback) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(callback);
    }

    // Unsubscribe from an event
    off(eventName, callback) {
        if (!this.listeners[eventName]) return;
        this.listeners[eventName] = this.listeners[eventName].filter(
            listener => listener !== callback
        );
    }

    // Publish an event
    emit(eventName, ...args) {
        if (!this.listeners[eventName]) return;
        this.listeners[eventName].forEach(callback => {
            callback(...args);
        });
    }
}

// Usage example:
const eventBus = new EventBus();

function handlerA(message) {
    console.log("Handler A received:", message);
}

function handlerB(data) {
    console.log("Handler B received data:", data);
}

eventBus.on("dataUpdated", handlerA);
eventBus.on("dataUpdated", handlerB);
eventBus.on("userLoggedIn", (username) => console.log(`${username} logged in!`));

eventBus.emit("dataUpdated", "New data available!"); // Both handlerA and handlerB will be called
eventBus.emit("userLoggedIn", "Alice"); // User login message
eventBus.off("dataUpdated", handlerA);
eventBus.emit("dataUpdated", "More updates!"); // Only handlerB will be called
