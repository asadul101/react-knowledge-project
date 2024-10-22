import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';

const Bookmarks = ({ bookmarks, bookmarkTime }) => {
    return (
        <div className="md:w-1/3 bg-gray-100 p-6">
            <div>
                <h2 className="text-3xl font-bold p-6 mb-6 text-center border-2 rounded-xl bg-slate-500">Spent time on read: {bookmarkTime} min</h2>
            </div>
            <div className="border-2 border-red-400 rounded-xl p-5 bg-gray-500">
                <h3 className="text-4xl text-center">Bookmarks {bookmarks.length}</h3>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmarkTime={bookmarkTime} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    bookmarkTime: PropTypes.number
}

export default Bookmarks;