import React, { FormEvent, memo } from 'react';

import { StyledForm, StyledInput } from './styled';
import { IEmailInput } from './types';

import CommonButton from '../../Buttons/CommonButton';

const EmailInput: React.FC<IEmailInput> = ({ handleSendEmail }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSendEmail();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput placeholder="Your email" />
      <CommonButton label="Send" width="input" height="M" textColor="BLACK" />
    </StyledForm>
  );
};

export default memo(EmailInput);
