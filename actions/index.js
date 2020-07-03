

//import { AsyncStorage } from 'react-native';

export const RECEIVE_PROFILE='RECEIVE_PROFILE';

export const receiveProfiles = profile => ({

  type: 'RECEIVE_PROFILE',
  profile
});


return (
  unsplash.search.users("steve", 1)
  .then(toJson)
  .then(json => {
  showSearchUsers: this.state.showSearchUsers.concat(json.results)
});
)

  // return (
  //   fetch(url)
  //   .then(response => response.json())
  //   .then(responseJson => {
  //     this.setState({
  //       isLoading: false,
  //       showSearchUsers: this.state.showSearchUsers.concat(responseJson.results)
  //     })
  //     console.log(url)
  //   })
  //   .catch(error => console.error(error))
  // )
