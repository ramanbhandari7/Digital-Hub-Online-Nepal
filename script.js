/* =========================================
   DIGITAL HUB ONLINE NEPAL
   Complete Website Functionality
   Version: 2.0
   Date: March 2025
   ========================================= */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

/* =========================================
   1. LANGUAGE TOGGLE SYSTEM
   ========================================= */
const langToggle = document.getElementById('lang-toggle');
const langText = document.getElementById('lang-text');
let currentLang = 'en';

const content = {
    en: {
        langBtn: "नेपाली",
        // Header
        status: "Open Now • Online Service",
        headline: "All Digital Solutions.<br>One Platform.",
        desc: "Flight tickets, SSF, Licenses, and lifetime FREE websites for businesses. Expert service at the lowest price.",
        cta: "Start Now",
        viewServices: "See Pricing",
        
        // Services
        servicesTitle: "Our Premium Services",
        servicesSub: "Choose from our comprehensive range of digital services",
        svc1_title: "Flight Booking",
        svc1_desc: "Domestic & International flights at best rates.",
        price1: "Best Rate",
        svc2_title: "Shram Approval",
        svc2_desc: "Online Labor Permit (Re-entry).",
        svc3_title: "SSF Registration",
        svc3_desc: "Social Security Fund Enrollment.",
        svc4_title: "Website & Hosting",
        svc4_desc: "Lifetime free for Business & Schools.",
        svc5_title: "Driving License",
        svc5_desc: "Form filling & exam date fix.",
        svc6_title: "Bank Account Opening",
        svc6_desc: "Nic Asia, Global IME & more.",
        priceFree: "Free Help",
        
        // Founder & Footer
        proVoice: "\"Technology should make life easier. My mission is to bring every digital service in Nepal to your fingertips—transparently, reliably, and affordably.\"",
        foundedBy: "Founded & Operated By",
        footerDesc: "Your one-stop solution for all digital services in Nepal. Fast, reliable, and trusted by hundreds."
    },
    ne: {
        langBtn: "English",
        // Header
        status: "अहिले खुला छ • अनलाइन सेवा",
        headline: "सबै डिजिटल सेवा<br>एकै ठाउँमा",
        desc: "फ्लाइट टिकट, श्रम स्वीकृति, र व्यवसायका लागि आजीवन निःशुल्क वेबसाइट। सुपथ मूल्यमा भरपर्दो सेवा।",
        cta: "सुरु गर्नुहोस्",
        viewServices: "मूल्य हेर्नुहोस्",
        
        // Services
        servicesTitle: "हाम्रा प्रमुख सेवाहरू",
        servicesSub: "तपाईंको सजिलोको लागि विभिन्न भुक्तानी माध्यमहरू",
        svc1_title: "फ्लाइट टिकट बुकिङ",
        svc1_desc: "स्वदेशी तथा विदेशी उडानहरू सस्तो दरमा।",
        price1: "सस्तो दर",
        svc2_title: "अनलाइन श्रम स्वीकृति",
        svc2_desc: "वैदेशिक रोजगार पुनः श्रम स्वीकृति।",
        svc3_title: "SSF दर्ता",
        svc3_desc: "सामाजिक सुरक्षा कोषमा दर्ता।",
        svc4_title: "वेबसाइट र होस्टिङ",
        svc4_desc: "व्यवसाय र स्कूलका लागि आजीवन निःशुल्क।",
        svc5_title: "ड्राइभिङ लाइसेन्स",
        svc5_desc: "फारम भर्ने र मिति सार्ने काम।",
        svc6_title: "बैंक खाता खोल्न",
        svc6_desc: "घरबाटै बैंक खाता खोल्न सहयोग।",
        priceFree: "निःशुल्क",
        
        // Founder & Footer
        proVoice: "\"प्रविधिले जीवन सजिलो बनाउनुपर्छ। मेरो उद्देश्य नेपालका हरेक डिजिटल सेवाहरू पारदर्शी र सस्तोमा तपाइँको हातमा पुर्याउनु हो।\"",
        foundedBy: "संस्थापक तथा सञ्चालक",
        footerDesc: "नेपालका सबै डिजिटल सेवाहरूको लागि एक भरपर्दो गन्तव्य। छिटो र विश्वासिलो।"
    }
};

// Initialize Language System
function initializeLanguage() {
    if (!langToggle) return;
    
    // Set initial language
    updateLanguage();
    
    // Toggle on click
    langToggle.addEventListener('click', toggleLanguage);
    
    // Hover effects
    langToggle.addEventListener('mouseenter', function() {
        const icon = this.querySelector('i');
        if (icon) {
            icon.style.transform = 'rotate(180deg)';
        }
    });
    
    langToggle.addEventListener('mouseleave', function() {
        const icon = this.querySelector('i');
        if (icon) {
            icon.style.transform = 'rotate(0deg)';
        }
    });
}

