import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div style={{'marginRight':'20px'}}>
            <NavLink to = "/" > Home</NavLink>
            <NavLink to = "/Login" > Login</NavLink>
        </div>
    );
};

export default Header;