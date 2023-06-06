import axios from "axios";
import React,{useState,useEffect}from "react";
import "./style.css"
const Portfolio =()=>{
    const[images,setImages]=useState([])
    useEffect(()=>{
        axios.get("js/data.json").then((res)=>{
            setImages(res.data.portfolio) 
        })
    },[])

    const PortfolioImages= images.map((imageItem)=>{
        return(
            <div key={imageItem.id} className="content">
                <img src={imageItem.image} alt=""/>
                <span>image show</span>
            </div>
        )

    })

    return(
        <div className="Portfoliosection">
            <h2 className="Portfoliotitle"><span>My</span> Portofolio</h2>
            <ul className="ullist">
                <li>All</li>
                <li>Html</li>
                <li>Photoshop</li>
                <li>Wordpress</li>
                <li>Mobile</li>
            </ul>
            <div className="Portfolioinfo">
                { PortfolioImages}
            </div>   
        </div>
    )
}
export default Portfolio;