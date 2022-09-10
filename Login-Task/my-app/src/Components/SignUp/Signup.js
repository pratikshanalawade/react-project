import React, { useState } from 'react'
import { Link ,useNavigate} from "react-router-dom";
import styles from "./Signup.module.css";
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import InputControl from "../InputControl/InputControl";
import { auth } from '../../firebase';

const Signup = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: "",
        email: "",
        pass: "",
        conformpass: ""
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmission = () => {
        if (!values.email|| !values.name || !values.pass || !values.conformpass) {
            setErrorMsg("Fill all fields");
            return;

        }
        setErrorMsg("");
        setSubmitButtonDisabled(true);
        createUserWithEmailAndPassword(auth, values.email, values.pass)
            .then(async(res)=>{
                setSubmitButtonDisabled(false);
                const user = res.user;
               // console.log(user)
               await updateProfile(user, {
                    displayName: values.name,
                  });
                  navigate('/')
            })
            .catch((err)=>{
                setErrorMsg(err.message);
                setSubmitButtonDisabled(false);
                console.log(err)
            })
    }
return (
    <div className={styles.container}>
        <div className={styles.innerBox}>
            <h1 className={styles.heading}>SignUp</h1>
            <InputControl label="Email" placeholder="Enter email address"
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, email: event.target.value }))
                }
            />
            <InputControl label="Username" placeholder="Enter your username"
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, name: event.target.value }))
                }
            />
            <InputControl label="Password" placeholder="Enter your password"
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, pass: event.target.value }))
                }
            />
            <InputControl label="ConformPassword" placeholder="Re-enter password"
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, conformpass: event.target.value }))
                }

            />


            <div className={styles.footer}>
                <b className={styles.error}>{errorMsg}</b>
                <button onClick={handleSubmission} disabled={submitButtonDisabled}>
                    Signup
                </button>
                <p>
                    Already have an account?{" "}
                    <span>
                        <Link to="/Login">Login</Link>

                    </span>
                </p>


            </div>
        </div >
    </div >
)
}

export default Signup
