import React, {FC} from 'react';

import cl from './HomeButton.module.css';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
};

const HomeButton: FC<ButtonProps> = ({
    onClick,
    children
  }) => {
  return (
    <button className={cl.home_btn}>
        {children}
    </button>
    );
}

export default HomeButton;