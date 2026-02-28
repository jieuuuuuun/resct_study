import React from 'react';

const Amount1 = ({
    props, 
    pStyle,
    divStyle,
    buttonStyle,
    handleAddAmountOnClick, 
    handleSubtractAmountOnClick, 
    handleAddCouponOnClick, 
    handleSubtractCouponOnClick
  }) => {

  console.log("자식 랜더링👶")
  const {amount, coupon} = props;

  return (
    <div style={divStyle}>
      <button style={buttonStyle} onClick={handleSubtractAmountOnClick}>-</button>
      <p style={pStyle}>수량: {amount}</p>
      <button style={buttonStyle} onClick={handleAddAmountOnClick}>+</button>

      <button style={buttonStyle} onClick={handleSubtractCouponOnClick}>-</button>
      <p style={pStyle}>쿠폰: {coupon}</p>
      <button style={buttonStyle} onClick={handleAddCouponOnClick}>+</button>
    </div>
  );
};

export default Amount1;
