import MeetLogo from 'src/assets/images/google-meet.svg';
import SlackLogo from 'src/assets/images/slack.png';
import StripeLogo from 'src/assets/images/stripe.png';

export const COLLABORATION = [
  {
    logo: StripeLogo,
    width: '80px',
    height: '100px',
    alt: 'Stripe logo',
  },
  {
    logo: MeetLogo,
    width: '70px',
    height: '100px',
    alt: 'Google Meet logo',
  },
  {
    logo: SlackLogo,
    width: '120px',
    height: '100px',
    alt: 'Slack logo',
  },
] as const;
