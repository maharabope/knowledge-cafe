import profile from '../../assets/DALL·E 2023-02-03 09.21.28 - edit your parpos.png'

const Header = () => {
    return (
        <header className='flex justify-between bg-slate-600 mb-3 border items-center'>
            <h1 className='text-4xl  font-bold text-white '>Knowledge Cafe</h1>
            <img className='w-14 rounded-full' src={profile} alt="" />
        </header>
    );
};

export default Header;