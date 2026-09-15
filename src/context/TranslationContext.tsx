"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export type LocaleCode = "com" | "en" | "us" | "uk" | "in" | "de" | "fr" | "es" | "ca" | "eu";

interface TranslationDictionary {
  nav: {
    home: string;
    company: string;
    service: string;
    product: string;
    industry: string;
    buildTeam: string;
    insights: string;
    contact: string;
    bookCall: string;
    searchPlaceholder: string;
  };
  hero: {
    taglinePrefix: string;
    taglineAccent: string;
    subheading: string;
    bookCallBtn: string;
    exploreWorkBtn: string;
    responseTime: string;
    engineeringTeam: string;
    productsShipped: string;
    globalPresence: string;
    badgeText: string;
  };
  about: {
    tag: string;
    headline: string;
    quote: string;
    p1Title: string;
    p1Desc: string;
    p2Title: string;
    p2Desc: string;
    p3Title: string;
    p3Desc: string;
    p4Title: string;
    p4Desc: string;
    satisfaction: string;
    shipped: string;
  };
  services: {
    tag: string;
    headline: string;
    subheading: string;
  };
  techStack: {
    tag: string;
    headline: string;
    subheading: string;
  };
  methodology: {
    tag: string;
    headline: string;
    subheading: string;
  };
  reviews: {
    tag: string;
    headline: string;
    subheading: string;
  };
  footer: {
    overview: string;
    solutions: string;
    legal: string;
    rights: string;
  };
}

