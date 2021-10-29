const BIG_DIPPER_URL = 'https://bigdipper.live';

const GITHUB_URL = 'https://github.com/alien-chain';
const JUNO_DOCS = 'https://docs.alien.blue/';
const JUNO_DISCORD = 'https://discord.gg/EUDffefFmu';

export const donateLink = {
  key: 'donate',
  url: `${BIG_DIPPER_URL}/donate`,
};

export const footerLinks = [
  {
    key: 'junoscan',
    links: [
      {
        key: 'about',
        url: `${BIG_DIPPER_URL}/#about`,
      },
      {
        key: 'faq',
        url: `${BIG_DIPPER_URL}/faq`,
      },
      {
        key: 'termsAndConditions',
        url: `${BIG_DIPPER_URL}/terms-and-conditions`,
      },
      {
        key: 'privacyPolicy',
        url: `${BIG_DIPPER_URL}/privacy-policy`,
      },
    ],
  },
  {
    key: 'juno',
    links: [
      {
        key: 'github',
        url: GITHUB_URL,
      },
      {
        key: 'docs',
        url: JUNO_DOCS,
      },
      {
        key: 'supportOnDiscord',
        url: JUNO_DISCORD,
      },
    ],
  },
];
