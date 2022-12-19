import React from 'react';
import styled, { css } from 'styled-components';
// import { LoadingSpinner } from '../Spinners/LoadingSpinner';

export interface ContainerProps {
  rounded?: boolean;
  outlined?: boolean;
  subtle?: boolean;
  disabled?: boolean;
  busy?: boolean;
}

export interface ButtonProps extends ContainerProps {
  style?: React.CSSProperties;
  children?: React.ReactChild;
}

const Container = styled.div<ButtonProps>`
  position: relative;
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #007aff;
  border-radius: 10px;
  font-weight: 500;
  font-size: 17px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.14px;
  color: #ffffff;
  transition: transform 0.075s ease;
  user-select: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:active {
    transform: scale(0.95, 0.95);
  }

  &:hover {
    background-color: #0072ef;
  }

  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 100px;
    `}

  ${({ outlined }) =>
    outlined &&
    css`
      background-color: #ffffff;
      color: #007aff;
      border: 1px solid #e5e5e5;

      &:hover {
        background-color: #ffffff;
        border-color: #bababa;
      }

      &:active {
        border-color: #bababa;
      }
    `}

  ${({ subtle }) =>
    subtle &&
    css`
      background-color: #f2f2f2;
      color: #007aff;

      &:hover {
        background-color: #f9f9f9;
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}

  ${({ busy }) =>
    busy &&
    css`
      pointer-events: none;
    `}
`;

const Button = (props: ButtonProps) => {
  const { rounded, outlined, subtle, disabled, busy, children, style } = props;

  return (
    <Container {...props}>
      {children}
      {/* {busy ? <LoadingSpinner color='inherit' /> : <>{children}</>} */}
    </Container>
  );
};

export default Button;
