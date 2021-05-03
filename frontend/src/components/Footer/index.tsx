import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <div className='footerItem footerMargin text-light'>
          <small>Desenvolvido por:</small>
        <a target='_blank' rel="noreferrer" href='https://github.com/felipeblobo'><FontAwesomeIcon className = 'icone mx-2' icon={faGithub} size="2x" style={{color: '#ffff'}} /></a>
        <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/felipelobo23'><FontAwesomeIcon className = 'icone' icon={faLinkedin} size="2x" style={{color: '#ffff'}} /></a>
        </div>
        
        <p className="text-light">
          <small>
            <strong>Semana Spring React </strong>
            - Evento promovido pela escola DevSuperior:{" "}
            <a
              href="https://instagram.com/devsuperior.ig"
              target="_blank"
              rel="noreferrer"
            >
              @devsuperior.ig
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
