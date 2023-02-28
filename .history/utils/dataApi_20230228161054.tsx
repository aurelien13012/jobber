import { Response } from "./types";

export const get = async (url: string): Promise<Response> => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        // if (!res.ok) {
        //     return { data }
        // }
        // console.log("data", data)
        return data
    } catch (error) {
        // console.log("erreur", error)
        return { error: "Oups on a soucis ! on règle ça au plus vite :)" };
    }
}

export const post = async (url: string, post: object): Promise<Response> => {
    try {
        const res = await fetch(url, post);
        const data = await res.json();
        // console.log("res", res)
        // console.log("data", data)
        // if (!res.ok) {
        //     return data
        // }
        return data
    }
    catch (error) {
        // console.log("erreur", error)
        return { error: "Oups on a soucis ! on règle ça au plus vite :)" }
    }
}

export const put = async () => {
    try {

    } catch (error) {

    }
}