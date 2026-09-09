import {
  TrustCard,
  ServiceCard,
  MissionCard,
  WhyChooseCard,
  ExperienceHighlight,
  NavItem,
} from '../types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', labelNe: 'गृहपृष्ठ', href: '#home' },
  { id: 'about', label: 'About Us', labelNe: 'हाम्रो बारेमा', href: '#about' },
  { id: 'services', label: 'Our Services', labelNe: 'हाम्रा सेवाहरू', href: '#services' },
  { id: 'why-us', label: 'Why Choose Us', labelNe: 'हामीलाई किन रोज्ने?', href: '#why-us' },
  { id: 'community', label: 'Community Commitment', labelNe: 'सामुदायिक प्रतिबद्धता', href: '#community' },
  { id: 'experience', label: 'Experience', labelNe: 'अनुभव', href: '#experience' },
  { id: 'contact', label: 'Contact', labelNe: 'सम्पर्क', href: '#contact' },
];

export const TRUST_CARDS: TrustCard[] = [
  {
    id: 'quality-medicines',
    iconName: 'ShieldCheck',
    titleEn: 'Quality Medicines',
    titleNe: 'गुणस्तरीय औषधि',
    descriptionEn: 'Genuine and quality medicines for your healthcare needs.',
    descriptionNe: 'तपाईंको स्वास्थ्य आवश्यकताका लागि आधिकारिक तथा गुणस्तरीय औषधिहरू।',
  },
  {
    id: 'professional-care',
    iconName: 'Stethoscope',
    titleEn: 'Professional Care',
    titleNe: 'व्यावसायिक हेरचाह',
    descriptionEn: 'Patient-centered pharmacy services and medication guidance.',
    descriptionNe: 'बिरामी–केन्द्रित फार्मेसी सेवा तथा औषधिसम्बन्धी उचित परामर्श।',
  },
  {
    id: 'community-focused',
    iconName: 'HeartHandshake',
    titleEn: 'Community Focused',
    titleNe: 'समुदाय–केन्द्रित',
    descriptionEn: 'Dedicated to serving Amahi Belha and surrounding communities.',
    descriptionNe: 'अमही बेल्हा तथा वरपरका सम्पूर्ण समुदायको सेवामा पूर्ण समर्पित।',
  },
  {
    id: 'rational-use',
    iconName: 'Pill',
    titleEn: 'Rational Medicine Use',
    titleNe: 'औषधिको उचित प्रयोग',
    descriptionEn: 'Promoting safe, effective and responsible use of medicines.',
    descriptionNe: 'औषधिहरूको सुरक्षित, प्रभावकारी र जिम्मेवार प्रयोगको प्रवर्द्धन।',
  },
];

