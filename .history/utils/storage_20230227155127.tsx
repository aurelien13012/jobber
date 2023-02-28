import AsyncStorage from '@react-native-async-storage/async-storage';

// type tokenStorage = {
//     token : string
// }

export const setItem = async (key : string, value: string) : Promise<void> => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (err) {
        console.log("stockage echec");
    }
};

export const getItem = async (key : string ) : Promise<string> => {
    try {
        const token = await AsyncStorage.getItem(key);
        // return {token}
        return token
    } catch (err) {
        
    }
}

// export const removeItem = (key? : string) : void => {
//     key ? AsyncStorage.clear(key) : AsyncStorage.clear();
// }
 
