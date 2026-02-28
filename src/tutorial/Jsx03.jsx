const Jsx03 = () => {
  
  const name = "홍길순";
  const age = 32;
  const gender = "여자";
  const intro = `이름은 ${name}이고, 나이는 ${age}고, 성별은 ${gender}입니다.`

  return(
    <>
      <h1>
        {intro}
      </h1>
    </>
  )
}
export default Jsx03;