import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setLoggedUser, disconnectUser } from "../redux/actions";

import '../styles/NavBar.scss';

export const NavBar = () => {
    const logged = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    return(<div className="NavBar">
        <NavLink className='link' style={{ padding: '1rem' }} to="/admin">Vue Administration</NavLink>
        <NavLink className='link' style={{ padding: '1rem' }} to="/books">Vue Livres</NavLink>
        <NavLink className='link' style={{ padding: '1rem' }} to="/login">Se connecter</NavLink>
        {logged && <button onClick={() => dispatch(disconnectUser())}>Deconnecter</button>}
    </div>)
};