const API_TOKEN = "cf12b339ef5b6ae991d5d47282056091"

export function getFilms(text){
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&language=fr&query=${text}`
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}
