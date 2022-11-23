import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import SwitcherButton from './SwitcherButton';

const Template: ComponentStory<typeof SwitcherButton> = (args) => <SwitcherButton {...args} />;

export const ButtonForSocial = Template.bind({});

export default {
  title: 'Example/Buttons/SwitcherButton',
  component: SwitcherButton,
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
} as ComponentMeta<typeof SwitcherButton>;
