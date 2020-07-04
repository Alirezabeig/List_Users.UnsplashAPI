

//import { AsyncStorage } from 'react-native';

export const RECEIVE_PROFILE='RECEIVE_PROFILE';

export const receiveProfiles = profiles => {
  //console.log("action Profiles=> ",profiles);
return {
  type: 'RECEIVE_PROFILE',
  profiles
}

};
