
// ===================== DATA — Bhopal-only farmers =====================
const catDefaultImages = {
  vegetables: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80',
  fruits: 'https://images.unsplash.com/photo-1619566636858-fafb19442a1e?auto=format&fit=crop&w=700&q=80',
  grains: 'https://images.unsplash.com/photo-1574323347407-faf9320a6107?auto=format&fit=crop&w=700&q=80',
  dairy: 'https://images.unsplash.com/photo-1563636619-8b156698ba6b?auto=format&fit=crop&w=700&q=80',
  herbs: 'https://images.unsplash.com/photo-1618377386134-2fc3d05f9678?auto=format&fit=crop&w=700&q=80',
};

let products = [
  { id: 1, name: 'Fresh Tomatoes (Tamatar)', farmer: 'Ramesh Patel', loc: 'Berasia, Bhopal', cat: 'vegetables',image:'tamato-vegii.jpg', price: 32, mandiPrice: 45, unit: 'kg', fresh: true, organic: false, bg: '#fff5f5' },
  { id: 2, name: 'Desi Aam (Mango)', farmer: 'Suresh Verma', loc: 'Phanda, Bhopal', cat: 'fruits', image: 'mango-fruit.png', price: 120, mandiPrice: 160, unit: 'kg', fresh: true, organic: true, bg: '#fffbf0' },
  { id: 3, name: 'Organic Palak (Spinach)', farmer: 'Kavita Sharma', loc: 'Ratibad, Bhopal', cat: 'vegetables', image: 'palak-vergii.png', price: 28, mandiPrice: 40, unit: 'bundle', fresh: true, organic: true, bg: '#f0fff4' },
  { id: 4, name: 'Sharbati Gehu (Wheat)', farmer: 'Gurpreet Jat', loc: 'Ratibad, Bhopal',cat: 'grains', image:'wheat.jpg', price: 30, mandiPrice: 42, unit: 'kg', fresh: false, organic: false, bg: '#fffef5' },
  { id: 6, name: 'Hari Mirch (Green Chillies)', farmer: 'Bala Krishnan', loc: 'Misrod, Bhopal', cat: 'vegetables',image: 'green chili.jpg', price: 55, mandiPrice: 75, unit: 'kg', fresh: true, organic: false, bg: '#fff5f0' },
  { id: 7, name: 'Desi Ghee', farmer: 'Aarti Devi', loc: 'Berasia, Bhopal', cat: 'dairy', image: 'desi ghee.jpg', price: 480, mandiPrice: 600, unit: 'kg', fresh: true, organic: true, bg: '#fffcf0' },
  { id: 8, name: 'Aloo (Potato)', farmer: 'Dinesh Verma', loc: 'Vidisha Rd, Bhopal', cat: 'vegetables', image: 'aloo-vegii.jpg', price: 18, mandiPrice: 28, unit: 'kg', fresh: true, organic: false, bg: '#faf5ef' },
  { id: 9, name: 'Tarbooj (Watermelon)', farmer: 'Ravi Kumar', loc: 'Obaidullaganj, Bhopal', cat: 'fruits', image: 'watermelon-fruit.jpg', price: 20, mandiPrice: 30, unit: 'kg', fresh: true, organic: false, bg: '#fff5f8' },
  { id: 10, name: 'Pyaz (Red Onion)', farmer: 'Mahesh Patidar', loc: 'Sehore Rd, Bhopal', cat: 'vegetables', image: 'onion.jpg', price: 22, mandiPrice: 35, unit: 'kg', fresh: true, organic: false, bg: '#fff8f5' },
  { id: 11, name: 'Dhaniya (Fresh Coriander)', farmer: 'Priya Nair', loc: 'Fanda, Bhopal', cat: 'herbs', image: 'dhaniyaa.png', price: 20, mandiPrice: 30, unit: 'bundle', fresh: true, organic: true, bg: '#f0fff7' },
  { id: 12, name: 'Makka (Maize)', farmer: 'Rajendra Jat', loc: 'Raisen Rd, Bhopal', cat: 'grains', image: ' maize.jpg', price: 22, mandiPrice: 32, unit: 'kg', fresh: false, organic: false, bg: '#fffaf5' },
  { id: 13, name: 'Gajar (Carrot)', farmer: 'Sunil Prajapati', loc: 'Kohefiza, Bhopal', cat: 'vegetables',image:'carrot.jpg', price: 42, mandiPrice: 58, unit: 'kg', fresh: true, organic: false, bg: '#fff7f0' },
  { id: 14, name: 'Phool Gobhi (Cauliflower)', farmer: 'Anil Kushwaha', loc: 'Shahpura, Bhopal', cat: 'vegetables', image: 'cauliflower.jpg', price: 48, mandiPrice: 65, unit: 'kg', fresh: true, organic: false, bg: '#f8fff8' },
  { id: 15, name: 'Bhindi (Okra)', farmer: 'Laxmi Bai', loc: 'Kolar Rd, Bhopal', cat: 'vegetables', image: 'bhindi.jpg', price: 52, mandiPrice: 70, unit: 'kg', fresh: true, organic: true, bg: '#f2fff0' },
  { id: 16, name: 'Kheera (Cucumber)', farmer: 'Harish Solanki', loc: 'BHEL, Bhopal', cat: 'vegetables', image: 'cucumber.jpg', price: 35, mandiPrice: 48, unit: 'kg', fresh: true, organic: false, bg: '#f4fff4' },
  { id: 17, name: 'Nimbu (Lemon)', farmer: 'Pankaj Sahu', loc: 'Neelbad, Bhopal', cat: 'fruits', image: 'lemon.jpg', price: 65, mandiPrice: 85, unit: 'kg', fresh: true, organic: false, bg: '#fffef5' },
  { id: 18, name: 'Santra (Orange)', farmer: 'Vijay Meena', loc: 'Arera Colony, Bhopal', cat: 'fruits', image: 'orange.jpg', price: 72, mandiPrice: 95, unit: 'kg', fresh: true, organic: false, bg: '#fff8f0' },
  { id: 19, name: 'Seb (Apple)', farmer: 'Nitin Rawat', loc: 'TT Nagar, Bhopal', cat: 'fruits', image: 'apple.jpg', price: 160, mandiPrice: 210, unit: 'kg', fresh: true, organic: true, bg: '#fff5f5' },
  { id: 20, name: 'Angoor (Grapes)', farmer: 'Sandeep Lodhi', loc: 'New Market, Bhopal', cat: 'fruits', image: 'grapes.jpg', price: 140, mandiPrice: 185, unit: 'kg', fresh: true, organic: false, bg: '#f8f4ff' },
  { id: 21, name: 'Pudina (Mint)', farmer: 'Geeta Yadav', loc: 'Chhola Rd, Bhopal', cat: 'herbs', image: 'pudina.jpg', price: 18, mandiPrice: 28, unit: 'bundle', fresh: true, organic: true, bg: '#f0fff4' },
  { id: 22, name: 'Curry Patta', farmer: 'Sunita Patle', loc: 'Ayodhya Bypass, Bhopal', cat: 'herbs', image: 'curry patta .png', price: 25, mandiPrice: 38, unit: 'bundle', fresh: true, organic: true, bg: '#f4fff0' },
  { id: 23, name: 'Methi (Fenugreek Leaves)', farmer: 'Rukmani Devi', loc: 'Saket Nagar, Bhopal', cat: 'herbs', image: 'methi.jpg', price: 22, mandiPrice: 34, unit: 'bundle', fresh: true, organic: false, bg: '#f5fff5' },
//   { id: 24, name: 'Tulsi (Holy Basil)', farmer: 'Om Prakash', loc: 'Lalghati, Bhopal', cat: 'herbs', image: '', price: 35, mandiPrice: 50, unit: 'plant', fresh: true, organic: true, bg: '#f0fff8' },
  { id: 25, name: 'Farm Fresh Dudh (Milk)', farmer: 'Bhura Singh', loc: 'Gunga, Bhopal', cat: 'dairy', image: 'milk.png', price: 56, mandiPrice: 68, unit: 'litre', fresh: true, organic: false, bg: '#f9fbff' },
  { id: 26, name: 'Malai Paneer', farmer: 'Sushila Ben', loc: 'Jahangirabad, Bhopal', cat: 'dairy', image: 'panner.jpg', price: 320, mandiPrice: 400, unit: 'kg', fresh: true, organic: false, bg: '#fffef8' },
  { id: 27, name: 'Dahi (Curd)', farmer: 'Kailash Gowda', loc: 'Indrapuri, Bhopal', cat: 'dairy', image: 'curd.jpg', price: 48, mandiPrice: 62, unit: '500g', fresh: true, organic: false, bg: '#fffdf5' },
  { id: 28, name: 'Makkhan (White Butter)', farmer: 'Phoolchand Sen', loc: 'Peer Gate, Bhopal', cat: 'dairy', image: 'makkhan.jpg', price: 420, mandiPrice: 520, unit: 'kg', fresh: true, organic: true, bg: '#fffbf0' },
  { id: 29, name: 'Basmati Chawal (Rice)', farmer: 'Jaswant Rai', loc: 'Itarsi Rd, Bhopal', cat: 'grains', image: 'chawal.jpg', price: 95, mandiPrice: 120, unit: 'kg', fresh: false, organic: false, bg: '#fffef5' },
  { id: 30, name: 'Bajra (Pearl Millet)', farmer: 'Chhotelal Ahirwar', loc: 'Sultanpur, Bhopal', cat: 'grains', image: 'bajra.jpg', price: 38, mandiPrice: 52, unit: 'kg', fresh: false, organic: false, bg: '#faf8f0' },
  { id: 31, name: 'Jowar (Sorghum)', farmer: 'Babulal Bagri', loc: 'Narsingarh, Bhopal', cat: 'grains', image: 'jowar.jpg', price: 36, mandiPrice: 48, unit: 'kg', fresh: false, organic: false, bg: '#fffaf0' },
];

function productImageUrl(p) {
  if (p.image) {
    if (p.image.startsWith('http') || p.image.startsWith('data:')) return p.image;
    return 'pics/' + p.image;
  }
  const cat = (p.cat || '').toLowerCase();
  return catDefaultImages[cat] || catDefaultImages.vegetables;
}

