const API_BASE_URL = "https://backend-farn.onrender.com"; // Replace with your actual backend URL

// Function to fetch users from the backend
async function fetchUsers() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/users`);
        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }
        const users = await response.json();
        return users;
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

// Function to display users on the frontend
async function displayUsers() {
    const users = await fetchUsers();
    const userList = document.getElementById("user-list"); // Make sure your HTML has an <ul> with this ID

    userList.innerHTML = ""; // Clear the list before adding new data

    users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.username} (ID: ${user.telegramId})`;
        userList.appendChild(li);
    });
}

// Call displayUsers when the page loads
document.addEventListener("DOMContentLoaded", displayUsers);
