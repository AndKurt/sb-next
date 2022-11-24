import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import EmailInput from './EmailInput';

const Template: ComponentStory<typeof EmailInput> = (args) => <EmailInput {...args} />;

export const EmailInputExample = Template.bind({});

export default {
  title: 'Example/Inputs/EmailInput',
  component: EmailInput,

  argTypes: {},
} as ComponentMeta<typeof EmailInput>;
