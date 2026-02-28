import React from 'react';

const PropsComponent3 = ({foodList}) => {
  // console.log(foodList)
  // foodList.forEach((food) => console.log(food))
  const foodLists = foodList.map((food, i) => <li key={i}>{food}</li>)

  const foods = [];
  for(let food of foodList) {
    foods.push(food)
  }//빠른 for문
  
  return (
    <div>
      <ul>
        {foodLists}
      </ul>
      {foods}
    </div>
  );
};

export default PropsComponent3;