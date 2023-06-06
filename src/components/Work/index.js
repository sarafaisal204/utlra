import axios from "axios";
import React, { Component } from "react";
import"./style.css"
class Work extends Component{
    state={
        works:[]
    }
    componentDidMount(){
        axios.get("js/data.json").then(res=>{
            this.setState({
               works: res.data.works
            })
        })
    }
    render(){
        const {works}=this.state;
        const workslist=works.map((workitem)=>{
            return(
                <div className="content" key={workitem.id}>
                    <i className={workitem.icon_name}></i>
                    <h4>{workitem.title}</h4>
                    <hr></hr>
                    <p>{workitem.body}</p>
                </div>

            )
        })
        return(
            <div className="worksection">
                <div className="container">
                    <h1 className="worktitle"><span>My</span> Work</h1>
                    <div className="workinfo">
                        {workslist}  
                    </div>

                </div>
            </div>
        )
    }
}
export default Work;