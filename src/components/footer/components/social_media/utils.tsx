import React from 'react';
import {
  TelegramIcon,
  TwitterIcon,
  GithubIcon,
} from '@icons';

export const socialMediaLinks:{
  component: React.ReactNode;
  className: string;
  url: string;
}[] = [
  {
    component: <TelegramIcon />,
    className: 'telegram',
    url: 'https://t.me/JunoNetwork',
  },
  {
    component: <TwitterIcon />,
    className: 'twitter',
    url: 'https://twitter.com/JunoNetwork',
  },
  {
    component: <GithubIcon />,
    className: 'github',
    url: 'https://github.com/cosmoscontracts',
  },
];
