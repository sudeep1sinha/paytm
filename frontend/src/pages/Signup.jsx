import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { Button } from "../components/Button"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Signup=()=>{
    const [ firstName , setFirstName] = useState("");
    const [ lastName , setlastName] = useState("");
    const [ username , setUserName] = useState("");
    const [ password, setPassword] = useState("");
    const navigate = useNavigate();
    return <div>
        <div>
            <Heading label={"Sign Up"} />
            <SubHeading label={"Enter your information to create an account"} />

            <InputBox onChange={e=>{
                setFirstName(e.target.value);
            }} placeholder={"sudep"} label={"Fist Name"} />

            <InputBox onChange={e=>{
                setlastName(e.target.value);
            }} placeholder={"sinha"} label={"Last Name"} />

            <InputBox onChange={e=>{
                setUserName(e.target.value);
            }} placeholder={"sudep@gmal.com"} label={"Email"} />

            <InputBox onChange={e=>{
                setPassword(e.target.value);
            }} placeholder={"123456"} label={"Password"} />
            <div className="pt-4">
                <Button onClick={async ()=>{
                    const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                        username,
                        firstName,
                        lastName,
                        password
                    });
                    localStorage.setItem("token", response.data.token)
                    navigate("/dashboard")
                }} label={"Sign Up"} />
            </div>

            <div>
                <BottomWarning label={"Already have an account ?"} buttonText={"Sign in"} to={"/signin"} />
            </div>
        </div>
    </div>

}