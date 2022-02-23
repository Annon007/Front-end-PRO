import React, { useEffect, useState, useContext } from "react";
import { Configuration } from "../../../configuration/configuration";
import { Error_Toast, Success_Toast } from "../../ui/toast/toast";
import styles from "./users.module.css";
import Modal from "../../ui/modal";
import Loading from "../../ui/loading";
import { UserContext } from "../../../store/user-context";

const Users = props => {
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const LogCtx = useContext(UserContext);
    const id = window.location.hash.slice(1);

    useEffect(() => {
        const getUserByID = async () => {
            try {
                const sendReq = fetch(`${Configuration.USER_BY_ID}${id}`, {
                    method: "GET",
                    headers: {
                        'x-api-key': Configuration.X_API_KEY,
                    }
                });
                const promise = await sendReq;
                if (!promise.ok) {
                    setIsLoading(false)
                    const res = await promise.json();
                    console.log(res);
                    if (res.status === 401) {
                        LogCtx.setIsLoggedIn();
                        LogCtx.setUser();
                        LogCtx.setShowProfile(false);
                    }
                    Error_Toast(res.message);

                }
                const res = await promise.json();
                Success_Toast(res.message);
                console.log(res.data.user, "Imediat after fetching");
                setUser(prev => {
                    return prev = [res.data.user]
                });
                setIsLoading(false)
            } catch (err) {

            }
        };
        getUserByID()
    }, [id])
    console.log(user)
    const FinalUser = {
        Name: user?.[0]?.username,
        Email: user?.[0]?.email,
        Mobile: user?.[0]?.mobile,
        Address: user?.[0]?.address,
        University: user?.[0]?.university
    };
    console.log(Object.entries(FinalUser))
    return <Modal onClose={props.onClose}>
        {isLoading && <Loading />}
        {!isLoading && <div>
            {Object.entries(FinalUser).map(([key, value]) => {
                return <p>{key} : <span>{value}</span></p>
            })}
        </div>}

    </Modal>
}
export default Users;