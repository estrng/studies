import React from 'react';

interface ButtonProps extends React.ComponentProps<'button'> {}

const Button: React.FC = ({ onClick }: ButtonProps)  => {
  return <button 
    onClick={onClick}
    >add</button>;
}

export default Button;  