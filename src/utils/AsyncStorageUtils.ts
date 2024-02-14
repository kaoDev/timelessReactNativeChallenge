import AsyncStorage from '@react-native-async-storage/async-storage';

type StorageKey = string;
type StorageValue = string;

export const setItem = async (key: StorageKey, value: StorageValue): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error('AsyncStorage setItem error:', error);
    throw error;
  }
};

export const getItem = async <T extends StorageValue>(key: StorageKey): Promise<T | null> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value !== null ? value as T : null;
  } catch (error) {
    console.error('AsyncStorage getItem error:', error);
    throw error;
  }
};

export const removeItem = async (key: StorageKey): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('AsyncStorage removeItem error:', error);
    throw error;
  }
};

export const clearAll = async (): Promise<void> => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error('AsyncStorage clearAll error:', error);
    throw error;
  }
};