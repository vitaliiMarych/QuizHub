import React, {FC} from 'react';

import cl from './myButton.module.css';

interface ButtonProps {
  onClick?: React.MouseEventHandler;
  children?: React.ReactNode;
  bgColor?: string;
  color?: string;
  size?: string;
  wFull?:boolean;
};

const defaultProps:ButtonProps = {
  onClick: () => {},
  children: 'Click me!',
  bgColor: 'transparent',
  color: 'darkblue',
  size: 'middle',
  wFull: false,
}

const HomeButton: FC<ButtonProps> = (props: ButtonProps) => {
  props = {...defaultProps, ...props};
  const {children, bgColor, color, onClick, size, wFull} = props;


  let borderWidth = '2px';
  let font_size = '11px';
  let padding = '0.8rem 3.5rem';

  if (size === 'small') {
    borderWidth = '1px'
  }

  if (size === 'middle'){
    font_size ='16px';
    padding = '1rem 5rem';
  }

  if (size === 'big') {
    font_size = '22px';
    padding = '1.2rem 6.5rem';
  }

  const basicStyle = {
    'color': color,
    'border': borderWidth + ' solid ' + color,
    'background': bgColor,
    'font-size': font_size, 
    'padding' : padding,
  }

  const buttonStyle = wFull ? {
    'width' : '100%',
    ...basicStyle
  } : basicStyle

  return (
    <button className={cl.home_btn} style={buttonStyle} onClick={onClick} type='button'>
      {children}
    </button>
    );
}

export default HomeButton;