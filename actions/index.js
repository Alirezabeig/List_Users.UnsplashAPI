

//import { AsyncStorage } from 'react-native';

export const RECEIVE_PROFILE='RECEIVE_PROFILE';

export const receiveProfiles = profile => ({

  type: 'RECEIVE_PROFILE',
  profile
});
