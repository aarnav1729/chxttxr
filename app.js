// Establish a WebSocket connection to the server
const socket = new WebSocket('ws://localhost:3000'); // Change this URL as needed

// Handle incoming messages
socket.addEventListener('message', (event) => {
    const chat = document.getElementById('chat');
    const message = document.createElement('p');
    message.textContent = event.data;
    chat.appendChild(message);
});

// Handle form submission
const form = document.getElementById('message-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('message-input');
    const message = input.value;
    socket.send(message);
    input.value = '';
});
