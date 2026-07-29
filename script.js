// --- 1. MULTI-LANGUAGE TRANSLATION DICTIONARY ---
const translations = {
    en: {
        page_title: "Bauan | Batangas Tourism",
        nav_home: "Home",
        nav_about: "About",
        nav_destinations: "Destinations",
        nav_activities: "Activities",
        nav_guide: "Travel Guide",
        nav_gallery: "Gallery",
        nav_reviews: "Reviews",
        home_title: "Discover <span>Bauan</span>",
        home_desc: "Experience pristine beaches, world-class diving spots, and the warm hospitality of Bauan — a hidden coastal gem in the heart of Batangas, Philippines.",
        home_btn: "Explore Destinations →",
        footer_desc: "Your ultimate guide to exploring the beautiful coastal town of Bauan, Batangas. Discover pristine beaches, world-class diving, and rich Filipino culture.",
        footer_contact: "Contact Us",
        footer_copy: "© 2026 Discover Bauan, Batangas. All Rights Reserved.",
        about_heading: "Our Story",
        about_subheading: "Learn about the heritage, culture, and coastal identity of Bauan.",
        about_tag: "About The Town",
        about_title: "A Rich Heritage by the Sea",
        about_p1: "Bauan is a premier first-class municipality in the province of Batangas. Known primarily for its thriving maritime industry, shipyards, and deep coastal traditions, it offers visitors a unique blend of industrial strength and natural coastal beauty.",
        about_p2: "Beyond its economic significance, Bauan is celebrated for its deep-rooted religious history, vibrant local festivals, and proximity to some of the richest marine biodiversity hotspots in the Philippines.",
        about_btn: "View Activities",
        dest_heading: "Top Destinations",
        dest_subheading: "Explore the most breathtaking coastal sights and landmarks in Bauan.",
        dest_tag: "Must-Visit Places",
        dest_title: "Popular Attractions",
        dest_1_title: "Sampaguita Beach",
        dest_1_desc: "A tranquil coastal getaway perfect for swimming, relaxing under the sun, and watching magnificent Batangas sunsets.",
        dest_2_title: "Bauan Marine Sanctuaries",
        dest_2_desc: "World-renowned diving zones boasting vibrant coral reefs, sea turtles, and pristine underwater visibility.",
        dest_3_title: "Immaculate Conception Parish",
        dest_3_desc: "A historic architectural landmark standing as a proud symbol of Bauan's deep religious and cultural heritage.",
        activ_heading: "Things to Do",
        activ_subheading: "Immerse yourself in adventure, water sports, and local culinary treats.",
        activ_tag: "Adventures & Cravings",
        activ_title: "Endless Experiences",
        activ_1_title: "Scuba & Macro Diving",
        activ_1_desc: "Dive deep into Bauan's rich waters and experience guided underwater expeditions suited for all skill levels.",
        activ_2_title: "Food Trip: Batangas Lomi",
        activ_2_desc: "Savor piping hot, thick bowls of authentic Batangas lomi loaded with fresh toppings and local spices.",
        activ_3_title: "Island Hopping",
        activ_3_desc: "Charter a local boat to explore hidden coves, white-sand strips, and crystal-clear swimming spots nearby.",
        guide_heading: "Comprehensive Travel Guide",
        guide_subheading: "Weather metrics, interactive GPS resort directions, cultural festivals, itineraries, and FAQs.",
        guide_gps_tag: "Live GPS Navigation",
        guide_gps_title: "Find & Navigate to Bauan Resorts",
        guide_gps_desc: "Use your live device GPS to calculate routes and distances to exclusive local resorts in Bauan.",
        guide_gps_btn: "Get GPS Directions",
        guide_gps_link: "Open Turn-by-Turn in Google Maps",
        guide_weather_tag: "Location & Climate",
        guide_weather_title: "Live Weather & Map Directory",
        weather_card_title: "Bauan Weather Status",
        weather_desc: "Partly Cloudy",
        weather_humidity: "Humidity",
        weather_wind: "Wind",
        weather_best: "Best time",
        map_card_title: "Interactive Town Map",
        planner_tag: "Trip Planning",
        planner_title: "Interactive Itinerary Generator",
        plan_opt_1: "1-Day Day Trip",
        plan_opt_2: "Weekend Getaway (2 Days)",
        plan_opt_adv: "Extreme Adventure & Diving",
        plan_opt_rel: "Relaxed Beach & Food Trip",
        plan_btn: "Generate Plan",
        plan_out_title: "Select your preferences above and click Generate Plan!",
        plan_out_desc: "Your customized custom travel schedule for Bauan will appear right here.",
        faq_tag: "Got Questions?",
        faq_title: "Frequently Asked Questions",
        faq_q1: "How do I get to Bauan from Manila via public commute?",
        faq_a1: "You can ride a bus from terminals in Cubao or Buendia headed straight to the Batangas City Grand Terminal. From the grand terminal, step out to catch a local jeepney bound directly for Bauan town proper.",
        faq_q2: "Are there ATM services available in Bauan?",
        faq_a2: "Yes, multiple major commercial banks and ATMs are stationed around the municipal center. However, it is always recommended to bring sufficient cash if you are visiting remote beach or diving resorts.",
        faq_q3: "Do I need pre-booking for scuba diving packages?",
        faq_a3: "While walk-ins are occasionally accommodated, pre-booking with certified local dive operators is strongly advised especially during weekends and peak dry season months to secure gear and instructors.",
        gallery_heading: "Photo Gallery",
        gallery_subheading: "Visual highlights capturing the beauty of Bauan.",
        gallery_tag: "Captured Moments",
        gallery_title: "Glimpses of Bauan",
        reviews_heading: "Traveler Reviews",
        reviews_subheading: "Read and share firsthand stories about your unforgettable trips to Bauan.",
        reviews_tag: "Testimonials & Submissions",
        reviews_title: "Community Experiences",
        form_heading: "Share Your Bauan Experience",
        form_submit: "Post Review & Photo",
        chat_welcome: "🤖 Mabuhay! I am powered by Gemini. Ask me anything like 'Plan a 3-day family trip to Bauan!'"
    },
    tl: {
        page_title: "Bauan | Turismo sa Batangas",
        nav_home: "Tahanan",
        nav_about: "Tungkol",
        nav_destinations: "Destinasyon",
        nav_activities: "Gawain",
        nav_guide: "Gabay sa Paglalakbay",
        nav_gallery: "Larawan",
        nav_reviews: "Mga Rebyu",
        home_title: "Tuklasin ang <span>Bauan</span>",
        home_desc: "Damhin ang malilinis na dalampasigan, world-class na diving spots, at ang mainit na pagtanggap ng Bauan — isang nakatagong hiyas sa puso ng Batangas, Pilipinas.",
        home_btn: "Galugarin ang mga Destinasyon →",
        footer_desc: "Ang iyong gabay sa pagtuklas ng magandang bayan ng Bauan, Batangas. Tuklasin ang mga baybayin, diving, at kulturang Pilipino.",
        footer_contact: "Makipag-ugnayan",
        footer_copy: "© 2026 Discover Bauan, Batangas. Nakareserba ang Lahat ng Karapatan.",
        about_heading: "Ang Aming Kwento",
        about_subheading: "Alamin ang kasaysayan, kultura, at ganda ng Bauan.",
        about_tag: "Tungkol sa Bayan",
        about_title: "Mayamang Pamana sa Tabing-Dagat",
        about_p1: "Ang Bauan ay isang pangunahing munisipalidad sa lalawigan ng Batangas. Kilala sa industriya ng paggawa ng barko at tradisyong pandagat, nag-aalok ito ng magandang timpla ng industriya at kalikasan.",
        about_p2: "Bukod dito, kilala rin ang Bauan sa malalim na kasaysayang relihiyoso, makukulay na pista, at mga yamang dagat.",
        about_btn: "Tignan ang mga Gawain",
        dest_heading: "Mga Pangunahing Destinasyon",
        dest_subheading: "Galugarin ang mga tanawin at pasyalan sa Bauan.",
        dest_tag: "Mga Dapat Bisitahin",
        dest_title: "Sikat na Atraksyon",
        dest_1_title: "Sampaguita Beach",
        dest_1_desc: "Isang tahimik na dalampasigan na perpekto para sa pag-langoy, pagpapahinga, at panonood ng magagandang paglubog ng araw.",
        dest_2_title: "Bauan Marine Sanctuaries",
        dest_2_desc: "Kilalang diving spots na may makukulay na coral reefs, mga pawikan, at malinaw na tubig.",
        dest_3_title: "Immaculate Conception Parish",
        dest_3_desc: "Isang makasaysayang simbahan na sumisimbolo sa relihiyoso at kultural na pamana ng Bauan.",
        activ_heading: "Mga Pwedeng Gawin",
        activ_subheading: "Isawsaw ang sarili sa pakikipagsapalaran at lokal na pagkain.",
        activ_tag: "Pakikipagsapalaran & Pagkain",
        activ_title: "Walang Katapusang Karanasan",
        activ_1_title: "Scuba & Macro Diving",
        activ_1_desc: "Sumisid sa malalim na tubig ng Bauan para sa mga guided underwater expedition.",
        activ_2_title: "Food Trip: Batangas Lomi",
        activ_2_desc: "Tikman ang mainit at malapot na sabaw ng tunay na Batangas lomi na puno ng sahog.",
        activ_3_title: "Island Hopping",
        activ_3_desc: "Sumakay sa bangka upang tuklasin ang mga nakatagong cove at puting buhangin.",
        guide_heading: "Komprehensibong Gabay",
        guide_subheading: "Panahon, direksyon ng GPS, mga pista, itineraryo, at mga FAQ.",
        guide_gps_tag: "Live na GPS",
        guide_gps_title: "Maghanap ng mga Reso sa Bauan",
        guide_gps_desc: "Gamitin ang GPS ng iyong device upang kwentahin ang ruta papunta sa mga resort.",
        guide_gps_btn: "Kunin ang GPS Direksyon",
        guide_gps_link: "Buksan sa Google Maps",
        guide_weather_tag: "Panahon",
        guide_weather_title: "Live na Panahon at Mapa",
        weather_card_title: "Katayuan ng Panahon sa Bauan",
        weather_desc: "Bahagyang Maulap",
        weather_humidity: "Alinsangan",
        weather_wind: "Hangin",
        weather_best: "Pinakamagandang buwan",
        map_card_title: "Mapa ng Bayan",
        planner_tag: "Pagpaplano",
        planner_title: "Tagagawa ng Itineraryo",
        plan_opt_1: "1-Araw na Biyahe",
        plan_opt_2: "Weekend Getaway (2 Araw)",
        plan_opt_adv: "Extreme Adventure at Diving",
        plan_opt_rel: "Relaxed Beach at Food Trip",
        plan_btn: "Gumawa ng Plano",
        plan_out_title: "Pumili sa itaas at i-click ang Gumawa ng Plano!",
        plan_out_desc: "Lilitaw dito ang iyong customized na iskedyul para sa Bauan.",
        faq_tag: "May Tanong Ba?",
        faq_title: "Mga Madalas Itanong",
        faq_q1: "Paano pumunta sa Bauan mula Maynila sa pamamagitan ng bus?",
        faq_q1: "Paano pumunta sa Bauan mula Maynila sa pamamagitan ng pampublikong sasakyan?",
        faq_a1: "Maaari kang sumakay ng bus mula Cubao o Buendia papuntang Batangas City Grand Terminal. Pagbaba roon, sumakay ng jeep papuntang Bauan.",
        faq_q2: "May mga ATM ba sa Bauan?",
        faq_a2: "Oo, maraming bangko at ATM sa paligid ng munisipyo. Subalit, mainam pa ring magdala ng sapat na cash kung pupunta sa liblib na resort.",
        faq_q3: "Kailangan ba ng pre-booking para sa scuba diving?",
        faq_a3: "Bagamat tinatanggap ang walk-in, mainam na mag-book nang maaga sa mga certified dive operator lalo na tuwing weekend.",
        gallery_heading: "Gallery ng Larawan",
        gallery_subheading: "Mga visual na highlight na nagpapakita ng ganda ng Bauan.",
        gallery_tag: "Mga Sandali",
        gallery_title: "Sulyap sa Bauan",
        reviews_heading: "Mga Rebyu ng Manlalakbay",
        reviews_subheading: "Magbasa at magbahagi ng sarili mong kwento tungkol sa iyong pagbisita sa Bauan.",
        reviews_tag: "Mga Patotoo at Rebyu",
        reviews_title: "Karanasan ng Komunidad",
        form_heading: "Ibahagi ang Iyong Karanasan",
        form_submit: "I-post ang Rebyu at Larawan",
        chat_welcome: "🤖 Mabuhay! Ako ay pinapagana ng Gemini. Magtanong tulad ng 'Gumawa ng 3-araw na pampamilyang biyahe sa Bauan!'"
    }
};

