/* ... existing code ... */

// --- POPUP LOGIC --- //
const popup = document.getElementById('helpPopup');

function openPopup() {
    popup.style.display = 'flex';
    // Small delay to allow display:flex to apply before changing opacity for animation
    setTimeout(() => {
        popup.style.opacity = '1';
    }, 10);
}

function closePopup() {
    popup.style.opacity = '0';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 300); // Wait for fade out
}

// Auto-trigger after 5 seconds (5000ms)
window.onload = function() {
    // Only show if user hasn't closed it recently (optional session storage logic could go here)
    // For now, simple timer:
    setTimeout(openPopup, 5000); 
};

// Close when clicking outside the box
window.onclick = function(event) {
    if (event.target == popup) {
        closePopup();
    }
}
