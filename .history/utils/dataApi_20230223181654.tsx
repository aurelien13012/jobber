import { Response } from "./types";

export const get = async (url: string): Promise<object> => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        // if(data) {
        //     return {data : data.data}
        // }
        console.log("data try", data.message);
        return data;
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