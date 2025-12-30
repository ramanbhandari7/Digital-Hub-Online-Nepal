const langToggle = document.getElementById('lang-toggle');
const langText = document.getElementById('lang-text');

let currentLang = 'en';

const content = {
    en: {
        status: "Open Now • Online Service",
        headline: "All Digital Solutions.<br>One Platform.",
        desc: "Flight tickets, SSF, Licenses, and lifetime FREE websites for businesses. Expert service at the lowest price.",
        cta: "Start Now",
        viewServices: "See Pricing",
        servicesTitle: "Premium Services, Local Prices",
        servicesSub: "Transparent pricing. No hidden fees.",
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
        svc7_title: "Digital Solutions for Nepal",
        svc7_desc: "Living abroad? We handle your digital paperwork in Nepal.",
        contactTitle: "Ready to Go Digital?",
        langBtn: "नेपाली"
    },
    ne: {
        status: "अहिले खुला छ • अनलाइन सेवा",
        headline: "सबै डिजिटल सेवा<br>एकै ठाउँमा",
        desc: "फ्लाइट टिकट, श्रम स्वीकृति, र व्यवसायका लागि आजीवन निःशुल्क वेबसाइट। सुपथ मूल्यमा भरपर्दो सेवा।",
        cta: "सुरु गर्नुहोस्",
        viewServices: "मूल्य हेर्नुहोस्",
        servicesTitle: "उत्कृष्ट सेवा, उचित मूल्य",
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
        svc7_title: "विदेशबाट नेपालका लागि सेवा",
        svc7_desc: "तपाईं विदेशमा, काम नेपालमा? हामी छौ नि।",
        contactTitle: "डिजिटल बन्न तयार हुनुहुन्छ?",
        langBtn: "English"
    }
};

// Language Toggle
langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ne' : 'en';
    langText.textContent = content[currentLang].langBtn;

    // Use HTML to allow <br> tags in headline
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (content[currentLang][key]) {
            element.innerHTML = content[currentLang][key]; 
        }
    });
});

// Scroll Animation
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}
// Trigger once on load
reveal();
