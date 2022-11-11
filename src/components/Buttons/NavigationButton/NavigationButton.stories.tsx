import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import NavigationButton from './NavigationButton';

const Template: ComponentStory<typeof NavigationButton> = (args) => <NavigationButton {...args} />;

export const ButtonForNavigation = Template.bind({});

export default {
  title: 'Example/Buttons/ButtonForNavigation',
  component: NavigationButton,

  argTypes: {
    direction: {
      control: 'radio',
      defaultValue: 'forward',
    },

    mt: {
      defaultValue: 0,
      control: { type: 'number' },
    },

    mb: {
      defaultValue: 0,
      control: { type: 'number' },
    },

    isDisabled: { control: 'boolean', defaultValue: false },
  },
} as ComponentMeta<typeof NavigationButton>;
