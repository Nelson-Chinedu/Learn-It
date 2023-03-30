import YoutubeIcon from 'src/assets/images/youtube.png';
import TwitterIcon from 'src/assets/images/twitter.png';
import FacebookIcon from 'src/assets/images/facebook.png';
import LinkedInIcon from 'src/assets/images/linkedin.png';

export const SOCIAL_ICONS = [
  YoutubeIcon,
  TwitterIcon,
  FacebookIcon,
  LinkedInIcon,
] as const;

export const RESOURCES = [
  'How to Get Started',
  'How to Scout for a mentor',
  'How to Get the best as a Mentee',
  'How to Get the best as a Mentor',
] as const;

export const QUICK_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/' },
  { label: 'Contact Us', path: '/' },
  { label: 'Become a Mentor', path: '/auth/signup?q=m' },
] as const;
