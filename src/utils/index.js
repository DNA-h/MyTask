import {Share} from 'react-native';

import {toastErrorMessage} from './toastMessage/toastMessage';
import {global_color} from '../assets/styles/style';

//* Start Number Utils
export const numberSeparate = number => {
  return number?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
//* End Number Utils

//* Start Share
export const share = async message => {
  try {
    const result = await Share.share({
      message,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    toastErrorMessage(error.message);
  }
};
//* End Share

//* Start Color
export const convertColorText = type => {
  let result = '';

  switch (type) {
    case 'primary':
      result = global_color['PRIMARY'];
      break;
    case 'primary-light':
      result = global_color['PRIMARY_LIGHT'];
      break;
    case 'info':
      result = global_color['INFO'];
      break;
    case 'info-light':
      result = global_color['INFO_LIGHT'];
      break;
    case 'blue':
      result = global_color['BLUE'];
      break;
    case 'dark-blue':
      result = global_color['DARK_BLUE'];
      break;
    case 'dark-green':
      result = global_color['DARK_GREEN'];
      break;
    case 'success':
      result = global_color['SUCCESS'];
      break;
    case 'success-light':
      result = global_color['SUCCESS_LIGHT'];
      break;
    case 'info-light':
      result = global_color['INFO_LIGHT'];
      break;
    case 'danger':
      result = global_color['DANGER'];
      break;
    case 'danger-light':
      result = global_color['DANGER_LIGHT'];
      break;
    case 'light':
      result = global_color['LIGHT'];
      break;
    case 'light-gray':
      result = global_color['LIGHT_GRAY'];
      break;
    case 'white':
      result = global_color['WHITE'];
      break;
    case 'warning':
      result = global_color['WARNING'];
      break;
    case 'black':
      result = global_color['BLACK'];
      break;
    case 'gray':
      result = global_color['GRAY'];
      break;
    case 'mute':
      result = global_color['MUTE'];
      break;
    case 'secondary':
      result = global_color['SECONDARY'];
      break;

    default:
      result = type;
      break;
  }

  return result;
};
//* End Color

//* Start Trim Text
export const trimString = (inputString, maxLength) => {
  if (inputString.length > maxLength)
    return `${inputString.substring(0, maxLength - 3)}...`;

  return inputString;
};
//* End Trim Text
