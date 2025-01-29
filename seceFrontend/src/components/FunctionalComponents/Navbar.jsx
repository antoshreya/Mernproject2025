import { useState } from 'react';
import { Link } from 'react-router-dom';
import'./css/Navbar.css';
const Navbar=()=>{
    var [memodropdown,showmemoDropdown]=useState(false)
    const togglemDropdown=()=>{
        showmemoDropdown(memodropdown=>!memodropdown)}
        var [hookdropdown,showhookDropdown]=useState(false)
    const togglehDropdown=()=>{
        showhookDropdown(hookdropdown=>!hookdropdown)

    }
    const handleLogout = () => {
        setIsLoggedIn(false); 
      };

    return(
        <header>
        <nav>
            <ol>
                <li><Link to='/home' className="link">Home</Link></li>
                <li><Link to='/about' className="link">About</Link></li>
                <li><Link to='/gallery' className="link">Gallery</Link></li>
                <li><Link to='/contact' className="link">Contact</Link></li>
                <li><Link to='/hoc' className="link">Higher Order Components</Link></li>
                <div onMouseEnter={togglehDropdown} onMouseLeave={togglehDropdown} style={{ position: 'relative', display: 'inline-block' }}>
                        <span style={{color:'black'}}>Hooks</span>
                        {hookdropdown && (
                            <ul style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                listStyle: 'none',
                                margin: 0,
                                padding: '10px',
                                color:'black',

                                backgroundColor:' red',
                                boxShadow: '0px 4px 6px black',
                                borderRadius: '5px',
                                zIndex: 1,
                            }}>
                         <li><Link to='/reactlm' className='link'>LifeCyle</Link></li>       
                       <li><Link to='/useState' className='link'>useState</Link></li>
                        <li><Link to='/useEffect' className='link'>useEffect</Link></li>
                        <li><Link to='/useapi' className='link'>UseEffectAPI</Link></li>
                        <li><Link to='/useimage' className='link'>useEffectAPIImage</Link></li>
                        <li><Link to='/usereducer' className='link'>useReducer</Link></li>
                        <li><Link to='/useref' className='link'>Useref</Link></li>
                        <li><Link to='/usememo' className='link'>UseMemo</Link></li>
                        <li><Link to='/usecallback' className='link'>UseCallback</Link></li>
                        <li><Link to='/usecontext' className='link'>UseContext</Link></li>
                        <li><Link to='/usecustom' className='link'>CustomHooks</Link></li>
                        <li><Link to='/usecustom2' className='link'>CustomHooks2</Link></li>
                    </ul>)}
                </div>
                <div  onMouseEnter={togglemDropdown} style={{ position: 'relative', display: 'inline-block' }}>
                        <span style={{color:'black'}}>Memoization</span>
                        {memodropdown && (
                            <ul style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                listStyle: 'none',
                                margin: 0,
                                padding: '10px',
                                color:'black',

                                backgroundColor:' red',
                                boxShadow: '0px 4px 6px black',
                                borderRadius: '5px',
                                zIndex: 1,
                            }}>
                         <li><Link to='/memo' className='link'>Memo</Link></li> 
                         <li><Link to='/lazy' className='link'>LazySuspense</Link></li>       
                       
                    </ul>)}
                    </div>
                
                    <li><Link to="/" className="link" onClick={handleLogout}>Logout</Link></li>
            </ol>
        </nav>
        </header>
    )
}
export default Navbar;