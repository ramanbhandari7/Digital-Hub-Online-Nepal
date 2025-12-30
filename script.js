const langToggle = document.getElementById('lang-toggle');
const langText = document.getElementById('lang-text');

let currentLang = 'en';

const content = {
    en: {
        headline: "All Kind Digital Solutions in One Place",
        subheadline: "One-stop digital solution 💻✨",
        desc: "Flight tickets, SSF registration, Bank accounts, and free websites for businesses. We make digital easy.",
        cta: "Contact Us Today",
        viewServices: "View Services",
        trust1: "📌 Trusted",
        trust2: "⚡ Quick Process",
        servicesTitle: "Our Premium Services",
        svc1_title: "Flight Ticket Booking",
        svc1_desc: "Domestic & International flights at best rates.",
        svc2_title: "Online Shram Approval",
        svc2_desc: "Hassle-free labor permit approval process.",
        svc3_title: "SSF Registration",
        svc3_desc: "Secure your future with Social Security Fund.",
        svc4_title: "Website & Hosting",
        svc4_desc: "Lifetime free for Businesses, Restaurants & Schools.",
        svc5_title: "Driving License",
        svc5_desc: "Fast application & form filling assistance.",
        svc6_title: "Bank Account Opening",
        svc6_desc: "Start your banking journey from home.",
        svc7_title: "Digital Solutions for Nepal — even from abroad",
        svc7_desc: "Serving Nepalese worldwide with reliable digital support.",
        freeBadge: "FREE",
        contactTitle: "Go Digital With Ease!",
        contactSub: "Expert Support | Quick Process | Trusted Service",
        langBtn: "नेपाली"
    },
    ne: {
        headline: "नेपालको लागि सबै डिजिटल सेवा एकै ठाउँमा",
        subheadline: "तपाईंको डिजिटल सेवाको गन्तव्य 💻✨",
        desc: "फ्लाइट टिकट, श्रम स्वीकृति, बैंक खाता, र व्यवसायका लागि निःशुल्क वेबसाइट। हामी डिजिटल सेवा सजिलो बनाउँछौं।",
        cta: "आजै सम्पर्क गर्नुहोस्",
        viewServices: "सेवाहरु हेर्नुहोस्",
        trust1: "📌 भरपर्दो",
        trust2: "⚡ छिटो सेवा",
        servicesTitle: "हाम्रा प्रमुख सेवाहरु",
        svc1_title: "फ्लाइट टिकट बुकिङ",
        svc1_desc: "सुपथ मूल्यमा स्वदेशी तथा विदेशी टिकट।",
        svc2_title: "अनलाइन श्रम स्वीकृति",
        svc2_desc: "श्रम स्वीकृतिको लागि झन्झट रहित सेवा।",
        svc3_title: "SSF दर्ता",
        svc3_desc: "सामाजिक सुरक्षा कोषमा दर्ता भई भविष्य सुरक्षित गर्नुहोस्।",
        svc4_title: "वेबसाइट र होस्टिङ",
        svc4_desc: "व्यवसाय र स्कूलका लागि आजीवन निःशुल्क।",
        svc5_title: "ड्राइभिङ लाइसेन्स",
        svc5_desc: "आवेदन र फारम भर्न सहयोग।",
        svc6_title: "बैंक खाता सेवा",
        svc6_desc: "घरबाटै सजिलै बैंक खाता खोल्नुहोस्।",
        svc7_title: "विदेशबाट नेपालका लागि डिजिटल सेवा",
        svc7_desc: "विदेशमा रहेका नेपालीहरूका लागि भरपर्दो डिजिटल सहयोग।",
        freeBadge: "निःशुल्क",
        contactTitle: "डिजिटल बन्नुहोस्, सजिलैसँग!",
        contactSub: "विज्ञ सहयोग | छिटो प्रक्रिया | भरपर्दो सेवा",
        langBtn: "English"
    }
};

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ne' : 'en';
    langText.textContent = content[currentLang].langBtn;

    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (content[currentLang][key]) {
            element.textContent = content[currentLang][key];
        }
    });
});
