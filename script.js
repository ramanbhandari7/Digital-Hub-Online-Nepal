/* =========================================
   DIGITAL HUB ONLINE - MAIN SCRIPT
   Version: 3.5 (All Bugs Fixed)
   ========================================= */

/* --- 1. CONFIGURATION --- */
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
        svc1_title: "Flight Booking", svc1_desc: "Domestic & International flights at best rates.", price1: "Best Rate",
        svc2_title: "Shram Approval", svc2_desc: "Online Labor Permit (Re-entry) processing.",
        svc3_title: "SSF Registration", svc3_desc: "Social Security Fund Enrollment.",
        // FIX #3: Added missing svc4_title and svc4_desc keys to langConfig
        svc4_title: "VFS Appointment", svc4_desc: "Date booking for various countries.",
        svc5_title: "Driving License", svc5_desc: "Form filling & exam date fixing."
    },
    ne: {
        langBtn: "English",
        status: "अहिले खुला छ • अनलाइन सेवा",
        headline: "डिजिटल समाधान र<br>व्यक्तिगत विशेषज्ञता",
        desc: "फ्लाइट टिकट, श्रम स्वीकृति, र वेबसाइट। १० वर्ष भन्दा बढीको अनुभव सहितको भरपर्दो प्लेटफर्म।",
        cta: "<i class='fas fa-rocket'></i> हाम्रा सेवाहरु",
        servicesTitle: "हाम्रा प्रमुख सेवाहरु",
        servicesSub: "हाम्रा विस्तृत डिजिटल सेवाहरूबाट छान्नुहोस्",
        foundedBy: "संस्थापक तथा सञ्चालक",
        proVoice: "\"प्रविधिले जीवन सजिलो बनाउनुपर्छ। मेरो उद्देश्य नेपालका हरेक डिजिटल सेवाहरू पारदर्शी र सस्तोमा तपाइँको हातमा पुर्याउनु हो।\"",
        svc1_title: "फ्लाइट टिकट बुकिङ", svc1_desc: "स्वदेशी तथा विदेशी उडानहरु सुपथ मुल्यमा।", price1: "सस्तो दर",
        svc2_title: "अनलाइन श्रम स्वीकृति", svc2_desc: "वैदेशिक रोजगार पुनः श्रम स्वीकृति।",
        svc3_title: "SSF दर्ता", svc3_desc: "सामाजिक सुरक्षा कोषमा दर्ता.",
        // FIX #3: Added missing svc4_title and svc4_desc keys for Nepali too
        svc4_title: "VFS अपोइन्टमेन्ट", svc4_desc: "विभिन्न देशहरूको मिति बुकिङ।",
        svc5_title: "ड्राइभिङ लाइसेन्स", svc5_desc: "फारम भर्ने र मिति सार्ने काम।"
    }
};

let currentLang = 'en';

/* --- FIX #1: Wrapped all DOM-dependent code inside DOMContentLoaded --- */
document.addEventListener('DOMContentLoaded', function () {

    /* --- 2. LANGUAGE TOGGLE --- */
    function updateLanguage(lang) {
        currentLang = lang;
        const langBtnText = document.getElementById('lang-text');
        if (langBtnText) langBtnText.textContent = langConfig[lang].langBtn;
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            if (langConfig[lang][key] !== undefined) el.innerHTML = langConfig[lang][key];
        });
    }

    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) langToggle.addEventListener('click', () => updateLanguage(currentLang === 'en' ? 'ne' : 'en'));

    const langToggleMobile = document.getElementById('lang-toggle-mobile');
    if (langToggleMobile) langToggleMobile.addEventListener('click', () => updateLanguage(currentLang === 'en' ? 'ne' : 'en'));

    /* --- 3. MOBILE NAV --- */
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    /* --- FIX #13: Auto-update copyright year --- */
    const yearEl = document.getElementById('copyrightYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* --- 5. INITIALIZATION & SCROLL --- */
    const reveals = document.querySelectorAll('.reveal');
    const checkScroll = () => {
        reveals.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) el.classList.add('active');
        });
    };
    window.addEventListener('scroll', checkScroll);
    checkScroll();

    if (!sessionStorage.getItem('helpSeen')) {
        setTimeout(() => openModal('helpPopup'), 5000);
    }

    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (nav) {
            if (window.scrollY > 50) nav.classList.add('scrolled');
            else nav.classList.remove('scrolled');
        }
    });

    /* --- 6. CONTACT FORM LOGIC --- */
    const footerForm = document.getElementById('contactFormFooter');
    if (footerForm) {
        footerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const phoneInput = this.querySelector('input[type="text"]');
            const formError = document.getElementById('formError');

            if (phoneInput && phoneInput.value.trim() !== "") {
                if (formError) formError.style.display = 'none';
                const phoneNumber = phoneInput.value.trim();
                const url = `https://wa.me/9779810430546?text=Hello, I need a callback. My number is: ${phoneNumber}`;
                window.open(url, '_blank');
            } else {
                // FIX #7: Show inline error instead of disruptive alert()
                if (formError) {
                    formError.style.display = 'block';
                } else {
                    alert("Please enter a valid phone number.");
                }
            }
        });
    }

}); // End DOMContentLoaded

/* --- 4. GLOBAL FUNCTIONS (outside DOMContentLoaded so onclick= attrs work) --- */

function closeMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    if (hamburger) hamburger.classList.remove('active');
    if (navMenu) navMenu.classList.remove('active');
}

function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Always restore scroll
    }
}

// FIX #5: Global click listener — legal modals now also restore body scroll properly
window.onclick = function (e) {
    if (e.target.classList.contains('payment-overlay')) closeModal('paymentModal');
    if (e.target.classList.contains('profile-overlay')) closeModal('profileModal');
    // FIX #5: Was using inline style.display = 'none' which skipped restoring body overflow
    if (e.target.classList.contains('legal-overlay')) {
        e.target.style.display = 'none';
        document.body.style.overflow = ''; // Restore scroll for legal modals too
    }
    if (e.target.classList.contains('popup-overlay')) closeModal('helpPopup');
};

function openPayment(name, cost) {
    document.getElementById('payServiceName').innerText = name;
    document.getElementById('payAmount').innerText = cost;
    openModal('paymentModal');
}
function closePayment() { closeModal('paymentModal'); }
function openProfile() { openModal('profileModal'); }
function closeProfile() { closeModal('profileModal'); }
function openTerms() { openModal('termsModal'); }
function openPrivacy() { openModal('privacyModal'); }
function closeLegal(type) { closeModal(type + 'Modal'); }

function closePopup() {
    closeModal('helpPopup');
    sessionStorage.setItem('helpSeen', 'true');
}

function copyNumber(text, method) {
    navigator.clipboard.writeText(text)
        .then(() => alert(method + " Number Copied!"))
        .catch(() => alert("Copy failed. Please copy manually: " + text));
}
