type Result = {
    data?: object,
    error?: string
}

export const get = async (url: string): Promise<Result> => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return { data };
    } catch (err) {
        return { err };
    }
}

export const post = async (url: string, post: object): object | Promise<Result> => {
    try {
        const res = await fetch(url, post);
        const data = await res.json();
        return { data }
    }
    catch (err) {
        return { err }
    }
}