const deliveryPartners = [
  { name: 'Vikram Singh', photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80' },
  { name: 'Imran Khan', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80' },
  { name: 'Deepak Yadav', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
  { name: 'Rahul Nair', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' },
];

let cart = [];
let myListings = [];
let orders = [];
let activeCategory = 'all';
let selectedPayment = 'cod';
let currentLang = localStorage.getItem('khetseLang') || 'en';
let deliveryEtaMins = 22;
let deliveryEtaTimer = null;
let currentRider = null;

/* KhetSe — Hindi / English UI strings & i18n helpers (loaded before main logic in script.js merge) */
const PRODUCT_HI_NAMES = {
  1: 'ताज़ा टमाटर (तमाटर)',
  2: 'देसी आम',
  3: 'जैविक पालक',
  4: 'शरबती गेहूं',
  6: 'हरी मिर्च',
  7: 'देसी घी',
  8: 'आलू',
  9: 'तरबूज',
  10: 'प्याज़ (लाल)',
  11: 'धनिया (ताज़ा)',
  12: 'मक्का',
  13: 'गाजर',
  14: 'फूल गोभी',
  15: 'भिंडी',
  16: 'खीरा',
  17: 'नींबू',
  18: 'संतरा',
  19: 'सेब',
  20: 'अंगूर',
  21: 'पुदीना',
  22: 'करी पत्ता',
  23: 'मेथी',
  25: 'फार्म फ्रेश दूध',
  26: 'मलाई पनीर',
  27: 'दही',
  28: 'मक्खन (सफ़ेद)',
  29: 'बासमती चावल',
  30: 'बाजरा',
  31: 'ज्वार',
};

const UNIT_HI = {
  kg: 'किग्रा',
  bundle: 'गुच्छा',
  litre: 'लीटर',
  '500g': '500 ग्राम',
  plant: 'पौधा',
  dozen: 'दर्जन',
};

function unitLabel(u) {
  const x = (u || 'kg').toLowerCase();
  return currentLang === 'hi' && UNIT_HI[x] ? UNIT_HI[x] : u || 'kg';
}

function productDisplayName(p) {
  if (!p) return '';
  if (currentLang === 'hi' && PRODUCT_HI_NAMES[p.id]) return PRODUCT_HI_NAMES[p.id];
  return p.name;
}

function itemsCountLabel(n) {
  return currentLang === 'hi' ? n + ' आइटम' : n + ' items';
}

function itemSingularPlural(n) {
  return currentLang === 'hi' ? (n === 1 ? '1 आइटम' : n + ' आइटम') : n + (n === 1 ? ' item' : ' items');
}

const LOCALE = {
  en: {
    metaTitle: 'KhetSe — Farm to Fork, No Middlemen',
    navMarket: 'Market',
    navFarmer: 'Farmer',
    navOrders: 'Orders',
    navStats: 'Stats',
    navLogin: 'Login',
    navFarmerShort: 'Farmer',
    navMe: 'Me',
    navCart: 'Cart',
    langToggleHint: 'Switch Language',
    voiceTitle: 'Voice Search',
    voiceAria: 'Voice search',
    heroBadge: "🇮🇳 Bhopal's Direct Farm Marketplace",
    heroTitleHtml: 'From <em>Khet</em> to Your<br/>Kitchen, Directly',
    heroP: 'Buy fresh produce straight from farmers in Bhopal & nearby villages. No middlemen. Fair prices. Delivered within 24 hours.',
    heroShop: '🛍️ Shop Fresh Produce',
    heroFarmerBtn: "🌾 I'm a Farmer →",
    statsFarmers: 'Bhopal Farmers',
    statsMiddlemen: 'Middlemen',
    statsSavings: 'Avg Savings',
    statsDelivery: 'Delivery',
    marquee1: 'Fresh Tomatoes — ₹32/kg (Mandi ₹45)',
    marquee2: 'Desi Mangoes — ₹120/kg (Mandi ₹160)',
    marquee3: 'Organic Palak — ₹28/bundle (Mandi ₹40)',
    marquee4: 'Sharbati Gehu — ₹30/kg (Mandi ₹42)',
    marquee5: 'Pyaz — ₹22/kg (Mandi ₹35)',
    marquee6: 'Aloo — ₹18/kg (Mandi ₹28)',
    zoneNoticeHtml:
      '📍 <strong>Delivery only within Bhopal District</strong> — Berasia, Phanda, Raisen Road, Hoshangabad Road, Vidisha Road & nearby villages included.',
    sectionCatHtml: 'Shop by <span>Category</span>',
    sectionFreshHtml: 'Fresh <span>From Bhopal Farms</span>',
    searchPh: 'Search tomatoes, palak, gehu…',
    helplineTitle: 'Help & Support',
    helplineSub: 'KhetSe connects Bhopal farmers and families — we are here when you need us.',
    helplineC1h: 'Customer Support',
    helplineC1p: 'Questions about orders, delivery zones, payments, or refunds? Our consumer desk is available daily.',
    helplineF1h: 'Farmer Help Center',
    helplineF1p: 'Listings, payouts, quality checks, or pickup slots — reach the farmer success team for hands-on help.',
    helplineCall: 'Call Support',
    helplineEmail: 'Email Support',
    farmerHeroH: '🌾 Farmer Portal',
    farmerHeroP: 'List your produce, get AI guidance, and track your earnings',
    formTitle: '📋 List New Produce',
    labelProdName: 'Product Name',
    phProdName: 'e.g. Fresh Tamatar',
    labelCat: 'Category',
    labelPrice: 'Price per kg (₹)',
    phPrice: 'e.g. 35',
    labelQty: 'Available Quantity (kg)',
    phQty: 'e.g. 200',
    labelYourName: 'Your Name',
    phFarmer: 'e.g. Ramesh Patel',
    labelVillage: 'Village / Area in Bhopal',
    labelDesc: 'Description',
    phDesc: "Tell buyers about your produce — how it's grown, freshness, etc.",
    labelHarvest: 'Harvest Date',
    labelOrganic: 'Organic Certified?',
    optNo: 'No',
    optYes: 'Yes',
    submitList: '🌟 List My Produce',
    aiSecTitle: '🤖 AI Kisan Sahayak <span style="font-size:.85rem;font-weight:400;color:#888;font-family:\'DM Sans\',sans-serif;">(AI Farmer Assistant)</span>',
    aiTab1: '🌱 Seasonal Crops',
    aiTab2: '🌿 Fertilizers',
    aiTab3: '🛡️ Pesticides',
    aiTab4: '💧 Watering',
    aiTab5: '💬 Ask AI',
    listingsTitleHtml: 'My <span style="color:var(--sprout)">Listings</span>',
    ordersTitleHtml: 'Your <span style="color:var(--sprout)">Orders</span>',
    ordersSub: 'Farm-fresh deliveries within Bhopal district only',
    dashTitleHtml: '📊 Platform <span style="color:var(--sprout)">Dashboard</span>',
    dashSub: 'Bhopal marketplace live analytics',
    dashOrders: 'Total Orders',
    dashRev: 'Revenue',
    dashFarmers: 'Active Farmers',
    dashMid: 'Middlemen Saved',
    dashWeek1: '↑ 12% this week',
    dashWeek2: '↑ 8% vs last week',
    dashWeek3: '↑ 14 new today',
    dashWeek4: 'Passed to farmers',
    cartTitle: '🛒 Your Cart',
    payLabel: 'Payment Method',
    payCod: '💵 Cash on Delivery',
    payUpi: '📱 UPI',
    checkoutBtn: '✅ Place Order',
    modalH: 'Order Placed!',
    modalP:
      'Your farm-fresh order has been confirmed. The farmer will dispatch within 24 hours. Zero middlemen. Delivery within Bhopal district.',
    modalBtn: 'Track My Order →',
    riderHead: 'Chat with rider',
    riderPh: 'Type a message…',
    riderSend: 'Send',
    deliveryPartner: 'KhetSe delivery partner',
    deliveryEta: 'Arriving in {{m}} mins',
    deliveryCall: 'Call',
    deliveryChat: 'Chat',
    qtySelect: 'Select Quantity',
    qtyCancel: 'Cancel',
    qtyAdd: '🛒 Add to Cart',
    loginH2: 'Log In',
    loginP: 'Select Your Role',
    loginCardTitle: 'Log In',
    loginCardSub: 'Select Your Role',
    roleFarmerT: 'Farmer Login',
    roleFarmerD: 'List your produce & manage earnings',
    roleUserT: 'User/Consumer Login',
    roleUserD: 'Buy fresh produce directly from farmers',
    roleSign: 'Sign →',
    lfEmailL: '📧 Email / Mobile Number',
    lfEmailPh: 'Enter your email or mobile',
    lfPassL: '🔒 Password',
    lfPassPh: 'Enter your password',
    lfKisanL: '🌾 Kisan ID / Aadhar No.',
    lfKisanPh: 'Enter your Kisan ID / Aadhar no.',
    lfAadharL: '🪪 Aadhar Number',
    lfAadharPh: 'Enter your Aadhar Number',
    lfSubmit: 'Sign In →',
    lfFarmerBtn: '🌾 Sign In as Farmer →',
    lfConsumerBtn: '🛍️ Sign In as Consumer →',
    loginChangeRole: '← Change Role',
    loginSignup: "Don't have an account? ",
    loginSignupA: 'Sign up',
    toastDefault: 'Added to cart!',
    langToastHi: 'भाषा: हिंदी',
    langToastEn: 'Language: English',
    voiceUnsupported: 'Voice search is not supported in this browser. Please type your search or try Chrome / Edge.',
    voiceErr: 'Voice search error. Please try again.',
    catAll: 'All',
    catVeg: 'Vegetables',
    catFruit: 'Fruits',
    catGrain: 'Grains',
    catDairy: 'Dairy',
    catHerb: 'Herbs',
    badgeFresh: 'Just Harvested',
    badgeOrganic: '🌿 Organic',
    mandiLbl: 'Mandi:',
    saveChip: 'Save {{p}}%',
    farmerPriceLbl: '✅ KhetSe Farmer Price',
    emptyProducts: 'No products found',
    emptyCart: 'Your cart is empty',
    emptyListings: 'No listings yet. Add your first produce above!',
    emptyOrders: 'No orders yet. Start shopping!',
    cartSub: 'Subtotal ({{n}} items)',
    cartDel: 'Delivery (within Bhopal)',
    cartMid: 'Middlemen cost',
    cartSaved: '₹0 saved!',
    cartTotal: 'Total Payable',
    listingActive: '● Active',
    listingAvail: '📍 {{loc}} · {{qty}} kg available',
    listingOrg: '· 🌿 Organic',
    orderPayUpi: '📱 UPI',
    orderPayCod: '💵 Cash on Delivery',
    stDelivered: '✅ Delivered',
    stTransit: '🚚 In Transit',
    stProcess: '⏳ Processing',
    trOrdered: 'Ordered',
    trPacked: 'Packed',
    trTransit: 'In Transit',
    trDelivered: 'Delivered',
    orderTotalPaid: 'Total Paid:',
    trackOrder: 'Track Order 📍',
    dashSold: '{{n}} kg sold',
    dashMandi: 'Mandi:',
    dashKhetse: 'KhetSe:',
    dashSave: 'Save {{s}}',
    aiAskPh: 'e.g. Tamatar mein paani kitna dein? / How to prevent pests on wheat?',
    aiAskBtn: '🤖 Ask',
    aiQuickLbl: 'Quick questions:',
    aiQuick1: 'Best vegetable this month?',
    aiQuick2: 'Natural fertilizer?',
    aiQuick3: 'Gehu mein paani?',
    aiThinking: '🤖 Thinking...',
    aiPrefix: '🤖 KhetSe AI:',
    videoToast: 'Video loading... 🎬',
    regSoon: 'Registration coming soon! 🌱',
  },
  hi: {
    metaTitle: 'खेतसे — खेत से काँटा तक, बिना बिचौलिये',
    navMarket: 'बाज़ार',
    navFarmer: 'किसान',
    navOrders: 'ऑर्डर',
    navStats: 'आँकड़े',
    navLogin: 'लॉग इन',
    navFarmerShort: 'किसान',
    navMe: 'मैं',
    navCart: 'कार्ट',
    langToggleHint: 'भाषा बदलें',
    voiceTitle: 'आवाज़ से खोज',
    voiceAria: 'आवाज़ से खोज',
    heroBadge: '🇮🇳 भोपाल का सीधा किसान बाज़ार',
    heroTitleHtml: '<em>खेत</em> से सीधे<br/>आपकी रसोई तक',
    heroP:
      'भोपाल और आसपास के गाँवों के किसानों से ताज़ा सब्ज़ी-फल खरीदें। कोई बिचौलिया नहीं। उचित दाम। 24 घंटे में डिलीवरी।',
    heroShop: '🛍️ ताज़ा उत्पाद खरीदें',
    heroFarmerBtn: '🌾 मैं किसान हूँ →',
    statsFarmers: 'भोपाल के किसान',
    statsMiddlemen: 'बिचौलिए',
    statsSavings: 'औसत बचत',
    statsDelivery: 'डिलीवरी',
    marquee1: 'ताज़ा टमाटर — ₹32/किग्रा (मंडी ₹45)',
    marquee2: 'देसी आम — ₹120/किग्रा (मंडी ₹160)',
    marquee3: 'जैविक पालक — ₹28/गुच्छा (मंडी ₹40)',
    marquee4: 'शरबती गेहूं — ₹30/किग्रा (मंडी ₹42)',
    marquee5: 'प्याज़ — ₹22/किग्रा (मंडी ₹35)',
    marquee6: 'आलू — ₹18/किग्रा (मंडी ₹28)',
    zoneNoticeHtml:
      '📍 <strong>डिलीवरी केवल भोपाल ज़िले में</strong> — बेरसिया, फंदा, रायसेन रोड, होशंगाबाद रोड, विदिशा रोड और आसपास के गाँव शामिल।',
    sectionCatHtml: '<span>श्रेणी</span> के अनुसार खरीदें',
    sectionFreshHtml: 'ताज़ा <span>भोपाल के खेतों से</span>',
    searchPh: 'टमाटर, पालक, गेहूँ खोजें…',
    helplineTitle: 'मदद और सहायता',
    helplineSub: 'खेतसे भोपाल के किसानों और परिवारों को जोड़ता है — ज़रूरत पड़ने पर हम यहाँ हैं।',
    helplineC1h: 'ग्राहक सहायता',
    helplineC1p: 'ऑर्डर, डिलीवरी ज़ोन, भुगतान या रिफंड के बारे में सवाल? हमारी डेस्क रोज़ उपलब्ध है।',
    helplineF1h: 'किसान सहायता केंद्र',
    helplineF1p: 'लिस्टिंग, भुगतान, गुणवत्ता जाँच या पिकअप — किसान सफलता टीम से मदद लें।',
    helplineCall: 'कॉल करें',
    helplineEmail: 'ईमेल करें',
    farmerHeroH: '🌾 किसान पोर्टल',
    farmerHeroP: 'अपनी उपज सूचीबद्ध करें, AI मार्गदर्शन पाएँ, कमाई देखें',
    formTitle: '📋 नई उपज सूचीबद्ध करें',
    labelProdName: 'उत्पाद का नाम',
    phProdName: 'जैसे ताज़ा टमाटर',
    labelCat: 'श्रेणी',
    labelPrice: 'प्रति किग्रा मूल्य (₹)',
    phPrice: 'जैसे 35',
    labelQty: 'उपलब्ध मात्रा (किग्रा)',
    phQty: 'जैसे 200',
    labelYourName: 'आपका नाम',
    phFarmer: 'जैसे रमेश पटेल',
    labelVillage: 'भोपाल में गाँव / इलाका',
    labelDesc: 'विवरण',
    phDesc: 'खरीदारों को बताएँ — खेती, ताज़गी आदि।',
    labelHarvest: 'कटाई की तारीख',
    labelOrganic: 'जैविक प्रमाणित?',
    optNo: 'नहीं',
    optYes: 'हाँ',
    submitList: '🌟 मेरी उपज सूचीबद्ध करें',
    aiSecTitle:
      '🤖 AI किसान सहायक <span style="font-size:.85rem;font-weight:400;color:#888;font-family:\'DM Sans\',sans-serif;">(AI किसान सहायक)</span>',
    aiTab1: '🌱 मौसमी फसलें',
    aiTab2: '🌿 खाद',
    aiTab3: '🛡️ कीटनाशक',
    aiTab4: '💧 सिंचाई',
    aiTab5: '💬 AI से पूछें',
    listingsTitleHtml: 'मेरी <span style="color:var(--sprout)">लिस्टिंग</span>',
    ordersTitleHtml: 'आपके <span style="color:var(--sprout)">ऑर्डर</span>',
    ordersSub: 'केवल भोपाल ज़िले में ताज़ी डिलीवरी',
    dashTitleHtml: '📊 प्लेटफ़ॉर्म <span style="color:var(--sprout)">डैशबोर्ड</span>',
    dashSub: 'भोपाल बाज़ार लाइव आँकड़े',
    dashOrders: 'कुल ऑर्डर',
    dashRev: 'राजस्व',
    dashFarmers: 'सक्रिय किसान',
    dashMid: 'बचे बिचौलिए',
    dashWeek1: '↑ इस सप्ताह 12%',
    dashWeek2: '↑ पिछले सप्ताह से 8%',
    dashWeek3: '↑ आज 14 नए',
    dashWeek4: 'किसानों को सीधे',
    cartTitle: '🛒 आपकी कार्ट',
    payLabel: 'भुगतान विधि',
    payCod: '💵 डिलीवरी पर नकद',
    payUpi: '📱 यूपीआई',
    checkoutBtn: '✅ ऑर्डर करें',
    modalH: 'ऑर्डर दर्ज हो गया!',
    modalP:
      'आपका ताज़ा ऑर्डर पुष्टि हो गया। किसान 24 घंटे में भेजेगा। कोई बिचौलिया नहीं। डिलीवरी भोपाल ज़िले में।',
    modalBtn: 'ऑर्डर ट्रैक करें →',
    riderHead: 'डिलीवरी पार्टनर से चैट',
    riderPh: 'संदेश लिखें…',
    riderSend: 'भेजें',
    deliveryPartner: 'खेतसे डिलीवरी पार्टनर',
    deliveryEta: '{{m}} मिनट में पहुँच रहे हैं',
    deliveryCall: 'कॉल',
    deliveryChat: 'चैट',
    qtySelect: 'मात्रा चुनें',
    qtyCancel: 'रद्द करें',
    qtyAdd: '🛒 कार्ट में डालें',
    loginH2: 'लॉग इन',
    loginP: 'अपनी भूमिका चुनें',
    loginCardTitle: 'लॉग इन',
    loginCardSub: 'अपनी भूमिका चुनें',
    roleFarmerT: 'किसान लॉग इन',
    roleFarmerD: 'उपज सूची और कमाई प्रबंधित करें',
    roleUserT: 'उपभोक्ता लॉग इन',
    roleUserD: 'किसानों से सीधे ताज़ा खरीदें',
    roleSign: 'साइन →',
    lfEmailL: '📧 ईमेल / मोबाइल',
    lfEmailPh: 'ईमेल या मोबाइल दर्ज करें',
    lfPassL: '🔒 पासवर्ड',
    lfPassPh: 'पासवर्ड दर्ज करें',
    lfKisanL: '🌾 किसान ID / आधार',
    lfKisanPh: 'किसान ID या आधार दर्ज करें',
    lfAadharL: '🪪 आधार संख्या',
    lfAadharPh: 'आधार संख्या दर्ज करें',
    lfSubmit: 'साइन इन →',
    lfFarmerBtn: '🌾 किसान के रूप में साइन इन →',
    lfConsumerBtn: '🛍️ उपभोक्ता के रूप में साइन इन →',
    loginChangeRole: '← भूमिका बदलें',
    loginSignup: 'खाता नहीं है? ',
    loginSignupA: 'साइन अप',
    toastDefault: 'कार्ट में जोड़ा गया!',
    langToastHi: 'भाषा: हिंदी',
    langToastEn: 'Language: English',
    voiceUnsupported: 'इस ब्राउज़र में आवाज़ खोज उपलब्ध नहीं। कृपया टाइप करें या Chrome / Edge आज़माएँ।',
    voiceErr: 'आवाज़ खोज में त्रुटि। पुनः प्रयास करें।',
    catAll: 'सभी',
    catVeg: 'सब्ज़ियाँ',
    catFruit: 'फल',
    catGrain: 'अनाज',
    catDairy: 'डेयरी',
    catHerb: 'जड़ी-बूटी / हरी पत्ती',
    badgeFresh: 'अभी ताज़ा कटा',
    badgeOrganic: '🌿 जैविक',
    mandiLbl: 'मंडी:',
    saveChip: '{{p}}% बचत',
    farmerPriceLbl: '✅ खेतसे किसान दाम',
    emptyProducts: 'कोई उत्पाद नहीं मिला',
    emptyCart: 'आपकी कार्ट खाली है',
    emptyListings: 'अभी कोई लिस्टिंग नहीं। ऊपर से जोड़ें!',
    emptyOrders: 'अभी कोई ऑर्डर नहीं। खरीदारी शुरू करें!',
    cartSub: 'उप-योग ({{n}} आइटम)',
    cartDel: 'डिलीवरी (भोपाल में)',
    cartMid: 'बिचौलिये की लागत',
    cartSaved: '₹0 बचत!',
    cartTotal: 'कुल देय',
    listingActive: '● सक्रिय',
    listingAvail: '📍 {{loc}} · {{qty}} किग्रा उपलब्ध',
    listingOrg: '· 🌿 जैविक',
    orderPayUpi: '📱 यूपीआई',
    orderPayCod: '💵 डिलीवरी पर नकद',
    stDelivered: '✅ डिलीवर हो गया',
    stTransit: '🚚 रास्ते में',
    stProcess: '⏳ प्रक्रिया में',
    trOrdered: 'ऑर्डर',
    trPacked: 'पैक',
    trTransit: 'रास्ते में',
    trDelivered: 'डिलीवर',
    orderTotalPaid: 'कुल भुगतान:',
    trackOrder: 'ऑर्डर ट्रैक करें 📍',
    dashSold: '{{n}} किग्रा बिका',
    dashMandi: 'मंडी:',
    dashKhetse: 'खेतसे:',
    dashSave: '{{s}} बचत',
    aiAskPh: 'जैसे: टमाटर में कितना पानी? / गेहूँ में कीट?',
    aiAskBtn: '🤖 पूछें',
    aiQuickLbl: 'जल्दी सवाल:',
    aiQuick1: 'इस महीने सबसे अच्छी सब्ज़ी?',
    aiQuick2: 'प्राकृतिक खाद?',
    aiQuick3: 'गेहूँ में पानी?',
    aiThinking: '🤖 सोच रहा है...',
    aiPrefix: '🤖 खेतसे AI:',
    videoToast: 'वीडियो लोड हो रहा है... 🎬',
    regSoon: 'पंजीकरण जल्द आ रहा है! 🌱',
  },
};

function tr(key, vars) {
  let s = (LOCALE[currentLang] && LOCALE[currentLang][key]) || LOCALE.en[key] || key;
  if (vars) {
    Object.keys(vars).forEach(function (k) {
      s = s.split('{{' + k + '}}').join(String(vars[k]));
    });
  }
  return s;
}

function applyMarqueeI18n() {
  const keys = ['marquee1', 'marquee2', 'marquee3', 'marquee4', 'marquee5', 'marquee6'];
  document.querySelectorAll('.marquee-item').forEach(function (el, i) {
    const dot = el.querySelector('.marquee-dot');
    const text = tr(keys[i % 6]);
    el.innerHTML = '';
    if (dot) el.appendChild(dot.cloneNode(true));
    else el.appendChild(document.createElement('span')).className = 'marquee-dot';
    if (!dot) el.querySelector('.marquee-dot').textContent = '●';
    el.appendChild(document.createTextNode(' ' + text));
  });
}

function setNavCartLoginLang() {
  var tabs = document.querySelectorAll('.tab-label');
  var navKeys = ['navMarket', 'navFarmer', 'navOrders', 'navStats'];
  tabs.forEach(function (el, i) {
    if (navKeys[i]) el.textContent = tr(navKeys[i]);
  });
  var lt = document.querySelector('.lang-btn .lang-text');
  if (lt) lt.textContent = currentLang === 'hi' ? 'English' : 'हिंदी';
  var ct = document.querySelector('.cart-text');
  if (ct) ct.textContent = tr('navCart');
  var lbtn = document.querySelector('.login-btn-text');
  if (lbtn && !document.getElementById('loginNavBtn').classList.contains('logged-in')) {
    lbtn.textContent = tr('navLogin');
  }
  var langBtn = document.querySelector('.lang-btn');
  if (langBtn) langBtn.setAttribute('title', tr('langToggleHint'));
  var vbtn = document.getElementById('voiceBtn');
  if (vbtn) {
    vbtn.setAttribute('title', tr('voiceTitle'));
    vbtn.setAttribute('aria-label', tr('voiceAria'));
  }
}

function applyStaticDomI18n() {
  document.documentElement.lang = currentLang === 'hi' ? 'hi' : 'en';
  var T = document.querySelector('title');
  if (T) T.textContent = tr('metaTitle');
  setNavCartLoginLang();
  var hb = document.querySelector('.hero-badge');
  if (hb) hb.textContent = tr('heroBadge');
  var h1 = document.querySelector('.hero h1');
  if (h1) h1.innerHTML = tr('heroTitleHtml');
  var hp = document.querySelector('.hero p');
  if (hp) hp.textContent = tr('heroP');
  var b1 = document.querySelector('.btn-primary');
  if (b1) b1.textContent = tr('heroShop');
  var b2 = document.querySelector('.btn-outline');
  if (b2) b2.textContent = tr('heroFarmerBtn');
  var sl = document.querySelectorAll('.stats-row .stat-label');
  if (sl[0]) sl[0].textContent = tr('statsFarmers');
  if (sl[1]) sl[1].textContent = tr('statsMiddlemen');
  if (sl[2]) sl[2].textContent = tr('statsSavings');
  if (sl[3]) sl[3].textContent = tr('statsDelivery');
  var zn = document.querySelector('.zone-notice');
  if (zn) zn.innerHTML = tr('zoneNoticeHtml');
  var st = document.querySelectorAll('#page-home .section-title');
  if (st[0]) st[0].innerHTML = tr('sectionCatHtml');
  if (st[1]) st[1].innerHTML = tr('sectionFreshHtml');
  var si = document.getElementById('searchInput');
  if (si) si.setAttribute('placeholder', tr('searchPh'));
  var cats = document.querySelectorAll('#categoryGrid .cat-name');
  var ck = ['catAll', 'catVeg', 'catFruit', 'catGrain', 'catDairy', 'catHerb'];
  cats.forEach(function (el, i) {
    if (ck[i]) el.textContent = tr(ck[i]);
  });
  var ht = document.querySelector('.helpline-title');
  if (ht) ht.textContent = tr('helplineTitle');
  var hs = document.querySelector('.helpline-sub');
  if (hs) hs.textContent = tr('helplineSub');
  var hc = document.querySelectorAll('.helpline-card h4');
  if (hc[0]) hc[0].textContent = tr('helplineC1h');
  if (hc[1]) hc[1].textContent = tr('helplineF1h');
  var hcp = document.querySelectorAll('.helpline-card p');
  if (hcp[0]) hcp[0].textContent = tr('helplineC1p');
  if (hcp[1]) hcp[1].textContent = tr('helplineF1p');
  var hcall = document.querySelector('.helpline-btn.call');
  if (hcall) hcall.textContent = tr('helplineCall');
  var hem = document.querySelector('.helpline-btn.email');
  if (hem) hem.textContent = tr('helplineEmail');
  var fh = document.querySelector('.farmer-hero h2');
  if (fh) fh.textContent = tr('farmerHeroH');
  var fp = document.querySelector('.farmer-hero p');
  if (fp) fp.textContent = tr('farmerHeroP');
  var ft = document.querySelector('.form-title');
  if (ft) ft.textContent = tr('formTitle');
  var fgs = document.querySelectorAll('.form-group');
  fgs.forEach(function (g) {
    var lab = g.querySelector('label');
    var inp = g.querySelector('input, textarea, select');
    if (!lab || !inp) return;
    var t = lab.textContent.trim();
    if (t === 'Product Name' || t === tr('labelProdName')) {
      lab.textContent = tr('labelProdName');
      inp.placeholder = tr('phProdName');
    }
    if (t === 'Category' || t === tr('labelCat')) lab.textContent = tr('labelCat');
    if (t.indexOf('Price per kg') === 0 || t === tr('labelPrice')) {
      lab.textContent = tr('labelPrice');
      inp.placeholder = tr('phPrice');
    }
    if (t.indexOf('Available Quantity') === 0 || t === tr('labelQty')) {
      lab.textContent = tr('labelQty');
      inp.placeholder = tr('phQty');
    }
    if (t === 'Your Name' || t === tr('labelYourName')) {
      lab.textContent = tr('labelYourName');
      inp.placeholder = tr('phFarmer');
    }
    if (t.indexOf('Village / Area') === 0 || t === tr('labelVillage')) lab.textContent = tr('labelVillage');
    if (t === 'Description' || t === tr('labelDesc')) {
      lab.textContent = tr('labelDesc');
      inp.placeholder = tr('phDesc');
    }
    if (t === 'Harvest Date' || t === tr('labelHarvest')) lab.textContent = tr('labelHarvest');
    if (t.indexOf('Organic Certified') === 0 || t === tr('labelOrganic')) lab.textContent = tr('labelOrganic');
  });
  var orgSel = document.getElementById('f-organic');
  if (orgSel) {
    var o0 = orgSel.options[0];
    var o1 = orgSel.options[1];
    if (o0) o0.textContent = tr('optNo');
    if (o1) o1.textContent = tr('optYes');
  }
  var fcat = document.getElementById('f-cat');
  if (fcat) {
    var opts = ['catVeg', 'catFruit', 'catGrain', 'catDairy', 'catHerb'];
    for (var i = 0; i < fcat.options.length; i++) {
      if (opts[i]) fcat.options[i].textContent = tr(opts[i]);
    }
  }
  var sb = document.querySelector('.submit-btn');
  if (sb) sb.textContent = tr('submitList');
  var aiTitle = document.querySelector('.ai-section-title');
  if (aiTitle) aiTitle.innerHTML = tr('aiSecTitle');
  var aiTabs = document.querySelectorAll('.ai-tabs > .ai-tab');
  var atk = ['aiTab1', 'aiTab2', 'aiTab3', 'aiTab4', 'aiTab5'];
  aiTabs.forEach(function (el, i) {
    if (atk[i]) el.textContent = tr(atk[i]);
  });
  var lt = document.querySelector('#page-farmer .section-title');
  if (lt) lt.innerHTML = tr('listingsTitleHtml');
  var ot = document.querySelector('#page-orders .section-title');
  if (ot) ot.innerHTML = tr('ordersTitleHtml');
  var os = document.querySelector('#page-orders p[style*="color:#888"]');
  if (os) os.textContent = tr('ordersSub');
  var dt = document.querySelector('#page-dashboard .section-title');
  if (dt) dt.innerHTML = tr('dashTitleHtml');
  var ds = document.querySelector('#page-dashboard p[style*="color:#888"]');
  if (ds) ds.textContent = tr('dashSub');
  var dcl = document.querySelectorAll('.dash-card-label');
  var dk = ['dashOrders', 'dashRev', 'dashFarmers', 'dashMid'];
  dcl.forEach(function (el, i) {
    if (dk[i]) el.textContent = tr(dk[i]);
  });
  var dch = document.querySelectorAll('.dash-card-change');
  var dck = ['dashWeek1', 'dashWeek2', 'dashWeek3', 'dashWeek4'];
  dch.forEach(function (el, i) {
    if (dck[i]) el.textContent = tr(dck[i]);
  });
  var ch = document.querySelector('.cart-header h3');
  if (ch) ch.textContent = tr('cartTitle');
  var pl = document.querySelector('.payment-label');
  if (pl) pl.textContent = tr('payLabel');
  var pc = document.getElementById('pay-cod');
  var pu = document.getElementById('pay-upi');
  if (pc) pc.textContent = tr('payCod');
  if (pu) pu.textContent = tr('payUpi');
  var cob = document.querySelector('.checkout-btn span:first-child');
  if (cob) cob.textContent = tr('checkoutBtn');
  var mh = document.querySelector('.modal h3');
  if (mh) mh.textContent = tr('modalH');
  var mp = document.querySelector('.modal p');
  if (mp) mp.textContent = tr('modalP');
  var mb = document.querySelector('.modal-btn');
  if (mb) mb.textContent = tr('modalBtn');
  var rh = document.querySelector('.rider-chat-head span');
  if (rh) rh.textContent = tr('riderHead');
  var ri = document.getElementById('riderChatInput');
  if (ri) ri.setAttribute('placeholder', tr('riderPh'));
  var rs = document.querySelector('.rider-chat-send');
  if (rs) rs.textContent = tr('riderSend');
  var dp = document.querySelector('.delivery-tracker-partner');
  if (dp) dp.textContent = tr('deliveryPartner');
  var qsl = document.querySelector('.qty-select-label');
  if (qsl) qsl.textContent = tr('qtySelect');
  var qcan = document.querySelector('.qty-cancel-btn');
  if (qcan) qcan.textContent = tr('qtyCancel');
  var qok = document.querySelector('.qty-confirm-btn');
  if (qok) qok.textContent = tr('qtyAdd');
  var l2 = document.querySelector('.login-top h2');
  if (l2) l2.textContent = tr('loginH2');
  var l2p = document.querySelector('.login-top p');
  if (l2p) l2p.textContent = tr('loginP');
  var lct = document.querySelector('.login-card-title');
  if (lct) lct.textContent = tr('loginCardTitle');
  var lcs = document.querySelector('.login-card-sub');
  if (lcs) lcs.textContent = tr('loginCardSub');
  var rft = document.querySelector('#role-row-farmer .role-row-title');
  if (rft) rft.textContent = tr('roleFarmerT');
  var rfd = document.querySelector('#role-row-farmer .role-row-desc');
  if (rfd) rfd.textContent = tr('roleFarmerD');
  var rct = document.querySelector('#role-row-consumer .role-row-title');
  if (rct) rct.textContent = tr('roleUserT');
  var rcd = document.querySelector('#role-row-consumer .role-row-desc');
  if (rcd) rcd.textContent = tr('roleUserD');
  document.querySelectorAll('.role-sign-btn').forEach(function (b) {
    b.textContent = tr('roleSign');
  });
  var elEmail = document.getElementById('lf-email');
  if (elEmail) {
    var leLab = elEmail.previousElementSibling;
    if (leLab && leLab.classList.contains('lf-label')) leLab.textContent = tr('lfEmailL');
    elEmail.placeholder = tr('lfEmailPh');
  }
  var elPass = document.getElementById('lf-pass');
  if (elPass) {
    var lpLab = elPass.closest('.lf-group');
    if (lpLab) {
      var ll = lpLab.querySelector('.lf-label');
      if (ll) ll.textContent = tr('lfPassL');
    }
    elPass.placeholder = tr('lfPassPh');
  }
  var sn = document.getElementById('loginSignupNote');
  if (sn) sn.innerHTML = tr('loginSignup') + '<a onclick="showToastRegSoon()">' + tr('loginSignupA') + '</a>';
  applyAiPanelStaticI18n();
  applyMarqueeI18n();
  refreshDeliveryPartnerStatic();
  var vmsg = document.getElementById('voiceUnsupportedMsg');
  if (vmsg) vmsg.textContent = tr('voiceUnsupported');
}

function refreshDeliveryPartnerStatic() {
  var dp = document.querySelector('.delivery-tracker-partner');
  if (dp) dp.textContent = tr('deliveryPartner');
  var bc = document.querySelector('.btn-call');
  if (bc) bc.textContent = tr('deliveryCall');
  var bt = document.querySelector('.btn-chat');
  if (bt) bt.textContent = tr('deliveryChat');
}

function applyAiPanelStaticI18n() {
  function S(sel, key, html) {
    var n = document.querySelector(sel);
    if (!n) return;
    if (html) n.innerHTML = tr(key);
    else n.textContent = tr(key);
  }
  S('#ai-crops .ai-card-header h4', 'aiCropsH', false);
  S('#ai-crops .ai-card-header p', 'aiCropsP', false);
  S('#ai-crops .video-label', 'aiCropsVid', false);
  S('#ai-fertilizer .ai-card-header h4', 'aiFertH', false);
  S('#ai-fertilizer .ai-card-header p', 'aiFertP', false);
  S('#ai-fertilizer .video-label', 'aiFertVid', false);
  S('#ai-pesticide .ai-card-header h4', 'aiPestH', false);
  S('#ai-pesticide .ai-card-header p', 'aiPestP', false);
  S('#ai-water .ai-card-header h4', 'aiWaterH', false);
  S('#ai-water .ai-card-header p', 'aiWaterP', false);
  S('#ai-ask .ai-card-header h4', 'aiAskH', false);
  S('#ai-ask .ai-card-header p', 'aiAskP', false);
  var aq = document.getElementById('aiQuestion');
  if (aq) aq.setAttribute('placeholder', tr('aiAskPh'));
  var ab = document.querySelector('.ask-ai-btn');
  if (ab) ab.textContent = tr('aiAskBtn');
  var ql = document.querySelector('#ai-ask div[style*="Quick questions"]');
  if (ql) ql.textContent = tr('aiQuickLbl');
  var qb = document.querySelectorAll('#ai-ask div[style*="display:flex"] .ai-tab');
  var qk = ['aiQuick1', 'aiQuick2', 'aiQuick3'];
  qb.forEach(function (b, i) {
    if (qk[i]) b.textContent = tr(qk[i]);
  });
  var g = function (panel, idx, strongKey, spanKey) {
    var it = document.querySelectorAll(panel + ' .ai-guidance-item')[idx - 1];
    if (!it) return;
    var st = it.querySelector('.ai-guidance-text strong');
    var sp = it.querySelector('.ai-guidance-text span');
    if (st && strongKey) st.textContent = tr(strongKey);
    if (sp && spanKey) sp.textContent = tr(spanKey);
    var chips = it.querySelectorAll('.season-chip');
    var chipMap = {
      '#ai-crops_1_0': 'aiC1s_chip_0',
      '#ai-crops_2_0': 'aiC2s_chip_0',
      '#ai-crops_3_0': 'aiC3s_chip_0',
      '#ai-crops_3_1': 'aiC3s_chip_1',
      '#ai-crops_4_0': 'aiC4s_chip_0',
      '#ai-crops_5_0': 'aiC5s_chip_0',
    };
    chips.forEach(function (c, j) {
      var ck = chipMap[panel + '_' + idx + '_' + j];
      if (ck) c.textContent = tr(ck);
    });
  };
  g('#ai-crops', 1, 'aiC1s', 'aiC1d');
  g('#ai-crops', 2, 'aiC2s', 'aiC2d');
  g('#ai-crops', 3, 'aiC3s', 'aiC3d');
  g('#ai-crops', 4, 'aiC4s', 'aiC4d');
  g('#ai-crops', 5, 'aiC5s', 'aiC5d');
  g('#ai-fertilizer', 1, 'aiF1s', 'aiF1d');
  g('#ai-fertilizer', 2, 'aiF2s', 'aiF2d');
  g('#ai-fertilizer', 3, 'aiF3s', 'aiF3d');
  g('#ai-fertilizer', 4, 'aiF4s', 'aiF4d');
  g('#ai-pesticide', 1, 'aiP1s', 'aiP1d');
  g('#ai-pesticide', 2, 'aiP2s', 'aiP2d');
  g('#ai-pesticide', 3, 'aiP3s', 'aiP3d');
  g('#ai-pesticide', 4, 'aiP4s', 'aiP4d');
  g('#ai-water', 1, 'aiW1s', 'aiW1d');
  g('#ai-water', 2, 'aiW2s', 'aiW2d');
  g('#ai-water', 3, 'aiW3s', 'aiW3d');
  g('#ai-water', 4, 'aiW4s', 'aiW4d');
  g('#ai-water', 5, 'aiW5s', 'aiW5d');
}

(function extendLocaleAiStrings() {
  var X = {
    aiCropsH: ['🌱 Which Crops to Grow This Season?', '🌱 इस मौसम में कौन सी फसलें लगाएँ?'],
    aiCropsP: ['Bhopal region — Central India recommendations', 'भोपाल क्षेत्र — मध्य भारत के अनुशंसा'],
    aiCropsVid: ['Watch: Rabi Season Crop Guide (4 min)', 'देखें: रबी फसल गाइड (4 मिनट)'],
    aiC1s: ['Wheat (Gehu) — Best crop now', 'गेहूँ (गेहूं) — अभी सर्वोत्तम फसल'],
    aiC1d: [
      "Bhopal's black soil is ideal. Sow Oct–Nov, harvest Mar–Apr. Sharbati variety gets premium price.",
      'भोपाल की काली मिट्टी उपयुक्त है। अक्टूबर–नवंबर बुवाई, मार्च–अप्रैल कटाई। शरबती किस्म अच्छे दाम पर।',
    ],
    aiC1s_chip_0: ['❄️ Rabi (Winter)', '❄️ रबी (सर्दी)'],
    aiC2s: ['Onion (Pyaz) — High demand in Bhopal market', 'प्याज़ — भोपाल मंडी में माँग अधिक'],
    aiC2d: [
      'Plant Nov–Dec for March harvest. Yields 15–20 tonnes/hectare in MP climate.',
      'नवंबर–दिसंबर रोपण, मार्च कटाई। एमपी जलवायु में 15–20 टन/हेक्टेयर उपज।',
    ],
    aiC2s_chip_0: ['❄️ Rabi', '❄️ रबी'],
    aiC3s: ['Tomato (Tamatar) — Year-round opportunity', 'टमाटर — साल भर अवसर'],
    aiC3d: [
      'Summer variety Jun–Aug, Winter variety Oct–Dec. Excellent returns on KhetSe platform.',
      'गर्मी किस्म जून–अगस्त, सर्दी किस्म अक्टूबर–दिसंबर। खेतसे पर अच्छा मुनाफ़ा।',
    ],
    aiC3s_chip_0: ['☀️ Kharif', '☀️ खरीफ़'],
    aiC3s_chip_1: ['❄️ Rabi', '❄️ रबी'],
    aiC4s: ['Maize (Makka) — Monsoon crop', 'मक्का — मानसून फसल'],
    aiC4d: [
      'Sow June–July with first rains. MP govt gives MSP support. Good for animal feed too.',
      'पहली बारिश के साथ जून–जुलाई बुवाई। एमपी सरकार एमएसपी। पशु आहार के लिए भी अच्छा।',
    ],
    aiC4s_chip_0: ['🌧️ Kharif (Monsoon)', '🌧️ खरीफ़ (मानसून)'],
    aiC5s: ['Palak / Methi / Dhaniya — Quick cash crop', 'पालक / मेथी / धनिया — जल्दी आय'],
    aiC5d: [
      'Ready in just 25–30 days. Plant Oct–Feb. Very high demand in Bhopal city. Organic premium available.',
      '25–30 दिन में तैयार। अक्टूबर–फरवरी लगाएँ। शहर में बहुत माँग। जैविक प्रीमियम।',
    ],
    aiC5s_chip_0: ['❄️ Rabi', '❄️ रबी'],
    aiFertH: ['🌿 Recommended Organic Fertilizers', '🌿 अनुशंसित जैविक खाद'],
    aiFertP: ['Safe, effective, and improves soil health long-term', 'सुरक्षित, प्रभावी और दीर्घकालिक मिट्टी स्वास्थ्य'],
    aiFertVid: ['Watch: Making Jeevamrit at Home (6 min)', 'देखें: घर पर जीवामृत (6 मिनट)'],
    aiF1s: ['Jeevamrit (जीवामृत)', 'जीवामृत'],
    aiF1d: [
      'Mix 10L cow urine, 10kg cow dung, 2kg jaggery, 2kg gram flour in 200L water. Leave 48 hours. Apply 200L/acre every 15 days.',
      '10 लीटर गोमूत्र, 10 किग्रा गोबर, 2 किग्रा गुड़, 2 किग्रा बेसन 200 लीटर पानी में। 48 घंटे। प्रति 15 दिन 200 लीटर/एकड़।',
    ],
    aiF2s: ['Vermicompost (केंचुआ खाद)', 'वर्मीकम्पोस्ट (केंचुआ खाद)'],
    aiF2d: [
      'Apply 2–3 tonnes/acre before sowing. Increases soil organic matter, improves water retention. Best for vegetables & herbs.',
      'बुवाई से पहले 2–3 टन/एकड़। जैविक पदार्थ और नमी बढ़ाता है। सब्ज़ियों व जड़ी-बूटी के लिए उत्तम।',
    ],
    aiF3s: ['Green Manure (हरी खाद)', 'हरी खाद'],
    aiF3d: [
      'Grow dhaincha or sunhemp, then plough into soil 45 days later. Adds nitrogen naturally — equal to 80kg urea/acre.',
      'ढैंचा या सनईम्प उगाएँ, 45 दिन बाद जुताई। प्राकृतिक नाइट्रोजन — लगभग 80 किग्रा यूरिया/एकड़।',
    ],
    aiF4s: ['Bio-fertilizers (जैव उर्वरक)', 'जैव उर्वरक'],
    aiF4d: [
      'Rhizobium for pulses, Azotobacter for wheat & vegetables. Available free at Bhopal Krishi Vigyan Kendra.',
      'दलहन के लिए राइजोबियम, गेहूँ व सब्ज़ियों के लिए एजोटोबैक्टर। भोपाल कृषि विज्ञान केंद्र पर मुफ़्त।',
    ],
    aiPestH: ['🛡️ Safe Pesticide Guidance', '🛡️ सुरक्षित कीटनाशक मार्गदर्शन'],
    aiPestP: ['Organic alternatives + safe usage of approved pesticides', 'जैविक विकल्प + स्वीकृत दवाओं का सुरक्षित उपयोग'],
    aiP1s: ['Neem Oil Spray (नीम का तेल) — Best organic option', 'नीम का तेल स्प्रे — सर्वोत्तम जैविक विकल्प'],
    aiP1d: [
      'Mix 5ml neem oil + 1ml soap per litre water. Spray in evening. Controls aphids, whitefly, fungal diseases. Safe for humans.',
      'प्रति लीटर 5 मिली नीम तेल + 1 मिली साबुन। शाम को छिड़काव। सुरक्षित।',
    ],
    aiP2s: ['Garlic-Chilli Spray (लहसुन-मिर्च अर्क)', 'लहसुन-मिर्च स्प्रे'],
    aiP2d: [
      'Blend 100g garlic + 10 red chillies + 1L water. Strain and dilute 1:10. Repels insects. Spray every 10 days.',
      '100 ग्राम लहसुन + 10 लाल मिर्च + 1 लीटर पानी। छानकर 1:10 पतला करें। 10 दिन में एक बार।',
    ],
    aiP3s: ['If using chemical pesticides — Safety Rules', 'रासायनिक दवा — सुरक्षा नियम'],
    aiP3d: [
      'Always wear gloves + mask. Spray in early morning or evening only. Do NOT spray 14 days before harvest. Store locked away from children.',
      'दस्ताने + मास्क। सुबह या शाम ही छिड़काव। कटाई से 14 दिन पहले नहीं। बच्चों से दूर रखें।',
    ],
    aiP4s: ['Free Expert Help Available', 'मुफ़्त विशेषज्ञ सहायता'],
    aiP4d: [
      'Bhopal Krishi Kendra helpline: 1800-180-1551 (free, Mon–Sat 9am–6pm). Get advice specific to your crop.',
      'भोपाल कृषि केंद्र: 1800-180-1551 (मुफ़्त, सोम–शनि 9–6)। अपनी फसल के लिए सलाह।',
    ],
    aiWaterH: ['💧 Watering Schedule Guide', '💧 सिंचाई कार्यक्रम'],
    aiWaterP: ["Optimal irrigation for Bhopal's climate", 'भोपाल जलवायु के लिए उपयुक्त सिंचाई'],
    aiW1s: ['Tomatoes', 'टमाटर'],
    aiW1d: [
      'Water every 3–4 days (summer) or 6–7 days (winter). 4–5 litres per plant per watering. Avoid waterlogging — causes root rot.',
      'गर्मी में 3–4 दिन, सर्दी में 6–7 दिन। प्रति पौधा 4–5 लीटर। जलभराव से बचें।',
    ],
    aiW2s: ['Wheat (Gehu)', 'गेहूँ'],
    aiW2d: [
      '4–6 irrigations total. Critical stages: CRI (21 days), tillering, jointing, flowering, grain filling. Each time 5cm depth.',
      'कुल 4–6 सिंचाई। महत्वपूर्ण चरण: CRI (21 दिन), कल्ले, जोड़, फूल, दाना। हर बार 5 सेमी गहराई।',
    ],
    aiW3s: ['Onion', 'प्याज़'],
    aiW3d: [
      'Water every 7–8 days. Stop irrigation 10 days before harvest to harden bulbs. Drip irrigation saves 40% water.',
      '7–8 दिन में सिंचाई। कटाई से 10 दिन पहले बंद करें। ड्रिप से 40% पानी बचत।',
    ],
    aiW4s: ['Leafy Vegetables (Palak, Methi)', 'पत्तेदार (पालक, मेथी)'],
    aiW4d: [
      'Light watering every 2 days. Avoid overhead spray — causes fungal disease. Use drip or furrow irrigation.',
      'हल्की सिंचाई हर 2 दिन। ऊपर से छिड़काव से बचें। ड्रिप या नाली सिंचाई।',
    ],
    aiW5s: ['Pro Tip: Water in Morning or Evening Only', 'सुझाव: केवल सुबह या शाम पानी'],
    aiW5d: [
      'Midday watering wastes 30–40% to evaporation. Early morning is best — plants absorb better, less disease risk.',
      'दोपहर में 30–40% वाष्पित। सुबह सर्वोत्तम — अवशोषण अच्छा, कम रोग।',
    ],
    aiAskH: ['💬 Ask AI Kisan Sahayak', '💬 AI किसान सहायक से पूछें'],
    aiAskP: ['Ask any farming question in Hindi or English', 'किसानी से जुड़ा कोई भी सवाल हिंदी या अंग्रेज़ी में पूछें'],
  };
  Object.keys(X).forEach(function (k) {
    LOCALE.en[k] = X[k][0];
    LOCALE.hi[k] = X[k][1];
  });
})();

(function extendLocaleMisc() {
  var P = {
    cartAdded: ['{{name}} added to cart', '{{name}} कार्ट में जोड़ा गया'],
    cartQtyAdded: ['{{name}} ({{qty}} {{unit}}) added', '{{name}} ({{qty}} {{unit}}) जोड़ा गया'],
    invalidQty: ['Invalid quantity', 'गलत मात्रा'],
    promptQty: ['Enter quantity in {{unit}}:', '{{unit}} में मात्रा दर्ज करें:'],
    qtyCustom: ['Custom…', 'कस्टम…'],
    qtyEnterAmt: ['Enter amount', 'राशि दर्ज करें'],
    cartEmptyToast: ['Your cart is empty!', 'आपकी कार्ट खाली है!'],
    fillRequired: ['Please fill all required fields!', 'कृपया सभी आवश्यक फ़ील्ड भरें!'],
    priceQtyInvalid: ['Price and quantity must be greater than 0!', 'मूल्य और मात्रा 0 से अधिक होनी चाहिए!'],
    listedOk: ['✅ {{name}} listed successfully!', '✅ {{name}} सफलतापूर्वक सूचीबद्ध!'],
    welcomeFarmer: ['✅ Welcome! Logged in as Farmer', '✅ स्वागत! किसान के रूप में लॉग इन'],
    welcomeConsumer: ['✅ Welcome! Logged in as Consumer', '✅ स्वागत! उपभोक्ता के रूप में लॉग इन'],
    logoutOk: ['Logged out successfully', 'सफलतापूर्वक लॉग आउट'],
    errEmail: ['Please enter your email or mobile number.', 'कृपया ईमेल या मोबाइल दर्ज करें।'],
    errPass: ['Please enter your password.', 'कृपया पासवर्ड दर्ज करें।'],
    errPassLen: ['Password must be at least 4 characters.', 'पासवर्ड कम से कम 4 अक्षर का हो।'],
    alertCall: [
      'Calling {{name}} on KhetSe rider line…\n\n(In a live app this would open your phone dialer.)',
      '{{name}} को खेतसे राइडर लाइन पर कॉल…\n\n(लाइव ऐप में फ़ोन डायलर खुलेगा।)',
    ],
    riderR1: ['Okay, noted. I am on the way.', 'ठीक है, रास्ते में हूँ।'],
    riderR2: ['Got it. Reaching in a few minutes.', 'समझ गया, कुछ ही मिनटों में पहुँचूँगा।'],
    riderR3: ['Thanks! I will call if the gate is closed.', 'धन्यवाद! गेट बंद हो तो कॉल करूँगा।'],
    qtyPlural: ['{{n}} {{unit}}s', '{{n}} {{unit}}'],
    qtyKgLine: ['{{n}} kg', '{{n}} किग्रा'],
    dozenLine: ['{{n}} dozen', '{{n}} दर्जन'],
    searchVoiceDone: ['Searching…', 'खोज रहे हैं…'],
  };
  Object.keys(P).forEach(function (k) {
    LOCALE.en[k] = P[k][0];
    LOCALE.hi[k] = P[k][1];
  });
})();

function showToastVideo() {
  showToast(tr('videoToast'));
}
function showToastRegSoon() {
  showToast(tr('regSoon'));
}

function refreshAllLanguageUI() {
  applyStaticDomI18n();
  updateCategoryCounts();
  applyFilters();
  updateCartUI();
  renderMyListings();
  renderOrders();
  updateDashboard();
  var eta = document.getElementById('deliveryEtaText');
  var dcard = document.getElementById('deliveryTracker');
  if (eta && dcard && dcard.classList.contains('visible') && typeof deliveryEtaMins === 'number') {
    eta.textContent = tr('deliveryEta', { m: deliveryEtaMins });
  }
  var toastEl = document.getElementById('toast');
  if (toastEl && !toastEl.classList.contains('show')) toastEl.textContent = tr('toastDefault');
}

function toggleLang() {
  currentLang = currentLang === 'en' ? 'hi' : 'en';
  try {
    localStorage.setItem('khetseLang', currentLang);
  } catch (e) {}
  refreshAllLanguageUI();
  showToast(currentLang === 'hi' ? tr('langToastHi') : tr('langToastEn'));
}

let voiceRecognition = null;
let voiceListening = false;

function setVoiceUnsupportedVisible(show) {
  var el = document.getElementById('voiceUnsupportedMsg');
  if (!el) return;
  if (show) {
    el.hidden = false;
    el.textContent = tr('voiceUnsupported');
  } else {
    el.hidden = true;
  }
}

function toggleVoice() {
  var btn = document.getElementById('voiceBtn');
  var SRc = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SRc) {
    setVoiceUnsupportedVisible(true);
    showToast(tr('voiceUnsupported'));
    return;
  }
  setVoiceUnsupportedVisible(false);
  if (voiceListening && voiceRecognition) {
    try {
      voiceRecognition.stop();
    } catch (e) {}
    return;
  }
  voiceRecognition = new SRc();
  var rec = voiceRecognition;
  rec.lang = currentLang === 'hi' ? 'hi-IN' : 'en-IN';
  rec.interimResults = true;
  rec.continuous = false;
  rec.maxAlternatives = 1;
  rec.onstart = function () {
    voiceListening = true;
    btn.classList.add('listening');
  };
  rec.onresult = function (e) {
    var input = document.getElementById('searchInput');
    var line = '';
    for (var i = e.resultIndex; i < e.results.length; i++) {
      line += e.results[i][0].transcript;
    }
    if (input) input.value = line.trim();
    if (e.results[e.results.length - 1].isFinal) {
      filterSearch(line);
      showPage('home');
    }
  };
  rec.onend = function () {
    voiceListening = false;
    btn.classList.remove('listening');
    var input = document.getElementById('searchInput');
    if (input && input.value) filterSearch(input.value);
  };
  rec.onerror = function () {
    voiceListening = false;
    btn.classList.remove('listening');
    showToast(tr('voiceErr'));
  };
  try {
    rec.start();
  } catch (err) {
    showToast(tr('voiceErr'));
  }
}


// ===================== CATEGORY COUNTS =====================
function updateCategoryCounts() {
  const grid = document.getElementById('categoryGrid');
  if (!grid) return;
  const cards = grid.querySelectorAll('.cat-card');
  const counts = [
    products.length,
    products.filter((p) => p.cat === 'vegetables').length,
    products.filter((p) => p.cat === 'fruits').length,
    products.filter((p) => p.cat === 'grains').length,
    products.filter((p) => p.cat === 'dairy').length,
    products.filter((p) => p.cat === 'herbs').length,
  ];
  cards.forEach((card, i) => {
    const el = card.querySelector('.cat-count');
    if (el && counts[i] !== undefined) el.textContent = counts[i] + ' items';
  });
}

// ===================== DELIVERY TRACKER + CHAT =====================
function pickRider() {
  return deliveryPartners[Math.floor(Math.random() * deliveryPartners.length)];
}

function showDeliveryTracker() {
  currentRider = pickRider();
  deliveryEtaMins = 18 + Math.floor(Math.random() * 15);
  const card = document.getElementById('deliveryTracker');
  if (!card) return;
  const img = document.getElementById('deliveryRiderPhoto');
  const nm = document.getElementById('deliveryRiderName');
  const eta = document.getElementById('deliveryEtaText');
  if (img) img.src = currentRider.photo;
  if (img) img.alt = currentRider.name;
  if (nm) nm.textContent = currentRider.name;
  if (eta) eta.textContent = 'Arriving in ' + deliveryEtaMins + ' mins';
  card.classList.add('visible');
  if (deliveryEtaTimer) clearInterval(deliveryEtaTimer);
  deliveryEtaTimer = setInterval(() => {
    if (deliveryEtaMins > 6) {
      deliveryEtaMins -= 1;
      const e = document.getElementById('deliveryEtaText');
      if (e) e.textContent = 'Arriving in ' + deliveryEtaMins + ' mins';
    }
  }, 60000);
}

function hideDeliveryTracker() {
  const card = document.getElementById('deliveryTracker');
  if (card) card.classList.remove('visible');
  closeRiderChat();
  if (deliveryEtaTimer) {
    clearInterval(deliveryEtaTimer);
    deliveryEtaTimer = null;
  }
}

function callDeliveryPartner() {
  const rider = currentRider || pickRider();
  window.alert('Calling ' + rider.name + ' on KhetSe rider line…\n\n(In a live app this would open your phone dialer.)');
}

function toggleRiderChat() {
  const panel = document.getElementById('riderChatPanel');
  const backdrop = document.getElementById('riderChatBackdrop');
  if (!panel || !backdrop) return;
  const open = panel.classList.toggle('open');
  backdrop.classList.toggle('open', open);
  if (open) {
    const input = document.getElementById('riderChatInput');
    if (input) setTimeout(() => input.focus(), 200);
  }
}

function closeRiderChat() {
  const panel = document.getElementById('riderChatPanel');
  const backdrop = document.getElementById('riderChatBackdrop');
  if (panel) panel.classList.remove('open');
  if (backdrop) backdrop.classList.remove('open');
}

function sendRiderChatMessage() {
  const input = document.getElementById('riderChatInput');
  const box = document.getElementById('riderChatMessages');
  if (!input || !box) return;
  const text = input.value.trim();
  if (!text) return;
  const esc = text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  box.insertAdjacentHTML('beforeend', '<div class="rider-msg me">' + esc + '</div>');
  input.value = '';
  box.scrollTop = box.scrollHeight;
  const riderName = (currentRider && currentRider.name) ? currentRider.name.split(' ')[0] : 'Rider';
  setTimeout(() => {
    const replies = [
      'Okay, noted. I am on the way.',
      'Got it. Reaching in a few minutes.',
      'Thanks! I will call if the gate is closed.',
    ];
    const msg = replies[Math.floor(Math.random() * replies.length)];
    box.insertAdjacentHTML('beforeend', '<div class="rider-msg them"><strong>' + riderName + '</strong><br>' + msg + '</div>');
    box.scrollTop = box.scrollHeight;
  }, 900);
}

// ===================== RENDER PRODUCTS =====================
function renderProducts(list) {
  const grid = document.getElementById('productGrid');
  if (!list.length) {
    grid.innerHTML = '<div class="empty-state"><div class="empty-icon">🔍</div><p>No products found</p></div>';
    return;
  }
  grid.innerHTML = list.map((p, i) => {
    const savePct = Math.round(((p.mandiPrice - p.price) / p.mandiPrice) * 100);
    const src = productImageUrl(p);
    const pName = productDisplayName(p);
    const pUnit = unitLabel(p.unit);
    
    const txtFresh = currentLang === 'hi' ? 'अभी काटा गया' : 'Just Harvested';
    const txtOrg = currentLang === 'hi' ? '🌿 जैविक' : '🌿 Organic';
    const txtMandi = currentLang === 'hi' ? 'मंडी:' : 'Mandi:';
    const txtSave = currentLang === 'hi' ? `बचत ${savePct}%` : `Save ${savePct}%`;
    const txtKhet = currentLang === 'hi' ? '✅ किसान मूल्य' : '✅ KhetSe Farmer Price';

    return `
    <div class="product-card fade-up" style="animation-delay:${i * 0.05}s">
      <div class="product-img" style="background:${p.bg}">
        <img class="product-photo" src="${src}" alt="" loading="lazy"/>
        ${p.fresh ? '<span class="fresh-badge">' + txtFresh + '</span>' : ''}
        ${p.organic ? '<span class="organic-badge">' + txtOrg + '</span>' : ''}
      </div>
      <div class="product-body">
        <div class="product-name">${pName}</div>
        <div class="product-farmer"><span class="farmer-dot"></span>${p.farmer} · ${p.loc}</div>
        <div class="price-compare">
          <span class="mandi-label">${txtMandi}</span>
          <span class="mandi-price">₹${p.mandiPrice}/${pUnit}</span>
          <span class="save-chip">${txtSave}</span>
        </div>
        <div class="product-footer">
          <div>
            <div class="product-price">₹${p.price} <span class="product-unit">/ ${pUnit}</span></div>
            <div class="farmer-price-label">${txtKhet}</div>
          </div>
          <button class="add-btn" id="btn-${p.id}" onclick="instaAdd(${p.id})">+</button>
          <div class="insta-cart-ctrl" id="ctrl-${p.id}">
            <button class="insta-minus" onclick="instaChange(${p.id},-1)">−</button>
            <span class="insta-qty" id="qty-${p.id}">1</span>
            <button class="insta-plus" onclick="instaChange(${p.id},1)">+</button>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');
  setTimeout(syncCartStateToCards, 0);
}

function filterCategory(cat, el) {
  activeCategory = cat;
  document.querySelectorAll('.cat-card').forEach((c) => c.classList.remove('active'));
  el.classList.add('active');
  applyFilters();
}

function filterSearch(val) {
  applyFilters();
}

function applyFilters() {
  const search = document.getElementById('searchInput').value.toLowerCase();
  let list = products;
  if (activeCategory !== 'all') list = list.filter((p) => p.cat === activeCategory);
  if (search) list = list.filter((p) => p.name.toLowerCase().includes(search) || p.farmer.toLowerCase().includes(search));
  renderProducts(list);
}

// ===================== INSTAMART-STYLE CART =====================
function instaAdd(id) {
  const product = [...products, ...myListings].find((p) => p.id === id);
  if (!product) return;
  const existing = cart.find((c) => c.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCartUI();
  const btn = document.getElementById('btn-' + id);
  const ctrl = document.getElementById('ctrl-' + id);
  const qtyEl = document.getElementById('qty-' + id);
  if (btn) btn.style.display = 'none';
  if (ctrl) ctrl.classList.add('visible');
  if (qtyEl) qtyEl.textContent = cart.find((c) => c.id === id)?.qty || 1;
  showToast(product.name + ' added to cart');
}

function instaChange(id, delta) {
  const item = cart.find((c) => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter((c) => c.id !== id);
    const btn = document.getElementById('btn-' + id);
    const ctrl = document.getElementById('ctrl-' + id);
    if (btn) btn.style.display = '';
    if (ctrl) ctrl.classList.remove('visible');
  } else {
    const qtyEl = document.getElementById('qty-' + id);
    if (qtyEl) qtyEl.textContent = item.qty;
  }
  updateCartUI();
}

function syncCartStateToCards() {
  cart.forEach((item) => {
    const btn = document.getElementById('btn-' + item.id);
    const ctrl = document.getElementById('ctrl-' + item.id);
    const qtyEl = document.getElementById('qty-' + item.id);
    if (btn) btn.style.display = 'none';
    if (ctrl) ctrl.classList.add('visible');
    if (qtyEl) qtyEl.textContent = item.qty;
  });
}

// ===================== CART — with quantity selection modal =====================
let pendingProductId = null;
let selectedQtyAmount = 1;

function addToCart(id) {
  const product = [...products, ...myListings].find((p) => p.id === id);
  if (!product) return;
  pendingProductId = id;
  selectedQtyAmount = 1;

  const unit = product.unit || 'kg';
  let qtySteps;
  if (unit === 'bundle' || unit === 'plant') {
    qtySteps = [
      { label: '1 ' + unit, val: 1 },
      { label: '2 ' + unit + 's', val: 2 },
      { label: '3 ' + unit + 's', val: 3 },
      { label: '5 ' + unit + 's', val: 5 },
      { label: '10 ' + unit + 's', val: 10 },
      { label: 'Custom…', val: 'custom' },
    ];
  } else if (unit === 'dozen') {
    qtySteps = [
      { label: '1 dozen', val: 1 },
      { label: '2 dozen', val: 2 },
      { label: '3 dozen', val: 3 },
      { label: '5 dozen', val: 5 },
      { label: '10 dozen', val: 10 },
      { label: 'Custom…', val: 'custom' },
    ];
  } else if (unit === 'litre' || unit === '500g') {
    qtySteps = [
      { label: '1 ' + unit, val: 1 },
      { label: '2 ' + unit, val: 2 },
      { label: '3 ' + unit, val: 3 },
      { label: '5 ' + unit, val: 5 },
      { label: '10 ' + unit, val: 10 },
      { label: 'Custom…', val: 'custom' },
    ];
  } else {
    qtySteps = [
      { label: '1 kg', val: 1 },
      { label: '2 kg', val: 2 },
      { label: '3 kg', val: 3 },
      { label: '5 kg', val: 5 },
      { label: '10 kg', val: 10 },
      { label: 'Custom…', val: 'custom' },
    ];
  }

  const thumb = document.getElementById('qtyModalImg');
  if (thumb) {
    thumb.src = productImageUrl(product);
    thumb.alt = product.name;
  }
  document.getElementById('qtyModalTitle').textContent = product.name;
  document.getElementById('qtyModalPrice').textContent = '₹' + product.price + ' / ' + unit;

  document.getElementById('qtyOptions').innerHTML = qtySteps
    .map(
      (step, i) => `
    <div class="qty-option ${i === 0 ? 'selected' : ''}"
         onclick="selectQtyOption(this, ${step.val === 'custom' ? "'custom'" : step.val}, ${product.price}, '${unit}')">
      ${step.label}
      <span class="qty-sub">${step.val === 'custom' ? 'Enter amount' : '₹' + (product.price * step.val).toLocaleString('en-IN')}</span>
    </div>
  `
    )
    .join('');

  document.getElementById('qtyModalOverlay').classList.add('open');
}

function selectQtyOption(el, val, price, unit) {
  document.querySelectorAll('.qty-option').forEach((o) => o.classList.remove('selected'));
  el.classList.add('selected');
  if (val === 'custom') {
    const custom = prompt('Enter quantity in ' + unit + ':');
    const parsed = parseInt(custom, 10);
    if (!parsed || parsed < 1) {
      showToast('Invalid quantity');
      return;
    }
    selectedQtyAmount = parsed;
    el.childNodes[0].textContent = parsed + ' ' + unit;
    el.querySelector('.qty-sub').textContent = '₹' + (price * parsed).toLocaleString('en-IN');
  } else {
    selectedQtyAmount = val;
  }
}

function closeQtyModal() {
  document.getElementById('qtyModalOverlay').classList.remove('open');
  pendingProductId = null;
}

function confirmAddToCart() {
  const id = pendingProductId;
  if (!id) return;
  closeQtyModal();
  const product = [...products, ...myListings].find((p) => p.id === id);
  if (!product) return;
  const existing = cart.find((c) => c.id === id);
  if (existing) {
    existing.qty += selectedQtyAmount;
  } else {
    cart.push({ ...product, qty: selectedQtyAmount });
  }
  updateCartUI();
  showToast(product.name + ' (' + selectedQtyAmount + ' ' + product.unit + ') added');
  const btn = document.getElementById('btn-' + id);
  if (btn) {
    btn.textContent = '✓';
    btn.classList.add('added');
  }
}

function updateCartUI() {
  document.getElementById('cartCount').textContent = cart.reduce((s, i) => s + i.qty, 0);
  const items = document.getElementById('cartItems');
  const paySection = document.getElementById('paymentSection');

  if (!cart.length) {
    items.innerHTML = '<div class="empty-state"><div class="empty-icon">🛒</div><p>Your cart is empty</p></div>';
    document.getElementById('cartSummary').innerHTML = '';
    document.getElementById('checkoutTotal').textContent = '';
    if (paySection) paySection.style.display = 'none';
    return;
  }

  items.innerHTML = cart
    .map((item) => {
      const src = productImageUrl(item);
      return `
    <div class="cart-item">
      <img class="cart-item-thumb" src="${src}" alt="" loading="lazy"/>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₹${item.price} / ${item.unit}</div>
      </div>
      <div class="qty-ctrl">
        <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
      </div>
      <button class="remove-item" onclick="removeItem(${item.id})">🗑</button>
    </div>
  `;
    })
    .join('');

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const delivery = 30;
  const total = subtotal + delivery;

  document.getElementById('cartSummary').innerHTML = `
    <div class="cart-row"><span>Subtotal (${cart.reduce((s, i) => s + i.qty, 0)} items)</span><span>₹${subtotal.toLocaleString('en-IN')}</span></div>
    <div class="cart-row"><span>Delivery (within Bhopal)</span><span>₹${delivery}</span></div>
    <div class="cart-row"><span style="color:#888;font-size:.78rem">Middlemen cost</span><span style="color:var(--sprout);font-size:.78rem">₹0 saved!</span></div>
    <div class="cart-row total"><span>Total Payable</span><span>₹${total.toLocaleString('en-IN')}</span></div>
  `;
  document.getElementById('checkoutTotal').textContent = ' — ₹' + total.toLocaleString('en-IN');
  if (paySection) paySection.style.display = 'block';
}

function changeQty(id, delta) {
  const item = cart.find((c) => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter((c) => c.id !== id);
    const btn = document.getElementById('btn-' + id);
    const ctrl = document.getElementById('ctrl-' + id);
    if (btn) btn.style.display = '';
    if (ctrl) ctrl.classList.remove('visible');
  } else {
    const qtyEl = document.getElementById('qty-' + id);
    if (qtyEl) qtyEl.textContent = item.qty;
  }
  updateCartUI();
}

function removeItem(id) {
  cart = cart.filter((c) => c.id !== id);
  const btn = document.getElementById('btn-' + id);
  const ctrl = document.getElementById('ctrl-' + id);
  if (btn) btn.style.display = '';
  if (ctrl) ctrl.classList.remove('visible');
  updateCartUI();
}

function selectPayment(type) {
  selectedPayment = type;
  document.querySelectorAll('.pay-opt').forEach((el) => el.classList.remove('selected'));
  document.getElementById('pay-' + type).classList.add('selected');
}

function toggleCart() {
  document.getElementById('cartOverlay').classList.toggle('open');
  document.getElementById('cartPanel').classList.toggle('open');
}

let qrcodeObj = null;

function selectPayment(method) {
  selectedPayment = method;
  document.querySelectorAll('.pay-opt').forEach(el => el.classList.remove('selected'));
  document.getElementById('pay-' + method).classList.add('selected');
}

function checkout() {
  if (!cart.length) {
    showToast('Your cart is empty!');
    return;
  }
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const total = subtotal + 30; // delivery fee
  
  const paymentModalOverlay = document.getElementById('paymentModalOverlay');
  const upiView = document.getElementById('upiPaymentView');
  const codView = document.getElementById('codPaymentView');
  
  paymentModalOverlay.classList.add('open');
  
  if (currentLang === 'hi') {
    document.querySelector('#upiPaymentView h3').textContent = 'UPI से स्कैन करके भुगतान करें';
    document.querySelector('#upiPaymentView p:nth-of-type(2)').textContent = 'Google Pay, PhonePe या Paytm खोलें';
    document.querySelectorAll('#upiPaymentView button')[0].textContent = 'भुगतान हो गया';
    document.querySelectorAll('#upiPaymentView button')[1].textContent = 'रद्द करें';
    
    document.querySelector('#codPaymentView h3').textContent = 'कैश ऑन डिलीवरी';
    document.querySelector('#codPaymentView p:nth-of-type(1)').textContent = 'डिलीवरी पार्टनर के लिए नकद तैयार रखें।';
    document.querySelector('#codPaymentView h4').textContent = 'आपका COD सत्यापन OTP';
    document.querySelector('#codPaymentView p:nth-of-type(3)').textContent = 'उत्पाद प्राप्त करने के लिए राइडर के साथ यह OTP साझा करें।';
    document.querySelectorAll('#codPaymentView button')[0].textContent = 'ऑर्डर कन्फर्म करें';
    document.querySelectorAll('#codPaymentView button')[1].textContent = 'रद्द करें';
  } else {
    document.querySelector('#upiPaymentView h3').textContent = 'Scan to Pay via UPI';
    document.querySelector('#upiPaymentView p:nth-of-type(2)').textContent = 'Open Google Pay, PhonePe, or Paytm';
    document.querySelectorAll('#upiPaymentView button')[0].textContent = 'Payment Done';
    document.querySelectorAll('#upiPaymentView button')[1].textContent = 'Cancel';
    
    document.querySelector('#codPaymentView h3').textContent = 'Cash on Delivery';
    document.querySelector('#codPaymentView p:nth-of-type(1)').textContent = 'Please keep cash ready for the delivery partner.';
    document.querySelector('#codPaymentView h4').textContent = 'Your COD Verification OTP';
    document.querySelector('#codPaymentView p:nth-of-type(3)').textContent = 'Share this OTP with the rider to receive your produce.';
    document.querySelectorAll('#codPaymentView button')[0].textContent = 'Confirm Order';
    document.querySelectorAll('#codPaymentView button')[1].textContent = 'Cancel';
  }

  if (selectedPayment === 'upi') {
    upiView.style.display = 'block';
    codView.style.display = 'none';
    document.getElementById('upiModalAmount').textContent = '₹' + total.toLocaleString('en-IN');
    
    // Generate UPI QR Code
    const upiID = 'yourname@upi'; // Placeholder UPI
    const merchantName = 'KhetSe';
    const upiURL = `upi://pay?pa=${upiID}&pn=${merchantName}&am=${total}&cu=INR`;
    
    const qrContainer = document.getElementById('qrcode');
    qrContainer.innerHTML = '';
    if (typeof QRCode !== 'undefined') {
      qrcodeObj = new QRCode(qrContainer, {
        text: upiURL,
        width: 150,
        height: 150,
      });
    }
  } else {
    upiView.style.display = 'none';
    codView.style.display = 'block';
    document.getElementById('codModalAmount').textContent = '₹' + total.toLocaleString('en-IN');
    // Generate 4-digit OTP
    const otp = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('codOtpDisplay').textContent = otp;
  }
}

function closePaymentModal() {
  document.getElementById('paymentModalOverlay').classList.remove('open');
}

async function confirmPaymentAndOrder() {
  closePaymentModal();
  
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const total = subtotal + 30;
  
  const orderId = 'KS' + Date.now().toString().slice(-5);
  const newOrder = {
    id: orderId,
    date: new Date().toLocaleDateString('en-IN'),
    items: cart.map((c) => ({ ...c })),
    total,
    status: 'processing',
    payment: selectedPayment,
  };
  
  orders.push(newOrder);
  
  try {
    const backendPayload = {
      user_id: currentUser ? currentUser.name : 'guest',
      items_json: JSON.stringify(newOrder.items),
      status: newOrder.status,
      total_amount: newOrder.total,
      delivery_address: 'Bhopal'
    };
    const res = await fetch('http://localhost:5000/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(backendPayload)
    });
    if (res.ok) {
      console.log('Order synced to Supabase');
    }
  } catch (e) {
    console.error('Backend sync failed', e);
  }

  cart = [];
  document.querySelectorAll('.add-btn').forEach((btn) => {
    btn.style.display = '';
    btn.textContent = '+';
    btn.classList.remove('added');
  });
  document.querySelectorAll('.insta-cart-ctrl').forEach((ctrl) => ctrl.classList.remove('visible'));
  updateCartUI();
  toggleCart();
  document.getElementById('modalOverlay').classList.add('open');
  showDeliveryTracker();
  updateDashboard();
  renderOrders();
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  showPage('orders');
}

// ===================== FARMER =====================
async function listProduct() {
  const name = document.getElementById('f-name').value.trim();
  const cat = document.getElementById('f-cat').value;
  const price = parseInt(document.getElementById('f-price').value, 10);
  const qty = parseInt(document.getElementById('f-qty').value, 10);
  const farmer = document.getElementById('f-farmer').value.trim();
  const loc = document.getElementById('f-loc').value;
  const organic = document.getElementById('f-organic').value === 'yes';

  if (!name || !price || !qty || !farmer) {
    showToast('Please fill all required fields!');
    return;
  }
  if (price < 1 || qty < 1) {
    showToast('Price and quantity must be greater than 0!');
    return;
  }

  const catKey = cat.toLowerCase();
  const mandiPrice = Math.round(price * 1.35);
  const newProduct = {
    id: Date.now(),
    name,
    cat: catKey,
    image: catDefaultImages[catKey] || catDefaultImages.vegetables,
    price,
    mandiPrice,
    unit: 'kg',
    fresh: true,
    organic,
    farmer,
    loc,
    bg: '#f5fff5',
    qty,
  };
  
  myListings.push(newProduct);
  products.push(newProduct);
  
  try {
    // Send to products table in Supabase via FastAPI
    await fetch('http://localhost:5000/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct)
    });
  } catch (e) {
    console.error('Backend sync failed', e);
  }

  renderMyListings();
  renderProducts(products);
  updateCategoryCounts();
  showToast('✅ ' + name + ' listed successfully!');
  ['f-name', 'f-price', 'f-qty', 'f-farmer', 'f-desc'].forEach((id) => {
    document.getElementById(id).value = '';
  });
}

function renderMyListings() {
  const el = document.getElementById('myListings');
  if (!myListings.length) {
    el.innerHTML = '<div class="empty-state"><div class="empty-icon">📋</div><p>No listings yet. Add your first produce above!</p></div>';
    return;
  }
  el.innerHTML = myListings
    .map((l) => {
      const src = productImageUrl(l);
      return `
    <div class="listing-item">
      <img class="listing-thumb" src="${src}" alt="" loading="lazy"/>
      <div class="listing-info">
        <div class="listing-name">${l.name}</div>
        <div class="listing-meta">📍 ${l.loc} · ${l.qty} kg available ${l.organic ? '· 🌿 Organic' : ''}</div>
      </div>
      <div style="text-align:right">
        <div class="listing-price">₹${l.price}/kg</div>
        <span class="listing-status">● Active</span>
      </div>
    </div>
  `;
    })
    .join('');
}

// ===================== AI GUIDANCE =====================
function showAiTab(tab, el) {
  document.querySelectorAll('.ai-tab').forEach((t) => t.classList.remove('active'));
  el.classList.add('active');
  ['crops', 'fertilizer', 'pesticide', 'water', 'ask'].forEach((t) => {
    const panel = document.getElementById('ai-' + t);
    if (panel) panel.style.display = t === tab ? 'block' : 'none';
  });
}

const aiKnowledge = {
  keywords: {
    'tomato|tamatar':
      '🍅 Tomatoes need watering every 3-4 days in summer. Apply neem oil spray every 15 days for pest control. Use vermicompost 2 tonnes/acre before planting. Harvest starts 60-70 days after transplanting.',
    'wheat|gehu|gehun':
      '🌾 Wheat needs 4-6 irrigations total. First irrigation at 21 days (CRI stage) is critical. Apply 120kg DAP + 60kg urea/acre in 2 splits. Harvest in March-April.',
    'onion|pyaz':
      '🧅 Onion needs watering every 7-8 days. Stop irrigation 10 days before harvest. Apply 60kg nitrogen/acre in 3 splits. Harvest when tops fall over naturally.',
    'water|paani|irrigation|sinchai':
      '💧 Best time to water: early morning (6-8am) or evening (5-7pm). Midday watering wastes 30-40% to evaporation. Drip irrigation saves 40-50% water vs flood irrigation.',
    'fertilizer|khad|urvarak':
      '🌿 Best organic fertilizer: Jeevamrit (cow dung + cow urine + jaggery). Apply every 15 days. Vermicompost (2-3 tonnes/acre) improves soil health long-term. Available at KVK Bhopal.',
    'pest|kide|bimari':
      '🛡️ Use neem oil spray (5ml/litre) for organic pest control. Apply every 10-15 days. For serious infestations, call Bhopal Krishi helpline: 1800-180-1551 (free).',
    'season|rabi|kharif|fasal':
      '📅 Rabi (winter Oct-Mar): Wheat, Onion, Potato, Palak, Tomato. Kharif (monsoon Jun-Sep): Maize, Soybean, Rice, Groundnut. Best cash crops for Bhopal: Wheat + Tomato.',
    'organic|jaivik':
      '🌿 For organic certification in MP, contact MPCOF (MP Certified Organic Federation). Organic produce gets 20-30% price premium on KhetSe. Start with neem oil + jeevamrit.',
  },
  default:
    "🤖 Great question! For best results in Bhopal's black soil climate: focus on wheat, tomato, onion, and leafy vegetables. Use organic methods for premium KhetSe pricing. Call KVK Bhopal (1800-180-1551) for field-specific advice.",
};

function askAI() {
  const q = document.getElementById('aiQuestion').value.trim();
  if (!q) return;
  const responseEl = document.getElementById('aiResponse');
  responseEl.className = 'ai-response-box show';
  responseEl.innerHTML = '<span class="ai-loading">🤖 Thinking...</span>';

  setTimeout(() => {
    const lower = q.toLowerCase();
    let answer = aiKnowledge.default;
    for (const [pattern, response] of Object.entries(aiKnowledge.keywords)) {
      if (new RegExp(pattern).test(lower)) {
        answer = response;
        break;
      }
    }
    responseEl.innerHTML = '<strong>🤖 KhetSe AI:</strong><br><br>' + answer;
  }, 800);
}

function quickAsk(q) {
  document.getElementById('aiQuestion').value = q;
  askAI();
}

function orderLineThumb(item) {
  const src = item.image ? item.image : productImageUrl(item);
  return '<img class="order-item-thumb" src="' + src + '" alt="" loading="lazy"/>';
}

// ===================== ORDERS =====================
function renderOrders() {
  const el = document.getElementById('ordersList');
  const imgTom = 'https://images.unsplash.com/photo-1592924357228-91a4daadc318?auto=format&fit=crop&w=200&q=80';
  const imgPal = 'https://images.unsplash.com/photo-1576045057995-568f588a82b8?auto=format&fit=crop&w=200&q=80';
  const imgMan = 'https://images.unsplash.com/photo-1589689855845-ec26fefe42a7?auto=format&fit=crop&w=200&q=80';
  const allOrders = [
    {
      id: 'KS10482',
      date: '20 Apr 2025',
      items: [
        { name: 'Fresh Tomatoes', qty: 2, price: 32, image: imgTom },
        { name: 'Organic Palak', qty: 1, price: 28, image: imgPal },
      ],
      total: 122,
      status: 'delivered',
      payment: 'cod',
    },
    {
      id: 'KS10391',
      date: '18 Apr 2025',
      items: [{ name: 'Desi Aam', qty: 1, price: 120, image: imgMan }],
      total: 150,
      status: 'transit',
      payment: 'upi',
    },
    ...orders,
  ];

  if (!allOrders.length) {
    el.innerHTML = '<div class="empty-state"><div class="empty-icon">📦</div><p>No orders yet. Start shopping!</p></div>';
    return;
  }

  el.innerHTML = allOrders
    .map((order) => {
      return `
    <div class="order-card">
      <div class="order-header">
        <div>
          <div class="order-id"># ${order.id}</div>
          <div class="order-date">📅 ${order.date} · ${order.payment === 'upi' ? '📱 UPI' : '💵 Cash on Delivery'}</div>
        </div>
        <span class="order-status status-${order.status}">
          ${order.status === 'delivered' ? '✅ Delivered' : order.status === 'transit' ? '🚚 In Transit' : '⏳ Processing'}
        </span>
      </div>
      ${
        order.status === 'transit'
          ? `
      <div class="track-steps">
        <div class="track-step done"><div class="step-circle">✓</div><div class="step-label">Ordered</div></div>
        <div class="track-step done"><div class="step-circle">✓</div><div class="step-label">Packed</div></div>
        <div class="track-step current"><div class="step-circle">🚚</div><div class="step-label">In Transit</div></div>
        <div class="track-step"><div class="step-circle">4</div><div class="step-label">Delivered</div></div>
      </div>`
          : ''
      }
      ${
        order.status === 'processing'
          ? `
      <div class="track-steps">
        <div class="track-step current"><div class="step-circle">1</div><div class="step-label">Ordered</div></div>
        <div class="track-step"><div class="step-circle">2</div><div class="step-label">Packed</div></div>
        <div class="track-step"><div class="step-circle">3</div><div class="step-label">In Transit</div></div>
        <div class="track-step"><div class="step-circle">4</div><div class="step-label">Delivered</div></div>
      </div>`
          : ''
      }
      <div class="order-items">
        ${order.items
          .map((item) => {
            return `
          <div class="order-item">
            ${orderLineThumb(item)}
            <span class="order-item-name">${item.name}</span>
            <span class="order-item-qty">×${item.qty}</span>
            <span class="order-item-price">₹${item.price * item.qty}</span>
          </div>
        `;
          })
          .join('')}
      </div>
      <div class="order-footer">
        <div class="order-total">Total Paid: ₹${order.total.toLocaleString('en-IN')}</div>
        <button class="track-btn">Track Order 📍</button>
      </div>
    </div>
  `;
    })
    .join('');
}

// ===================== DASHBOARD =====================
function updateDashboard() {
  const totalOrders = 24 + orders.length;
  const totalRevenue = orders.reduce((s, o) => s + o.total, 0) + 8420;
  document.getElementById('d-orders').textContent = totalOrders;
  document.getElementById('d-revenue').textContent = '₹' + totalRevenue.toLocaleString('en-IN');

  const top = [
    {
      image: 'tamato-vegii.jpg',
      name: 'Fresh Tomatoes',
      sold: 340,
      revenue: '₹10,880',
    },
    {
      image: 'wheat.jpg',
      name: 'Sharbati Gehu',
      sold: 280,
      revenue: '₹8,400',
    },
    {
      image: 'onion.jpg',
      name: 'Pyaz',
      sold: 220,
      revenue: '₹4,840',
    },
    {
      image: 'desi ghee.jpg',
      name: 'Desi Ghee',
      sold: 12,
      revenue: '₹5,760',
    },
  ];
  document.getElementById('topProducts').innerHTML = top
    .map(
      (t) => `
    <div style="display:flex;align-items:center;gap:12px;padding:11px 0;border-bottom:1px solid #f5f5f5">
      <img src="${t.image}" alt="" style="width:40px;height:40px;object-fit:cover;border-radius:10px;flex-shrink:0"/>
      <div style="flex:1">
        <div style="font-weight:700;font-size:.9rem">${t.name}</div>
        <div style="font-size:.78rem;color:#aaa">${t.sold} kg sold</div>
      </div>
      <div style="font-weight:700;color:var(--earth)">${t.revenue}</div>
    </div>
  `
    )
    .join('');

  const prices = [
    { item: 'Tamatar (Tomato)', mandi: '₹45/kg', platform: '₹32/kg', saving: '29%' },
    { item: 'Aam (Mango)', mandi: '₹160/kg', platform: '₹120/kg', saving: '25%' },
    { item: 'Palak (Spinach)', mandi: '₹40/bundle', platform: '₹28/bundle', saving: '30%' },
    { item: 'Desi Ghee', mandi: '₹600/kg', platform: '₹480/kg', saving: '20%' },
  ];
  document.getElementById('priceReport').innerHTML = prices
    .map(
      (p) => `
    <div style="background:var(--mist);border-radius:10px;padding:12px 16px;display:flex;align-items:center;gap:14px;flex-wrap:wrap">
      <div style="flex:1;min-width:120px;font-weight:600;font-size:.88rem">${p.item}</div>
      <div style="font-size:.8rem;color:#999">Mandi: <strong style="color:var(--rust)">${p.mandi}</strong></div>
      <div style="font-size:.8rem;color:#999">KhetSe: <strong style="color:var(--leaf)">${p.platform}</strong></div>
      <div style="background:var(--sprout);color:white;padding:3px 9px;border-radius:50px;font-size:.72rem;font-weight:700;white-space:nowrap">Save ${p.saving}</div>
    </div>
  `
    )
    .join('');
}

// ===================== LOGIN SYSTEM =====================
let currentUser = null;
let selectedRole = 'consumer';
let passVisible = false;

function selectLoginRole(role) {
  document.querySelectorAll('.role-row').forEach((r) => r.classList.remove('selected'));
  const fields = document.getElementById('loginFields');
  const signupNote = document.getElementById('loginSignupNote');

  if (!role) {
    fields.style.display = 'none';
    if (signupNote) signupNote.style.display = '';
    return;
  }

  selectedRole = role;
  const idLabel = document.getElementById('idFieldLabel');
  const idInput = document.getElementById('lf-id');

  if (role === 'farmer') {
    idLabel.textContent = '🌾 Kisan ID / Aadhar No.';
    idInput.placeholder = 'Enter your Kisan ID / Aadhar no.';
  } else {
    idLabel.textContent = '🪪 Aadhar Number';
    idInput.placeholder = 'Enter your Aadhar Number';
  }
  const rowEl = document.getElementById('role-row-' + role);
  if (rowEl) rowEl.classList.add('selected');

  fields.style.display = 'block';
  if (signupNote) signupNote.style.display = 'none';

  const errEl = document.getElementById('loginError');
  if (errEl) errEl.style.display = 'none';
  const emailEl = document.getElementById('lf-email');
  const passEl = document.getElementById('lf-pass');
  if (emailEl) {
    emailEl.value = '';
    emailEl.focus();
  }
  if (passEl) passEl.value = '';

  const btnText = document.getElementById('loginBtnText');
  if (btnText) btnText.textContent = role === 'farmer' ? '🌾 Sign In as Farmer →' : '🛍️ Sign In as Consumer →';
}

function togglePassVis() {
  passVisible = !passVisible;
  const passEl = document.getElementById('lf-pass');
  const btn = document.getElementById('passToggleBtn');
  if (passEl) passEl.type = passVisible ? 'text' : 'password';
  if (btn) btn.textContent = passVisible ? '🙈' : '👁️';
}

function doLogin() {
  const email = (document.getElementById('lf-email').value || '').trim();
  const pass = (document.getElementById('lf-pass').value || '').trim();
  const errEl = document.getElementById('loginError');

  if (!email) {
    showLoginError('Please enter your email or mobile number.');
    document.getElementById('lf-email').focus();
    return;
  }
  if (!pass) {
    showLoginError('Please enter your password.');
    document.getElementById('lf-pass').focus();
    return;
  }
  if (pass.length < 4) {
    showLoginError('Password must be at least 4 characters.');
    document.getElementById('lf-pass').focus();
    return;
  }

  if (errEl) errEl.style.display = 'none';
  quickLogin(selectedRole, email);
}

function showLoginError(msg) {
  const errEl = document.getElementById('loginError');
  if (errEl) {
    errEl.textContent = '⚠️ ' + msg;
    errEl.style.display = 'block';
  }
}

function quickLogin(role, identifier) {
  selectedRole = role;
  currentUser = { name: identifier || role, role };
  const btn = document.getElementById('loginNavBtn');
  btn.innerHTML = '<span>' + (role === 'farmer' ? '🌾' : '👤') + '</span><span class="login-btn-text">' + (role === 'farmer' ? 'Farmer' : 'Me') + '</span>';
  btn.classList.add('logged-in');
  btn.onclick = handleLogout;
  showToast('✅ Welcome! Logged in as ' + (role === 'farmer' ? 'Farmer' : 'Consumer'));
  if (role === 'farmer') showPage('farmer');
  else showPage('home');
}

function selectRole(role) {
  selectLoginRole(role);
}

function handleLogin() {
  doLogin();
}

function handleLogout() {
  currentUser = null;
  const btn = document.getElementById('loginNavBtn');
  btn.innerHTML = '<span>👤</span><span class="login-btn-text">Login</span>';
  btn.classList.remove('logged-in');
  btn.onclick = showLoginPage;
  showToast('Logged out successfully');
  hideDeliveryTracker();
  showLoginPage();
}

function showLoginPage() {
  document.querySelectorAll('.page').forEach((p) => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach((t) => t.classList.remove('active'));
  document.getElementById('page-login').classList.add('active');
  selectLoginRole(null);
  document.querySelectorAll('.role-row').forEach((r) => r.classList.remove('selected'));
}

// ===================== UTILS =====================
function showPage(name) {
  document.querySelectorAll('.page').forEach((p) => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach((t) => t.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  const tabs = document.querySelectorAll('.nav-tab');
  const pages = ['home', 'farmer', 'orders', 'dashboard'];
  const idx = pages.indexOf(name);
  if (idx !== -1) tabs[idx].classList.add('active');
  if (name === 'orders') renderOrders();
  if (name === 'dashboard') updateDashboard();
  if (name === 'home') setTimeout(syncCartStateToCards, 0);
}

function showToast(msg) {
  const toastEl = document.getElementById('toast');
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  setTimeout(() => toastEl.classList.remove('show'), 2800);
}

// ===================== INIT =====================
async function syncLocalStateWithBackend() {
  try {
    const res = await fetch('http://localhost:5000/api/products');
    if (res.ok) {
      const data = await res.json();
      if (data && data.length > 0) {
        // Assume backend returns objects with name, price, etc.
        // We might need to map them to the frontend format if they differ.
        // For now, let's just append or replace. We'll replace if data looks valid.
        if (data[0].name && data[0].price) {
           products = data;
           renderProducts(products);
           updateCategoryCounts();
        }
      }
    }
  } catch (err) {
    console.error("Backend not reachable or mock mode", err);
  }
}

syncLocalStateWithBackend();
renderProducts(products);
renderMyListings();
renderOrders();
updateDashboard();
updateCategoryCounts();
showLoginPage();

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && document.getElementById('riderChatPanel') && document.getElementById('riderChatPanel').classList.contains('open')) {
    const input = document.getElementById('riderChatInput');
    if (document.activeElement === input) {
      e.preventDefault();
      sendRiderChatMessage();
    }
  }
});

// ===================== VOICE INPUT (WEB SPEECH API) =====================
let speechRecognitionObj = null;
let isListening = false;
let currentVoiceTargetId = null;

function initSpeechRecognition() {
  if (speechRecognitionObj !== null) return;
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    const vmsg = document.getElementById('voiceUnsupportedMsg');
    if (vmsg) {
      vmsg.hidden = false;
      vmsg.textContent = "Use Chrome or Edge for voice input";
    }
    return;
  }
  
  speechRecognitionObj = new SpeechRecognition();
  speechRecognitionObj.continuous = false;
  speechRecognitionObj.interimResults = true;
  
  speechRecognitionObj.onstart = function() {
    isListening = true;
    showToast('🎙️ Listening...');
    let btnId = 'voiceBtn';
    if (currentVoiceTargetId === 'f-name') btnId = 'voiceBtnFname';
    else if (currentVoiceTargetId === 'aiQuestion') btnId = 'voiceBtnAi';
    
    const btn = document.getElementById(btnId);
    if (btn) {
      btn.style.animation = 'pulse 1.5s infinite';
      btn.style.color = 'red';
    }
  };
  
  speechRecognitionObj.onresult = function(event) {
    let interimTranscript = '';
    let finalTranscript = '';
    
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        finalTranscript += event.results[i][0].transcript;
      } else {
        interimTranscript += event.results[i][0].transcript;
      }
    }
    
    const targetInput = document.getElementById(currentVoiceTargetId);
    if (targetInput) {
      targetInput.value = finalTranscript || interimTranscript;
      if (currentVoiceTargetId === 'searchInput') {
         filterSearch(targetInput.value);
      }
    }
  };
  
  speechRecognitionObj.onerror = function(event) {
    console.error('Speech recognition error:', event.error);
    stopListening();
    if (event.error === 'no-speech') {
      showToast('❌ Voice input: No speech detected.');
    } else {
      showToast('❌ Voice input error: ' + event.error);
    }
  };
  
  speechRecognitionObj.onend = function() {
    stopListening();
  };
}

