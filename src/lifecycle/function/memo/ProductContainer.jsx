import React, { useCallback, useMemo, useState } from "react";
import Amount1 from "./Amount1";

const ProductContainer = () => {
  const containerStyle = {
    width: "500px",
    height: "300px",
    margin: "20px auto",
  };

  const productStyle = {
    border: "1px solid lightgray",
    padding: "30px",
    lineHeight: "1.3",
  };

  const divStyle = {
    border: "1px solid blue",
    height: "60px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "20px",
    padding: "20px",
  };

  const pStyle = {
    lineHeight: "0",
  };

  const buttonStyle = {
    width: "40px",
    height: "40px",
  };

  console.log("부모 랜더링!🤴")
  const [like, setLike] = useState(0);
  const [amount, setAmount] = useState(1)
  const [coupon, setCoupon] = useState(0)

  // 여러개를 캐시에 저장하려면 분리
  const amountMemo = useMemo(() => {
    console.log("amount 연산");
    return amount
  }, [amount])

    const couponMemo = useMemo(() => {
    console.log("coupon 연산");
    return coupon
  }, [coupon])

  const props = {amount: amountMemo, coupon: couponMemo}

  const handleAddAmountOnClick = useCallback(() => {
    setAmount(amount + 1)
  }, [amount])
  const handleSubtractAmountOnClick = useCallback(() => {
    setAmount(amount - 1)
  }, [amount])
  const handleAddCouponOnClick = useCallback( () => {
     setCoupon(coupon + 1)
  }, [coupon])
  const handleSubtractCouponOnClick = useCallback(() => {
    setCoupon(coupon - 1)
  }, [coupon])
  
  return (
    <div style={containerStyle}>
      <div style={productStyle}>
        <p>[책] 배워서 바로 써먹는 리엑트</p>
        <button onClick={() => {setLike(like + 1)}}>좋아요 {like}</button>
        <Amount1
          props={props}
          pStyle={pStyle}
          divStyle={divStyle}
          buttonStyle={buttonStyle}
          handleAddAmountOnClick={handleAddAmountOnClick}
          handleSubtractAmountOnClick={handleSubtractAmountOnClick}
          handleAddCouponOnClick={handleAddCouponOnClick}
          handleSubtractCouponOnClick={handleSubtractCouponOnClick}
        />
      </div>
    </div>
  );
};

export default ProductContainer;