function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

// --- 2. WINDOW/TAB SWITCHING & NAVBAR LOGIC ---
const navBtns = document.querySelectorAll('.nav-btn');
const windows = document.querySelectorAll('.window-view');
const mainNav = document.getElementById('mainNav');

navBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = btn.getAttribute('data-target');
        if(!targetId) return;

        windows.forEach(win => win.classList.remove('active-view'));
        navBtns.forEach(nav => nav.classList.remove('active-link'));

        document.getElementById(targetId).classList.add('active-view');
        document.querySelectorAll(`nav .nav-links a[data-target="${targetId}"]`).forEach(link => {
            link.classList.add('active-link');
        });

        if(targetId === 'home') mainNav.classList.remove('solid-nav');
        else mainNav.classList.add('solid-nav');
    });
});

windows.forEach(win => {
    win.addEventListener('scroll', () => {
        if(win.id === 'home') {
            if (win.scrollTop > 50) mainNav.classList.add('solid-nav');
            else mainNav.classList.remove('solid-nav');
        }
    });
});

// --- 3. SLIDESHOW LOGIC ---
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
    slides[currentSlide].classList.remove('active-slide');
    dots[currentSlide].classList.remove('active-dot');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active-slide');
    dots[currentSlide].classList.add('active-dot');
}
// --- ABOUT SECTION SLIDESHOW LOGIC ---
let aboutSlideIndex = 0;
const aboutSlides = document.querySelectorAll('.about-slides .slide');
const aboutDots = document.querySelectorAll('.about-dots .dot');

