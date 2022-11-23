import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import BlogCard from './BlogCard';

import blogImg from '../../../assets/png/cards/blog_card.png';

const Template: ComponentStory<typeof BlogCard> = (args) => <BlogCard {...args} />;

export const BlogCardExample = Template.bind({});

export default {
  title: 'Example/Cards/BlogCard',
  component: BlogCard,

  argTypes: {
    children: {
      defaultValue:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...',
    },

    date: {
      defaultValue: '22 June 2022',
      control: {
        type: 'text',
      },
    },

    title: {
      defaultValue: 'ISO 13485 compliance of medical devices',
      control: {
        type: 'text',
      },
    },

    img: {
      defaultValue: blogImg,
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
} as ComponentMeta<typeof BlogCard>;
