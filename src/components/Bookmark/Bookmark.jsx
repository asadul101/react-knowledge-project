import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const{title}=bookmark;
    
    return (
        <div>
            <div className='bg-slate-300 p-6 m-6 rounded-lg'>
            <h3 className='text-3xl'>{title}</h3>
            </div>
        </div>
    );
};
Bookmark.propTypes={
    bookmark:PropTypes.object,
}
export default Bookmark;