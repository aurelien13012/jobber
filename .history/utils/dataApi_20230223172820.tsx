// type Result = {
//     data?: object,
//     error?: string
// }

import { Result } from "./types";

export const get = async (url: string): Promise<object | Result> => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log("data try", data.message);
        return data;
    } catch (err) {
        return { err };
    }
}

export const post = async (url: string, post: object): Promise<object | Result> => {
    try {
        const res = await fetch(url, post);
        const data = await res.json();
        return { data }
    }
    catch (err) {
        return { err }
    }
}