import React ,{ useState} from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MicIcon from '@material-ui/icons/Mic';

import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function Header() {
  const [search, setSearch] = useState(false);
  const [inputSearch, setInputSearch] = useState("");

  const openSearch = (e) => {
    setSearch(true);
  }


  const searchinput1 = search ? 'searchinput active' : 'searchinput';
  return (
    <div >
    <div className="header">
    
      <div className="header_left">
          <MenuIcon />
          <Link to="/">
       <img className="header_logo" src="https://www.pngitem.com/pimgs/m/508-5089004_youtube-logo-png-images-download-youtube-new-logo.png" alt="images"/>
       </Link>
      </div>
      <div className="header_input">
          <input className={searchinput1} type="text" placeholder="search"
            value={inputSearch} onChange={ (e)=>setInputSearch(e.target.value)} />
          <Link to ={`/search/${inputSearch}`}>
              <SearchIcon onClick={openSearch} className="headerinputbutton" />
          </Link>
        </div>
      <div className="header_icons">
      <VideoCallIcon className="icon"/>
        <MicIcon className="icon" />
        <NotificationsIcon/>
      
      <AppsIcon className="icon" />
      <AccountCircleIcon className="icon" />
      </div>
      
  
      
      </div>
   
      </div>
  );
}

export default Header;
