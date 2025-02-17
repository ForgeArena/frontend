document.addEventListener("DOMContentLoaded", async () => {
    const userList = document.getElementById("user-list"); // Make sure this matches the HTML

    try {
        const response = await fetch("https://backend-farn.onrender.com/api/users"); // ✅ Replace with actual backend URL
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const users = await response.json();
        if (users.length === 0) {
            userList.innerHTML = "<li>No users found.</li>";
        } else {
            userList.innerHTML = users.map(user => `
                <li>
                    <strong>👤 ${user.username}</strong> <br>
                    🆔 Telegram ID: ${user.telegramId}
                </li>
            `).join("");
        }
    } catch (error) {
        console.error("❌ Error fetching users:", error);
        userList.innerHTML = "<li>❌ Failed to load users.</li>";
    }
});
