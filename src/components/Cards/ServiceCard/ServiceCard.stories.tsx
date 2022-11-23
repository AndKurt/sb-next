import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import ServiceCard from './ServiceCard';

import brain_svg from '../../../assets/svg/cards/brain.svg';

const Template: ComponentStory<typeof ServiceCard> = (args) => <ServiceCard {...args} />;

export const ServiceCardExample = Template.bind({});

export default {
  title: 'Example/Cards/ServiceCard',
  component: ServiceCard,

  argTypes: {
    children: {
      defaultValue:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.',
    },

    title: {
      defaultValue: 'Machine learning',
      control: {
        type: 'text',
      },
    },

    img: {
      defaultValue: brain_svg,
      control: {
        type: 'file',
        accept: ['.png', '.svg', '.jpg', '.jpeg'],
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
} as ComponentMeta<typeof ServiceCard>;
