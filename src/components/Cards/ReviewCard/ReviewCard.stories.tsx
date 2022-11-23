import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import ReviewCard from './ReviewCard';

import avatar from '../../../assets/png/cards/review_avatar.png';

const Template: ComponentStory<typeof ReviewCard> = (args) => <ReviewCard {...args} />;

export const ReviewCardExample = Template.bind({});

export default {
  title: 'Example/Cards/ReviewCard',
  component: ReviewCard,

  argTypes: {
    children: {
      defaultValue:
        '“Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.” ',
    },

    name: {
      defaultValue: 'Alex Bern',
      control: {
        type: 'text',
      },
    },

    position: {
      defaultValue: 'CEO by PixelPerfect',
      control: {
        type: 'text',
      },
    },

    img: {
      defaultValue: avatar,
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
} as ComponentMeta<typeof ReviewCard>;
