import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import CommonLink from './CommonLink';

const Template: ComponentStory<typeof CommonLink> = (args) => <CommonLink {...args} />;

export const CommonLinkWithArrow = Template.bind({});

export default {
  title: 'Example/Links/CommonLinkWithArrow',
  component: CommonLink,
  decorators: [withRouter],

  argTypes: {
    children: {
      defaultValue: 'Read more',
    },

    to: {
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
    isInternalPath: { control: 'boolean', defaultValue: false },
    withArrow: { control: 'boolean', defaultValue: true },
  },
} as ComponentMeta<typeof CommonLink>;
