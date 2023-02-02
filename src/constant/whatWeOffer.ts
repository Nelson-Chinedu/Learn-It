import ExperiencedMentor from 'src/assets/images/experience-mentor.png';
import OneOnOneMentor from 'src/assets/images/one-on-one.png';
import SaveTimeMentor from 'src/assets/images/save--time.png';
import PaymentMentor from 'src/assets/images/payment.png';

export const Offers = [
  {
    title: 'Experienced Mentors',
    text: `Our goal is to guide and support mentees as they navigate their professional journeys. 
    By sharing experiences, providing actionable advice and offering a listening ear. `,
    icon: ExperiencedMentor,
  },
  {
    title: 'One-on-One Teaching',
    text: 'Our mentorship program focuses on a personalized and interactive learning experience, with dedicated one-on-one sessions between mentor and mentee.',
    icon: OneOnOneMentor,
  },
  {
    title: 'Flexible Learning',
    text: `You have the opportunity to customize your learning by choosing the format, pacing, 
    and environment that works for you, allowing you to reach your full potential and acheive your goals.`,
    icon: SaveTimeMentor,
  },
  {
    title: 'Available Prices',
    text: 'With our flexible pricing structure you can choose the package that best suit your needs, whether it be basic or comprehensive.',
    icon: PaymentMentor,
  },
] as const;
