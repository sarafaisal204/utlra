import axios from "axios";
import React,{useState,useEffect} from "react";
import"./style.css"
const Profile =()=>{
    const[skills,setskills]=useState([])
    useEffect(()=>{
        axios.get("js/data.json").then(res=>{
            setskills(res.data.profile)
        })
    })
    const skilllist=skills.map((skillItem)=>{
        return(
            <div key={skillItem.id} className="skill">
                <p className="skillname">{skillItem.skill}</p> 
                <span className="spanskill">{skillItem.number}</span>
                <div className="line" style={{width:skillItem.number}}></div>
             </div>
        )
    })



    return(
        <div className="ProfileSection">
            <div className="container">
                <div className="skillInfo">
                    <div className="content">
                        <h4 className="contenttitel"><span>My</span> Profile</h4>
                        <ul>
                            <li><span>Name</span>Hamza Nabil</li>
                            <li><span>Birthday</span>11/11/1111</li>
                            <li><span>Adress</span>Ani shams</li>
                            <li><span>Phone</span>4444 5555 6666</li>
                            <li><span>Email</span>hamza@hamza.com</li>
                            <li><span>Website</span><a href="www.google.com">www.google.com</a></li>
                        </ul>
                    </div>
                    <div className="skills">
                        <h4>Some <span>skills</span></h4>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.</p>
                        <div className="skill">
                            {skilllist} 
                        </div>
                    </div>
                </div>    
            </div>
            
        </div>
    )
}
export default Profile;