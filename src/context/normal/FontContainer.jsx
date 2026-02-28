import React from 'react';
import FontParent from './FontParent'
import { FontProvider } from './FontContext';

const FontContainer = () => {
  return (
    <FontProvider>
      <FontParent />
    </FontProvider>
  );
};

export default FontContainer;