import React, { useState, useContext, useEffect } from "react";
import styles from "./userProfile.module.css";
import Button from "../ui/formButton"
import DefaultImg from "../../icons/images/defaultImg.png";
import { UPLOAD_IMAGE, GET_IMAGE } from "../../api/uploadImage-api";
import { USER_DETAILS } from "../../api/user-details-api";
import Loading from "../ui/loading";
import { Error_Toast, Success_Toast } from "../ui/toast/toast";
import { UserContext } from "../../store/user-context";
import { Configuration } from "../../configuration/configuration";


const UserProfile = props => {
    // const [fileName, setFile] = useState();
    const [image, setImage] = useState(DefaultImg);
    const [imageFile, setImageFile] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [formValidation, setFormValidation] = useState(false);

    const [email, setEmail] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [weight, setWeight] = useState(false);
    const [height, setHeight] = useState(false);
    const [address, setAddress] = useState(false);
    const [university, setUniversity] = useState(false);
    const [maritalStatus, setMaritalStatus] = useState(false);
    const LogCtx = useContext(UserContext);


    const handelEMail = e => {
        console.log("chnage")
        setEmail(e.target.value.includes("@"));
    }
    const handelMobile = e => {
        setMobile(e.target.value.startsWith("+880"));
    }
    const handelWeight = e => {
        setWeight(+e.target.value > 0);
    }
    const handelHeight = e => {
        setHeight(+e.target.value > 0);
    }
    const handelAddress = e => {
        setAddress(e.target.value.length > 7);
    }
    const handelUniversity = e => {
        setUniversity(e.target.value.length >= 2);
    }
    const handelMaritalStatus = e => {
        setMaritalStatus(e.target.value.includes("ed"));
    }
    console.log(email, mobile, weight, height, address, university, maritalStatus)
    useEffect(() => {
        setFormValidation(email && mobile && weight && height && address && university && maritalStatus)
    }, [email, mobile, weight, height, address, university, maritalStatus])

    const handleImage = async e => {
        // console.log(e.target.value)
        setIsLoading(true)
        const files = e.target.files;
        const formData = new FormData();
        formData.append('file', files[0]);
        const res = await UPLOAD_IMAGE(formData);
        if (res?.token) {
            setIsLoading(false);
            LogCtx.setIsLoggedIn();
            localStorage.removeItem("GreehoToken");
            localStorage.removeItem("GreehoUser");
            Error_Toast(res.error);
        } else {
            setIsLoading(false);
            setImageFile(res.fileName);
            Success_Toast(res?.msg);
        }
        const profile = await GET_IMAGE(res.fileName);
        if (profile?.status === 500 || profile?.status === 401) {
            setIsLoading(false);
            Error_Toast(profile.error);
        } else {
            setIsLoading(false);
            setImage(profile);
        }
    };

    const handelDetailFrom = async e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        const finalData = {...data, weight:+data.weight, height:+data.height, profilePicture:imageFile};
        const res = await USER_DETAILS(finalData);
        console.log(res, "UPDATING INFOS");
        if(res.status === 200){
            LogCtx.setUser(res.data.account);
            Success_Toast(res.msg);
        } 
        if(res.expireToken || res.status === 400 || res.status === 500) {
            // LogCtx.setIsLoggedIn();
            // localStorage.removeItem("GreehoToken");
            // localStorage.removeItem("GreehoUser");
            Error_Toast(res.error);
        }
        console.log(finalData);
    }

    return <div className={styles.profileContainer}>
        <div className={styles.profileContent}>
            <div className={styles.profileImageContainer}>
                {isLoading && <Loading />}
                {!isLoading && <img src={LogCtx.userDetails.profilePicture?`https://exam.greeho.com/api/files/${LogCtx.userDetails.profilePicture}` : image} className={styles.profileImage} alt="profile" />}
                <input type="file" onChange={handleImage} className={styles.fileInput} />
            </div>
        </div>
        <form onSubmit={handelDetailFrom} className={styles.profileForm}>
            <p>Email</p>
            <input type="email" name="email" onChange={handelEMail} defaultValue={LogCtx.userDetails.email} required />
            <p>Mobile</p>
            <input type="text" name="mobile" onChange={handelMobile} defaultValue={LogCtx.userDetails.mobile} required />
            <p>Marital Status</p>
            <input type="text" name="maritalStatus" onChange={handelMaritalStatus} defaultValue={LogCtx.userDetails.maritalStatus} required />
            <p>Address</p>
            <input type="text" name="address" onChange={handelAddress} defaultValue={LogCtx.userDetails.address} required />
            <p>University</p>
            <input type="text" name="university" onChange={handelUniversity} defaultValue={LogCtx.userDetails.university} required />
            <p>Weight</p>
            <input type="number" name="weight" onChange={handelWeight} defaultValue={LogCtx.userDetails.weight} required />
            <p>Height</p>
            <input type="number" name="height" onChange={handelHeight} defaultValue={LogCtx.userDetails.height} required />
            <Button type="submit" >Submit</Button>
            {/* disabled={!formValidation} */}
        </form>

    </div>
};

export default UserProfile;