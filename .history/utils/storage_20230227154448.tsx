import AsyncStorage from '@react-native-async-storage/async-storage';

type token = {
    token : string
}

export const setItem = async (key : string, value: string) : Promise<void> => {

}

export const getItem = async (key : string ) : Promise<token> => {

}

export const removeItem = (key? : string) : void => {
    key ? AsyncStorage.clear(key) : AsyncStorage.clear();
}
 
