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
/* ... [Keep existing Popup code] ... */

/* === PAYMENT MODAL LOGIC === */
const paymentModal = document.getElementById('paymentModal');
const payNameEl = document.getElementById('payServiceName');
const payAmountEl = document.getElementById('payAmount');

function openPayment(serviceName, amount) {
    payNameEl.textContent = serviceName;
    payAmountEl.textContent = amount;
    
    paymentModal.style.display = 'flex';
    setTimeout(() => { paymentModal.style.opacity = '1'; }, 10);
}

function closePayment() {
    paymentModal.style.opacity = '0';
    setTimeout(() => { paymentModal.style.display = 'none'; }, 300);
}

// Function to copy phone number to clipboard
function copyNumber(number) {
    navigator.clipboard.writeText(number).then(() => {
        alert("Number " + number + " copied! Now open your App to pay.");
    });
}

// Close payment modal on outside click
window.onclick = function(event) {
    const helpPopup = document.getElementById('helpPopup');
    if (event.target == paymentModal) closePayment();
    if (event.target == helpPopup) {
        helpPopup.style.opacity = '0';
        setTimeout(() => { helpPopup.style.display = 'none'; }, 300);
    }
}
