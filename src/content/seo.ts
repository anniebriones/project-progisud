const site = (import.meta as any).env?.PUBLIC_SITE_URL || 'https://example.com';

export const en = {
  home: {
    title: 'Progisud — SAP Integration & Consulting Services',
    description:
      'Progisud is an SAP tech start-up delivering modern solutions such as SAP Public Cloud, Business AI, and BTP technologies—supporting end-to-end IT transformation.',
    image: `${site}/images/progisud.png`,
    headings: {
      about: 'About Us',
      aboutBlurb:
        'At Progisud, we help enterprises adopt new SAP technologies and assist you in investing in the digitalization of your business—imperative for sustainable growth.',
      team: 'Our Team',
      teamBlurb:
        'Progisud is composed exclusively of SENIOR or EXPERT profiles based in France or at our Delivery Center in Manila, Philippines. This lets us cover time zones across all continents.',
      services: 'Our Services',
      servicesBlurb:
        'Your SAP partner for navigating digital excellence with innovative SAP services.',
      location: 'Localization',
      locationBlurb: '2 offices in France and the Philippines'
    }
  }
};

export const fr = {
  home: {
    title: 'Progisud — Expertise et conseil métier sur SAP',
    description:
      'Progisud est une start-up tech spécialisée sur SAP, proposant des solutions modernes telles que SAP Public Cloud, Business AI et les technologies BTP, et couvrant l’ensemble de la transformation informatique.',
    image: `${site}/images/progisud.png`,
    headings: {
      about: 'À propos',
      aboutBlurb:
        'Chez Progisud, nous aidons les entreprises à adopter les nouvelles technologies SAP et à investir dans la digitalisation de votre activité, indispensables à une croissance durable.',
      team: 'Notre équipe',
      teamBlurb:
        'Progisud est composé exclusivement de profils SENIOR ou EXPERT basés en France ou dans notre Delivery Center à Manille, aux Philippines. Cela nous permet de couvrir tous les fuseaux horaires sur tous les continents.',
      services: 'Nos services',
      servicesBlurb:
        'Votre partenaire SAP pour naviguer vers l’excellence digitale grâce à des services SAP innovants.',
      location: 'Localisation',
      locationBlurb: '2 bureaux en France et aux Philippines'
    }
  }
};