// Toggle between English and Nepali
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ne' : 'en';
    updateLanguage();
    
    // Show language change notification
    showNotification(`Language changed to ${currentLang === 'en' ? 'English' : 'Nepali'}`);
}

// Update all content with current language
function updateLanguage() {
    // Update button text
    if (langText) {
        langText.textContent = content[currentLang].langBtn;
    }
    
    // Update all elements with data-key attribute
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (content[currentLang][key]) {
            el.innerHTML = content[currentLang][key];
        }
    });
}

/* =========================================
   2. MOBILE NAVIGATION MENU
   ========================================= */
function initializeMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (!hamburger || !navMenu) return;
    
    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
            closeMenu();
        }
    });
}

// Close mobile menu
function closeMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
}

/* =========================================
   3. PAYMENT MODAL SYSTEM
   ========================================= */
const paymentModal = document.getElementById('paymentModal');
const payNameEl = document.getElementById('payServiceName');
const payAmountEl = document.getElementById('payAmount');

// Initialize payment modal
function initializePaymentModal() {
    if (!paymentModal) return;
    
    // Close modal when clicking outside
    paymentModal.addEventListener('click', function(event) {
        if (event.target === paymentModal) {
            closePayment();
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && paymentModal.style.display === 'flex') {
            closePayment();
        }
    });
}

// Open payment modal
function openPayment(name, cost) {
    if (event) event.preventDefault();
    
    // Update modal content
    if (payNameEl) payNameEl.textContent = name;
    if (payAmountEl) payAmountEl.textContent = cost;
    
    // Show modal with animation
    if (paymentModal) {
        paymentModal.style.display = 'flex';
        setTimeout(() => {
            paymentModal.style.opacity = '1';
        }, 10);
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }
}

// Close payment modal
function closePayment() {
    if (paymentModal) {
        paymentModal.style.opacity = '0';
        setTimeout(() => {
            paymentModal.style.display = 'none';
            document.body.style.overflow = '';
        }, 300);
    }
}

// Copy payment number to clipboard
function copyNumber(num, gateway) {
    navigator.clipboard.writeText(num).then(() => {
        showNotification(`${gateway} number copied: ${num}`);
    }).catch(err => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = num;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification(`${gateway} number copied: ${num}`);
    });
}

/* =========================================
   4. LEGAL MODALS (Terms & Privacy)
   ========================================= */
// Open Terms of Service modal
function openTerms() {
    if (event) event.preventDefault();
    openLegalModal('termsModal');
}

// Open Privacy Policy modal
function openPrivacy() {
    if (event) event.preventDefault();
    openLegalModal('privacyModal');
}

// Open legal modal
function openLegalModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Close on escape key
    const closeOnEscape = function(event) {
        if (event.key === 'Escape') {
            closeLegal(modalId.replace('Modal', ''));
            document.removeEventListener('keydown', closeOnEscape);
        }
    };
    document.addEventListener('keydown', closeOnEscape);
}

// Close legal modal
function closeLegal(type) {
    const modal = document.getElementById(type + 'Modal');
    if (!modal) return;
    
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }, 300);
}

/* =========================================
   5. CONTACT FORM HANDLING
   ========================================= */
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value.trim();
        const phone = this.querySelector('input[type="tel"]').value.trim();
        const service = this.querySelector('select').value;
        const message = this.querySelector('textarea').value.trim();
        
        // Validate form
        if (!name || !phone || !service) {
            showNotification('Please fill all required fields', 'error');
            return;
        }
        
        // Create WhatsApp message
        const whatsappMessage = `Hello Digital Hub!%0A%0A*New Service Inquiry*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Service Needed:* ${service}%0A*Message:* ${message || 'No additional message'}%0A%0APlease contact me for details.`;
        
        // Open WhatsApp with pre-filled message
        const whatsappUrl = `https://wa.me/9779810430546?text=${whatsappMessage}`;
        
        // Show confirmation and redirect
        showNotification('Opening WhatsApp to complete your inquiry...', 'success');
        
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
            
            // Reset form
            contactForm.reset();
            
            // Show success message
            setTimeout(() => {
                showNotification('Your inquiry has been sent successfully! We will contact you soon.', 'success');
            }, 500);
        }, 1000);
    });
}

/* =========================================
   6. HELP POPUP SYSTEM
   ========================================= */
const helpPopup = document.getElementById('helpPopup');

