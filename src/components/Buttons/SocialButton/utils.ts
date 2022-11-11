import { Social } from './types';

import behance from '../../../assets/svg/socials/behance.svg';
import dribbble from '../../../assets/svg/socials/dribbble.svg';
import facebook from '../../../assets/svg/socials/facebook.svg';
import linkedin from '../../../assets/svg/socials/linkedin.svg';
import twitter from '../../../assets/svg/socials/twitter.svg';
import youtube from '../../../assets/svg/socials/youtube.svg';

export const setSocialData = (name: Social) => {
  const socialsData = {
    behance: {
      logo: behance,
      link: 'https://www.behance.net/',
    },
    dribbble: {
      logo: dribbble,
      link: 'https://dribbble.com/',
    },
    facebook: {
      logo: facebook,
      link: 'https://facebook.com/',
    },
    linkedin: {
      logo: linkedin,
      link: 'https://linkedin.com/',
    },
    twitter: {
      logo: twitter,
      link: 'https://twitter.com/',
    },
    youtube: {
      logo: youtube,
      link: 'https://youtube.com/',
    },
  };

  return socialsData[name];
};
