import axios from "axios";
import React, { useEffect, useState } from "react";
import"./style.css"
const Socialmedia=()=>{
    const[social,setsocial]=useState([]);
    useEffect(()=>{
        axios.get("js/data.json").then((res)=>{
           setsocial(res.data.social)
        })
    },[])
    const socialList=social.map((socialitem)=>{
        return(
            <div style={{backgroundColor:socialitem.color}} className="box" key={socialitem.id}>
                <i className={socialitem.icon}></i>
                <h4>{socialitem.title}</h4>
                <p>{socialitem.body}</p>   
            </div>
        )

    })
    return(
        <div className="SocialmediaSection">
            {socialList} 
        </div>
    )
}
export default Socialmedia;