function showAboutSlide(n) {
    if (!aboutSlides.length) return;
    aboutSlideIndex = (n + aboutSlides.length) % aboutSlides.length;
    
    aboutSlides.forEach(slide => slide.classList.remove('active-slide'));
    aboutDots.forEach(dot => dot.classList.remove('active-dot'));
    
    aboutSlides[aboutSlideIndex].classList.add('active-slide');
    aboutDots[aboutSlideIndex].classList.add('active-dot');
}

function nextAboutSlide() {
    showAboutSlide(aboutSlideIndex + 1);
}

function currentAboutSlideManual(n) {
    showAboutSlide(n);
    resetAboutTimer();
}

let aboutTimer = setInterval(nextAboutSlide, 5000);

function resetAboutTimer() {
    clearInterval(aboutTimer);
    aboutTimer = setInterval(nextAboutSlide, 5000);
}

function currentSlideManual(index) {
    clearInterval(slideInterval);
    slides[currentSlide].classList.remove('active-slide');
    dots[currentSlide].classList.remove('active-dot');
    currentSlide = index;
    slides[currentSlide].classList.add('active-slide');
    dots[currentSlide].classList.add('active-dot');
    slideInterval = setInterval(nextSlide, 5000);
}

// --- 4. COMMUNITY-DRIVEN REVIEWS & CLOUDINARY UPLOAD HANDLER ---
function handleReviewSubmission(e) {
    e.preventDefault();
    
    const name = document.getElementById('reviewerName').value;
    const rating = document.getElementById('reviewRating').value;
    const title = document.getElementById('reviewTitle').value;
    const comment = document.getElementById('reviewComment').value;
    const fileInput = document.getElementById('reviewImageFile');

    // Simulate Cloudinary image URL generation or default fallback image
    let imageUrl = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop";
    if (fileInput.files && fileInput.files[0]) {
        imageUrl = URL.createObjectURL(fileInput.files[0]);
    }

    const container = document.getElementById('dynamicReviewsContainer');
    const newCard = document.createElement('div');
    newCard.className = 'travel-card';
    newCard.innerHTML = `
        <img src="${imageUrl}" class="card-img">
        <div class="card-content">
            <div style="color: #f39c12; margin-bottom: 5px;">${rating}</div>
            <h3>"${title}"</h3>
            <p style="font-size: 0.85rem; color: #888; margin-bottom: 8px;">— ${name}</p>
            <p>${comment}</p>
        </div>
    `;

    container.prepend(newCard);
    document.getElementById('reviewForm').reset();
    alert('✨ Review and photo uploaded successfully via simulated Cloudinary pipeline!');
}

