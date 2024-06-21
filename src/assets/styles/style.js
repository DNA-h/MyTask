import {StyleSheet} from 'react-native';

export const global_color = {
  PRIMARY: '#ef4056',
  PRIMARY_LIGHT: '#ef405633',
  INFO: '#28c3d7',
  INFO_LIGHT: '#dff6f9',
  BLUE: '#00a2c7',
  SUCCESS: '#02BC77',
  INFO_LIGHT: '#f1faff',
  DANGER: '#d9534f',
  DANGER_LIGHT: '#f9e5e5',
  LIGHT: '#181c211a',
  LIGHT_GRAY: '#f5f5f5',
  WHITE: '#fff',
  WARNING: '#FFD950',
  BLACK: '#000',
  GRAY: '#808080',
  MUTE: '#a3a4a6',
  SECONDARY: '#8897AA',
  LABEL: '#4E5155',
  TRANSPARENT: 'transparent',
  BORDER: '#d9d9d9',
};

export const global_font = {
  PRIMARY: 'Vazirmatn',
  PRIMARY_BOLD: 'VazirmatnBold',
};

const alert = {
  borderWidth: 1,
  fontFamily: global_font.PRIMARY,
  paddingHorizontal: 10,
  paddingVertical: 5,
  borderRadius: 8,
  borderColor: global_color.LIGHT,
};

export const primaryStyles = StyleSheet.create({
  alert: {
    ...alert,
  },
  alertInfo: {
    ...alert,
    color: global_color.INFO,
    backgroundColor: global_color.INFO_LIGHT,
  },
  alertDanger: {
    ...alert,
    color: global_color.DANGER,
    backgroundColor: global_color.DANGER_LIGHT,
  },
  alertPrimary: {
    ...alert,
    color: global_color.PRIMARY,
    backgroundColor: global_color.PRIMARY_LIGHT,
  },
  inputContainer: {
    fontFamily: global_font.PRIMARY,
    borderColor: global_color.LIGHT,
    borderWidth: 1,
    borderRadius: 8,
    width: '100%',
    paddingVertical: 3,
    paddingHorizontal: 10,
    color: global_color.BLACK,
  },
  rotate180: {transform: [{rotateY: '180deg'}]},
});
