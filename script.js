/* === 1. LANGUAGE TOGGLE LOGIC === */
const langToggle = document.getElementById('lang-toggle');
const langText = document.getElementById('lang-text');
let currentLang = 'en';

const content = {
    en: {
        langBtn: "नेपाली",
        // Add content mapping here...
        status: "Open Now • Online Service",
        headline: "All Digital Solutions.<br>One Platform.",
        desc: "Flight tickets, SSF, Licenses, and websites. Lowest price guarantee.",
        cta: "Start Now",
        servicesTitle: "Our Premium Services",
        proVoice: "\"Technology should make life easier...\"",
        foundedBy: "Founded & Operated by"
    },
    ne: {
        langBtn: "English",
        status: "अहिले खुला छ • अनलाइन सेवा",
        headline: "सबै डिजिटल सेवा<br>एकै ठाउँमा",
        desc: "फ्लाइट टिकट, श्रम स्वीकृति र वेबसाइट सेवाहरू।",
        cta: "सुरु गर्नुहोस्",
        servicesTitle: "हाम्रा प्रमुख सेवाहरु",
        proVoice: "\"प्रविधिले जीवन सजिलो बनाउनुपर्छ...\"",
        foundedBy: "संस्थापक तथा सञ्चालक"
    }
};

// Toggle
langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ne' : 'en';
    if(langText) langText.textContent = content[currentLang].langBtn;
    
    // Simple update logic loop
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (content[currentLang][key]) el.innerHTML = content[currentLang][key];
    });
});

// Hover Effect
langToggle.addEventListener('mouseenter', () => {
    langText.textContent = (currentLang === 'en') ? "English" : "नेपाली";
    const icon = langToggle.querySelector('i');
    if(icon) icon.style.transform = 'rotate(180deg)';
});
langToggle.addEventListener('mouseleave', () => {
    langText.textContent = content[currentLang].langBtn;
    const icon = langToggle.querySelector('i');
    if(icon) icon.style.transform = 'rotate(0deg)';
});

/* === 2. MOBILE MENU === */
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

/* === 3. POPUP LOGIC === */
const popup = document.getElementById('helpPopup');
window.onload = function() {
    setTimeout(() => { 
        popup.style.display = 'flex'; 
        setTimeout(()=> popup.style.opacity = '1', 10);
    }, 5000); 
};

function closePopup() {
    popup.style.opacity = '0';
    setTimeout(() => { popup.style.display = 'none'; }, 300);
}

/* === 4. PAYMENT LOGIC === */
const paymentModal = document.getElementById('paymentModal');
const payNameEl = document.getElementById('payServiceName');
const payAmountEl = document.getElementById('payAmount');

function openPayment(name, cost) {
    if(payNameEl) payNameEl.textContent = name;
    if(payAmountEl) payAmountEl.textContent = cost;
    if(paymentModal) {
        paymentModal.style.display = 'flex';
        setTimeout(()=> paymentModal.style.opacity = '1', 10);
    }
}

function closePayment() {
    if(paymentModal) {
        paymentModal.style.opacity = '0';
        setTimeout(() => { paymentModal.style.display = 'none'; }, 300);
    }
}

function copyNumber(num) {
    navigator.clipboard.writeText(num).then(() => { alert("Number Copied: " + num); });
}

window.onclick = function(e) {
    if (e.target == paymentModal) closePayment();
    if (e.target == popup) closePopup();
};

/* === 5. SCROLL REVEAL === */
window.addEventListener('scroll', () => {
    document.querySelectorAll('.reveal').forEach(el => {
        if(el.getBoundingClientRect().top < window.innerHeight - 150) {
            el.classList.add('active');
        }
    });
});
