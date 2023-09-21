import React, {useContext} from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext } from '../../store/FirebaseContext';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';


function Header() {
  const {user, setUser} = useContext(AuthContext)
  const navigate = useNavigate()
  
  const handleSignout = ()=>{
    const auth = getAuth();
    signOut(auth).then(()=>{
      setUser(null)
      navigate('/signup')
    })
  }


  

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName"
        onClick ={()=>{
          navigate('/')
        }}>
          <OlxLogo ></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span onClick={()=> navigate("/login")} >{user ? user.displayName : "Login"}</span>
          <hr />

        </div>
        {user && <span onClick={handleSignout}>Logout</span>}

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent"
          onClick={()=>{
            navigate('/create')
          }}>
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;







