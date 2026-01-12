/* =========================================
   DIGITAL HUB ONLINE - MAIN SCRIPT
   Version: 3.1 (Unified)
   ========================================= */

/* --- 1. LANGUAGE CONFIGURATION --- */
const langConfig = {
    en: {
        langBtn: "नेपाली",
        status: "Open Now • Online Service",
        headline: "Digital Solutions &<br>Personal Expertise.",
        desc: "Flight tickets, SSF, Licenses, and Websites. Combining efficiency, data precision, and 10+ years of logistics experience into one platform.",
        cta: "<i class='fas fa-rocket'></i> Our Services",
        servicesTitle: "Our Premium Services",
        servicesSub: "Choose from our comprehensive range of digital services",
        foundedBy: "Founded & Operated By",
        proVoice: "\"Technology should make life easier. My mission is to bring every digital service in Nepal to your fingertips—transparently, reliably, and affordably.\"",
        // Service Titles
        svc1_title: "Flight Booking", svc1_desc: "Domestic & International flights at best rates.", price1: "Best Rate",
        svc2_title: "Shram Approval", svc2_desc: "Online Labor Permit (Re-entry) processing.",
        svc3_title: "SSF Registration", svc3_desc: "Social Security Fund Enrollment.",
        svc4_title: "Website & Hosting", svc4_desc: "Lifetime free hosting for Businesses & Schools.",
        svc5_title: "Driving License", svc5_desc: "Form filling & exam date fixing."
    },
    ne: {
        langBtn: "English",
        status: "अहिले खुला छ • अनलाइन सेवा",
        headline: "डिजिटल समाधान र<br>व्यक्तिगत विशेषज्ञता",
        desc: "फ्लाइट टिकट, श्रम स्वीकृति, लाइसेन्स र वेबसाइट। १० वर्ष भन्दा बढीको अनुभव सहितको भरपर्दो प्लेटफर्म।",
        cta: "<i class='fas fa-rocket'></i> हाम्रा सेवाहरु",
        servicesTitle: "हाम्रा प्रमुख सेवाहरु",
        servicesSub: "हाम्रा विस्तृत डिजिटल सेवाहरूबाट छान्नुहोस्",
        foundedBy: "संस्थापक तथा सञ्चालक",
        proVoice: "\"प्रविधिले जीवन सजिलो बनाउनुपर्छ। मेरो उद्देश्य नेपालका हरेक डिजिटल सेवाहरू पारदर्शी र सस्तोमा तपाइँको हातमा पुर्याउनु हो।\"",
        // Service Titles
        svc1_title: "फ्लाइट टिकट बुकिङ", svc1_desc: "स्वदेशी तथा विदेशी उडानहरु सुपथ मुल्यमा।", price1: "सस्तो दर",
        svc2_title: "अनलाइन श्रम स्वीकृति", svc2_desc: "वैदेशिक रोजगार पुनः श्रम स्वीकृति।",
        svc3_title: "SSF दर्ता", svc3_desc: "सामाजिक सुरक्षा कोषमा दर्ता।",
        svc4_title: "वेबसाइट र होस्टिङ", svc4_desc: "व्यवसाय र स्कूलका लागि आजीवन निःशुल्क।",
        svc5_title: "ड्राइभिङ लाइसेन्स", svc5_desc: "फारम भर्ने र मिति सार्ने काम।"
    }
};

/* --- 2. GLOBAL STATE --- */
let currentLang = 'en';

/* --- 3. LANGUAGE TOGGLE LOGIC --- */
function updateLanguage(lang) {
    currentLang = lang;
    const langBtnText = document.getElementById('lang-text');
    if (langBtnText) langBtnText.textContent = langConfig[lang].langBtn;

    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (langConfig[lang][key]) {
            el.innerHTML = langConfig[lang][key];
        }
    });
}

const langToggle = document.getElementById('lang-toggle');
if (langToggle) {
    langToggle.addEventListener('click', () => updateLanguage(currentLang === 'en' ? 'ne' : 'en'));
}

const langToggleMobile = document.getElementById('lang-toggle-mobile');
if (langToggleMobile) {
    langToggleMobile.addEventListener('click', () => updateLanguage(currentLang === 'en' ? 'ne' : 'en'));
}

/* --- 4. MOBILE MENU & SCROLL --- */
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

function closeMenu() {
    if (hamburger) hamburger.classList.remove('active');
    if (navMenu) navMenu.classList.remove('active');
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    }
    reveal(); // Trigger reveal check on scroll
});

// Reveal Animation
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
}

/* --- 5. MODAL SYSTEM --- */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Payment Specifics
function openPayment(name, amount) {
    const sName = document.getElementById('payServiceName');
    const sAmt = document.getElementById('payAmount');
    if (sName) sName.textContent = name;
    if (sAmt) sAmt.textContent = amount;
    openModal('paymentModal');
}
function closePayment() { closeModal('paymentModal'); }

// Profile Specifics
function openProfile() { openModal('profileModal'); }
function closeProfile() { closeModal('profileModal'); }

// Legal Specifics
function openTerms() { openModal('termsModal'); }
function openPrivacy() { openModal('privacyModal'); }
function closeLegal(type) { closeModal(type + 'Modal'); }

// Help Popup
function closePopup() { 
    closeModal('helpPopup');
    sessionStorage.setItem('helpSeen', 'true');
}

/* --- 6. UTILITIES --- */
function copyNumber(text, method) {
    navigator.clipboard.writeText(text).then(() => {
        alert(`${method ? method + ' ' : ''}Number Copied: ${text}`);
    }).catch(err => {
        alert("Manual copy required: " + text);
    });
}

// Initialize Contact Forms
const contactForms = document.querySelectorAll('.contact-form');
contactForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input');
        if (input) {
            window.open(`https://wa.me/9779810430546?text=Inquiry from Website: ${input.value}`, '_blank');
        }
    });
});

/* --- 7. INITIALIZATION --- */
window.addEventListener('load', () => {
    reveal();
    
    // Auto-show Help Popup
    if (!sessionStorage.getItem('helpSeen')) {
        setTimeout(() => {
            openModal('helpPopup');
        }, 5000);
    }
});

// Close modals on overlay click
window.onclick = function(event) {
    if (event.target.classList.contains('payment-overlay')) closePayment();
    if (event.target.classList.contains('profile-overlay')) closeProfile();
    if (event.target.classList.contains('legal-overlay')) {
        event.target.style.display = 'none';
        document.body.style.overflow = '';
    }
    if (event.target.classList.contains('popup-overlay')) closePopup();
};
