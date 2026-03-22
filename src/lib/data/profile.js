export const PROFILE = {
  name: 'Dulana Peiris',
  username: 'du1ana',
  tagline: 'Software Engineer | Blockchain & AI Enthusiast',
  bio: `Passionate software engineer specializing in blockchain technology, AI-powered solutions, and modern web development.
Currently working as a Senior Software Engineer at Geveo/Everpower Labs, building innovative products on the XRP Ledger and Azure AI services.
First Class Honours graduate from the University of Moratuwa with a strong foundation in Information Technology.`,
  location: 'Sri Lanka',
  email: null,
  avatar: null,
  resume: null,
  social: {
    github: 'https://github.com/du1ana',
    linkedin: 'https://www.linkedin.com/in/dulana-peiris/',
    twitter: null,
    instagram: null,
    youtube: null,
    soundcloud: null
  }
};

export const getSocialLinks = () =>
  Object.entries(PROFILE.social)
    .filter(([_, url]) => url !== null)
    .map(([platform, url]) => ({ platform, url }));
