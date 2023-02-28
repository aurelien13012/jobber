import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = (key: string, value: string): void => {
    try {
        AsyncStorage.setItem(key, value);
    } catch (err) {
        console.log("stockage echec");
    }
};

export const getItem = async (key: string): Promise<string | undefined> => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value;
        }
    } catch (err) {
        console.log("erreur dans storage get",err);
    }
};

export const removeItem = async (key: string): Promise<void> => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (err) {
        console.log("erreur", err);
    }
};

export const removeAllItems = async (): Promise<void> => {
    try {
        await AsyncStorage.clear();
    } catch (err) {
        console.log("erreur", err);
    }
};


