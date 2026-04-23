const githubUsername = 'hongtin2104';
const repositoryName = 'hongtin2104.github.io';
const isUserSiteRepo = repositoryName.toLowerCase() === `${githubUsername}.github.io`;
const pathPrefix = isUserSiteRepo ? '' : `/${repositoryName}`;
const siteUrl = isUserSiteRepo
  ? `https://${githubUsername}.github.io`
  : `https://${githubUsername}.github.io${pathPrefix}`;

module.exports = {
  pathPrefix,
  siteUrl,
  siteTitle: 'Nguyễn Hồng Tín',
  siteDescription: 'Nguyễn Hồng Tín - Backend Developer & AI Engineer from Ho Chi Minh City. Specializing in Python, FastAPI, LangChain, LLM, and RAG systems. Building reliable APIs and AI-powered products.',
  author: 'Nguyễn Hồng Tín',
  profileImage: '/hongtin2104.png',
  titleTemplate: 'Nguyễn Hồng Tín | Backend Developer & AI Engineer',
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT || '',
  pages: {
    home: '/',
    contact: 'contact',
    resume: 'resume',
  },
  social: {
    github: 'https://github.com/HongTin2104',
    facebook: 'https://www.facebook.com/nguyentin2104',
    twitter: '',
    instagram: '',
    globe: siteUrl,
    tiktok: '',
    linkedin: 'https://www.linkedin.com/in/tin-hong-nguyen-0b442029b/',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || 'https://getform.io/f/09a3066f-c638-40db-ad59-05e4ed71e451', // TODO
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
  googleSiteVerification: 'Si7xn2jh1JOQLb4DVIk7FSZjhF1t469cqp2sB5pW77M',
};
