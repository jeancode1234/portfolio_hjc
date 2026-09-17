export type Locale = 'fr' | 'en'

export const translations = {
  fr: {
    nav: [
      { label: 'Accueil', href: '#home' },
      { label: 'À propos', href: '#about' },
      { label: 'Compétences', href: '#skills' },
      { label: 'Expérience', href: '#experience' },
      { label: 'Projets', href: '#projects' },
      { label: 'Contact', href: '#contact' }
    ],
    theme: {
      toggle: 'Changer le thème'
    },
    language: {
      toggle: 'FR / EN',
      label: 'Langue'
    },
    hero: {
      eyebrow: 'Fullstack Developer',
      greeting: 'Bonjour, je suis',
      ctaProjects: 'Voir mes projets',
      ctaContact: 'Me contacter',
      scroll: 'Scroll to explore'
    },
    about: {
      eyebrow: 'À propos',
      title: 'À propos de moi',
      badge: 'Fullstack',
      role: 'Developer',
      parcours: 'Parcours',
      expertise: 'Expertise',
      valeurs: 'Valeurs',
      approche: 'Approche',
      parcoursText: 'Diplômé en Génie Logiciel avec un parcours orienté produit, méthodes de travail et apprentissage continu.',
      expertiseText: 'Développement frontend, backend, APIs REST, conception logicielle et gestion de bases de données.',
      valeursText: 'Clarté, rigueur, qualité technique, accompagnement des utilisateurs et solutions utiles.',
      approcheText: 'Créer des outils web fiables, performants et bien pensés pour un usage réel au quotidien.'
    },
    stats: {
      experiences: 'Expériences professionnelles',
      stack: 'Technologies Fullstack majeures',
      education: 'Diplômes / formations supérieures',
      passion: 'Passion : créer des solutions digitales'
    },
    skills: {
      eyebrow: 'Compétences',
      title: 'Mon arsenal technique',
      description: 'Technologie utilisée dans la création d’interfaces, de produits et de solutions web modernes.'
    },
    experience: {
      eyebrow: 'Expérience',
      title: 'Mon parcours professionnel'
    },
    education: {
      eyebrow: 'Formation',
      title: 'Mon parcours académique'
    },
    services: {
      eyebrow: 'Services',
      title: 'Ce que je peux faire'
    },
    process: {
      eyebrow: 'Méthode',
      title: 'Ma façon de travailler'
    },
    projects: {
      eyebrow: 'Projets',
      title: 'Mes projets',
      subtitle: 'Quelques réalisations et expériences digitales illustrant mon approche du développement web.'
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Parlons de votre prochain projet.',
      intro: 'Vous avez un projet web, une opportunité professionnelle ou souhaitez échanger autour du développement web ? N’hésitez pas à me contacter.',
      fullname: 'Nom complet',
      email: 'Email',
      subject: 'Sujet',
      message: 'Message',
      placeholderName: 'Votre nom',
      placeholderEmail: 'votre@email.com',
      placeholderSubject: 'Objet du message',
      placeholderMessage: 'Décrivez votre projet...',
      send: 'Envoyer le message',
      sending: 'Envoi...',
      location: 'Douala, Cameroun',
      phone: 'Téléphone',
      invalid: 'Veuillez remplir correctement tous les champs.'
    },
    footer: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      experience: 'Expériences',
      projects: 'Projets',
      contact: 'Contact'
    }
  },
  en: {
    nav: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Experience', href: '#experience' },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' }
    ],
    theme: {
      toggle: 'Toggle theme'
    },
    language: {
      toggle: 'EN / FR',
      label: 'Language'
    },
    hero: {
      eyebrow: 'Fullstack Developer',
      greeting: 'Hello, I am',
      ctaProjects: 'View my projects',
      ctaContact: 'Contact me',
      scroll: 'Scroll to explore'
    },
    about: {
      eyebrow: 'About',
      title: 'About me',
      badge: 'Fullstack',
      role: 'Developer',
      parcours: 'Background',
      expertise: 'Expertise',
      valeurs: 'Values',
      approche: 'Approach',
      parcoursText: 'Graduate in Software Engineering with a product-oriented background, strong work methods and continuous learning.',
      expertiseText: 'Frontend and backend development, REST APIs, software design and database management.',
      valeursText: 'Clarity, rigor, technical quality, user support and useful solutions.',
      approcheText: 'Build reliable, high-performance web tools designed for real everyday use.'
    },
    stats: {
      experiences: 'Professional experiences',
      stack: 'Core fullstack technologies',
      education: 'Degrees / higher education',
      passion: 'Passion: building digital solutions'
    },
    skills: {
      eyebrow: 'Skills',
      title: 'My technical stack',
      description: 'Technology used to build modern interfaces, products and web solutions.'
    },
    experience: {
      eyebrow: 'Experience',
      title: 'My professional journey'
    },
    education: {
      eyebrow: 'Education',
      title: 'My academic path'
    },
    services: {
      eyebrow: 'Services',
      title: 'What I can do'
    },
    process: {
      eyebrow: 'Method',
      title: 'How I work'
    },
    projects: {
      eyebrow: 'Projects',
      title: 'My projects',
      subtitle: 'A few digital projects and experiences that reflect my approach to web development.'
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s talk about your next project.',
      intro: 'You have a web project, a professional opportunity or want to discuss web development? Feel free to contact me.',
      fullname: 'Full name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      placeholderName: 'Your name',
      placeholderEmail: 'your@email.com',
      placeholderSubject: 'Message subject',
      placeholderMessage: 'Describe your project...',
      send: 'Send message',
      sending: 'Sending...',
      location: 'Douala, Cameroon',
      phone: 'Phone',
      invalid: 'Please fill in all fields correctly.'
    },
    footer: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact'
    }
  }
} as const
