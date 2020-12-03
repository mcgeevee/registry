import React, { useEffect, useState } from "react";
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import { Link } from "react-router-dom";

const ShowAll = (props)=>{
    const [users, setUsers] = useState([])

    useEffect(()=>{
        loadUsers()
        console.log(users)
    },[])

    const loadUsers = ()=>{
        API.getUsers().then(res => {
            console.log(res.data)
            setUsers(res.data)
            console.log(users)
        }).catch(err => console.log(err))
    }

    const grabUser = (e)=>{
        console.log(e.target)
        // API.getUser(id)
    }


    return(
        <div>
            <ul>
                <div>
                    {users.map(user => (
                        <div key={user._id}> 
                        <Link to ={ "/showall/" + user._id} >
                        <strong>
                        {user.name} 
                        </strong> 
                        </Link>
                        <ul>
                            {user.giftList.map(gift =>(
                                <>
                                <li>
                                    {gift.title}
                                </li>
                                <li>
                                    <img src={gift.image} width="80px" height="80px"/>
                                </li>
                                <li>
                                    {gift.link}
                                </li>
                                </>
                            ))}
                        </ul>
                        </div>
                    ))}
                </div>
            </ul>
        </div>
    )
}

export default ShowAll;