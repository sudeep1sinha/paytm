import { useSearchParams } from "react-router-dom"
import axios from "axios"
import { useState } from "react";

export const SendMoney = () =>{
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount , setAmount] = useState(0);
    return <div>
        <div>
            <h2>Send Money</h2>
        </div>
        <div>
            {name[0].toUpperCase}
        </div>

        <div>
            <h3>{name}</h3>
        </div>

        <div>
            Amount (in Rs)
        </div>
        <input onChange={(e)=>{
            setAmount(e.target.value);
        }}
        type="number"
        id="amount"
        placeholder="Enter Amount"
        />
        <button onClick={()=>{
            axios.post("http://localhost:3000/api/v1/account/transfer",{
                to:id,
                amount
            },{
                headers:{
                    Authorization : "Bearer " + localStorage.getItem("token")
                }
            })

        }}>  
            Initiate transfer
        </button>
    </div>
}