import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import CommonButton from './CommonButton';

const Template: ComponentStory<typeof CommonButton> = (args) => <CommonButton {...args} />;

export const WithIcon = Template.bind({});

export default {
  title: 'Example/Buttons/WithIcon',
  component: CommonButton,

  argTypes: {
    label: {
      defaultValue: 'Watch the demo',
      control: {
        type: 'text',
      },
    },

    bgColor: {
      defaultValue: 'PRIMARY',
    },

    icon: {
      control: {
        type: 'file',
        accept: '.svg',
      },
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
      defaultValue: 'L',
    },

    height: {
      control: 'select',
      defaultValue: 'auto',
    },

    mediaIcon: {
      control: 'radio',
      defaultValue: 'play',
    },

    textSize: {
      control: 'select',
      defaultValue: 'semibold_7',
    },

    padding: {
      defaultValue: 10,
      control: { type: 'number' },
    },

    isBorder: { control: 'boolean', defaultValue: false },

    isDisabled: { control: 'boolean', defaultValue: false },

    isShadow: { control: 'boolean', defaultValue: false },
  },
} as ComponentMeta<typeof CommonButton>;
