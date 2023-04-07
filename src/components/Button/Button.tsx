import React from "react";
import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode; //The content of the button, which can be any valid React node.
  primary?: boolean; //A boolean flag indicating whether the button should have a primary style 
  size?: "small" | "medium" | "large"; //A string indicating the size of the button, which can be "small", "medium", or "large". The default value is "medium".
  color?: string; //A string representing the color of the button text. The default value is "rgb(22, 179, 100)".
  borderRadius?: string; //A string representing the border radius of the button. The default value is "12px"
  padding?: string; //A string representing the padding of the button. The default value is "8px 20px"
  margin?:string;
  width?:string;
  onClick?: () => void;
}

interface StyledButtonProps {
  primary?: boolean;
  size: "small" | "medium" | "large";
  color: string;
  borderRadius: string;
  padding: string;
  margin:string;
  width:string;
}

const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  outline: 0px;
  border: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  text-decoration: none;
  font-weight: 600;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 0.875rem;
  line-height: 1.75;
  min-width: 64px;

  color: ${(props) => (props.primary ? "white" : props.color)};
  background-color: ${(props) =>
    props.primary ? props.color : "rgb(22, 179, 100)"};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "12px"};
  text-transform: none;
  &:hover,
  &:focus {
    background-color: ${(props) => props.color};
    color: white;
    opacity: 0.8;
  }
  width:${(props) => props.width};
  margin:${(props) => props.margin};
  padding: ${(props) => {
    switch (props.size) {
      case 'small':
        return '4px 12px';
      case 'medium':
        return '8px 20px';
      case 'large':
        return '12px 24px';
      default:
        return '8px 20px';
    }
  }};
`;

const Button: React.FC<ButtonProps> = ({
  children,
  primary = true,
  size = "medium",
  color = "rgb(22, 179, 100)",
  borderRadius = "12px",
  padding= '8px 20px',
  margin="0px 0px",
  width= "",
  onClick,
}: ButtonProps) => (
  <StyledButton
    primary={primary}
    size={size}
    color={color}
    padding={padding}
    borderRadius={borderRadius}
    margin={margin}
    width={width}
    onClick={onClick}
  >
    {children}
  </StyledButton>
);

export default Button;
