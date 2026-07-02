/* ================================================
   i18n.js — Translations (EN / RU / KZ)
   ================================================ */

const TRANSLATIONS = {
  en: {
    nav_home:'Home', nav_about:'About', nav_services:'Services', nav_contact:'Contact',
    hero_tag:'IT Solutions & Process Automation',
    hero_title1:'We Build', hero_title2:'IT Systems', hero_title3:'That Work',
    hero_sub:'Streamlining business processes through smart technology, automation, and reliable IT infrastructure.',
    hero_cta1:'Our Services', hero_cta2:'Get in Touch',
    card1:'Process Automation', card2:'Cybersecurity', card3:'Data Analytics', card4:'Cloud Solutions',
    stat1:'Projects Delivered', stat2:'Years Experience', stat3:'Enterprise Clients', stat4:'Uptime SLA',
    about_eyebrow:'WHO WE ARE', about_title:'IT Processes & Functionalities',
    about_p1:'We are a full-service IT company specializing in the design, implementation, and management of business process automation systems, enterprise software, and digital infrastructure.',
    about_p2:'From small business digitization to large-scale enterprise transformation, we deliver robust, scalable solutions tailored to your operational needs.',
    feat1:'ISO-certified development processes', feat2:'Dedicated support teams 24/7', feat3:'Agile project delivery methodology',
    services_eyebrow:'WHAT WE DO', services_title:'Our Core Services',
    services_sub:'We cover the full spectrum of IT needs — from infrastructure to software, from security to support.',
    srv1_title:'Business Process Automation', srv1_desc:'We analyze your workflows and implement smart automation solutions using RPA, custom software, and API integrations to save time and reduce human error.',
    srv2_title:'IT Infrastructure Management', srv2_desc:'Design, deployment, and maintenance of reliable network, server, and cloud infrastructure with proactive monitoring and guaranteed uptime.',
    srv3_title:'Cybersecurity & Compliance', srv3_desc:'End-to-end security audits, penetration testing, incident response planning, and regulatory compliance consulting for your digital assets.',
    srv4_title:'Custom Software Development', srv4_desc:'Web applications, mobile apps, ERP and CRM systems built to your exact specifications using modern development practices and scalable architecture.',
    srv5_title:'Data Analytics & BI', srv5_desc:'Transform raw data into actionable business insights through dashboards, automated reports, and predictive analytics platforms.',
    srv6_title:'IT Support & Helpdesk', srv6_desc:'Tier-1 through Tier-3 IT support with fast response times, remote and on-site assistance, and comprehensive ticketing system management.',
    srv_link:'Learn more →',
    faq_eyebrow:'FAQ', faq_title:'Frequently Asked Questions',
    faq1_q:'How long does a typical IT project take?', faq1_a:'Project timelines vary based on scope. A simple automation solution takes 2–4 weeks; a full ERP implementation can take 3–6 months.',
    faq2_q:'Do you provide post-launch support?', faq2_a:'Yes. All our solutions come with a standard 3-month warranty period and optional long-term support contracts with guaranteed SLA response times.',
    faq3_q:'Can you work with our existing IT team?', faq3_a:'Absolutely. We regularly collaborate with in-house IT departments, acting as a technology partner for specific projects or providing overflow capacity during peak periods.',
    faq4_q:'Which industries do you serve?', faq4_a:'We serve clients across finance, healthcare, logistics, retail, manufacturing, and the public sector. Our solutions are adaptable to any industry vertical.',
    contact_eyebrow:'GET IN TOUCH', contact_title:"Let's Start Your Project",
    contact_sub:"Tell us about your challenge. We'll get back to you within one business day with a plan.",
    contact_address:'Astana, Kazakhstan, Mangilik El Ave 55/11',
    form_name:'Full Name', form_email:'Email Address', form_company:'Company',
    form_service:'Service of Interest', form_select:'— Select a service —',
    form_msg:'Message', form_submit:'Send Message',
    form_success:"✅ Thank you! We'll be in touch shortly.",
    form_error:'❌ Something went wrong. Please try again or email us directly.',
    footer_tagline:'Building the digital backbone of your business.',
    footer_company:'Company', footer_services:'Services', footer_rights:'All rights reserved.',
  },

  ru: {
    nav_home:'Главная', nav_about:'О нас', nav_services:'Услуги', nav_contact:'Контакты',
    hero_tag:'IT-решения и автоматизация процессов',
    hero_title1:'Мы создаём', hero_title2:'IT-системы', hero_title3:'которые работают',
    hero_sub:'Оптимизируем бизнес-процессы с помощью современных технологий, автоматизации и надёжной IT-инфраструктуры.',
    hero_cta1:'Наши услуги', hero_cta2:'Связаться',
    card1:'Автоматизация', card2:'Кибербезопасность', card3:'Аналитика данных', card4:'Облако',
    stat1:'Завершённых проектов', stat2:'Лет опыта', stat3:'Корпоративных клиентов', stat4:'Гарантия доступности',
    about_eyebrow:'КТО МЫ', about_title:'IT Процессы и Функции',
    about_p1:'Мы — компания полного цикла в сфере IT, специализирующаяся на проектировании, внедрении и управлении системами автоматизации бизнес-процессов, корпоративным ПО и цифровой инфраструктурой.',
    about_p2:'От цифровизации малого бизнеса до масштабной трансформации предприятий — мы предоставляем надёжные и масштабируемые решения.',
    feat1:'Сертифицированные процессы разработки ISO', feat2:'Выделенные команды поддержки 24/7', feat3:'Гибкая методология доставки проектов',
    services_eyebrow:'ЧТО МЫ ДЕЛАЕМ', services_title:'Наши основные услуги',
    services_sub:'Мы охватываем весь спектр IT-потребностей — от инфраструктуры до ПО, от безопасности до поддержки.',
    srv1_title:'Автоматизация бизнес-процессов', srv1_desc:'Анализируем рабочие процессы и внедряем умные решения автоматизации с использованием RPA, кастомного ПО и API-интеграций.',
    srv2_title:'Управление IT-инфраструктурой', srv2_desc:'Проектирование, развёртывание и обслуживание надёжной сетевой, серверной и облачной инфраструктуры с мониторингом.',
    srv3_title:'Кибербезопасность и соответствие', srv3_desc:'Полные аудиты безопасности, тестирование на проникновение, планирование реагирования на инциденты и консультации по соответствию.',
    srv4_title:'Разработка ПО на заказ', srv4_desc:'Веб-приложения, мобильные приложения, ERP и CRM-системы, разработанные по вашим спецификациям с использованием современных подходов.',
    srv5_title:'Аналитика данных и BI', srv5_desc:'Превращаем сырые данные в бизнес-инсайты с помощью дашбордов, автоматических отчётов и предиктивной аналитики.',
    srv6_title:'IT-поддержка и Helpdesk', srv6_desc:'Поддержка 1–3 уровней с быстрым временем отклика, удалённая и выездная помощь, управление тикетами.',
    srv_link:'Подробнее →',
    faq_eyebrow:'ВОПРОСЫ И ОТВЕТЫ', faq_title:'Часто задаваемые вопросы',
    faq1_q:'Сколько времени занимает типичный IT-проект?', faq1_a:'Сроки зависят от объёма. Простое решение автоматизации занимает 2–4 недели; полное внедрение ERP — 3–6 месяцев.',
    faq2_q:'Вы предоставляете поддержку после запуска?', faq2_a:'Да. Все наши решения поставляются со стандартным гарантийным периодом 3 месяца и опциональными долгосрочными контрактами поддержки с гарантированным SLA.',
    faq3_q:'Можете ли вы работать с нашей существующей командой?', faq3_a:'Конечно. Мы регулярно сотрудничаем с внутренними IT-отделами, выступая технологическим партнёром для конкретных проектов.',
    faq4_q:'Какие отрасли вы обслуживаете?', faq4_a:'Мы работаем с клиентами из финансов, здравоохранения, логистики, розничной торговли, производства и государственного сектора.',
    contact_eyebrow:'СВЯЖИТЕСЬ С НАМИ', contact_title:'Начнём ваш проект',
    contact_sub:'Расскажите нам о вашей задаче. Мы свяжемся с вами в течение одного рабочего дня.',
    contact_address:'Астана, Казахстан, пр. Мәңгілік Ел 55/11',
    form_name:'Полное имя', form_email:'Электронная почта', form_company:'Компания',
    form_service:'Интересующая услуга', form_select:'— Выберите услугу —',
    form_msg:'Сообщение', form_submit:'Отправить сообщение',
    form_success:'✅ Спасибо! Мы скоро свяжемся с вами.',
    form_error:'❌ Что-то пошло не так. Попробуйте ещё раз или напишите нам напрямую.',
    footer_tagline:'Создаём цифровой каркас вашего бизнеса.',
    footer_company:'Компания', footer_services:'Услуги', footer_rights:'Все права защищены.',
  },

  kz: {
    nav_home:'Басты бет', nav_about:'Біз туралы', nav_services:'Қызметтер', nav_contact:'Байланыс',
    hero_tag:'IT шешімдері және процестерді автоматтандыру',
    hero_title1:'Біз жасаймыз', hero_title2:'IT жүйелерін', hero_title3:'жұмыс істейтін',
    hero_sub:'Бизнес-процестерді заманауи технологиялар, автоматтандыру және сенімді IT инфрақұрылымы арқылы жетілдіреміз.',
    hero_cta1:'Қызметтеріміз', hero_cta2:'Байланысу',
    card1:'Автоматтандыру', card2:'Киберқауіпсіздік', card3:'Деректер аналитикасы', card4:'Бұлт',
    stat1:'Аяқталған жобалар', stat2:'Жыл тәжірибе', stat3:'Корпоративтік клиенттер', stat4:'Жұмыс кепілдігі',
    about_eyebrow:'БІЗ КІМБİЗ', about_title:'IT Процестері және Функционалдылық',
    about_p1:'Біз бизнес-процестерді автоматтандыру жүйелерін, корпоративтік бағдарламалық жасақтаманы және цифрлық инфрақұрылымды жобалау, енгізу және басқару бойынша толық цикл IT компаниясымыз.',
    about_p2:'Шағын бизнесті цифрландырудан бастап ірі масштабты кәсіпорын трансформациясына дейін — сіздің қажеттіліктеріңізге сай берік шешімдер ұсынамыз.',
    feat1:'ISO сертификатталған әзірлеу процестері', feat2:'Арнайы қолдау топтары 24/7', feat3:'Жоба жеткізудің Agile әдісі',
    services_eyebrow:'БІЗ НЕ ЖАСАЙМЫЗ', services_title:'Негізгі қызметтеріміз',
    services_sub:'Біз IT қажеттіліктерінің толық спектрін қамтамыз — инфрақұрылымнан бағдарламалық жасақтамаға дейін.',
    srv1_title:'Бизнес-процестерді автоматтандыру', srv1_desc:'Жұмыс процестерін талдап, RPA, бейімделген бағдарламалық жасақтама және API интеграциялары арқылы ақылды автоматтандыру шешімдерін енгіземіз.',
    srv2_title:'IT инфрақұрылымын басқару', srv2_desc:'Желілік, серверлік және бұлттық инфрақұрылымды жобалау, орналастыру және қолдау, мониторинг және жұмыс уақытының кепілдігімен.',
    srv3_title:'Киберқауіпсіздік және сәйкестік', srv3_desc:'Толыққанды қауіпсіздік аудиттері, ену тестілеуі, оқиғаларға ден қою жоспарлауы және нормативтік сәйкестік консультациясы.',
    srv4_title:'Бейімделген бағдарламалық жасақтама', srv4_desc:'Веб-қосымшалар, мобильді қосымшалар, ERP және CRM жүйелері сіздің талаптарыңызға сай заманауи тәжірибемен жасалады.',
    srv5_title:'Деректер аналитикасы және BI', srv5_desc:'Бейнелеу тақталары, автоматтандырылған есептер және болжамды аналитика арқылы деректерді бизнес-инсайттарға айналдырамыз.',
    srv6_title:'IT қолдауы және Helpdesk', srv6_desc:'1–3 деңгейлі IT қолдауы, жылдам жауап беру, қашықтан және жергілікті көмек, билеттер жүйесін басқару.',
    srv_link:'Толығырақ →',
    faq_eyebrow:'ЖҚС', faq_title:'Жиі қойылатын сұрақтар',
    faq1_q:'Типтік IT жобасы қанша уақытқа созылады?', faq1_a:'Жоба мерзімдері ауқымға байланысты. Қарапайым автоматтандыру шешімі 2–4 аптаны алады; толыққанды ERP енгізу 3–6 айды алуы мүмкін.',
    faq2_q:'Іске қосқаннан кейін қолдау көрсетесіз бе?', faq2_a:'Иә. Барлық шешімдер стандартты 3 айлық кепілдік мерзімімен және SLA кепілдіктері бар опциялық ұзақ мерзімді қолдау шарттарымен жеткізіледі.',
    faq3_q:'Бізді́ң қолданыстағы IT командамен жұмыс істей аласыз ба?', faq3_a:'Әрине. Біз ішкі IT бөлімдерімен үнемі ынтымақтасамыз, нақты жобалар үшін технологиялық серіктес ретінде жұмыс жасаймыз.',
    faq4_q:'Қандай салаларға қызмет көрсетесіз?', faq4_a:'Біз қаржы, денсаулық сақтау, логистика, бөлшек сауда, өндіріс және мемлекеттік сектор клиенттеріне қызмет көрсетеміз.',
    contact_eyebrow:'БАЙЛАНЫСУ', contact_title:'Жобаңызды бастайық',
    contact_sub:'Міндетіңіз туралы айтыңыз. Жоспармен бір жұмыс күні ішінде хабарласамыз.',
    contact_address:'Астана, Қазақстан, Мәңгілік Ел д. 55/11',
    form_name:'Толық аты-жөні', form_email:'Электрондық пошта', form_company:'Компания',
    form_service:'Қызығушылық білдірген қызмет', form_select:'— Қызметті таңдаңыз —',
    form_msg:'Хабарлама', form_submit:'Хабарлама жіберу',
    form_success:'✅ Рақмет! Жақын арада хабарласамыз.',
    form_error:'❌ Бірдеңе дұрыс болмады. Қайтадан көріңіз немесе тікелей жазыңыз.',
    footer_tagline:'Бизнесіңіздің цифрлық негізін қалыптастырамыз.',
    footer_company:'Компания', footer_services:'Қызметтер', footer_rights:'Барлық құқықтар қорғалған.',
  }
};

let currentLang = 'en';

function applyLanguage(lang) {
  currentLang = lang;
  const t = TRANSLATIONS[lang];
  if (!t) return;

  // Update text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Update placeholders
  const ph = {
    fname:    { en:'John Smith',       ru:'Иван Иванов',    kz:'Иван Иванов'     },
    femail:   { en:'john@company.com', ru:'ivan@company.kz',kz:'ivan@company.kz' },
    fcompany: { en:'Your Company Ltd.',ru:'Ваша Компания',  kz:'Сіздің Компанияңыз' },
    fmessage: { en:'Describe your project or question...', ru:'Опишите ваш проект...', kz:'Жобаңызды сипаттаңыз...' }
  };
  Object.entries(ph).forEach(([id, vals]) => {
    const el = document.getElementById(id);
    if (el && vals[lang]) el.placeholder = vals[lang];
  });

  document.documentElement.lang = lang;

  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}