import { useState } from 'react';
import { Link } from 'react-router-dom';
import'../../css/Navbar.css';
const Navbar=()=>{
    var [dropdown,showDropdown]=useState(false)
    const toggleDropdown=()=>{
        showDropdown(dropdown=>!dropdown)
        
    }
    return(
        <header>
        <nav>
            <ol>
                <li><Link to='/' className="link">Home</Link></li>
                <li><Link to='/about' className="link">About</Link></li>
                <li><Link to='/gallery' className="link">Gallery</Link></li>
                <li><Link to='/contact' className="link">Contact</Link></li>
                <div>
                    <span onMouseEnter={toggleDropdown}>Hooks</span>
                    {dropdown &&(
                    <ul>
                        <li><Link to='/useState' className='link'>useState</Link></li>
                        <li><Link to='/useEffect' className='link'>useEffect</Link></li>
                        <li><Link to='/useapi 'className="link">UseEffect API</Link></li>
                        <li><Link to='/usereducer 'className="link">UseReducer</Link></li>
                        <li><Link to='/useimage 'className="link">UseEffect API Image</Link></li>
                        <li><Link to='/use-ref 'className="link">Useref</Link></li>
                        <li><Link to='/usememo 'className="link">UseMemo</Link></li>
                        <li><Link to='/usecall 'className="link">UseCallback</Link></li>
                        <li><Link to='/react-lifecycle-methods 'className="link">ReactLifecycleMethods</Link></li>
                    </ul>)}
                </div>

                <li><Link to='/useapi 'className="link">UseEffect API</Link></li>
                <li><Link to='/signup 'className="link">SignUp</Link></li>
                <li><Link to='/login 'className="link">Login</Link></li>

            </ol>
        </nav>
        </header>
    )
}
export default Navbar;