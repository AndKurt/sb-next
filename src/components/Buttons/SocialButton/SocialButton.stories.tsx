import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import SocialButton from './SocialButton';

const Template: ComponentStory<typeof SocialButton> = (args) => <SocialButton {...args} />;

export const ButtonForSocial = Template.bind({});

export default {
  title: 'Example/Buttons/ButtonForSocial',
  component: SocialButton,
  parameters: {
    backgrounds: { default: 'dark' },
  },

  argTypes: {
    socialName: {
      control: 'radio',
      defaultValue: 'facebook',
    },

    ml: {
      name: 'margin-left',
      defaultValue: 0,
      control: { type: 'number' },
    },

    mr: {
      name: 'margin-right',
      defaultValue: 0,
      control: { type: 'number' },
    },
    mt: {
      name: 'margin-top',
      defaultValue: 0,
      control: { type: 'number' },
    },

    mb: {
      name: 'margin-bottom',
      defaultValue: 0,
      control: { type: 'number' },
    },
  },
} as ComponentMeta<typeof SocialButton>;
