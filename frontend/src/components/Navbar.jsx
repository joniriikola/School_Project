import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className='navbar'>
            <li className='navbar_link'><Link to="/">Home</Link></li>
            <li className='navbar_link'><Link to="/order">Order</Link></li>
            <li className='navbar_link'><Link to="/menu">Menu</Link></li>
            <li className='navbar_link'><Link to="/admin/sandwich_form">Manage sandwiches</Link></li>
        </div>
    )
}
export default Navbar;