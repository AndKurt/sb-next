import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import FooterList from './FooterList';

const Template: ComponentStory<typeof FooterList> = (args) => <FooterList {...args} />;

export const FooterListExample = Template.bind({});

export default {
  title: 'Example/Lists/FooterList',
  component: FooterList,
  decorators: [withRouter],
  parameters: {
    backgrounds: { default: 'dark' },
  },

  argTypes: {
    title: {
      defaultValue: 'Service',
      control: {
        type: 'text',
      },
    },

    items: {
      defaultValue: [
        { to: '/', name: 'Page' },
        { to: '/', name: 'Elements' },
        { to: '/', name: 'FAQ' },
        { to: '/', name: 'Pricing' },
      ],
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
} as ComponentMeta<typeof FooterList>;
