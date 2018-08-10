let axios = require('axios');

let axiosClient = axios.create({
  baseURL: 'http://localhost:3030/panos'
});

// const baseUrl = 'http://localhost:3030/panos'
//
//
// const uploadPano = (data) => {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//       Accept: 'pplication/json'
//     },
//     body: JSON.stringify({caption: data.text, image: data.image, user_id: 1})
//   }
//   console.log(options);
//   return fetch(baseUrl, options)
//           .then(r => r.blob())
// }



// export default uploadPano
export default axiosClient
