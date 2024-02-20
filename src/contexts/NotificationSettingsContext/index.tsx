import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface NotificationSettingsContextType {
  notificationIds: Set<string>;
  addNotificationId: (id: string) => Promise<void>;
  removeNotificationId: (id: string) => Promise<void>;
}

const NotificationSettingsContext =
  createContext<NotificationSettingsContextType>(
    {} as NotificationSettingsContextType,
  );

export const useNotificationSettings = () =>
  useContext(NotificationSettingsContext);

export const NotificationSettingsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [notificationIds, setNotificationIds] = useState<Set<string>>(
    new Set(),
  );

  useEffect(() => {
    const loadNotificationSettings = async () => {
      try {
        const idsString = await AsyncStorage.getItem('notificationSettings');
        setNotificationIds(new Set(idsString ? JSON.parse(idsString) : []));
      } catch (error) {
        console.error(
          'Something went wrong while loading notification settings:',
          error,
        );
      }
    };

    loadNotificationSettings();
  }, []);

  const saveNotificationSettings = async (idsSet: Set<string>) => {
    try {
      await AsyncStorage.setItem(
        'notificationSettings',
        JSON.stringify(Array.from(idsSet)),
      );
      setNotificationIds(idsSet);
    } catch (error) {
      console.error(
        'Something went wrong while save notification settings:',
        error,
      );
    }
  };

  const addNotificationId = async (id: string) => {
    const ids = new Set(notificationIds);
    ids.add(id);
    await saveNotificationSettings(ids);
  };

  const removeNotificationId = async (id: string) => {
    const ids = new Set(notificationIds);
    ids.delete(id);
    await saveNotificationSettings(ids);
  };

  return (
    <NotificationSettingsContext.Provider
      value={{notificationIds, addNotificationId, removeNotificationId}}>
      {children}
    </NotificationSettingsContext.Provider>
  );
};
