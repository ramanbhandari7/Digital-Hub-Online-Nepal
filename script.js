const langToggle = document.getElementById('lang-toggle');
const langText = document.getElementById('lang-text');

let currentLang = 'en'; // Default language

const content = {
    en: {
        headline: "All Kind Digital Solutions in One Place",
        subheadline: "Your one-stop solution for fast, reliable & affordable digital services 💻✨",
        cta: "Contact Us Today",
        trust1: "📌 Trusted",
        trust2: "⚡ Quick Process",
        trust3: "🤝 Expert Support",
        servicesTitle: "Our Services",
        svc1_title: "Flight Ticket Booking",
        svc2_title: "Online Shram Approval",
        svc3_title: "SSF Registration",
        svc4_title: "FREE Website & Hosting",
        svc4_desc: "(For Businesses, Restaurants & Schools)",
        svc5_title: "Driving License Applications",
        svc6_title: "Bank Account Opening",
        svc7_title: "Digital Solutions for Nepal — even from abroad",
        freeBadge: "FREE FOR LIFE",
        contactTitle: "Go Digital With Ease!",
        contactSub: "Contact us today & get expert support.",
        langBtn: "नेपाली"
    },
    ne: {
        headline: "नेपालको लागि सबै डिजिटल सेवा एकै ठाउँमा",
        subheadline: "तपाईंको सबै डिजिटल सेवाको भरपर्दो गन्तव्य 💻✨",
        cta: "आजै सम्पर्क गर्नुहोस्",
        trust1: "📌 भरपर्दो",
        trust2: "⚡ छिटो सेवा",
        trust3: "🤝 सजिलो प्रक्रिया",
        servicesTitle: "हाम्रा सेवाहरु",
        svc1_title: "फ्लाइट टिकट बुकिङ",
        svc2_title: "अनलाइन श्रम स्वीकृति",
        svc3_title: "सामाजिक सुरक्षा कोष (SSF) दर्ता",
        svc4_title: "निःशुल्क वेबसाइट र होस्टिङ",
        svc4_desc: "(व्यवसाय, रेस्टुरेन्ट र स्कूलका लागि आजीवन)",
        svc5_title: "ड्राइभिङ लाइसेन्स आवेदन",
        svc6_title: "बैंक खाता खोल्ने सेवा",
        svc7_title: "विदेशबाट नेपालका लागि डिजिटल सेवा",
        freeBadge: "आजीवन निःशुल्क",
        contactTitle: "डिजिटल बन्नुहोस्, सजिलैसँग!",
        contactSub: "थप जानकारीको लागि आजै सम्पर्क गर्नुहोस्।",
        langBtn: "English"
    }
};

langToggle.addEventListener('click', () => {
    // Switch Language State
    currentLang = currentLang === 'en' ? 'ne' : 'en';
    
    // Update Button Text
    langText.textContent = content[currentLang].langBtn;

    // Update All Content
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (content[currentLang][key]) {
            element.textContent = content[currentLang][key];
        }
    });
});
