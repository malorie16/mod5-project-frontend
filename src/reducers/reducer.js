
// add like
// remove like
// add comment
//remove comment
//edit comment
// upload pano
//delete pano
//create new user
//login
//logout

const defaultState = {
  VrButtonClicked: false,
  currentUserToken: '',
  clickedUser: '',
  mobile: false,
  currentUser: {
    panos: [],
    comments:[],
    likes: '',
    user: {
      name: 'logged out'
    }
  },
  clickedPano: {
    user: {
      name: '',
      id: '',
      email:'',
    },
    pano: {
      id: '',
      caption: '',
      pano_url: '',
      user_id: '',
      caption: '',
      created_at: '',
      comments: []
    }
  },
  panos: [],
  oneLike: [],
  allComments: []
}

const reducer = (state = defaultState, action) => {
  switch (action.type){
    case 'MOBILE_TOGGLE':
      return {
        ...state,
        mobile: !state.mobile
      }
    case 'CREATE_USER':
      return {
        ...state,
        currentUser: action.payload.currentUser
      }
    case 'GET_USER':

      return {
        ...state,
        currentUser: action.payload.currentUser
      }
    case 'CLICKED_USER':
      return {
        ...state,
        clickedUser: action.payload.clickedUser
      }
    case 'LOGOUT':
      localStorage.removeItem('token')
      return {
        ...state,
        currentUser: {
          user: {
            name: 'logged out'
          }
        },
        clickedUser: ''
      }
    case 'GET_PANOS':
    return {
      ...state,
      panos: action.payload.panos
    }
    case 'CREATE_PANO':

      return {
        ...state,
        clickedPano: action.payload.clickedPano
      }
    case 'GET_PANO':
      return {
        ...state,
        clickedPano: action.payload.clickedPano
      }
    case 'SELECTED_PANO':
      return {
        ...state,
        clickedPano: action.payload.clickedPano
      }
      // initial amount of likes upon loggin in
    case 'LIKE':
      return {
        ...state,
        likes: action.payload.likes
      }
      // subsequent likes made to posts
    case 'ADD_LIKE':
      return {
        ...state,
        oneLike: action.payload.likes
      }
    case 'UNLIKE':
      return {
        ...state,
        likes: state.likes - 1
      }
    case 'ADD_COMMENT':
      const newComment = state.comments.push(action.payload.comment)
      return {
        ...state,
        comments: newComment
      }
    case 'GET_COMMENTS':
    return {
      ...state,
      allComments: action.payload.comments
    }
    default:
      return state
  }

}

export default reducer
