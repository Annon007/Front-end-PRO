import { Configuration } from "../configuration/configuration";

export const UPDATE_DETAILS = async (data) => {
    try {
        console.log(data, "FROM API FUNCTION");
        const sendReq = fetch(Configuration.USER_DETAILS, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": localStorage.getItem("GreehoToken"),
                'x-api-key': Configuration.X_API_KEY,
            },
            body: JSON.stringify(data),
        });
        const promice = await sendReq;
        if (!promice.ok) {
            const res = await promice.json();
            console.log(res)
            return {
                status: res.status,
                error: res.message,
                expireToken: res?.data?.isTokenExpired
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