// --- 5. GPS RESORT NAVIGATOR LOGIC ---
let activeUserLat = null;
let activeUserLon = null;
let activeResortLat = null;
let activeResortLon = null;

function calculateRouteToResort() {
    const resortSelect = document.getElementById('resortSelect');
    const selectedCoords = resortSelect.value.split(',');
    activeResortLat = parseFloat(selectedCoords[0]);
    activeResortLon = parseFloat(selectedCoords[1]);
    const resortName = resortSelect.options[resortSelect.selectedIndex].text;

    const outputBox = document.getElementById('gpsOutput');
    const statusText = document.getElementById('gpsStatusText');
    const nameTitle = document.getElementById('resortNameTitle');
    const mapsLink = document.getElementById('googleMapsLink');

    outputBox.style.display = 'block';
    nameTitle.textContent = `📍 ${resortName} (Tap here to navigate)`;

    if (!navigator.geolocation) {
        statusText.textContent = "Geolocation is not supported by your browser.";
        mapsLink.style.display = 'none';
        return;
    }

    statusText.textContent = "Locating your position...";

    navigator.geolocation.getCurrentPosition(
        (position) => {
            activeUserLat = position.coords.latitude;
            activeUserLon = position.coords.longitude;
            const distance = getDistanceFromLatLonInKm(activeUserLat, activeUserLon, activeResortLat, activeResortLon);
            
            statusText.innerHTML = `Your distance to <strong>${resortName}</strong> is approximately <strong>${distance.toFixed(1)} km</strong>. <em>(Tap the resort name above to launch GPS guidance)</em>`;
            
            mapsLink.href = `https://www.google.com/maps/dir/?api=1&origin=${activeUserLat},${activeUserLon}&destination=${activeResortLat},${activeResortLon}&travelmode=driving`;
            mapsLink.style.display = 'inline-block';
        },
        (error) => {
            statusText.textContent = "Unable to retrieve your location. Please check your browser location permissions.";
            mapsLink.style.display = 'none';
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
}

// When the user taps the resort's address/name heading directly:
function openDirectResortNavigation() {
    if (activeResortLat !== null && activeResortLon !== null) {
        let mapsUrl = "";
        if (activeUserLat !== null && activeUserLon !== null) {
            // Route from user's live GPS to resort
            mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${activeUserLat},${activeUserLon}&destination=${activeResortLat},${activeResortLon}&travelmode=driving`;
        } else {
            // Fallback route to resort if user hasn't clicked GPS button yet
            mapsUrl = `https://www.google.com/maps/search/?api=1&query=${activeResortLat},${activeResortLon}`;
        }
        window.open(mapsUrl, '_blank');
    } else {
        alert("Please select a resort and click 'Get GPS Directions' first.");
    }
}

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371; 
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

function deg2rad(deg) { return deg * (Math.PI / 180); }

// --- 6. ITINERARY BUILDER LOGIC ---
function generateItinerary() {
    const duration = document.getElementById('durationSelect').value;
    const style = document.getElementById('styleSelect').value;
    const output = document.getElementById('itineraryResult');

    let html = '';
    if (duration === '1' && style === 'adventure') {
        html = `<h4>1-Day Extreme Adventure Itinerary</h4><ul><li><strong>07:00 AM:</strong> Arrival in Bauan & local breakfast.</li><li><strong>09:00 AM:</strong> Scuba diving session at Bauan Sanctuaries.</li><li><strong>12:30 PM:</strong> Lunch featuring Batangas Lomi.</li><li><strong>03:00 PM:</strong> Island hopping & speedboating.</li></ul>`;
    } else {
        html = `<h4>Customized Itinerary Generated</h4><ul><li><strong>Day 1:</strong> Scenic beach arrival, resort relaxation, and local culinary tour.</li><li><strong>Day 2:</strong> Heritage landmarks exploration and coastal sunset stroll.</li></ul>`;
    }
    output.innerHTML = html;
}

// --- 7. FAQ ACCORDION LOGIC ---
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        question.parentElement.classList.toggle('active');
    });
});