function stopListening() {
  isListening = false;
  let btnId = 'voiceBtn';
  if (currentVoiceTargetId === 'f-name') btnId = 'voiceBtnFname';
  else if (currentVoiceTargetId === 'aiQuestion') btnId = 'voiceBtnAi';
  
  const btn = document.getElementById(btnId);
  if (btn) {
    btn.style.animation = '';
    btn.style.color = '';
  }
}

function toggleVoice(targetId = 'searchInput') {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    showToast("⚠️ Browser doesn't support voice input. Use Chrome or Edge.");
    return;
  }
  
  if (isListening && currentVoiceTargetId === targetId) {
    speechRecognitionObj.stop();
    return;
  } else if (isListening) {
    speechRecognitionObj.stop();
    // Wait briefly for previous recognition to end before starting new one
    setTimeout(() => {
      startRecognitionForTarget(targetId);
    }, 400);
    return;
  }
  
  startRecognitionForTarget(targetId);
}

function startRecognitionForTarget(targetId) {
  currentVoiceTargetId = targetId;
  initSpeechRecognition();
  
  // Auto-detect language
  const isHindi = currentLang === 'hi';
  speechRecognitionObj.lang = isHindi ? 'hi-IN' : 'en-IN';
  
  try {
    speechRecognitionObj.start();
  } catch (e) {
    console.error('Could not start recognition:', e);
  }
}
