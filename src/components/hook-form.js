import { useState } from 'react';

const HookForm = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    const [fnError, setFnError] = useState("");
    const fnMessage = (e) => {
        setFirstName(e.target.value)
        if (e.target.value === "") {
            setFnError("First name is required.")
        }
        else if (e.target.value.length < 2) {
            setFnError("First name must be at least 2 characters.")
        } else {
            setFnError("")
        }
    }
    const [lnError, setLnError] = useState("");
    const lnMessage = (e) => {
        setLastName(e.target.value)
        if (e.target.value === "") {
            setLnError("Last name is required.")
        }
        else if (e.target.value.length < 2) {
            setLnError("Last name must be at least 2 characters.")
        } else {
            setLnError("")
        }
    }
    const [emailError, setEmailError] = useState("");
    const emailMessage = (e) => {
        setEmail(e.target.value)
        if (e.target.value === "") {
            setEmailError("Email is required.")
        }
        // else if (e.target.value.length < 2) {
        //     setEmailError("Email must be at least 2 characters.")}
        else {
            setEmailError("")
        }
    }
    const [pwError, setPwError] = useState("");
    const pwMessage = (e) => {
        setPassword(e.target.value)
        if (e.target.value === "") {
            setPwError("Password is required.")
        }
        else if (e.target.value.length < 7) {
            setPwError("Password must be at least 7 characters.")
        } else {
            setPwError("")
        }
    }
    const [cpwError, setCpwError] = useState("");
    const cpwMessage = (e) => {
        setConfirmPassword(e.target.value)
        if (e.target.value === "") {
            setCpwError("Password confirmation is required.")
        }
        else if (e.target.value.length !== setPassword) {
            setCpwError("Passwords must match.")
        } else {
            setCpwError("")
        }
    }
    return (
        <form onSubmit={createUser}>
            <div>
                <label>First Name</label>
                <input type="text" onChange={fnMessage} />
                {
                    fnError ?
                        <p>{fnError}</p> :
                        ''
                }
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" onChange={lnMessage} />
                {
                    lnError ?
                        <p>{lnError}</p> :
                        ''
                }
            </div>
            <div>
                <label>Email</label>
                <input type="text" onChange={emailMessage} />
                {
                    emailError ?
                        <p>{emailError}</p> :
                        ''
                }            </div>
            <div>
                <label>Password</label>
                <input type="text" onChange={pwMessage} />
                {
                    pwError ?
                        <p>{pwError}</p> :
                        ''
                }            </div>
            <div>
                <label>Confirm Password</label>
                <input type="text" onChange={cpwMessage} />
                {
                    cpwError ?
                        <p>{cpwError}</p> :
                        ''
                }            </div>
            <input type="submit" value="Register" />
            <p>View Form Here</p>
            <p>First Name {firstName}</p>
            <p>Last Name {lastName}</p>
            <p>Email {email}</p>
            <p>Password {password}</p>
            <p>Confirm Password {confirmPassword}</p>
        </form>
    );

};

export default HookForm;