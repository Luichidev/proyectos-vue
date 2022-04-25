import axios from 'axios'

export default function useJokes() {
  // const apiUrl = 'https://apimocha.com/chucknorris/jokes/1'
  const apiUrl = 'https://api.chucknorris.io/jokes/random'

  return axios
    .get(apiUrl)
    .then((response) => {
      const { data } = response
      return data.value
    })
    .catch((error) => {
      console.log(error)
    })
}
