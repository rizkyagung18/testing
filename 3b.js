fetch('http://jsonplaceholder.typicode.com/users')
  .then((response) => {
    response.json().then((datas) => {
      for (const data of datas) {
        console.log(data.name)
      }
    })
  })
  .catch((err) => {
    throw new Error("SORRY, DATA NOT FOUND")
  })