// --- 8. GEMINI AI API ASSISTANT INTEGRATION (Simulated API Client Handler) ---
const chatBtn = document.getElementById('chatBtn');
const chatWindow = document.getElementById('chatWindow');
const closeChatBtn = document.getElementById('closeChatBtn');
const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const chatBody = document.getElementById('chatBody');

chatBtn.addEventListener('click', () => chatWindow.classList.toggle('open'));
closeChatBtn.addEventListener('click', () => chatWindow.classList.remove('open'));

function sendMessage() {
    const text = userInput.value.trim();
    if (text === '') return;

    const userDiv = document.createElement('div');
    userDiv.className = 'chat-message msg-user';
    userDiv.textContent = text;
    chatBody.appendChild(userDiv);
    
    userInput.value = '';
    chatBody.scrollTop = chatBody.scrollHeight;

    // Call Gemini API Structure (simulated network delay & response parsing)
    setTimeout(() => {
        const botWrapper = document.createElement('div');
        botWrapper.className = 'bot-msg-wrapper';
        
        const botAvatar = document.createElement('div');
        botAvatar.className = 'bot-msg-avatar';
        botAvatar.innerHTML = '<i class="fa-solid fa-robot"></i>';
        
        const botBubble = document.createElement('div');
        botBubble.className = 'chat-message msg-bot';
        botBubble.innerHTML = callGeminiAPI(text);
        
        botWrapper.appendChild(botAvatar);
        botWrapper.appendChild(botBubble);
        
        chatBody.appendChild(botWrapper);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 800);
}

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

function callGeminiAPI(promptText) {
    const query = promptText.toLowerCase();
    if (query.includes('family') || query.includes('toddler') || query.includes('3-day')) {
        return "✨ <strong>Gemini AI Custom Plan:</strong><br>Here is a family-friendly 3-day itinerary for Bauan:<br>• <strong>Day 1:</strong> Check-in at Sampaguita Beach resort; gentle shallow-water swimming.<br>• <strong>Day 2:</strong> Private boat charter for kid-friendly island hopping and shell collecting.<br>• <strong>Day 3:</strong> Morning visit to the historic Bauan town center followed by local lomi tasting.";
    } else if (query.includes('budget') || query.includes('cheap')) {
        return "💡 <strong>Gemini AI Travel Tip:</strong><br>To keep your Bauan trip budget-friendly, commute via public jeepneys from Batangas Grand Terminal, stay at family-run coastal inns, and dine at local eateries serving authentic Batangas lomi.";
    } else {
        return `🤖 <strong>Gemini AI Assistant:</strong><br>I analyzed your prompt regarding "${promptText}". Bauan offers world-class diving, serene beaches, and rich cultural heritage. Feel free to ask about specific itineraries, resorts, or local food spots!`;
    }
}