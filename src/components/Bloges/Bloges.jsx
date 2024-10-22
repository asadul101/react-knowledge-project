import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Bloges = ({handleClickBtn,handleBookmarkTime}) => {
    const[bloges,setBloges]=useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data=>setBloges(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-3xl ml-10">Bloges {bloges.length}</h1>
            {
                bloges.map(blog=><Blog 
                    key={blog.id} blog={blog}
                    handleClickBtn={handleClickBtn}
                    handleBookmarkTime={handleBookmarkTime}
                ></Blog>)
            }
        </div>
    );
};
Bloges.propTypes={
    handleClickBtn:PropTypes.func,
    handleBookmarkTime:PropTypes.func
}

export default Bloges;