import AsyncStorage from '@react-native-async-storage/async-storage';

const write = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    throw new Error('Can`t save data to Async Storage');
  }
};

const read = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    throw new Error('Can`t get data to Async Storage');
  }
};

const remove = async (key: string) => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (error) {
    throw new Error('Can`t remove data form Async Storage');
  }
};

export const AsyncStorageUtil = {
  write,
  read,
  remove,
};