export const SERVICES: ServiceCard[] = [
  {
    id: 'prescription-dispensing',
    iconName: 'FileText',
    titleEn: 'Prescription Medicine Dispensing',
    titleNe: 'प्रेस्क्रिप्सन औषधि वितरण',
    descriptionEn:
      'Safe and responsible dispensing of prescription and OPD medicines according to valid prescriptions and applicable requirements.',
    descriptionNe:
      'मान्य प्रेस्क्रिप्सन र कानुनी मापदण्ड अनुसार प्रेस्क्रिप्सन तथा ओपीडी औषधिहरूको सुरक्षित र जिम्मेवार वितरण।',
    badgeEn: 'Safe & Verified',
    badgeNe: 'सुरक्षित र प्रमाणित',
  },
  {
    id: 'otc-medicines',
    iconName: 'PackageCheck',
    titleEn: 'Over-the-Counter Medicines',
    titleNe: 'ओभर–द–काउन्टर (OTC) औषधि',
    descriptionEn:
      'Access to commonly used OTC medicines and healthcare products.',
    descriptionNe:
      'दैनिक जीवनमा आवश्यक पर्ने सामान्य ओटीसी औषधिहरू तथा प्राथमिक स्वास्थ्य सामग्रीहरूको सहज उपलब्धता।',
    badgeEn: 'Essential Care',
    badgeNe: 'दैनिक स्वास्थ्य',
  },
  {
    id: 'patient-counseling',
    iconName: 'MessageSquareHeart',
    titleEn: 'Patient Counseling',
    titleNe: 'बिरामी परामर्श सेवा',
    descriptionEn:
      'Clear guidance on medicine use, dosage, timing, precautions and safe medication practices.',
    descriptionNe:
      'औषधि सेवनको तरिका, मात्रा (डोज), समय, सावधानी र सुरक्षित प्रयोगबारे सरल र स्पष्ट सल्लाह।',
    badgeEn: 'Personalized',
    badgeNe: 'व्यक्तिगत मार्गदर्शन',
  },
  {
    id: 'medication-guidance',
    iconName: 'BookOpenCheck',
    titleEn: 'Medication Guidance',
    titleNe: 'औषधि मार्गदर्शन',
    descriptionEn:
      'Helping patients understand their medicines and supporting responsible medicine use.',
    descriptionNe:
      'बिरामीलाई आफ्नो औषधिको महत्व बुझाउन मद्दत गर्दै जिम्मेवार औषधि प्रयोगमा निरन्तर सहयोग।',
    badgeEn: 'Educational',
    badgeNe: 'जानकारीमूलक',
  },
  {
    id: 'health-awareness',
    iconName: 'Activity',
    titleEn: 'Health Awareness',
    titleNe: 'स्वास्थ्य सचेतना',
    descriptionEn:
      'Basic health education and awareness to encourage healthier communities.',
    descriptionNe:
      'निरोगी समुदाय निर्माणका लागि आधारभूत स्वास्थ्य सचेतना, सरसफाइ र स्वास्थ्य शिक्षाको प्रवर्द्धन।',
    badgeEn: 'Community Health',
    badgeNe: 'सामुदायिक स्वास्थ्य',
  },
  {
    id: 'genuine-medicines',
    iconName: 'BadgeCheck',
    titleEn: 'Quality & Genuine Medicines',
    titleNe: 'गुणस्तरीय तथा आधिकारिक औषधि',
    descriptionEn:
      'Commitment to providing quality and genuine medicines from reliable sources.',
    descriptionNe:
      'विश्वसनीय र आधिकारिक स्रोतहरूबाट मात्र गुणस्तरीय, सुरक्षित र प्रमाणित औषधिहरू उपलब्ध गराउने प्रतिबद्धता।',
    badgeEn: '100% Authentic',
    badgeNe: '१००% आधिकारिक',
  },
];

export const MISSION_CARDS: MissionCard[] = [
  {
    id: 'support-needy',
    iconName: 'HeartHandshake',
    titleEn: 'Supporting Those in Need',
    titleNe: 'विपन्न तथा असहायलाई सहयोग',
    descriptionEn:
      'We are committed to supporting poor and needy patients whenever possible.',
    descriptionNe:
      'हामी गरिब, असहाय र विपन्न बिरामीहरूलाई सक्दो सहयोग पुर्याउन सधैं तत्पर र प्रतिबद्ध छौं।',
  },
  {
    id: 'rational-medicine',
    iconName: 'Sparkles',
    titleEn: 'Promoting Rational Medicine Use',
    titleNe: 'औषधिको उचित र सन्तुलित प्रयोग',
    descriptionEn:
      'We encourage safe, effective and responsible use of medicines.',
    descriptionNe:
      'औषधिहरूको अत्यधिक वा अनावश्यक प्रयोग रोकी सुरक्षित, प्रभावकारी र जिम्मेवार उपयोगलाई बढावा दिन्छौं।',
  },
  {
    id: 'serving-hometown',
    iconName: 'Home',
    titleEn: 'Serving Our Hometown',
    titleNe: 'आफ्नो गाउँ–ठाउँको सेवा',
    descriptionEn:
      'We are dedicated to serving Amahi Belha and surrounding communities with care and responsibility.',
    descriptionNe:
      'हामी अमही बेल्हा, बर्जु र वरपरका ग्रामीण बस्तीहरूको स्वास्थ्य सेवामा माया र जिम्मेवारीका साथ समर्पित छौं।',
  },
];

