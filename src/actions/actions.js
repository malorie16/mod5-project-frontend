const USER_URL = 'http://localhost:3030/users'
const PANO_URL = 'http://localhost:3030/panos'
const LIKES_URL = 'http://localhost:3030/likes'
const COMMENTS_URL = 'http://localhost:3030/comments'

export const createUser = (user) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({user: {email: user.email, name: user.name, password: user.password}})
  }
  return (dispatch) => {

    fetch(USER_URL, options)
      .then(r => r.json())
      .then(data => {
        dispatch({
          type: 'CREATE_USER',
          payload: {
            currentUser: data
          }
        })
      })
  }
}
//{email: user.email, name: user.name, password: user.password}
export const getUser = (user) => {

  return (dispatch) => {

    console.log(dispatch);
    fetch(USER_URL + `/${user.id}`)
      .then(r => r.json())
      .then(data => {
        dispatch({
          type: 'GET_USER',
          payload: {
            currentUser: data
          }
        })
      })
  }
}

export const clickedUser = (user) => {
  return {
    type: 'CLICKED_USER',
    payload: {
      clickedUser: user
    }
  }
}

export const getPanos = () => {
  return (dispatch) => {
    fetch(PANO_URL)
      .then(r => r.json())
      .then(data => {
        dispatch({
          type: 'GET_PANOS',
          payload: {
            panos: data
          }
        })
      })
  }
}

export const getPano = (id) => {

  return (dispatch) => {

    fetch(PANO_URL + `/${id}`)
      .then(r => r.json())
      .then(data => {
        console.log('getpano:',data);

        dispatch({
          type: 'GET_PANO',
          payload: {
            clickedPano: {
              user: {
                name: data.user.name,
                id: data.user.id,
                email: data.user.name
              },
              pano: {
                id: data.pano.id,
                caption: data.pano.caption,
                pano_url: data.pano.pano_url,
                user_id: data.pano.user_id
              }
            }
          }
        })
      })
  }
}


export const createPano = (pano) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({pano: {user_id: pano.userId, pano_url: pano.url, caption: pano.caption}})
  }
  return (dispatch) => {

    fetch(PANO_URL, options)
      .then(r => r.json())
      .then(data => {
        console.log('panofetch:', data);
        dispatch({
          type: 'CREATE_PANO',
          payload: {
            clickedPano: {
              pano: {
                id: data.id,
                caption: data.caption,
                pano_url: data.pano_url,
                user_id: data.user_id,
                caption: data.caption
              }
            }
          }
        })
      })
  }
}

export const selectedPano = (pano) => {
  return {
    type: 'SELECTED_PANO',
    payload: {
      clickedPano: pano
    }
  }
}
//

export const like = (likes, pano) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({like: {likes: likes, pano_id: pano.id}})
  }
  return (dispatch) => {
    fetch(LIKES_URL, options)
      .then(r => r.json())
      .then(data => {
        dispatch({
          type: 'LIKE',
          payload: {
            likes: data
          }
        })
      })
  }
}

export const addLike = (likes, pano) => {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({like: {likes: likes, pano_id: pano.id}})
  }
  return (dispatch) => {
    fetch(LIKES_URL, options)
      .then(r => r.json())
      .then(data => {
        dispatch({
          type: 'ADD_LIKE',
          payload: {
            likes: data
          }
        })
      })
  }
}

export const unlike = (likes, pano) => {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({like: {likes: likes, pano_id: pano.id}})
  }
  return (dispatch) => {
    fetch(LIKES_URL, options)
      .then(r => r.json())
      .then(data => {
        dispatch({
          type: 'UNLIKE',
          payload: {
            likes: data
          }
        })
      })
  }
}

export const addComment = (comment, pano) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({comment: {comment: comment, pano_id: pano.id}})
  }
  return (dispatch) => {
    fetch(COMMENTS_URL, options)
      .then(r => r.json())
      .then(data => {
        dispatch({
          type: 'ADD_COMMENT',
          payload: {
            comment: data
          }
        })
      })
  }
}

// export const removeComment = () => {
//   return {
//     type: 'REMOVE_COMMENT'
//   }
// }

export const mobile = (boolean) => {
  return {
    type: 'MOBILE_TOGGLE',
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}
