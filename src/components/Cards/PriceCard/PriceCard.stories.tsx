import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import PriceCard from './PriceCard';

const Template: ComponentStory<typeof PriceCard> = (args) => <PriceCard {...args} />;

export const PriceCardExample = Template.bind({});

export default {
  title: 'Example/Cards/PriceCard',
  component: PriceCard,

  argTypes: {
    title: {
      defaultValue: 'Free trial',
      control: {
        type: 'text',
      },
    },

    price: {
      defaultValue: 'Custom',
      control: {
        type: 'text',
      },
    },

    optionList: {
      defaultValue: ['For small teams – 5 users', 'Community support'],
      control: {
        type: 'array',
      },
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
} as ComponentMeta<typeof PriceCard>;