const translations: Record<LocaleCode, TranslationDictionary> = {
  com: {
    nav: {
      home: "HOME",
      company: "COMPANY",
      service: "SERVICE",
      product: "PRODUCT",
      industry: "INDUSTRY",
      buildTeam: "BUILD YOUR TEAM",
      insights: "INSIGHTS",
      contact: "CONTACT",
      bookCall: "BOOK A STRATEGY CALL",
      searchPlaceholder: "Search services...",
    },
    hero: {
      taglinePrefix: "Think Digital",
      taglineAccent: "Think BrosDev Solutions",
      subheading:
        "From web applications to AI-powered platforms, BrosDev Solutions transforms ideas into reliable, scalable software.",
      bookCallBtn: "BOOK A STRATEGY CALL",
      exploreWorkBtn: "EXPLORE OUR WORK",
      responseTime: "RESPONSE TIME",
      engineeringTeam: "ENGINEERING TEAM",
      productsShipped: "PRODUCTS SHIPPED",
      globalPresence: "GLOBAL PRESENCE",
      badgeText: "★ BROSDEV SOLUTIONS IT ★ DESIGN & AI LABS",
    },
    about: {
      tag: "// ABOUT BROSDEV SOLUTIONS IT",
      headline: "Engineered for Speed, Built for Scale, Designed to Impress.",
      quote:
        '"Founded by engineers for ambitious founders and global enterprises. BrosDev Solutions combines bold aesthetic design with robust software craftsmanship."',
      p1Title: "PRECISION ARCHITECTURE",
      p1Desc: "Clean modular code built on Next.js 16, microservices, and battle-tested cloud architecture.",
      p2Title: "RAPID SPRINT EXECUTION",
      p2Desc: "Agile 2-week sprint cycles designed to launch MVPs and full enterprise apps faster with zero technical debt.",
      p3Title: "ENTERPRISE AI NATIVE",
      p3Desc: "Deep integration of LLMs, predictive workflows, vector databases, and automated intelligence.",
      p4Title: "ENTERPRISE-GRADE SECURITY",
      p4Desc: "ISO compliant practices, data encryption at rest & transit, and zero-trust security foundations.",
      satisfaction: "CLIENT SATISFACTION",
      shipped: "PLATFORMS SHIPPED",
    },
    services: {
      tag: "// OUR SERVICES",
      headline: "End-to-End Software & AI Solutions",
      subheading: "High-performance software engineering tailored for modern tech leaders.",
    },
    techStack: {
      tag: "// TECH STACK MASTERY",
      headline: "Modern Developer Ecosystem",
      subheading: "We stay at the bleeding edge of software engineering to deliver resilient, scalable, and future-proof applications.",
    },
    methodology: {
      tag: "// OUR METHODOLOGY",
      headline: "Transparent Engineering Pipeline",
      subheading: "An agile software development workflow optimized for rapid speed, enterprise-grade code quality, and measurable business growth.",
    },
    reviews: {
      tag: "// CLIENT REVIEWS",
      headline: "Trusted by Ambitious Founders & CTOs",
      subheading: "Here is what engineering leaders and product executives say about partnering with BrosDev Solutions.",
    },
    footer: {
      overview: "OVERVIEW",
      solutions: "SOLUTIONS",
      legal: "LEGAL & PRIVACY",
      rights: "All rights reserved. EST. 2024 ©",
    },
  },
  en: {
    nav: {
      home: "HOME",
      company: "COMPANY",
      service: "SERVICE",
      product: "PRODUCT",
      industry: "INDUSTRY",
      buildTeam: "BUILD YOUR TEAM",
      insights: "INSIGHTS",
      contact: "CONTACT",
      bookCall: "BOOK A STRATEGY CALL",
      searchPlaceholder: "Search services...",
    },
    hero: {
      taglinePrefix: "Think Digital",
      taglineAccent: "Think BrosDev Solutions",
      subheading:
        "From web applications to AI-powered platforms, BrosDev Solutions transforms ideas into reliable, scalable software.",
      bookCallBtn: "BOOK A STRATEGY CALL",
      exploreWorkBtn: "EXPLORE OUR WORK",
      responseTime: "RESPONSE TIME",
      engineeringTeam: "ENGINEERING TEAM",
      productsShipped: "PRODUCTS SHIPPED",
      globalPresence: "GLOBAL PRESENCE",
      badgeText: "★ BROSDEV SOLUTIONS IT ★ DESIGN & AI LABS",
    },
    about: {
      tag: "// ABOUT BROSDEV SOLUTIONS IT",
      headline: "Engineered for Speed, Built for Scale, Designed to Impress.",
      quote:
        '"Founded by engineers for ambitious founders and global enterprises. BrosDev Solutions combines bold aesthetic design with robust software craftsmanship."',
      p1Title: "PRECISION ARCHITECTURE",
      p1Desc: "Clean modular code built on Next.js 16, microservices, and battle-tested cloud architecture.",
      p2Title: "RAPID SPRINT EXECUTION",
      p2Desc: "Agile 2-week sprint cycles designed to launch MVPs and full enterprise apps faster with zero technical debt.",
      p3Title: "ENTERPRISE AI NATIVE",
      p3Desc: "Deep integration of LLMs, predictive workflows, vector databases, and automated intelligence.",
      p4Title: "ENTERPRISE-GRADE SECURITY",
      p4Desc: "ISO compliant practices, data encryption at rest & transit, and zero-trust security foundations.",
      satisfaction: "CLIENT SATISFACTION",
      shipped: "PLATFORMS SHIPPED",
    },
    services: {
      tag: "// OUR SERVICES",
      headline: "End-to-End Software & AI Solutions",
      subheading: "High-performance software engineering tailored for modern tech leaders.",
    },
    techStack: {
      tag: "// TECH STACK MASTERY",
      headline: "Modern Developer Ecosystem",
      subheading: "We stay at the bleeding edge of software engineering to deliver resilient, scalable, and future-proof applications.",
    },
    methodology: {
      tag: "// OUR METHODOLOGY",
      headline: "Transparent Engineering Pipeline",
      subheading: "An agile software development workflow optimized for rapid speed, enterprise-grade code quality, and measurable business growth.",
    },
    reviews: {
      tag: "// CLIENT REVIEWS",
      headline: "Trusted by Ambitious Founders & CTOs",
      subheading: "Here is what engineering leaders and product executives say about partnering with BrosDev Solutions.",
    },
    footer: {
      overview: "OVERVIEW",
      solutions: "SOLUTIONS",
      legal: "LEGAL & PRIVACY",
      rights: "All rights reserved. EST. 2024 ©",
    },
  },

  us: {
    nav: {
      home: "HOME",
      company: "COMPANY",
      service: "SERVICES",
      product: "PRODUCTS",
      industry: "INDUSTRIES",
      buildTeam: "BUILD YOUR TEAM",
      insights: "INSIGHTS",
      contact: "CONTACT US",
      bookCall: "BOOK A STRATEGY CALL",
      searchPlaceholder: "Search tech solutions...",
    },
    hero: {
      taglinePrefix: "Think Digital",
      taglineAccent: "Think BrosDev Solutions",
      subheading:
        "From web applications to AI-powered platforms, BrosDev Solutions transforms ideas into reliable, scalable software.",
      bookCallBtn: "BOOK A STRATEGY CALL",
      exploreWorkBtn: "EXPLORE OUR WORK",
      responseTime: "RESPONSE TIME",
      engineeringTeam: "ENGINEERING TEAM",
      productsShipped: "PRODUCTS SHIPPED",
      globalPresence: "USA & GLOBAL PRESENCE",
      badgeText: "★ BROSDEV SOLUTIONS US ★ DESIGN & AI LABS",
    },
    about: {
      tag: "// ABOUT BROSDEV SOLUTIONS US",
      headline: "Engineered for Speed, Built for Scale, Designed to Impress.",
      quote:
        '"Founded by engineers for ambitious founders and global enterprises. BrosDev Solutions combines bold aesthetic design with robust software craftsmanship."',
      p1Title: "PRECISION ARCHITECTURE",
      p1Desc: "Clean modular code built on Next.js 16, microservices, and battle-tested cloud architecture.",
      p2Title: "RAPID SPRINT EXECUTION",
      p2Desc: "Agile 2-week sprint cycles designed to launch MVPs and full enterprise apps faster with zero technical debt.",
      p3Title: "ENTERPRISE AI NATIVE",
      p3Desc: "Deep integration of LLMs, predictive workflows, vector databases, and automated intelligence.",
      p4Title: "ENTERPRISE-GRADE SECURITY",
      p4Desc: "ISO compliant practices, data encryption at rest & transit, and zero-trust security foundations.",
      satisfaction: "CLIENT SATISFACTION",
      shipped: "PLATFORMS SHIPPED",
    },
    services: {
      tag: "// OUR SERVICES",
      headline: "End-to-End Software & AI Solutions",
      subheading: "High-performance software engineering tailored for US & international enterprise tech leaders.",
    },
    techStack: {
      tag: "// TECH STACK MASTERY",
      headline: "Modern Developer Ecosystem",
      subheading: "We stay at the bleeding edge of software engineering to deliver resilient, scalable applications.",
    },
    methodology: {
      tag: "// OUR METHODOLOGY",
      headline: "Transparent Engineering Pipeline",
      subheading: "An agile software development workflow optimized for rapid speed and enterprise-grade code quality.",
    },
    reviews: {
      tag: "// CLIENT REVIEWS",
      headline: "Trusted by US Founders & CTOs",
      subheading: "Here is what engineering leaders and product executives say about partnering with BrosDev Solutions.",
    },
    footer: {
      overview: "OVERVIEW",
      solutions: "SOLUTIONS",
      legal: "LEGAL & PRIVACY",
      rights: "All rights reserved. EST. 2024 ©",
    },
  },

  uk: {
    nav: {
      home: "HOME",
      company: "COMPANY",
      service: "SERVICES",
      product: "PRODUCTS",
      industry: "INDUSTRIES",
      buildTeam: "BUILD YOUR TEAM",
      insights: "INSIGHTS",
      contact: "CONTACT",
      bookCall: "BOOK A STRATEGY CALL",
      searchPlaceholder: "Search services...",
    },
    hero: {
      taglinePrefix: "Think Digital",
      taglineAccent: "Think BrosDev Solutions",
      subheading:
        "From bespoke web applications to AI platforms, BrosDev Solutions transforms ideas into reliable, scalable software.",
      bookCallBtn: "BOOK A STRATEGY CALL",
      exploreWorkBtn: "EXPLORE OUR WORK",
      responseTime: "RESPONSE TIME",
      engineeringTeam: "ENGINEERING TEAM",
      productsShipped: "PRODUCTS SHIPPED",
      globalPresence: "UK & GLOBAL PRESENCE",
      badgeText: "★ BROSDEV SOLUTIONS UK ★ DESIGN & AI LABS",
    },
    about: {
      tag: "// ABOUT BROSDEV SOLUTIONS UK",
      headline: "Engineered for Speed, Built for Scale, Designed to Impress.",
      quote:
        '"Founded by software engineers for ambitious founders and global enterprises."',
      p1Title: "PRECISION ARCHITECTURE",
      p1Desc: "Clean modular code built on Next.js 16, microservices, and cloud architecture.",
      p2Title: "RAPID SPRINT EXECUTION",
      p2Desc: "Agile 2-week sprint cycles designed to launch MVPs and enterprise apps faster.",
      p3Title: "ENTERPRISE AI NATIVE",
      p3Desc: "Deep integration of LLMs, predictive workflows, and automated intelligence.",
      p4Title: "ENTERPRISE-GRADE SECURITY",
      p4Desc: "ISO compliant practices, data encryption at rest & transit, zero-trust security.",
      satisfaction: "CLIENT SATISFACTION",
      shipped: "PLATFORMS SHIPPED",
    },
    services: {
      tag: "// OUR SERVICES",
      headline: "End-to-End Software & AI Solutions",
      subheading: "High-performance software engineering tailored for UK tech executives.",
    },
    techStack: {
      tag: "// TECH STACK MASTERY",
      headline: "Modern Developer Ecosystem",
      subheading: "We deliver resilient, scalable, and future-proof enterprise software applications.",
    },
    methodology: {
      tag: "// OUR METHODOLOGY",
      headline: "Transparent Engineering Pipeline",
      subheading: "An agile development workflow optimized for execution speed and high code quality.",
    },
    reviews: {
      tag: "// CLIENT REVIEWS",
      headline: "Trusted by UK Founders & Tech Leaders",
      subheading: "What engineering executives say about partnering with BrosDev Solutions.",
    },
    footer: {
      overview: "OVERVIEW",
      solutions: "SOLUTIONS",
      legal: "LEGAL & PRIVACY",
      rights: "All rights reserved. EST. 2024 ©",
    },
  },

  de: {
    nav: {
      home: "STARTSEITE",
      company: "UNTERNEHMEN",
      service: "DIENSTE",
      product: "PRODUKTE",
      industry: "BRANCHEN",
      buildTeam: "TEAM AUFBAUEN",
      insights: "EINBLICKE",
      contact: "KONTAKT",
      bookCall: "STRATEGIEGESPRÄCH BUCHEN",
      searchPlaceholder: "Dienste suchen...",
    },
    hero: {
      taglinePrefix: "Ideen In",
      taglineAccent: "Think BrosDev Solutions",
      subheading:
        "Von Webanwendungen bis hin zu KI-Plattformen verwandelt BrosDev Solutions Ideen in zuverlässige, skalierbare Software.",
      bookCallBtn: "STRATEGIEGESPRÄCH BUCHEN",
      exploreWorkBtn: "UNSERE ARBEITEN ERKUNDEN",
      responseTime: "REAKTIONSZEIT",
      engineeringTeam: "ENTWICKLERTEAM",
      productsShipped: "GELIEFERTE PRODUKTE",
      globalPresence: "DEUTSCHLAND & GLOBAL",
      badgeText: "★ BROSDEV SOLUTIONS IT ★ DESIGN & KI LABS",
    },
    about: {
      tag: "// ÜBER BROSDEV SOLUTIONS IT",
      headline: "Entwickelt für Geschwindigkeit, Skalierbarkeit und Exzellenz.",
      quote:
        '"Gegründet von Entwicklern für ambitionierte Gründer und weltweite Unternehmen. BrosDev Solutions kombiniert modernes Design mit erstklassiger Softwareentwicklung."',
      p1Title: "PRÄZISIONS-ARCHITEKTUR",
      p1Desc: "Sauberer modularer Code auf Next.js 16, Mikrodiensten und Cloud-Architektur.",
      p2Title: "SCHNELLE SPRINT-AUSFÜHRUNG",
      p2Desc: "Agile 2-Wochen-Sprints zur schnellen Veröffentlichung von MVPs und Unternehmensanwendungen.",
      p3Title: "ENTERPRISE KI-NATIV",
      p3Desc: "Tiefe Integration von LLMs, prädiktiven Workflows und automatisierter Intelligenz.",
      p4Title: "BANKEN-SICHERHEIT",
      p4Desc: "ISO-konforme Praktiken, Datenverschlüsselung und Zero-Trust-Sicherheit.",
      satisfaction: "KUNDENZUFRIEDENHEIT",
      shipped: "GELIEFERTE PLATTFORMEN",
    },
    services: {
      tag: "// UNSERE DIENSTLEISTUNGEN",
      headline: "End-to-End Software- & KI-Lösungen",
      subheading: "Hochleistungs-Softwareentwicklung für moderne Technologie-Führungskräfte.",
    },
    techStack: {
      tag: "// TECH-STACK EXPERTISE",
      headline: "Modernes Entwickler-Ökosystem",
      subheading: "Wir arbeiten an der Spitze der Softwareentwicklung für skalierbare Anwendungen.",
    },
    methodology: {
      tag: "// UNSERE METHODIK",
      headline: "Transparente Entwicklungs-Pipeline",
      subheading: "Ein agiler Software-Entwicklungsprozess für maximale Ausführungsgeschwindigkeit.",
    },
    reviews: {
      tag: "// KUNDENBEWERTUNGEN",
      headline: "Vertraut von ambitionierten Gründern & CTOs",
      subheading: "Das sagen Entwicklungsleiter über die Zusammenarbeit mit BrosDev Solutions.",
    },
    footer: {
      overview: "ÜBERSICHT",
      solutions: "LÖSUNGEN",
      legal: "RECHTLICHES & DATENSCHUTZ",
      rights: "Alle Rechte vorbehalten. EST. 2024 ©",
    },
  },

  fr: {
    nav: {
      home: "ACCUEIL",
      company: "ENTREPRISE",
      service: "SERVICES",
      product: "PRODUITS",
      industry: "INDUSTRIES",
      buildTeam: "ÉQUIPE DÉDIÉE",
      insights: "INSIGHTS",
      contact: "CONTACT",
      bookCall: "RÉSERVER UN APPEL STRATÉGIQUE",
      searchPlaceholder: "Rechercher des services...",
    },
    hero: {
      taglinePrefix: "Des Idées Vers",
      taglineAccent: "L'Think BrosDev Solutions",
      subheading:
        "Des applications web aux plateformes IA, BrosDev Solutions transforme les idées en logiciels fiables et évolutifs.",
      bookCallBtn: "RÉSERVER UN APPEL STRATÉGIQUE",
      exploreWorkBtn: "EXPLORER NOS TRAVAUX",
      responseTime: "TEMPS DE RÉPONSE",
      engineeringTeam: "ÉQUIPE D'INGÉNIERIE",
      productsShipped: "PRODUITS LIVRÉS",
      globalPresence: "FRANCE & PRÉSENCE MONDIALE",
      badgeText: "★ BROSDEV SOLUTIONS IT ★ LABS DESIGN & IA",
    },
    about: {
      tag: "// À PROPOS DE BROSDEV SOLUTIONS IT",
      headline: "Conçu pour la vitesse, la scalabilité et l'excellence.",
      quote:
        '"Fondé par des ingénieurs pour des fondateurs ambitieux et des entreprises mondiales. BrosDev Solutions allie design audacieux et ingénierie logicielle robuste."',
      p1Title: "ARCHITECTURE DE PRÉCISION",
      p1Desc: "Code modulaire construit sur Next.js 16, microservices et architecture Cloud.",
      p2Title: "EXÉCUTION RAPIDE EN SPRINTS",
      p2Desc: "Sprints agiles de 2 semaines conçus pour lancer des MVP et applications d'entreprise.",
      p3Title: "IA NATIVE POUR ENTREPRISES",
      p3Desc: "Intégration avancée des LLM, workflows prédictifs et intelligence automatisée.",
      p4Title: "SÉCURITÉ DE NIVEAU BANCAIRE",
      p4Desc: "Pratiques conformes ISO, chiffrement des données et sécurité Zero-Trust.",
      satisfaction: "SATISFACTION CLIENT",
      shipped: "PLATEFORMES LIVRÉES",
    },
    services: {
      tag: "// NOS SERVICES",
      headline: "Solutions Logicielles & IA Clé en Main",
      subheading: "Ingénierie logicielle haute performance pour dirigeants technologiques.",
    },
    techStack: {
      tag: "// MAÎTRISE DU STACK TECHNIQUE",
      headline: "Écosystème de Développement Moderne",
      subheading: "Nous restons à la pointe de l'ingénierie logicielle pour des applications durables.",
    },
    methodology: {
      tag: "// NOTRE MÉTHODOLOGIE",
      headline: "Pipeline d'Ingénierie Transparente",
      subheading: "Un flux de travail agile optimisé pour une vitesse et une qualité de code maximales.",
    },
    reviews: {
      tag: "// AVIS CLIENTS",
      headline: "Reconnu par les Fondateurs & Directeurs Techniques",
      subheading: "Voici ce que disent les leaders technologiques sur leur partenariat avec BrosDev Solutions.",
    },
    footer: {
      overview: "APERÇU",
      solutions: "SOLUTIONS",
      legal: "MENTIONS LÉGALES & CONFIDENTIALITÉ",
      rights: "Tous droits réservés. EST. 2024 ©",
    },
  },

  es: {
    nav: {
      home: "INICIO",
      company: "EMPRESA",
      service: "SERVICIOS",
      product: "PRODUCTOS",
      industry: "INDUSTRIAS",
      buildTeam: "CONSTRUYE TU EQUIPO",
      insights: "INSIGHTS",
      contact: "CONTACTO",
      bookCall: "RESERVAR LLAMADA ESTRATÉGICA",
      searchPlaceholder: "Buscar servicios...",
    },
    hero: {
      taglinePrefix: "Ideas En",
      taglineAccent: "Innovación.",
      subheading:
        "Desde aplicaciones web hasta plataformas de IA, BrosDev Solutions transforma ideas en software confiable y escalable.",
      bookCallBtn: "RESERVAR LLAMADA ESTRATÉGICA",
      exploreWorkBtn: "EXPLORAR TRABAJOS",
      responseTime: "TIEMPO DE RESPUESTA",
      engineeringTeam: "EQUIPO DE INGENIERÍA",
      productsShipped: "PRODUCTOS ENTREGADOS",
      globalPresence: "PRESENCIA GLOBAL",
      badgeText: "★ BROSDEV SOLUTIONS IT ★ LABS DE DISEÑO E IA",
    },
    about: {
      tag: "// SOBRE BROSDEV SOLUTIONS IT",
      headline: "Diseñado para velocidad, escalabilidad y excelencia.",
      quote:
        '"Fundado por ingenieros para fundadores ambiciosos y empresas globales. BrosDev Solutions combina diseño audaz con ingeniería de software robusta."',
      p1Title: "ARQUITECTURA DE PRECISIÓN",
      p1Desc: "Código modular limpio basado en Next.js 16, microservicios y arquitectura cloud.",
      p2Title: "EJECUCIÓN RÁPIDA EN SPRINTS",
      p2Desc: "Ciclos de sprint ágiles de 2 semanas diseñados para lanzar MVPs más rápido.",
      p3Title: "IA NATIVA PARA EMPRESAS",
      p3Desc: "Integración profunda de LLM, flujos predictivos e inteligencia automatizada.",
      p4Title: "SEGURIDAD DE NIVEL BANCARIO",
      p4Desc: "Prácticas conformes a ISO, cifrado de datos y seguridad Zero-Trust.",
      satisfaction: "SATISFACCIÓN DEL CLIENTE",
      shipped: "PLATAFORMAS ENTREGADAS",
    },
    services: {
      tag: "// NUESTROS SERVICIOS",
      headline: "Soluciones Integrales de Software e IA",
      subheading: "Ingeniería de software de alto rendimiento para líderes tecnológicos.",
    },
    techStack: {
      tag: "// DOMINIO DEL STACK TÉCNICO",
      headline: "Ecosistema de Desarrollo Moderno",
      subheading: "Mantenemos la vanguardia de la ingeniería de software para entregar aplicaciones escalables.",
    },
    methodology: {
      tag: "// NUESTRA METODOLOGÍA",
      headline: "Pipeline de Ingeniería Transparente",
      subheading: "Un flujo de desarrollo ágil optimizado para velocidad y calidad de código.",
    },
    reviews: {
      tag: "// OPINIONES DE CLIENTES",
      headline: "Confianza de Fundadores & CTOs",
      subheading: "Lo que dicen los ejecutivos tecnológicos sobre colaborar con BrosDev Solutions.",
    },
    footer: {
      overview: "RESUMEN",
      solutions: "SOLUCIONES",
      legal: "AVISO LEGAL Y PRIVACIDAD",
      rights: "Todos los derechos reservados. EST. 2024 ©",
    },
  },

  in: {
    nav: {
      home: "मुख्य पृष्ठ",
      company: "कंपनी",
      service: "सेवाएं",
      product: "उत्पाद",
      industry: "उद्योग",
      buildTeam: "टीम बनाएं",
      insights: "अंतर्दृष्टि (Insights)",
      contact: "संपर्क",
      bookCall: "रणनीतिक कॉल बुक करें",
      searchPlaceholder: "सेवाएं खोजें...",
    },
    hero: {
      taglinePrefix: "विचारों से",
      taglineAccent: "नवाचार।",
      subheading:
        "वेब एप्लिकेशन से लेकर AI-संचालित प्लेटफॉर्म तक, BrosDev Solutions विचारों को विश्वसनीय, स्केलेबल सॉफ़्टवेयर में बदलता है।",
      bookCallBtn: "रणनीतिक कॉल बुक करें",
      exploreWorkBtn: "हमारा काम देखें",
      responseTime: "प्रतिक्रिया समय",
      engineeringTeam: "इंजीनियरिंग टीम",
      productsShipped: "उत्पाद निर्मित",
      globalPresence: "भारत एवं वैश्विक उपस्थिति",
      badgeText: "★ BROSDEV SOLUTIONS IT ★ डिजाइन और AI लैब",
    },
    about: {
      tag: "// BROSDEV SOLUTIONS IT के बारे में",
      headline: "गति, स्केलेबिलिटी और उत्कृष्टता के लिए निर्मित।",
      quote:
        '"महत्वाकांक्षी संस्थापकों और वैश्विक उद्यमों के लिए इंजीनियरों द्वारा स्थापित। BrosDev Solutions मजबूत सॉफ्टवेयर शिल्प कौशल के साथ बोल्ड डिज़ाइन को जोड़ता है।"',
      p1Title: "सटीक आर्किटेक्चर",
      p1Desc: "Next.js 16, माइक्रोसर्विसेज और क्लाउड आर्किटेक्चर पर बना स्वच्छ मॉड्यूलर कोड।",
      p2Title: "तेज़ स्प्रिंट निष्पादन",
      p2Desc: "MVP और एंटरप्राइज़ ऐप को तेज़ी से लॉन्च करने के लिए डिज़ाइन किए गए 2-सप्ताह के स्प्रिंट।",
      p3Title: "एंटरप्राइज AI सक्षम",
      p3Desc: "LLM, प्रेडिक्टिव वर्कफ़्लो और स्वचालित इंटेलिजेंस का गहरा एकीकरण।",
      p4Title: "बैंक-ग्रेड सुरक्षा",
      p4Desc: "ISO अनुपालन प्रथाएं, डेटा एन्क्रिप्शन और ज़ीरो-ट्रस्ट सुरक्षा नीतियां।",
      satisfaction: "ग्राहक संतुष्टि",
      shipped: "निर्मित प्लेटफॉर्म",
    },
    services: {
      tag: "// हमारी सेवाएं",
      headline: "एंड-टू-एंड सॉफ्टवेयर और AI समाधान",
      subheading: "आधुनिक प्रौद्योगिकी नेताओं के लिए निर्मित उच्च प्रदर्शन सॉफ्टवेयर इंजीनियरिंग।",
    },
    techStack: {
      tag: "// टेक स्टैक में महारत",
      headline: "आधुनिक डेवलपर पारिस्थितिकी तंत्र",
      subheading: "हम स्केलेबल और भविष्य के लिए तैयार एप्लिकेशन देने के लिए सॉफ्टवेयर इंजीनियरिंग के अत्याधुनिक स्तर पर हैं।",
    },
    methodology: {
      tag: "// हमारी कार्यप्रणाली",
      headline: "पारदर्शी इंजीनियरिंग प्रक्रिया",
      subheading: "तेज़ गति और कोड गुणवत्ता के लिए अनुकूलित एक चुस्त सॉफ्टवेयर विकास कार्यप्रवाह।",
    },
    reviews: {
      tag: "// ग्राहक समीक्षा",
      headline: "महत्वाकांक्षी संस्थापकों और CTOs द्वारा विश्वसनीय",
      subheading: "जानिए इंजीनियरिंग लीडर्स का BrosDev Solutions के साथ साझेदारी के बारे में क्या कहना है।",
    },
    footer: {
      overview: "अवलोकन",
      solutions: "समाधान",
      legal: "कानूनी एवं गोपनीयता",
      rights: "सर्वाधिकार सुरक्षित। EST. 2024 ©",
    },
  },

  ca: {
    nav: {
      home: "HOME",
      company: "COMPANY",
      service: "SERVICES",
      product: "PRODUCTS",
      industry: "INDUSTRIES",
      buildTeam: "BUILD YOUR TEAM",
      insights: "INSIGHTS",
      contact: "CONTACT",
      bookCall: "BOOK A STRATEGY CALL",
      searchPlaceholder: "Search services...",
    },
    hero: {
      taglinePrefix: "Think Digital",
      taglineAccent: "Think BrosDev Solutions",
      subheading:
        "From web applications to AI-powered platforms, BrosDev Solutions transforms ideas into reliable, scalable software.",
      bookCallBtn: "BOOK A STRATEGY CALL",
      exploreWorkBtn: "EXPLORE OUR WORK",
      responseTime: "RESPONSE TIME",
      engineeringTeam: "ENGINEERING TEAM",
      productsShipped: "PRODUCTS SHIPPED",
      globalPresence: "CANADA & GLOBAL PRESENCE",
      badgeText: "★ BROSDEV SOLUTIONS CA ★ DESIGN & AI LABS",
    },
    about: {
      tag: "// ABOUT BROSDEV SOLUTIONS CA",
      headline: "Engineered for Speed, Built for Scale, Designed to Impress.",
      quote:
        '"Founded by software engineers for ambitious founders and global enterprises."',
      p1Title: "PRECISION ARCHITECTURE",
      p1Desc: "Clean modular code built on Next.js 16, microservices, and cloud architecture.",
      p2Title: "RAPID SPRINT EXECUTION",
      p2Desc: "Agile 2-week sprint cycles designed to launch MVPs and enterprise apps faster.",
      p3Title: "ENTERPRISE AI NATIVE",
      p3Desc: "Deep integration of LLMs, predictive workflows, and automated intelligence.",
      p4Title: "ENTERPRISE-GRADE SECURITY",
      p4Desc: "ISO compliant practices, data encryption at rest & transit, zero-trust security.",
      satisfaction: "CLIENT SATISFACTION",
      shipped: "PLATFORMS SHIPPED",
    },
    services: {
      tag: "// OUR SERVICES",
      headline: "End-to-End Software & AI Solutions",
      subheading: "High-performance software engineering tailored for Canadian & global tech leaders.",
    },
    techStack: {
      tag: "// TECH STACK MASTERY",
      headline: "Modern Developer Ecosystem",
      subheading: "We deliver resilient, scalable, and future-proof enterprise software applications.",
    },
    methodology: {
      tag: "// OUR METHODOLOGY",
      headline: "Transparent Engineering Pipeline",
      subheading: "An agile development workflow optimized for execution speed and code quality.",
    },
    reviews: {
      tag: "// CLIENT REVIEWS",
      headline: "Trusted by Canadian Founders & CTOs",
      subheading: "What engineering leaders say about partnering with BrosDev Solutions.",
    },
    footer: {
      overview: "OVERVIEW",
      solutions: "SOLUTIONS",
      legal: "LEGAL & PRIVACY",
      rights: "All rights reserved. EST. 2024 ©",
    },
  },

  eu: {
    nav: {
      home: "HOME",
      company: "COMPANY",
      service: "SERVICES",
      product: "PRODUCTS",
      industry: "INDUSTRIES",
      buildTeam: "BUILD YOUR TEAM",
      insights: "INSIGHTS",
      contact: "CONTACT",
      bookCall: "BOOK A STRATEGY CALL",
      searchPlaceholder: "Search services...",
    },
    hero: {
      taglinePrefix: "Think Digital",
      taglineAccent: "Think BrosDev Solutions",
      subheading:
        "From web applications to AI-powered platforms, BrosDev Solutions transforms ideas into reliable, scalable software.",
      bookCallBtn: "BOOK A STRATEGY CALL",
      exploreWorkBtn: "EXPLORE OUR WORK",
      responseTime: "RESPONSE TIME",
      engineeringTeam: "ENGINEERING TEAM",
      productsShipped: "PRODUCTS SHIPPED",
      globalPresence: "EUROPE & GLOBAL PRESENCE",
      badgeText: "★ BROSDEV SOLUTIONS EU ★ DESIGN & AI LABS",
    },
    about: {
      tag: "// ABOUT BROSDEV SOLUTIONS EU",
      headline: "Engineered for Speed, Built for Scale, Designed to Impress.",
      quote:
        '"Founded by software engineers for ambitious founders and European enterprises."',
      p1Title: "PRECISION ARCHITECTURE",
      p1Desc: "Clean modular code built on Next.js 16, microservices, and cloud architecture.",
      p2Title: "RAPID SPRINT EXECUTION",
      p2Desc: "Agile 2-week sprint cycles designed to launch MVPs and enterprise apps faster.",
      p3Title: "ENTERPRISE AI NATIVE",
      p3Desc: "Deep integration of LLMs, predictive workflows, and automated intelligence.",
      p4Title: "ENTERPRISE-GRADE SECURITY",
      p4Desc: "ISO compliant practices, GDPR data encryption at rest & transit, zero-trust security.",
      satisfaction: "CLIENT SATISFACTION",
      shipped: "PLATFORMS SHIPPED",
    },
    services: {
      tag: "// OUR SERVICES",
      headline: "End-to-End Software & AI Solutions",
      subheading: "High-performance software engineering tailored for European tech leaders.",
    },
    techStack: {
      tag: "// TECH STACK MASTERY",
      headline: "Modern Developer Ecosystem",
      subheading: "We deliver resilient, scalable, and future-proof enterprise software applications.",
    },
    methodology: {
      tag: "// OUR METHODOLOGY",
      headline: "Transparent Engineering Pipeline",
      subheading: "An agile development workflow optimized for execution speed and code quality.",
    },
    reviews: {
      tag: "// CLIENT REVIEWS",
      headline: "Trusted by European Founders & CTOs",
      subheading: "What engineering leaders say about partnering with BrosDev Solutions.",
    },
    footer: {
      overview: "OVERVIEW",
      solutions: "SOLUTIONS",
      legal: "LEGAL & PRIVACY",
      rights: "All rights reserved. EST. 2024 ©",
    },
  },
};

