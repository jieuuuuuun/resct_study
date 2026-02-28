import React from 'react';
import Button from './style';

const BasicButton = ({size, shape, variant, border,font, color, children}) => {
  
  return (
    <Button size={size} shape={shape} variant={variant} border={border} font={font} color={color}>
      {children}
    </Button>
  );
};

export default BasicButton;