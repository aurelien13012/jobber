import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (key: string, value: string): Promise<void> => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (err) {
        console.log("stockage echec");
    }
};

export const getItem = async (key: string): Promise<string | undefined> => {
    try {
        const token = await AsyncStorage.getItem(key);
        if (token !== null) {
            return token
        }
    } catch (err) {
        console.log(err)
    }
}

// export const removeItem = (key? : string) : void => {
//     key ? AsyncStorage.clear(key) : AsyncStorage.clear();
// }

