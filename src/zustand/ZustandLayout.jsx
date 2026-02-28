import React from 'react';
import useCountStore from '../store/useCountStore';
import { Outlet } from 'react-router-dom';

const ZustandLayout = () => {
  const {count} = useCountStore()

  return (
    <div>
      <p>{count}</p>
      <Outlet />
    </div>
  );
};

export default ZustandLayout;