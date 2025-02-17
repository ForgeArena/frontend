import { getUsers } from "./api.js";

document.addEventListener("DOMContentLoaded", async () => {
    const usersList = document.getElementById("usersList"); // Make sure you have <div id="usersList"></div> in index.html

    try {
        const users = await getUsers();
        usersList.innerHTML = users.map(user => `
            <div>
                <p>👤 <strong>${user.username}</strong></p>
                <p>🆔 Telegram ID: ${user.telegramId}</p>
            </div>
        `).join("");
    } catch (error) {
        usersList.innerHTML = `<p>❌ Failed to load users.</p>`;
    }
});
