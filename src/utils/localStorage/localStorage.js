import AsyncStorage from '@react-native-async-storage/async-storage';

export const setLocalStorage = async (name, value) => {
  try {
    await AsyncStorage.setItem(name, value);
  } catch (err) {
    // Err
  }
};

export const getLocalStorage = async name => {
  try {
    const value = await AsyncStorage.getItem(name);
    return value;
  } catch (err) {
    // Err
  }
};

export const removeLocalStorage = async name => {
  try {
    await AsyncStorage.removeItem(name);
  } catch (err) {
    // Err
  }
};

export const clearLocalStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (err) {
    // Err
  }
};