export const WHY_CHOOSE_CARDS: WhyChooseCard[] = [
  {
    id: 'qualified-pharmacist',
    iconName: 'GraduationCap',
    titleEn: 'Qualified & Experienced Pharmacist',
    titleNe: 'योग्य तथा अनुभवी फार्मासिस्ट',
    descriptionEn:
      'Professional pharmacy knowledge with hands-on experience in hospital and community pharmacy services.',
    descriptionNe:
      'अस्पताल तथा सामुदायिक फार्मेसी सेवाको प्रत्यक्ष कार्य–अनुभवसहितको व्यावसायिक ज्ञान।',
  },
  {
    id: 'patient-centered',
    iconName: 'UsersRound',
    titleEn: 'Patient-Centered Approach',
    titleNe: 'बिरामी–केन्द्रित दृष्टिकोण',
    descriptionEn:
      'We listen to patients and provide clear, respectful and understandable medication guidance.',
    descriptionNe:
      'हामी बिरामीका कुरा ध्यानपूर्वक सुन्छौं र आदरका साथ बुझिने भाषामा औषधि परामर्श प्रदान गर्दछौं।',
  },
  {
    id: 'trusted-medicines',
    iconName: 'ShieldAlert',
    titleEn: 'Trusted & Genuine Medicines',
    titleNe: 'विश्वसनीय तथा आधिकारिक औषधि',
    descriptionEn:
      'We are committed to providing quality and genuine medicines.',
    descriptionNe:
      'हामी उच्च गुणस्तरका र आधिकारिक औषधिहरू मात्र उपलब्ध गराउन पूर्ण रूपमा प्रतिबद्ध छौं।',
  },
  {
    id: 'community-healthcare',
    iconName: 'Trees',
    titleEn: 'Community-Focused Healthcare',
    titleNe: 'समुदाय–केन्द्रित स्वास्थ्य सेवा',
    descriptionEn:
      'Our pharmacy is dedicated to improving healthcare access and awareness in the local community.',
    descriptionNe:
      'हाम्रो फार्मेसी स्थानीय स्तरमा स्वास्थ्य पहुँच र सचेतना अभिवृद्धि गर्न समर्पित छ।',
  },
];

