import React from "react";
import logo from "../images/logo.png";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const Topbars = () => {
    return ( 
        <div className="bar" >
            <img src={logo} alt="" sx={{fontSize: 15}} className="cit"/>
            <AddShoppingCartIcon sx={{fontSize: 45}} className="cit2"/>
        </div>
     );
}
 
export default Topbars;