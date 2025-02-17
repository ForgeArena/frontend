const API_URL = "https://backend-farn.onrender.com/api/users"; // ✅ Replace with actual backend URL

export async function getUsers() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}
