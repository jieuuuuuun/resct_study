import React, { useEffect, useState } from "react";

const SideEffecMount = () => {
  const [user, setUser] = useState([]);
  const [id, setId] = useState(1)

  const getUser = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const datas = await response.json();
    return datas;
  };

  useEffect(() => {
    getUser()
    .then(setUser)
  }, [id])

  const handleIdOnClick = () => {
    setId(id + 1)
  }
  
  // console.log(user);
  // console.log(id);
  
  return (
    <div>
      {user.name}
      <button onClick={handleIdOnClick}>아이디 + 1</button>
    </div>
  )
  
};

export default SideEffecMount;
