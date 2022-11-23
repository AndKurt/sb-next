import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import CommonLink from './CommonLink';

const Template: ComponentStory<typeof CommonLink> = (args) => <CommonLink {...args} />;

export const CommonLinkExample = Template.bind({});

export default {
  title: 'Example/Links/CommonLink',
  component: CommonLink,

  argTypes: {
    children: {
      defaultValue: 'Read more',
    },

    href: {
      defaultValue: '/',
      control: {
        type: 'text',
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

    withArrow: { control: 'boolean', defaultValue: false },
  },
} as ComponentMeta<typeof CommonLink>;
