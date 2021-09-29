import React from 'react';
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../../utils/consts";
import {useAuthState} from "react-firebase-hooks/auth";
import {connect} from "react-redux";


const Navbar = ({auth}) => {

    const [user] = useAuthState(auth)

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div style={{display:'flex'}}>
                <div className="navbar-brand">
                    <NavLink
                        className="text-light text-decoration-none"
                        to="/"
                        exact
                    >eShop</NavLink>
                </div>
                <ul className="navbar-nav justify-content-end">
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/"
                            exact
                        >Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/addproduct"
                        >Add Product</NavLink>
                    </li>
                </ul>
            </div>

            <div className={'btnWrapper'}>
                {user ?
                    <li className="nav-item">
                        <button onClick={() => auth.signOut()} type="button" className="btn btn-info">Logout</button>
                    </li>
                    :
                    <li className="nav-item">
                        <NavLink to={LOGIN_ROUTE}>
                            <button type="button" className="btn btn-info">Login</button>
                        </NavLink>
                    </li>
                }
            </div>
        </nav>
    )

}


const mapStateToProps = state =>({
    auth : state.app.auth
})
export default connect(mapStateToProps, null)(Navbar);