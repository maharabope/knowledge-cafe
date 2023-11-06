import PropTypes from 'prop-types';
// import { CiBookmarkPlus } from 'react-icons/fa';
import { FaRegBookmark } from 'react-icons/fa';

const Blog = ({ blog, handelBookmark }) => {

    const { author_img, author_name, release_date, img, title, reading_time, hashtag }=blog;

    // console.log(img)
    return (
        <div className=''>
            <img className='w-full' src={img} alt="" />
            <div className='mt-8 flex justify-between items-center'>
                <div className='flex gap-4'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <p className='text-2xl font-bold'>{author_name}</p>
                        <p>{release_date}</p>
                    </div>
                    
                </div>
                <div className='flex gap-2'>
                    <p>0{reading_time} min read</p>
                    <button onClick={()=>handelBookmark(blog)}><FaRegBookmark></FaRegBookmark></button>
                    
                </div>
                
            </div>
            <h3 className='my-8 text-4xl font-bold'>{title}</h3>
            <p className='text-slate-500 mb-8'>{hashtag}</p>
        </div>
    );
};

Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handelBookmark: PropTypes.func
}

export default Blog;