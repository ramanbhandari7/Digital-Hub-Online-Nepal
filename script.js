/* =========================================
   DIGITAL HUB ONLINE - MAIN SCRIPT
   Version: 3.0
   ========================================= */

/* --- 1. LANGUAGE CONFIGURATION --- */
const langConfig = {
    en: {
        langBtn: "नेपाली",
        // Navbar
        status: "Open Now • Online Service",
        // Hero
        headline: "All Digital Solutions.<br>One Platform.",
        desc: "Flight tickets, SSF, Licenses, and lifetime FREE websites for businesses. Expert service at the lowest price.",
        cta: "Start Now",
        viewServices: "See Pricing <i class='fas fa-arrow-right'></i>",
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
        // About
        foundedBy: "Founded & Operated By",
        proVoice: "\"Technology should make life easier. My mission is to bring every digital service in Nepal to your fingertips—transparently, reliably, and affordably.\""
    },
    ne: {
        langBtn: "English",
        // Navbar
        status: "अहिले खुला छ • अनलाइन सेवा",
        // Hero
        headline: "सबै डिजिटल सेवा<br>एकै ठाउँमा",
        desc: "फ्लाइट टिकट, श्रम स्वीकृति, र व्यवसायका लागि आजीवन निःशुल्क वेबसाइट। सुपथ मूल्यमा भरपर्दो सेवा।",
        cta: "सुरु गर्नुहोस्",
        viewServices: "मूल्य हेर्नुहोस् <i class='fas fa-arrow-right'></i>",
        // Services
        servicesTitle: "हाम्रा प्रमुख सेवाहरु",
        servicesSub: "हाम्रा विस्तृत डिजिटल सेवाहरूबाट छान्नुहोस्",
        svc1_title: "फ्लाइट टिकट बुकिङ",
        svc1_desc: "स्वदेशी तथा विदेशी उडानहरु सुपथ मुल्यमा।",
        price1: "सस्तो दर",
        svc2_title: "अनलाइन श्रम स्वीकृति",
        svc2_desc: "वैदेशिक रोजगार पुनः श्रम स्वीकृति।",
        svc3_title: "SSF दर्ता",
        svc3_desc: "सामाजिक सुरक्षा कोषमा दर्ता।",
        svc4_title: "वेबसाइट र होस्टिङ",
        svc4_desc: "व्यवसाय र स्कूलका लागि आजीवन निःशुल्क।",
        svc5_title: "ड्राइभिङ लाइसेन्स",
        svc5_desc: "फारम भर्ने र मिति सार्ने काम।",
        svc6_title: "बैंक खाता",
        svc6_desc: "घरबाटै बैंक खाता खोल्न सहयोग।",
        priceFree: "निःशुल्क",
        // About
        foundedBy: "संस्थापक तथा सञ्चालक",
        proVoice: "\"प्रविधिले जीवन सजिलो बनाउनुपर्छ। मेरो उद्देश्य नेपालका हरेक डिजिटल सेवाहरू पारदर्शी र सस्तोमा तपाइँको हातमा पुर्याउनु हो।\""
    }
};

/* --- 2. GLOBAL STATE --- */
let currentLang = 'en';
const langToggle = document.getElementById('lang-toggle');
const langText = document.getElementById('lang-text');

/* --- 3. LANGUAGE TOGGLE LOGIC --- */
function updateLanguage(lang) {
    currentLang = lang;
    
    // Update Button Text
    if(langText) langText.textContent = langConfig[lang].langBtn;
    
    // Update Elements with data-key
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (langConfig[lang][key]) {
            el.innerHTML = langConfig[lang][key];
        }
    });
}

if (langToggle) {
    langToggle.addEventListener('click', () => {
        updateLanguage(currentLang === 'en' ? 'ne' : 'en');
    });

    langToggle.addEventListener('mouseenter', () => {
        if(langText) langText.textContent = (currentLang === 'en') ? "English" : "नेपाली";
        const icon = langToggle.querySelector('i');
        if(icon) icon.style.transform = 'rotate(180deg)';
    });

    langToggle.addEventListener('mouseleave', () => {
        if(langText) langText.textContent = langConfig[currentLang].langBtn;
        const icon = langToggle.querySelector('i');
        if(icon) icon.style.transform = 'rotate(0deg)';
    });
}

/* --- 4. MOBILE MENU (HAMBURGER) --- */
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

function toggleMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

if (hamburger) hamburger.addEventListener('click', toggleMenu);

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('active')) {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            closeMenu();
        }
    }
});

/* --- 5. MODAL SYSTEM (Centralized) --- */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        // Tiny delay for CSS transition
        setTimeout(() => { modal.style.opacity = '1'; }, 10);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => { 
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }, 300);
    }
}

// Payment Specifics
const payNameEl = document.getElementById('payServiceName');
const payAmountEl = document.getElementById('payAmount');

function openPayment(name, cost) {
    if (payNameEl) payNameEl.textContent = name;
    if (payAmountEl) payAmountEl.textContent = cost;
    openModal('paymentModal');
}

function closePayment() {
    closeModal('paymentModal');
}

// Legal Pages
function openTerms() { openModal('termsModal'); }
function openPrivacy() { openModal('privacyModal'); }
function closeLegal(type) { closeModal(type + 'Modal'); }

// Help Popup
function closePopup() {
    closeModal('helpPopup');
    // Store in session storage so it doesn't annoy user on reload
    sessionStorage.setItem('helpSeen', 'true');
}

/* --- 6. UTILITIES --- */
function copyNumber(text, method) {
    navigator.clipboard.writeText(text).then(() => {
        // You could replace this alert with a toast notification in future
        alert(`${method} Number Copied: ${text}`);
    }).catch(err => {
        alert("Copy failed. Please manually copy: " + text);
    });
}

function showNotification(message) {
    // Placeholder for future toast notifications
    console.log("Notification:", message);
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Reveal Animation
function checkScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('active');
        }
    });
}
window.addEventListener('scroll', checkScroll);

/* --- 7. INITIALIZATION --- */
window.addEventListener('load', () => {
    // 1. Trigger reveal for hero
    checkScroll();
    
    // 2. Auto-show Help Popup (after 5s, if not seen)
    if (!sessionStorage.getItem('helpSeen')) {
        setTimeout(() => {
            openModal('helpPopup');
        }, 5000);
    }
    
    // 3. Initialize Contact Form
    initializeContactForm();
});

// Close modals when clicking overlay
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('payment-overlay')) closePayment();
    if (e.target.classList.contains('legal-overlay')) {
        e.target.style.opacity = '0';
        setTimeout(() => { 
            e.target.style.display = 'none';
            document.body.style.overflow = '';
        }, 300);
    }
    if (e.target.classList.contains('popup-overlay')) closePopup();
});
