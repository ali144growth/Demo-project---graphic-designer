export type Locale = 'en' | 'ar';

export interface Project {
  id: string;
  categoryEn: string;
  categoryAr: string;
  titleEn: string;
  titleAr: string;
  subtitleEn: string;
  subtitleAr: string;
  academicEn: string;
  academicAr: string;
  image: string;
  aspect: string; // e.g. 'aspect-[4/5]' or 'aspect-[16/10]'
  rotationClass: string; // slight rotation for masonry spread
  offsetClass: string;
  accentColor: string;
  palette: string[];
}

export const PORTFOLIO_DATA = {
  designer: {
    nameEn: 'Fajer Al-Ghanim',
    nameAr: 'فجر الغانم',
    statusEn: '3rd Year Graphic Design Student, American University of Kuwait',
    statusAr: 'طالبة تصميم جرافيك (السنة الثالثة)، الجامعة الأمريكية بالكويت',
    oneLinerEn: 'Passionate about visual identity and editorial design',
    oneLinerAr: 'شغوفة بالهوية البصرية والتصميم التحريري',
    universityEn: 'American University of Kuwait',
    universityAr: 'الجامعة الأمريكية بالكويت',
    academicYearEn: 'Academic Portfolio 2025–2026',
    academicYearAr: 'الملف الأكاديمي ٢٠٢٥–٢٠٢٦',
  },
  contact: {
    phone: '+965 5500 7788',
    phoneRaw: '+96555007788',
    whatsapp: '+965 5500 7788',
    whatsappUrl: 'https://wa.me/96555007788',
    email: 'fajer.alghanim@example.com',
    locationEn: 'Kuwait City, Kuwait',
    locationAr: 'مدينة الكويت، الكويت',
    instagramUrl: 'https://instagram.com/fajer.design',
    instagramHandle: '@fajer.design',
    behanceUrl: 'https://behance.net/fajeralghanim',
    behanceHandle: 'behance.net/fajeralghanim',
  },
  projects: [
    {
      id: 'qaf-coffee',
      categoryEn: 'Branding & Packaging',
      categoryAr: 'الهوية البصرية والتغليف',
      titleEn: 'Qaf Specialty Coffee',
      titleAr: 'قـاف للقهوة المختصة',
      subtitleEn: 'Visual identity and bilingual packaging system for a local roastery',
      subtitleAr: 'هوية بصرية ونظام تغليف ثنائي اللغة لمحمصة قهوة كويتية',
      academicEn: 'Typography Studio II Coursework',
      academicAr: 'مشروع فصلي — استوديو التيبوغرافيا ٢',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop',
      aspect: 'aspect-[4/3] md:aspect-[16/11]',
      rotationClass: 'hover:-rotate-0 md:-rotate-1',
      offsetClass: 'md:col-span-7',
      accentColor: '#FF4B2B',
      palette: ['#141414', '#FF4B2B', '#E5DFC5', '#F4F1EA'],
    },
    {
      id: 'sawt-quarterly',
      categoryEn: 'Editorial Design',
      categoryAr: 'التصميم التحريري',
      titleEn: 'Sawt: Gulf Architecture Quarterly',
      titleAr: 'مجلة صوت: فصليات العمارة',
      subtitleEn: 'Experimental 48-page editorial layout exploring vernacular modernist facades',
      subtitleAr: 'تصميم تحريري تجريبي في ٤٨ صفحة يستكشف واجهات العمارة الحداثية في الخليج',
      academicEn: 'Publication Design Studio',
      academicAr: 'استوديو تصميم المطبوعات والنشر',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop',
      aspect: 'aspect-[3/4] md:aspect-[4/5]',
      rotationClass: 'hover:rotate-0 md:rotate-2',
      offsetClass: 'md:col-span-5 md:translate-y-8',
      accentColor: '#141414',
      palette: ['#141414', '#575752', '#F4F1EA', '#FF4B2B'],
    },
    {
      id: 'mawsem-botanicals',
      categoryEn: 'Packaging Design',
      categoryAr: 'تصميم العبوات',
      titleEn: 'Mawsem Botanical Infusions',
      titleAr: 'مَوسِم — مستخلصات وزيوت عطرية',
      subtitleEn: 'Minimalist amber glass series and embossed bilingual labeling',
      subtitleAr: 'سلسلة عبوات زجاجية مع ملصقات بارزة ثنائية اللغة ومواد مستدامة',
      academicEn: 'Sustainable Packaging Lab',
      academicAr: 'مختبر تصميم التغليف المستدام',
      image: 'https://images.unsplash.com/photo-1608248597359-0a69623e6188?q=80&w=1200&auto=format&fit=crop',
      aspect: 'aspect-[4/3]',
      rotationClass: 'hover:rotate-0 md:rotate-0',
      offsetClass: 'md:col-span-6',
      accentColor: '#E05A3E',
      palette: ['#2F3627', '#E05A3E', '#F4F1EA', '#D4CEBC'],
    },
    {
      id: 'echoes-posters',
      categoryEn: 'Poster & Experimental',
      categoryAr: 'الملصقات والتجريب',
      titleEn: 'Echoes of Modernism',
      titleAr: 'أصداء الحداثة — ملصقات معاصرة',
      subtitleEn: 'Screen-printed typographic posters bridging Arabic Kufic and Swiss grids',
      subtitleAr: 'سلسلة ملصقات حريرية تدمج الخط الكوفي الهندسي بالشبكة السويسرية',
      academicEn: 'Advanced Printmaking Lab',
      academicAr: 'مختبر الطباعة التجريبية المتقدم',
      image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
      aspect: 'aspect-[3/4] md:aspect-[1/1]',
      rotationClass: 'hover:rotate-0 md:-rotate-1.5',
      offsetClass: 'md:col-span-6 md:-translate-y-4',
      accentColor: '#FF4B2B',
      palette: ['#141414', '#FF4B2B', '#FFFFFF', '#ECE8DE'],
    },
    {
      id: 'rawabet-catalog',
      categoryEn: 'Exhibition & Spatial',
      categoryAr: 'معارض وهوية مكانية',
      titleEn: 'Rawabet: Contemporary Print Catalog',
      titleAr: 'روابط — كتالوج معرض الطباعة',
      subtitleEn: 'Bilingual catalog and spatial signage for student printmaking showcase',
      subtitleAr: 'كتالوج ثنائي اللغة ولافتات إرشادية لمعرض سنوي للطلبة',
      academicEn: 'Visual Arts Gallery Internship',
      academicAr: 'تدريب عملي في جاليري الفنون البصرية',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop',
      aspect: 'aspect-[16/9] md:aspect-[16/8]',
      rotationClass: 'hover:rotate-0 md:rotate-0.5',
      offsetClass: 'md:col-span-12',
      accentColor: '#141414',
      palette: ['#141414', '#ECE8DE', '#FF4B2B', '#7A7971'],
    },
  ] as Project[],
};
