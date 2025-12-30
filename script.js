/* =========================================
   WHATSAPP FORM INTEGRATION
   ========================================= */

function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    // Create success message element
    const successMessage = document.createElement('div');
    successMessage.className = 'form-success';
    successMessage.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <h4>Inquiry Sent Successfully!</h4>
        <p>We have opened WhatsApp for you. Please send the message to complete your inquiry.</p>
        <p><small>If WhatsApp didn't open, please send a message to +977 9810430546</small></p>
    `;
    
    // Create loading element
    const loadingElement = document.createElement('div');
    loadingElement.className = 'form-loading';
    loadingElement.innerHTML = `
        <div class="spinner"></div>
        <p>Preparing your inquiry...</p>
    `;

    contactForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        // Clear previous errors
        clearErrors();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value.trim();
        
        // Validate form
        let isValid = true;
        
        if (!name) {
            showError('nameError', 'Please enter your name');
            isValid = false;
        }
        
        if (!phone) {
            showError('phoneError', 'Please enter your phone number');
            isValid = false;
        } else if (!isValidPhone(phone)) {
            showError('phoneError', 'Please enter a valid phone number');
            isValid = false;
        }
        
        if (!service) {
            showError('serviceError', 'Please select a service');
            isValid = false;
        }
        
        if (!isValid) return;
        
        // Show loading
        contactForm.style.opacity = '0.5';
        contactForm.insertAdjacentElement('afterend', loadingElement);
        loadingElement.style.display = 'block';
        
        // Wait a moment for UX
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Format WhatsApp message
        const whatsappMessage = formatWhatsAppMessage(name, phone, service, message);
        
        // Encode message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // Create WhatsApp URL
        const whatsappUrl = `https://wa.me/9779810430546?text=${encodedMessage}`;
        
        // Hide loading
        contactForm.style.opacity = '1';
        loadingElement.style.display = 'none';
        
        // Show success message
        contactForm.style.display = 'none';
        contactForm.insertAdjacentElement('afterend', successMessage);
        successMessage.style.display = 'block';
        successMessage.classList.add('success-pulse');
        
        // Open WhatsApp in new tab after delay
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
            
            // Reset form after 5 seconds
            setTimeout(() => {
                resetForm();
            }, 5000);
        }, 1500);
        
        // Track form submission
        trackEvent('Form Submission', service);
    });
}

// Format WhatsApp message
function formatWhatsAppMessage(name, phone, service, message) {
    const dateTime = new Date().toLocaleString('en-NP', {
        timeZone: 'Asia/Kathmandu',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    let formattedMessage = `*NEW INQUIRY - Digital Hub Online Nepal*%0A%0A`;
    formattedMessage += `*📅 Date:* ${dateTime}%0A`;
    formattedMessage += `*👤 Name:* ${name}%0A`;
    formattedMessage += `*📱 Phone:* ${phone}%0A`;
    formattedMessage += `*🛠️ Service Needed:* ${service}%0A`;
    
    if (message) {
        formattedMessage += `*💬 Message:* ${message}%0A`;
    }
    
    formattedMessage += `%0A`;
    formattedMessage += `*📍 Source:* Website Contact Form%0A`;
    formattedMessage += `*📊 Status:* New Inquiry%0A`;
    formattedMessage += `%0A`;
    formattedMessage += `_Please contact this client as soon as possible._`;
    
    return formattedMessage;
}

// Validate phone number
function isValidPhone(phone) {
    // Accepts: 98XXXXXXXX, 97798XXXXXXXX, +97798XXXXXXXX
    const phoneRegex = /^(?:\+?977)?98[0-9]{8}$/;
    const cleanPhone = phone.replace(/\D/g, '');
    return phoneRegex.test(cleanPhone);
}

// Show error message
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        
        // Add error class to input
        const inputElement = document.querySelector(`#${elementId.replace('Error', '')}`);
        if (inputElement) {
            inputElement.classList.add('error');
            inputElement.style.borderColor = '#f87171';
        }
    }
}

// Clear all errors
function clearErrors() {
    const errorElements = document.querySelectorAll('.form-error');
    errorElements.forEach(element => {
        element.textContent = '';
        element.style.display = 'none';
    });
    
    // Remove error classes from inputs
    const inputElements = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
    inputElements.forEach(element => {
        element.classList.remove('error');
        element.style.borderColor = '';
    });
}

// Reset form to initial state
function resetForm() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.querySelector('.form-success');
    const loadingElement = document.querySelector('.form-loading');
    
    if (successMessage) {
        successMessage.style.display = 'none';
        successMessage.classList.remove('success-pulse');
    }
    
    if (loadingElement) {
        loadingElement.style.display = 'none';
    }
    
    if (contactForm) {
        contactForm.reset();
        contactForm.style.display = 'block';
        contactForm.style.opacity = '1';
    }
    
    clearErrors();
}

// Add error styles to CSS
const errorStyles = document.createElement('style');
errorStyles.textContent = `
    .form-group input.error,
    .form-group select.error,
    .form-group textarea.error {
        border-color: #f87171 !important;
        background: rgba(248, 113, 113, 0.05) !important;
    }
    
    .form-group input.error:focus,
    .form-group select.error:focus,
    .form-group textarea.error:focus {
        box-shadow: 0 0 0 3px rgba(248, 113, 113, 0.1) !important;
    }
    
    .form-error {
        color: #f87171;
        font-size: 0.85rem;
        margin-top: 5px;
        display: none;
    }
`;
document.head.appendChild(errorStyles);

// Add this to your existing initializeWebsite function
function initializeWebsite() {
    console.log('Digital Hub Online Nepal - Initializing...');
    
    // Initialize all systems
    initializeLanguage();
    initializeMobileMenu();
    initializePaymentModal();
    initializeHelpPopup();
    initializeContactForm(); // Make sure this is called
    initializeScrollAnimations();
    initializeSmoothScrolling();
    initializeAnalytics();
    initializePerformance();
    
    // Show welcome message
    setTimeout(() => {
        showNotification('Welcome to Digital Hub Online Nepal! How can we help you today?');
    }, 1000);
    
    // Force check animations on load
    setTimeout(checkScroll, 500);
    
    console.log('Digital Hub Online Nepal - Initialization complete!');
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeWebsite);
} else {
    initializeWebsite();
}
