import { Button as BaseButton, Icon } from 'antd';
import { plural } from 'pluralize';
import { oneOf, string } from 'prop-types';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { variant } from 'styled-system';

import theme from '../theme';

const buttonBrand = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

const buttonSize = {
  LARGE: 'large',
}

const buttonType = {
  LINK: 'link',
  PLAIN: 'plain',
  TRANSPARENT: 'transparent',
  WHITE_THIN: 'whiteThin',
};

const buttonIconPos = {
  LEFT: 'left',
  RIGHT: 'right',
};

const StyledButton = styled(({ brand, size, type, ...rest }) => <BaseButton {...rest} />)`
  &.ant-btn {
    align-items: center;
    border-radius: 20px;
    border: none;
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang TC', 'Microsoft JhengHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 16px;
    font-weight: 500;
    height: 40px;
    justify-content: center;
    line-height: 1.5;
    width: 180px;

    .anticon {
      display: flex;
    }

    > .anticon + span, > span + .anticon {
      margin-left: 4px;
    }

    &.ant-btn-block {
      width: 100%;
    }

    ${variant({
      prop: 'brand',
      variants: {
        [buttonBrand.PRIMARY]: {
          backgroundColor: 'primary',
          color: 'white',
          '&:hover': {
            backgroundColor: 'primaries.light',
            color: 'white',
          },
          '&:active, &:focus': {
            backgroundColor: 'primaries.dark',
            color: 'white',
          },
          '&[disabled], &[disabled]:hover': {
            backgroundColor: 'blacks.2',
            borderColor: 'blacks.3',
            borderStyle: 'solid',
            borderWidth: '1px',
          },
        },
        [buttonBrand.SECONDARY]: {
          backgroundColor: 'secondary',
          color: 'white',
          '&:hover': {
            backgroundColor: 'secondaries.light',
            color: 'white',
          },
          '&:active, &:focus': {
            backgroundColor: 'secondaries.dark',
            color: 'white',
          },
        },
      },
    })}
    ${({ brand }) => variant({
      prop: 'type',
      variants: {
        [buttonType.LINK]: {
          backgroundColor: 'transparent',
          borderRadius: 0,
          boxShadow: 'none',
          color: brand,
          fontWeight: 600,
          height: 'auto',
          padding: 0,
          width: 'auto',
          '&:hover': {
            backgroundColor: 'transparent',
            color: `${plural(brand)}.light`,
          },
          '&:active, &:focus': {
            backgroundColor: 'transparent',
            color: `${plural(brand)}.dark`,
          },
          '&[disabled], &[disabled]:hover': {
            backgroundColor: 'transparent',
            border: 0,
            color: 'rgba(0, 0, 0, 0.25)',
          },
          '&[ant-click-animating-without-extra-node]:after': {
            opacity: 0,
          },
        },
        [buttonType.PLAIN]: {
          backgroundColor: '#f5f7f9',
          color: 'rgba(0, 0, 0, 0.45)',
          '&:hover': {
            backgroundColor: '#f5f7f9',
            color: brand,
          },
          '&:active, &:focus': {
            backgroundColor: '#f5f7f9',
            color: `${plural(brand)}.dark`,
          },
        },
        [buttonType.TRANSPARENT]: {
          backgroundColor: 'transparent',
          borderColor: brand,
          borderStyle: 'solid',
          borderWidth: '2px',
          color: brand,
          '&:hover': {
            backgroundColor: 'transparent',
            borderColor: `${plural(brand)}.light`,
            color: `${plural(brand)}.light`,
          },
          '&:active, &:focus': {
            backgroundColor: 'transparent',
            borderColor: `${plural(brand)}.dark`,
            color: `${plural(brand)}.dark`,
          },
        },
        [buttonType.WHITE_THIN]: {
          backgroundColor: 'white',
          border: 'solid 1px rgba(0, 0, 0, 0.15)',
          color: 'rgba(0, 0, 0, 0.45)',
          '&:hover': {
            backgroundColor: 'white',
            borderColor: `${plural(brand)}.light`,
            color: `${plural(brand)}.light`,
          },
          '&:active, &:focus': {
            backgroundColor: 'white',
            borderColor: `${plural(brand)}.dark`,
            color: `${plural(brand)}.dark`,
          },
        },
      },
    })}
    ${variant({
      prop: 'size',
      variants: {
        [buttonSize.LARGE]: {
          fontSize: '20px',
          lineHeight: 1.6,
          borderRadius: '24px',
          height: '48px',
          width: '208px',
        },
      },
    })}
  }
`;

const Button = ({ children, icon, iconPos, testId, ...rest }) => {
  return (
    <StyledButton
      data-test-id={testId}
      {...rest}
    >
      {icon && iconPos === 'left' && <Icon type={icon} />}
      {children}
      {icon && iconPos === 'right' && <Icon type={icon} />}
    </StyledButton>
  );
};

const ThemedButton = (props) => (
  <ThemeProvider theme={theme}>
    <Button {...props} />
  </ThemeProvider>
);

Button.propTypes = {
  brand: oneOf(Object.values(buttonBrand)),
  iconPos: oneOf(Object.values(buttonIconPos)),
  size: oneOf(Object.values(buttonSize)),
  testId: string,
  type: oneOf(Object.values(buttonType)),
};

Button.defaultProps = {
  brand: buttonBrand.PRIMARY,
  iconPos: buttonIconPos.LEFT,
};

export default ThemedButton;
