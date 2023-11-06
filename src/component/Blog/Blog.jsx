import PropTypes from 'prop-types';

const Blog = ({ blog }) => {

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
                <div>
                    <p>0{reading_time} min read</p>
                </div>
                
            </div>
            <h3 className='my-8 text-4xl font-bold'>{title}</h3>
            <p className='text-slate-500 mb-8'>{hashtag}</p>
        </div>
    );
};

Blog.propTypes={
    blog: PropTypes.object.isRequired
}

export default Blog;