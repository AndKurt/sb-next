import React, { useState } from 'react';

import {
  CheckMark,
  Option,
  OptionContainer,
  PeriodContainer,
  Price,
  PriceContainer,
  StyledPriceCard,
  Title,
} from './styled';
import { IPriceCard } from './types';

import checkMarkImg from '../../../assets/svg/check_mark.svg';
import CommonButton from '../../Buttons/CommonButton';

const PriceCard: React.FC<IPriceCard> = ({ title, price, optionList }) => {
  const [isHover, setIsHover] = useState(false);

  const setPeriod = () => console.log('setPeriod');
  const handleChoosePlan = () => console.log('ChoosePlan');

  return (
    <StyledPriceCard onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <Title>{title}</Title>
      <PriceContainer>
        <Price>{typeof price === 'string' ? price : `$ ${price}`}</Price>
        <PeriodContainer>
          <CommonButton
            label="Mo"
            isBorder
            width="XS"
            textSize="semibold_7"
            bgColor={!isHover ? 'PRIMARY' : 'WHITE'}
            textColor={isHover ? 'PRIMARY' : 'WHITE'}
            height="XS"
            handleClick={setPeriod}
            radius="S"
          />
          <CommonButton
            label="Yr"
            isBorder
            width="XS"
            textSize="semibold_7"
            bgColor={isHover ? 'PRIMARY' : 'WHITE'}
            textColor={!isHover ? 'PRIMARY' : 'WHITE'}
            height="XS"
            handleClick={setPeriod}
            radius="S"
          />
        </PeriodContainer>
      </PriceContainer>
      <CommonButton
        label="Choose plan"
        width="XXL"
        height="S"
        bgColor={!isHover ? 'PRIMARY' : 'WHITE'}
        textColor={isHover ? 'PRIMARY' : 'WHITE'}
        handleClick={handleChoosePlan}
        textSize="semibold_7"
        radius="S"
        mb={30}
      />
      <OptionContainer>
        {optionList.map((option) => (
          <Option key={option}>
            <CheckMark src={checkMarkImg} alt="check-mark" /> {option}
          </Option>
        ))}
      </OptionContainer>
    </StyledPriceCard>
  );
};

export default PriceCard;
