import { Configuration } from "../configuration/configuration"
export const LOGIN_API = async data => {
    try {
        const serdReq = fetch(Configuration.LOGIN_URL, {
            method: "POST",
            headers: {
                'x-non-expiring': false,
                'x-api-key': Configuration.X_API_KEY,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const promice = await serdReq;
        if (!promice.ok) {
            const res = await promice.json();
            console.log(res);
            return {
                status: res.status,
                error: res.message
            }
        }
        const res = await promice.json();

        return {
            status: res.status,
            msg: res.message,
            token: `${res.data.tokenType} ${res.data.accessToken}`,
            data: res.data.user
        }
    } catch (err) {
        console.log(err);
    }
}