// Close popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

document.getElementById("requestForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const loading = document.getElementById("loading");
    loading.style.display = "flex"; // Show loader

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const timestamp = new Date().toLocaleString();

    // SEND EMAIL USING EMAILJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        user_name: name,
        user_email: email,
        user_message: message,
        timestamp: timestamp
    }).then(() => {

        // ALSO SAVE TO GOOGLE SHEET
        fetch("YOUR_GOOGLE_SHEET_WEBAPP_URL", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                email: email,
                message: message,
                timestamp: timestamp
            })
        });

        YOUR_GOOGLE_SHEET_WEBAPP_URL


        loading.style.display = "none"; // Hide loader
        document.getElementById("popup").style.display = "flex"; // Show popup
        document.getElementById("requestForm").reset();
    });
});
