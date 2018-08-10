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

const state = {
  VrButtonClicked: false,
  selectedUser: '',
  mobile: false,
  currentUser: ''
}

export default function managePano(state = { panos: []}, action) {
  switch (action.type){
    case 'something':
      return 'something'
    default:
      return state
  }

}
