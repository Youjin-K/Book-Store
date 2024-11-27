import { styled } from "styled-components";
import { ButtonScheme, ButtonSize } from "../../style/theme";
import React from "react";

interface Props {
  children: React.ReactNode;
  size: ButtonSize;
  scheme: ButtonScheme;
  disabled?: boolean;
  isLoading?: boolean;
}

function Button({ children, size, scheme, disabled = false, isLoading = false }: Props) {
  return (
    <ButtonStyle 
      size={size} 
      scheme={scheme} 
      disabled={disabled} 
      isLoading={isLoading}
    >
      {children}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button<Omit<Props, "children">>`
  font-size: ${({ theme, size }) => theme.button[size].fontSize};
  padding: ${({ theme, size }) => theme.button[size].padding};
  color: ${({ theme, scheme }) => theme.buttonScheme[scheme].color};
  background-color: ${({ theme, scheme }) => theme.buttonScheme[scheme].backgroundColor};
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  opacity: ${({ disabled, isLoading }) => (disabled || isLoading ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "none" : "pointer")}
`;

export default Button;