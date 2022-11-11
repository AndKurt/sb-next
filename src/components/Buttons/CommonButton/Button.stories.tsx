import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import CommonButton from './CommonButton';

const Template: ComponentStory<typeof CommonButton> = (args) => <CommonButton {...args} />;

export const SimpleButton = Template.bind({});

export default {
  title: 'Example/Buttons/SimpleButton',
  component: CommonButton,

  argTypes: {
    label: {
      defaultValue: 'Round Button',
      control: {
        type: 'text',
      },
    },

    bgColor: {
      defaultValue: 'PRIMARY',
    },

    textColor: {
      defaultValue: 'WHITE',
    },

    radius: {
      defaultValue: 'S',
    },

    mt: {
      defaultValue: 0,
      control: { type: 'number' },
    },

    mb: {
      defaultValue: 0,
      control: { type: 'number' },
    },

    width: {
      control: 'select',
      defaultValue: 'auto',
    },

    height: {
      control: 'select',
      defaultValue: 'auto',
    },

    textSize: {
      control: 'select',
      defaultValue: 'bold_6',
    },

    padding: {
      defaultValue: 14,
      control: { type: 'number' },
    },

    isBorder: { control: 'boolean', defaultValue: false },

    isDisabled: { control: 'boolean', defaultValue: false },

    isShadow: { control: 'boolean', defaultValue: false },
  },
} as ComponentMeta<typeof CommonButton>;
