import React from 'react';
import Food from './Food';

const FoodContainer1 = () => {
    const foods = [
    {
      id:1,
      name: "샐러드"
    },
    {  id:2,
      name: "김치찌개"
    },
    {  id:3,
      name: "스테이크"
    },
    {  id:4,
      name: "피자"
    },
    {  id:5,
      name: "치킨"
    }
  ]
  const foodMap = ({name}, i) => <Food key={i} name={name} />
  const foodList = foods.map(foodMap)

  return (
    <div>
      {foodList}
    </div>
  );
};

export default FoodContainer1;