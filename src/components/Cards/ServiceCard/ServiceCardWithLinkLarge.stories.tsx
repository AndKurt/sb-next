import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import ServiceCard from './ServiceCard';

import large_card from '../../../assets/svg/cards/large_card.svg';

const Template: ComponentStory<typeof ServiceCard> = (args) => <ServiceCard {...args} />;

export const ServiceCardWithLinkLargeExample = Template.bind({});

export default {
  title: 'Example/Cards/ServiceCardWithLinkLarge',
  component: ServiceCard,

  argTypes: {
    children: {
      defaultValue:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure.',
    },

    title: {
      defaultValue: 'Machine learning',
      control: {
        type: 'text',
      },
    },

    isLargeCard: { control: 'boolean', defaultValue: true },

    linkHref: {
      defaultValue: '/',
      control: {
        type: 'text',
      },
    },

    linkText: {
      defaultValue: 'Read more',
      control: {
        type: 'text',
      },
    },

    img: {
      defaultValue: large_card,
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
