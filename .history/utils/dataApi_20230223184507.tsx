import { Response } from "./types";

export const get = async (url: string): Promise<Response> => {
    try {
        const res = await fetch(url);
        console.log("res", res)
        if(!res.ok) {
            return {error : "Oups on a soucis ! on règle ça au plus vite :)" }
        }
        const data = await res.json();
        return data
    } catch (error) {
        console.log("erreur", error)
        return { error : "Oups on a soucis ! on règle ça au plus vite :)" };
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