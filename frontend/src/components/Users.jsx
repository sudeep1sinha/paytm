import { useEffect, useState } from "react"
import { Button } from "./Button"
import axios from "axios";
import { useNavigate } from "react-router-dom";




export const Users = ()=>{
    const [users , setUsers ] = useState([]);
    const [filter , setFilter] =useState("")


    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter  )
        .then(response =>{
            setUsers(response.data.user)
        })
    }, [filter])

    

    return <>
    <div>
        Users
        </div>
    <div>
        <input onChange={(e)=>{
            setFilter(e.target.value)
        }}type="text" placeholder="Search users.."></input>
        </div>    
        <div>
            {users.map(user => <User user={user} />)}
        </div>

        </>
}

function User({user}) {
    const navigate = useNavigate();
    return <div>
        {user.firstName[0]}
        <div>
            <div>
                {user.firstName} {user.lastName}
            </div>
        </div>

        <div>
            <Button onClick={(e)=>{
                navigate("/sendmoney?id=" + user._id + "&name=" + user.firstName)

            }}label={"Send money"} />
        </div>
    </div>
    

}