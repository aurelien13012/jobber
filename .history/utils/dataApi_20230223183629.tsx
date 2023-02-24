import { Response } from "./types";

export const get = async (url: string): Promise<object> => {
    try {
        const res = await fetch(url);
        if(!res.ok) {
            return {error : "Oups on a soucis ! on règle ça au plus vite :)" }
        }
        const data = await res.json();
        return {data}
        // console.log("data try", data.message);
        // return data;
    } catch (error) {
        return { error };
    }
}

export const post = async (url: string, post: object): Promise<object | Response> => {
    try {
        const res = await fetch(url, post);
        const data = await res.json();
        return { data }
    }
    catch (err) {
        return { err }
    }
}