import './styles.css';
import {ReactComponent as YouTubeIcon} from './youtube.svg'
import {ReactComponent as InstagramIcon} from './instagram.svg'
import {ReactComponent as LinkedinIcon} from './linkedin.svg'

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/channel/UC5u5Jb03s3KpTTcpOYJkoBw" target="_new">
                </a>
                <a href="https://www.instagram.com/carlos_rdomingues/" target="_new">
                </a>
                <a href="https://www.linkedin.com/in/carlos-roberto-domingues-53866224/" target="_new">
                </a>
            </div>
        </footer>
    )
}

export default Footer;