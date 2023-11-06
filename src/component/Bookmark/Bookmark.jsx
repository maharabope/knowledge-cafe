
import PropTypes from 'prop-types';

const Bookmark = ({bookmark})=> {
    const{title}=bookmark
    return (
        <div className=''>
            <p>{title}</p>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
    
};

export default Bookmark;