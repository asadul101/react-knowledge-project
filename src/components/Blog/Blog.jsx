import PropTypes from 'prop-types';
import { IoBookmarks } from "react-icons/io5";

const Blog = ({ blog, handleClickBtn, handleBookmarkTime }) => {
    const { id,title, author_img, author, cover_img, posted_date, reading_time, hashtags } = blog;

    return (
        <div className='p-4 mx-10'>
            <div className='border-b-2 mb-10'>
                <img className='w-full rounded-xl' src={cover_img} alt="" />
                <div className='flex justify-between'>
                    <div className='flex mt-4 mb-4'>
                        <img className='w-[50px] rounded-full' src={author_img} alt="" />
                        <div className='ml-6'>
                            <h3 className='text-2xl font-medium'>{author}</h3>
                            <p>{posted_date}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span>0{reading_time} min red</span>
                        <button onClick={() => handleClickBtn(blog)} className='text-2xl text-red-700'>
                            {<IoBookmarks></IoBookmarks>}</button>
                    </div>
                </div>
                <h2 className='text-4xl font-normal mb-3'>{title}</h2>
                {
                    hashtags.map((hash, idx) => <span className='ml-3' key={idx}><a href="">{hash}</a></span>)
                }
                <div>
                    <button onClick={()=> handleBookmarkTime(reading_time,id)}
                        className='text-2xl font-serif underline text-purple-500'>Read Time</button>
                </div>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleClickBtn: PropTypes.func,
    handleBookmarkTime:PropTypes.func
}

export default Blog;