type Result = {
    data? : object,
    error ? : string
}

export const get = async (url : string) : Promise<object> => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return {data};
    } catch (err) {
        return {err};
    }
}

export const post = async (url : string, post : object) : Promise<object> => {
    try {
        const res = await fetch(url, post);
        const data = await res.json();
        return {data}
    }
    catch (err) {
        return {err}
    }
}