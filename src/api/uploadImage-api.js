import { Configuration } from "../configuration/configuration";

export const UPLOAD_IMAGE = async data => {
    try {
        const sendReq = fetch(Configuration.UPLOAD_IMG, {
            method: "POST",
            headers: {
                "Authorization": localStorage.getItem("GreehoToken"),
                'x-api-key': Configuration.X_API_KEY,
            },
            body: data,
        });
        const promice = await sendReq;
        if (!promice.ok) {
            const res = await promice.json();
            console.log(res)
            return {
                status: res.status,
                error: res.message,
                token: res.data.isTokenExpired
            }
        }
        const res = await promice.json();
        console.log(res);
        return {
            status: res.status,
            msg: res.message,
            fileName: res.data.fileName
        }
    } catch (err) {

    }
};

export const GET_IMAGE = async file => {
    try {
        console.log("running");
        const sendReq = fetch(`${Configuration.UPLOAD_IMG}/${file}`, {
            method: "GET"
        });
        const promice = await sendReq;
        if (!promice.ok) {
            const res = await promice.json();
            console.log(res)
            return {
                status: res.status,
                error: res.message
            }
        }
        return promice.url;
    } catch (err) {

    }
};