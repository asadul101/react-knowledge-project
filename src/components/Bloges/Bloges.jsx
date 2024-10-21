import { useEffect } from "react";
import { useState } from "react";

const Bloges = () => {
    const[bloges,setBloges]=useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data=>setBloges(data))
    },[])
    return (
        <div>
            <h3>Data: {bloges.length}</h3>
        </div>
    );
};

export default Bloges;