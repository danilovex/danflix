import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo.png'
import './menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button'

function Menu(){
    return (
        <nav className="Menu">
            <Link to="/">
            <img className="Logo" src={Logo} alt="DANFLIX" />
            </Link>
            {/* <ButtonLink className="ButtonLink" href="/">
                Novo vídeo
            </ButtonLink> */}
            {/* <Button as="a" className="ButtonLink" href="/">Novo vídeo</Button> */}
            <Button as={Link} className="ButtonLink" to="/cadastro/video">Novo vídeo</Button>

        </nav>
    );
}

export default Menu;