import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import RoundButton from './RoundButton';

const Template: ComponentStory<typeof RoundButton> = (args) => <RoundButton {...args} />;

export const ButtonRound = Template.bind({});

export default {
  title: 'Example/Buttons/ButtonRound',
  component: RoundButton,

  argTypes: {
    label: {
      defaultValue: 'Round Button',
      control: {
        type: 'text',
      },
    },

    isDisbled: { control: 'boolean', defaultValue: false },

    top: {
      defaultValue: 0,
      control: { type: 'number' },
    },

    bottom: {
      defaultValue: 0,
      control: { type: 'number' },
    },
  },
} as ComponentMeta<typeof RoundButton>;
