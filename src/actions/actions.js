const BASE_URL = 'https://limitless-reaches-60351.herokuapp.com/'
const USER_URL = 'https://limitless-reaches-60351.herokuapp.com/users/'
const PANO_URL = 'https://limitless-reaches-60351.herokuapp.com/panos'
const LIKES_URL = 'https://limitless-reaches-60351.herokuapp.com/likes'
const COMMENTS_URL = 'https://limitless-reaches-60351.herokuapp.com/comments'

export const createUser = (user) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({user: {email: user.email, name: user.name, password: user.password}})
  }
  return (dispatch) => {
    dispatch({
      type: 'LOADING'
    })
    fetch(USER_URL, options)
      .then(r => r.json())
      .then(data => {
        fetch(BASE_URL + 'current_user', {
      headers: {
        Authorization: data.token,
        'Content-Type': 'application/json'
      }
    }).then(r => r.json())
        .then(user => {
          if (user.status) {
            return alert('Please fill out all fields!')
          } else {
            localStorage.setItem('token', data.token)
            dispatch({
              type: 'CREATE_USER',
              payload: {
                currentUser: user
              }
            })

          }

        })
      })
  }
}

export const loginUser = (email, password) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password
    })
  }
  return (dispatch) => {
    dispatch({
      type: 'LOADING'
    })
    //fetch to auth controller to get token
    fetch(BASE_URL + 'auth', options)
    .then(res => res.json())
    .then(data => {
      //fetch to current user path
      fetch(BASE_URL + 'current_user', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: data.token
    }
  }).then(r => r.json())
      .then(user => {
        if (user.status) {
          return alert('Incorrect email address or password')
          dispatch({ type: 'LOADING'})
        } else {
        localStorage.setItem('token', data.token)
        dispatch({
          type: 'GET_USER',
          payload: {
            currentUser: user
          }
        })
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
                user_id: data.pano.user_id,
                comments: data.comments
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
      Accept: 'application/json'

    },
    body: JSON.stringify({pano: {user_id: pano.userId, pano_url: pano.url, caption: pano.caption}})
  }
  return (dispatch) => {

    fetch(PANO_URL, options)
      .then(r => r.json())
      .then(data => {
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
              },
              user: {
                name: data.user.name,
                id: data.user.id,
                email: data.user.email
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


export const updateCurrentUserPano = (pano) => {
  return {
    type: 'UPDATE_USER_PANO',
    payload: {
      pano: pano
    }
  }
}

export const like = (pano) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({like: {likes: pano.likes, pano_id: pano.pano_id}})
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

export const addLike = (pano) => {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({like: {likes: pano.likes, pano_id: pano.pano_id}})
  }
  return (dispatch) => {
    fetch(LIKES_URL + `/${pano.like_id}`, options)
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
      Accept: 'application/json'
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

export const addComment = (pano) => {

    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({comment: {comment: pano.comment, pano_id: pano.pano_id}})
     }
     return (dispatch) => {
       fetch('https://limitless-reaches-60351.herokuapp.com/comments', options)
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

export const getComments = () => {
  return (dispatch) => {
    fetch(COMMENTS_URL)
    .then(r => r.json())
    .then(data => {
      dispatch({
        type: 'GET_COMMENTS',
        payload: {
          comments: data
        }
      })
    })
  }
}

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
