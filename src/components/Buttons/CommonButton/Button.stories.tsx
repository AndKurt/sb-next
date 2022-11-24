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
      defaultValue: 'Simple',
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
      name: 'margin-top',
      defaultValue: 0,
      control: { type: 'number' },
    },
    mr: {
      name: 'margin-right',
      defaultValue: 0,
      control: { type: 'number' },
    },

    mb: {
      name: 'margin-bottom',
      defaultValue: 0,
      control: { type: 'number' },
    },

    ml: {
      name: 'margin-left',
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
