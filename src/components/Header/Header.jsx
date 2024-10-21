import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div  className='flex justify-between p-4 mx-10 border-b-2'>
            <h1 className='text-5xl font-bold'>Knowledge React</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;