// Initialize help popup
function initializeHelpPopup() {
    if (!helpPopup) return;
    
    // Show popup after 8 seconds
    setTimeout(() => {
        if (!localStorage.getItem('helpPopupShown')) {
            showHelpPopup();
            localStorage.setItem('helpPopupShown', 'true');
        }
    }, 8000);
    
    // Close when clicking outside
    helpPopup.addEventListener('click', function(event) {
        if (event.target === helpPopup) {
            closePopup();
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && helpPopup.style.display === 'flex') {
            closePopup();
        }
    });
}

// Show help popup
function showHelpPopup() {
    if (!helpPopup) return;
    
    helpPopup.style.display = 'flex';
    setTimeout(() => {
        helpPopup.style.opacity = '1';
    }, 10);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

// Close help popup
function closePopup() {
    if (!helpPopup) return;
    
    helpPopup.style.opacity = '0';
    setTimeout(() => {
        helpPopup.style.display = 'none';
        document.body.style.overflow = '';
    }, 300);
}

/* =========================================
   7. SCROLL REVEAL ANIMATIONS
   ========================================= */
function initializeScrollAnimations() {
    // Initial check on load
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
    
    // Force check on resize
    window.addEventListener('resize', checkScroll);
}

// Check scroll position and trigger animations
function checkScroll() {
    const revealElements = document.querySelectorAll('.reveal');
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
}

/* =========================================
   8. SMOOTH SCROLLING
   ========================================= */
function initializeSmoothScrolling() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                event.preventDefault();
                
                // Close mobile menu if open
                closeMenu();
                
                // Calculate scroll position
                const headerHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                // Smooth scroll
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* =========================================
   9. NOTIFICATION SYSTEM
   ========================================= */
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles if not already added
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: white;
                padding: 15px 20px;
                border-radius: 10px;
                box-shadow: 0 5px 20px rgba(0,0,0,0.15);
                z-index: 10001;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 15px;
                max-width: 400px;
                border-left: 4px solid #2563EB;
                transform: translateX(120%);
                transition: transform 0.3s ease;
                font-family: 'Outfit', sans-serif;
            }
            .notification.active { transform: translateX(0); }
            .notification-success { border-left-color: #10b981; }
            .notification-error { border-left-color: #ef4444; }
            .notification-info { border-left-color: #3b82f6; }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 10px;
                color: #0f172a;
            }
            .notification-content i {
                font-size: 1.2rem;
            }
            .notification-success .notification-content i { color: #10b981; }
            .notification-error .notification-content i { color: #ef4444; }
            .notification-info .notification-content i { color: #3b82f6; }
            .notification-close {
                background: none;
                border: none;
                color: #64748b;
                cursor: pointer;
                font-size: 1rem;
                padding: 5px;
                border-radius: 4px;
                transition: all 0.3s ease;
            }
            .notification-close:hover {
                background: #f1f5f9;
                color: #0f172a;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('active');
    }, 10);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.classList.remove('active');
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
}

/* =========================================
   10. ANALYTICS & TRACKING
   ========================================= */
function initializeAnalytics() {
    // Track service clicks
    document.querySelectorAll('.service-box').forEach(service => {
        service.addEventListener('click', function() {
            const serviceName = this.querySelector('h3').textContent;
            trackEvent('Service Click', serviceName);
        });
    });
    
    // Track contact form submissions
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function() {
            const service = this.querySelector('select').value;
            trackEvent('Form Submission', service);
        });
    }
    
    // Track phone calls
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', function() {
            trackEvent('Phone Call', this.href);
        });
    });
    
    // Track WhatsApp clicks
    document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]').forEach(link => {
        link.addEventListener('click', function() {
            trackEvent('WhatsApp Click', this.href);
        });
    });
}

// Track events (you can integrate with Google Analytics here)
function trackEvent(category, action) {
    console.log(`Event: ${category} - ${action}`);
    // Add your analytics tracking code here
    // Example: gtag('event', category, { 'event_category': category, 'event_label': action });
}

/* =========================================
   11. PERFORMANCE OPTIMIZATIONS
   ========================================= */
function initializePerformance() {
    // Lazy load images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(checkScroll, 50);
    });
}

/* =========================================
   12. INITIALIZE WEBSITE
   ========================================= */
function initializeWebsite() {
    console.log('Digital Hub Online Nepal - Initializing...');
    
    // Initialize all systems
    initializeLanguage();
    initializeMobileMenu();
    initializePaymentModal();
    initializeHelpPopup();
    initializeContactForm();
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

/* =========================================
   13. EXPORT FUNCTIONS FOR GLOBAL USE
   ========================================= */
// Make functions available globally
window.openPayment = openPayment;
window.closePayment = closePayment;
window.copyNumber = copyNumber;
window.openTerms = openTerms;
window.openPrivacy = openPrivacy;
window.closeLegal = closeLegal;
window.closePopup = closePopup;
window.closeMenu = closeMenu;

// Initialize website when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeWebsite);
} else {
    initializeWebsite();
}