interface TranslationContextType {
  locale: LocaleCode;
  t: TranslationDictionary;
  changeLocale: (newLocale: LocaleCode) => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: React.ReactNode; defaultLocale?: string }> = ({
  children,
  defaultLocale = "com",
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const [locale, setLocale] = useState<LocaleCode>(() => {
    const raw = (defaultLocale || "com").toLowerCase() as LocaleCode;
    return translations[raw] ? raw : "com";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const seg = pathname.split("/")[1]?.toLowerCase() as LocaleCode;
      if (seg && translations[seg]) {
        setLocale(seg);
      }
    }
  }, [pathname]);

  const changeLocale = (newLocale: LocaleCode) => {
    if (translations[newLocale]) {
      setLocale(newLocale);
      const segments = pathname.split("/").filter(Boolean);
      if (segments.length > 0 && translations[segments[0].toLowerCase() as LocaleCode]) {
        segments[0] = newLocale;
      } else {
        segments.unshift(newLocale);
      }
      const newPath = `/${segments.join("/")}`;
      router.push(newPath);
    }
  };

  const t = translations[locale] || translations.en;

  return (
    <TranslationContext.Provider value={{ locale, t, changeLocale }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    // Fallback if rendered outside provider
    return {
      locale: "com" as LocaleCode,
      t: translations.com || translations.en,
      changeLocale: () => { },
    };
  }
  return context;
};
