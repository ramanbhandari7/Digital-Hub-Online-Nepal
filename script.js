/* =========================================
   DIGITAL HUB ONLINE - MAIN SCRIPT
   Version: 3.3 (Legal Text & Socials Fixed)
   ========================================= */

/* --- 1. CONFIGURATION --- */
const langConfig = {
    en: {
        langBtn: "नेपाली",
        // Content mapping
        status: "Open Now • Online Service",
        headline: "Digital Solutions &<br>Personal Expertise.",
        desc: "Flight tickets, SSF, Licenses, and Websites. Combining efficiency, data precision, and 10+ years of logistics experience into one platform.",
        cta: "<i class='fas fa-rocket'></i> Our Services",
        servicesTitle: "Our Premium Services",
        servicesSub: "Choose from our comprehensive range of digital services",
        foundedBy: "Founded & Operated By",
        proVoice: "\"Technology should make life easier. My mission is to bring every digital service in Nepal to your fingertips—transparently, reliably, and affordably.\"",
        // Services
        svc1_title: "Flight Booking", svc1_desc: "Domestic & International flights at best rates.", price1: "Best Rate",
        svc2_title: "Shram Approval", svc2_desc: "Online Labor Permit (Re-entry) processing.",
        svc3_title: "SSF Registration", svc3_desc: "Social Security Fund Enrollment.",
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
        // Services
        svc1_title: "फ्लाइट टिकट बुकिङ", svc1_desc: "स्वदेशी तथा विदेशी उडानहरु सुपथ मुल्यमा।", price1: "सस्तो दर",
        svc2_title: "अनलाइन श्रम स्वीकृति", svc2_desc: "वैदेशिक रोजगार पुनः श्रम स्वीकृति।",
        svc3_title: "SSF दर्ता", svc3_desc: "सामाजिक सुरक्षा कोषमा दर्ता.",
        svc5_title: "ड्राइभिङ लाइसेन्स", svc5_desc: "फारम भर्ने र मिति सार्ने काम।"
    }
};

let currentLang = 'en';

/* --- 2. LANGUAGE TOGGLE --- */
function updateLanguage(lang) {
    currentLang = lang;
    const langBtnText = document.getElementById('lang-text');
    if (langBtnText) langBtnText.textContent = langConfig[lang].langBtn;
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (langConfig[lang][key]) el.innerHTML = langConfig[lang][key];
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
function closeMenu() {
    if (hamburger) hamburger.classList.remove('active');
    if (navMenu) navMenu.classList.remove('active');
}

/* --- 4. MODALS (Popups) --- */
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
        document.body.style.overflow = '';
    }
}

// Global Click listener for overlay closing
window.onclick = function(e) {
    if (e.target.classList.contains('payment-overlay')) closeModal('paymentModal');
    if (e.target.classList.contains('profile-overlay')) closeModal('profileModal');
    if (e.target.classList.contains('legal-overlay')) e.target.style.display = 'none';
    if (e.target.classList.contains('popup-overlay')) closeModal('helpPopup');
};

// Functions called by HTML buttons
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

/* --- 5. HELPER FUNCTIONS --- */
function copyNumber(text, method) {
    navigator.clipboard.writeText(text).then(() => alert(method + " Number Copied!")).catch(() => alert("Copy failed"));
}

/* --- 6. INITIALIZATION --- */
window.addEventListener('load', () => {
    // Reveal Animations
    const reveals = document.querySelectorAll('.reveal');
    const checkScroll = () => {
        reveals.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) el.classList.add('active');
        });
    };
    window.addEventListener('scroll', checkScroll);
    checkScroll();

    // Auto Helper Popup
    if (!sessionStorage.getItem('helpSeen')) {
        setTimeout(() => openModal('helpPopup'), 5000);
    }
    
    // Navbar Scroll BG
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    });
});
window.open(`https://wa.me/9779810430546?text=Inquiry from Website: ${input.value}`, '_blank');
