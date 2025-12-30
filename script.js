/* ============================
   1. LANGUAGE TOGGLE LOGIC
   ============================ */
const langToggle = document.getElementById('lang-toggle');
const langText = document.getElementById('lang-text');

// State: 'en' for English, 'ne' for Nepali
let currentLang = 'en';

const content = {
    en: {
        // --- Nav & Header ---
        status: "Open Now • Online Service",
        headline: "All Digital Solutions.<br>One Platform.",
        desc: "Flight tickets, SSF, Licenses, and lifetime FREE websites for businesses. Expert service at the lowest price.",
        cta: "Start Now",
        viewServices: "See Pricing <i class='fas fa-arrow-right'></i>",
        
        // --- Services ---
        servicesTitle: "Our Premium Services",
        servicesSub: "Professional solutions with transparent pricing.",
        svc1_title: "Flight Booking",
        svc1_desc: "Domestic & International flights.",
        price1: "Best Rate",
        
        svc2_title: "Shram Approval",
        svc2_desc: "Online Labor Permit (Re-entry).",
        
        svc3_title: "SSF Registration",
        svc3_desc: "Social Security Fund Enrollment.",
        
        svc4_title: "Website & Hosting",
        svc4_desc: "Lifetime free for Business & Schools.",
        
        svc5_title: "Driving License",
        svc5_desc: "Form filling & exam date fix.",
        
        svc6_title: "Bank Opening",
        svc6_desc: "Nic Asia, Global IME & more.",
        priceFree: "Free Help",
        
        // --- Founder & Footer ---
        proVoice: "\"Technology should make life easier. My mission is to bring every digital service in Nepal to your fingertips—transparently and affordably.\"",
        foundedBy: "Founded & Operated by",
        desc: "Your one-stop solution for all digital services in Nepal. Fast, reliable, and trusted by hundreds.",
        
        // Button Labels (Idle State - Shows Target Language)
        langBtn: "नेपाली"
    },
    ne: {
        // --- Nav & Header ---
        status: "अहिले खुला छ • अनलाइन सेवा",
        headline: "सबै डिजिटल सेवा<br>एकै ठाउँमा",
        desc: "फ्लाइट टिकट, श्रम स्वीकृति, र व्यवसायका लागि आजीवन निःशुल्क वेबसाइट। सुपथ मूल्यमा भरपर्दो सेवा।",
        cta: "सुरु गर्नुहोस्",
        viewServices: "मूल्य हेर्नुहोस् <i class='fas fa-arrow-right'></i>",
        
        // --- Services ---
        servicesTitle: "हाम्रा प्रमुख सेवाहरु",
        servicesSub: "पारदर्शी मूल्य। कुनै लुकेको शुल्क छैन।",
        svc1_title: "फ्लाइट टिकट बुकिङ",
        svc1_desc: "स्वदेशी तथा विदेशी उडानहरु।",
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
        
        // --- Founder & Footer ---
        proVoice: "\"प्रविधिले जीवन सजिलो बनाउनुपर्छ। मेरो उद्देश्य नेपालका हरेक डिजिटल सेवाहरू पारदर्शी र सस्तोमा तपाइँको हातमा पुर्याउनु हो।\"",
        foundedBy: "संस्थापक तथा सञ्चालक",
        desc: "नेपालका सबै डिजिटल सेवाहरूको लागि एक भरपर्दो गन्तव्य। छिटो र विश्वासिलो।",
        
        // Button Labels (Idle State - Shows Target Language)
        langBtn: "English"
    }
};

// --- Language Function ---
function updateContent() {
    // 1. Update Button Text (Default State)
    if (langText) {
        langText.textContent = content[currentLang].langBtn;
    }

    // 2. Update Page Content
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (content[currentLang][key]) {
            element.innerHTML = content[currentLang][key];
        }
    });
}

langToggle.addEventListener('click', () => {
    // Toggle State
    currentLang = currentLang === 'en' ? 'ne' : 'en';
    updateContent();
});

// --- HOVER ALTERNATE LOGIC (The New Feature) ---
// When English site -> Btn says 'Nepali'. On Hover -> Btn says 'English'
// When Nepali site -> Btn says 'English'. On Hover -> Btn says 'Nepali'

langToggle.addEventListener('mouseenter', () => {
    // Show Current Language on Hover
    langText.textContent = (currentLang === 'en') ? "English" : "नेपाली";
    // Optional: Add visual rotation icon
    const icon = langToggle.querySelector('i');
    if(icon) icon.style.transform = 'rotate(180deg)';
});

langToggle.addEventListener('mouseleave', () => {
    // Revert to Target Language on Leave
    langText.textContent = content[currentLang].langBtn;
    const icon = langToggle.querySelector('i');
    if(icon) icon.style.transform = 'rotate(0deg)';
});


/* ============================
   2. POPUP MODAL LOGIC
   ============================ */
const helpPopup = document.getElementById('helpPopup');

function openPopup() {
    if(!helpPopup) return;
    helpPopup.style.display = 'flex';
    setTimeout(() => { helpPopup.style.opacity = '1'; }, 10);
}

function closePopup() {
    if(!helpPopup) return;
    helpPopup.style.opacity = '0';
    setTimeout(() => { helpPopup.style.display = 'none'; }, 300);
}

// Open after 5 seconds
window.onload = function() {
    setTimeout(openPopup, 5000);
};

/* ============================
   3. PAYMENT GATEWAY LOGIC
   ============================ */
const paymentModal = document.getElementById('paymentModal');
const payNameEl = document.getElementById('payServiceName');
const payAmountEl = document.getElementById('payAmount');

function openPayment(name, cost) {
    if(payNameEl) payNameEl.textContent = name;
    if(payAmountEl) payAmountEl.textContent = cost;
    
    if(paymentModal) {
        paymentModal.style.display = 'flex';
        setTimeout(() => { paymentModal.style.opacity = '1'; }, 10);
    }
}

function closePayment() {
    if(!paymentModal) return;
    paymentModal.style.opacity = '0';
    setTimeout(() => { paymentModal.style.display = 'none'; }, 300);
}

function copyNumber(num) {
    navigator.clipboard.writeText(num).then(() => {
        alert("Copied: " + num);
    }).catch(err => {
        alert("Please manually copy: " + num);
    });
}

/* ============================
   4. SCROLL & INTERACTION
   ============================ */
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
    }
}
reveal(); 

// Close modals on outside click
window.onclick = function(e) {
    if (e.target == paymentModal) closePayment();
    if (e.target == helpPopup) closePopup();
};
