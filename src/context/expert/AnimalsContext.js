import { createContext, useState } from "react";

export const AnimalsContext = createContext({
  state: {animals: []},
  actions: {insert: () => {}, remove: () => {}}
})

export const AnimalsProvider = ({children}) => {
  const [animals, setAnimals] = useState([])
  //1번 실습
  //동물을 추가하고 삭제하는 매서드 구현하기
  //스프레드 문법
  const insert = (animal) => {
    setAnimals([...animals, animal])
  }

  const remove = (index) => {
    setAnimals(animals.filter((animal, i) => index !== i))
  }

  const value = {
    state: {animals: animals},
    actions: {insert:insert, remove:remove}
  }

  return (
    <AnimalsContext.Provider value={value}>
      {children}
    </AnimalsContext.Provider>
  )
}