import { Configuration } from "../configuration/configuration";

export const USER_DETAILS = async (data = false) => {
    console.log(data, "FROM API FUNCTION");
    try {
        const sendReq = fetch(Configuration.USER_DETAILS, {
            method: data?"PUT":"GET",
            headers: {
                "Authorization": localStorage.getItem("GreehoToken"),
                'x-api-key': Configuration.X_API_KEY,
            },
            body:data? JSON.stringify(data):null
        });
        const promice = await sendReq;
        if (!promice.ok) {
            const res = await promice.json();
            console.log(res)
            return {
                status: res.status,
                error: res.message,
                expireToken : res?.data?.isTokenExpired
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