import { Configuration } from "../configuration/configuration";
export const SIGN_UP = async data =>{
    try {
        const sendReq= fetch(Configuration.SIGN_UP_URL, {
            method:'POST',
            headers:{
                'x-non-expiring' :false,
                'x-api-key' : Configuration.X_API_KEY,
                'Content-Type':'application/json',
            },
            body:JSON.stringify(data)
        });
        const promice = await sendReq;
        if(!promice.ok){
            const res =  await promice.json();
            return {
                error : res.data.errors
            }
            // const errRes = await promice.json();
            // errRes.data.errors
            // throw new Error(new Array(errRes.data.errors))
        }
        const res =  await promice.json();
        return {
            status : res.status,
            msg : res.message,
            token : `${res.data.tokenType} ${res.data.accessToken}`,
            data : res.data.user
        }
    } catch(err) {
        console.error(err, "💥💥💥💥")
    }
};