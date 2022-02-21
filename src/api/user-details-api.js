import { Configuration } from "../configuration/configuration";

export const USER_DETAILS = async () => {
    try {
        const sendReq = fetch(Configuration.USER_DETAILS, {
            method: "GET",
            headers: {
                "Authorization": localStorage.getItem("GreehoToken"),
                'x-api-key': Configuration.X_API_KEY,
            }
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
        const res = await promice.json();
        console.log(res);
        return {
            status: res.status,
            msg: res.message,
            data: res.data.account
        }
    } catch (err) {

    }

}