export const EXPERIENCE_HIGHLIGHTS: ExperienceHighlight[] = [
  {
    id: 'exp-hospital',
    iconName: 'Building2',
    titleEn: 'Hospital Pharmacy Experience',
    titleNe: 'अस्पताल फार्मेसी अनुभव',
    descriptionEn:
      'Practical clinical understanding of inpatient, outpatient, and specialized medication protocols.',
    descriptionNe:
      'अस्पतालका बिरामी तथा ओपीडी औषधि वितरण र क्लिनिकल मापदण्डको व्यवहारिक अनुभव।',
  },
  {
    id: 'exp-community',
    iconName: 'Store',
    titleEn: 'Community Pharmacy Experience',
    titleNe: 'सामुदायिक फार्मेसी अनुभव',
    descriptionEn:
      'Deep familiarity with grassroots community healthcare needs, communication, and accessibility.',
    descriptionNe:
      'स्थानीय समुदायको स्वास्थ्य आवश्यकता, सहज संवाद र निरन्तर सेवाको गहिरो अनुभव।',
  },
  {
    id: 'exp-dispensing',
    iconName: 'ClipboardCheck',
    titleEn: 'Prescription Dispensing',
    titleNe: 'सटीक प्रेस्क्रिप्सन वितरण',
    descriptionEn:
      'Thorough prescription verification, dosage accuracy check, and potential drug interaction review.',
    descriptionNe:
      'प्रेस्क्रिप्सनको गहन जाँच, सही मात्रा र औषधिहरू बीचको अन्तरक्रियाको सतर्कतापूर्वक मूल्यांकन।',
  },
  {
    id: 'exp-counseling',
    iconName: 'MessageCircleQuestion',
    titleEn: 'Patient Counseling',
    titleNe: 'बिरामी परामर्श तथा संवाद',
    descriptionEn:
      'Empathic communication helping patients and families understand proper medication routines.',
    descriptionNe:
      'बिरामी र परिवारलाई औषधिको नियमितता र सही सेवन विधि बुझाउन सरल तथा आत्मीय परामर्श।',
  },
  {
    id: 'exp-guidance',
    iconName: 'Compass',
    titleEn: 'Medication Guidance',
    titleNe: 'औषधि व्यवस्थापन मार्गदर्शन',
    descriptionEn:
      'Guiding on proper storage, expiration checks, adverse effect awareness, and safety precautions.',
    descriptionNe:
      'औषधिको उचित भण्डारण, म्याद (Expiry) जाँच, साइड इफेक्ट्स सम्बन्धी जानकारी र सुरक्षा सावधानी।',
  },
  {
    id: 'exp-rational',
    iconName: 'Sparkle',
    titleEn: 'Rational Medicine Use',
    titleNe: 'औषधिको उचित र विवेकपूर्ण प्रयोग',
    descriptionEn:
      'Advocating evidence-based, rational use to prevent unnecessary polypharmacy and antibiotic resistance.',
    descriptionNe:
      'अनावश्यक एन्टिबायोटिक र औषधिको अत्यधिक प्रयोग रोक्न प्रमाण–आधारित विवेकपूर्ण प्रयोगको वकालत।',
  },
];

export const SITE_INFO = {
  nameEn: 'Optima Healthcare Pharmacy',
  nameNe: 'अप्टिमा हेल्थकेयर फार्मेसी',
  taglineEn: 'Committed to Care, Compassion & Community',
  taglineNe: 'हेरचाह, करुणा र समुदायप्रति समर्पित',
  ddaNumber: '3830130135608',
  panNumber: '153943645',
  addressEn: 'Barju–05, Milan Chowk, Amahi Belha, Sunsari, Nepal',
  addressNe: 'बर्जु–०५, मिलन चोक, अमही बेल्हा, सुनसरी, नेपाल',
  phone1: '+977-9705146500',
  phone1Raw: '+9779705146500',
  phone2: '+977-9807018731',
  phone2Raw: '+9779807018731',
  phone: '+977-9705146500 / 9807018731',
  phoneRaw: '+9779705146500',
  whatsappRaw: '9779705146500',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Milan+Chowk,+Amahi+Belha,+Barju-05,+Sunsari,+Nepal',
  openingHoursEn: 'Sunday – Saturday: 7:00 AM – 8:30 PM (Open 7 Days)',
  openingHoursNe: 'आइतबार – शनिबार: बिहान ७:०० – बेलुका ८:३० (हप्ताको ७ दिन खुला)',
  disclaimerEn:
    'Information provided on this website is for general health and pharmacy service information. It does not replace consultation with a qualified healthcare professional. Prescription medicines are dispensed according to applicable laws and valid prescriptions where required.',
  disclaimerNe:
    'यस वेबसाइटमा उपलब्ध गराइएको जानकारी सामान्य स्वास्थ्य तथा फार्मेसी सेवासम्बन्धी जानकारीका लागि मात्र हो। यसले योग्य स्वास्थ्यकर्मी वा चिकित्सकको परामर्शलाई प्रतिस्थापन गर्दैन। प्रेस्क्रिप्सन औषधिहरू विद्यमान कानुन र मान्य प्रेस्क्रिप्सनका आधारमा मात्र वितरण गरिन्छ।',
  copyright: '© 2026 Optima Healthcare Pharmacy. All Rights Reserved.',
};
