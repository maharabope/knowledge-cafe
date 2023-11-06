
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired
    
};

function Bookmarks({bookmarks}) {
    console.log(bookmarks)
    return (
        <div>
             <div className="w-full ml-8 bg-slate-400">
                <h1 className='text-3xl'>Bookmark:</h1>
            
            {
                bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
            
        </div>
        </div>
    );
}

export default Bookmarks;