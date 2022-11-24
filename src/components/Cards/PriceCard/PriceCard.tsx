import React, { useState, useCallback, useEffect } from 'react';

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
import { IBtnColors, IPriceCard, Period } from './types';

import checkMarkImg from '../../../assets/svg/check_mark.svg';
import CommonButton from '../../Buttons/CommonButton';

const monthBtn: IBtnColors = {
  bgColor: 'PRIMARY',
  textColor: 'WHITE',
};

const yearBtn: IBtnColors = {
  bgColor: 'WHITE',
  textColor: 'PRIMARY',
};

const PriceCard: React.FC<IPriceCard> = ({ title, price, optionList }) => {
  const [isHover, setIsHover] = useState(false);
  const [monthBtnColor, setMonthBtnColor] = useState<IBtnColors>(monthBtn);
  const [yearBtnColor, setYearBtnColor] = useState<IBtnColors>(yearBtn);
  const [period, setPeriod] = useState<Period>('Mo');

  useEffect(() => {
    if (isHover) {
      setMonthBtnColor(yearBtnColor);
      setYearBtnColor(monthBtnColor);
    }
  }, []);

  const toggleBtnColor = useCallback(() => {
    setMonthBtnColor(yearBtnColor);
    setYearBtnColor(monthBtnColor);
  }, [monthBtnColor, yearBtnColor]);

  const handleChooseMonth = () => {
    setPeriod('Mo');
    toggleBtnColor();
  };

  const handleChooseYear = () => {
    setPeriod('Yr');
    toggleBtnColor();
  };

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
            bgColor={monthBtnColor.bgColor}
            textColor={monthBtnColor.textColor}
            height="XS"
            handleClick={handleChooseMonth}
            radius="S"
          />
          <CommonButton
            label="Yr"
            isBorder
            width="XS"
            textSize="semibold_7"
            bgColor={yearBtnColor.bgColor}
            textColor={yearBtnColor.textColor}
            height="XS"
            handleClick={handleChooseYear}
            radius="S"
          />
        </PeriodContainer>
      </PriceContainer>
      <CommonButton
        label="Choose plan"
        width="XXL"
        height="S"
        bgColor={isHover ? 'WHITE' : 'PRIMARY'}
        textColor={isHover ? 'PRIMARY' : 'WHITE'}
        handleClick={() => console.log(period)}
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
