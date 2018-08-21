const baseURL = 'http://10.39.105.36:3030/panos'


const createPano = (data) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({pano_url: data})
  }
  return fetch(baseURL, options)
          .then(r => r.json())
}





export default createPano
