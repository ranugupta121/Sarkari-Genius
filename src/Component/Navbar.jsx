import { Link,  useNavigate } from 'react-router-dom';

const Navbar = () => {
  // const [isLogin, setIsLogin] = useState(false);
  const navigate=useNavigate()
  const handleLogin=()=>{
    navigate('/login')
  }

  return(
        <div className="navbar">
          <div className="font-bold bg-[#50d71e] h-[50px] text-center text-2xl">
            <h1>WWW.SarkariGenius.com</h1>
          </div>
          <div className="bg-white-900 border h-[60px] font-bold ">
            <ul className='flex justify-center text-center gap-20 ml-28 '>
              <li className='text-xl hover:text-green-400 hover:bg-green-100 rounded px-3 py-1'>
                <Link to="/">Home</Link>
              </li>
              <li className='text-xl hover:text-green-400 hover:bg-green-100 rounded px-3 py-1'>
                <Link to="/govtjobs">GovtJobs</Link>
              </li>
              <li className='text-xl hover:text-green-400 hover:bg-green-100 rounded px-3 py-1'>
                <Link to="/privatejob">PrivateJob</Link>
              </li>
              <div>
                <button
                  onClick={handleLogin}
                  className='px-4 py-2 bg-[#50d71e] text-black text-lg rounded -mr-[570px]'>
                  Login
                </button>
              </div>
            </ul>
          </div>
        </div>
      

  );
};

export default Navbar;
