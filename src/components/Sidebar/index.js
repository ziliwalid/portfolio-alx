import { NavLink } from 'react-router-dom';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Layout = () => {
    return (
        <div className='nav-bar'>
            {/* Logo */}
            <div className="logo">
                <span className="logo-line">W</span>
                <br />
                <span className="logo-line">Walid</span>
            </div>
            {/* Nav content */}
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color='white'/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color='white'/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color='white'/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target='_blanl' rel='noreferrer' href='https://www.linkedin.com/in/walid-zili-b042921b2/'>
                        <FontAwesomeIcon icon={faLinkedin} color='white'/>
                    </a>
                </li>
                <li>
                    <a target='_blanl' rel='noreferrer' href='https://github.com/ziliwalid'>
                        <FontAwesomeIcon icon={faGithub} color='white'/>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Layout;
