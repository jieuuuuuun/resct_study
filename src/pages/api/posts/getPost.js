export const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    if(!response.ok) throw new Error('getPosts fetching error')
    const datas = await response.json()
    return datas
  }