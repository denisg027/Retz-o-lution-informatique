import React, { useState } from 'react';
import '../Styles/footer.css';

function Footer() {
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);
  // État pour la page courante

  return (
    <footer className="footerContainer">
        <div className='container'>
        <ul className='address-list'>
          <li className='address'>RETZ-O-LUTION-INFORMATIQUE</li>
          <li className='address'>9 RUE DU SEMEUR</li>
          <li className='address'>44320 FROSSAY</li>
          <li className='address'>TÉL : 07 69 72 55 80</li>
        </ul>
        <ul className='policy-info'>
          <li className='policy'>© 2019 – 2023 <a className='footer-a' href='https://retz-olution-informatique.fr'>RETZ-O-LUTION-INFORMATIQUE</a></li>
          <li className='policy'> <a className='footer-a' href=''> ~ Mentions Légales ~ </a></li>
          <li className='policy'> <a className='footer-a' href=''> ~ Politique de confidentialité ~ </a></li>
          <li className='policy'> <a className='footer-a' href=''> ~ RGPD ~ </a></li>
        </ul>
        <ul className='social-media'>
          <li className='media'><a className='footer-a' href='https://www.instagram.com/retzolution.informatique/'></a><img className='social' src="media/instagram.png" alt="Logo-instagram" /></li>
          <li className='media'><a className='footer-a' href='https://www.facebook.com/RetzOlutionInformatique/'></a><img className='social' src="media/facebook.png" alt="Logo-facebook" /></li>
          <li className='media'> <a className='footer-a' href=''></a><img className='social' src="media/linkedin.png" alt="Logo-linkedin" /></li>
          <li className='media'> <a className='footer-a' href=''></a><img className='social' src="media/whatsapp-business.png" alt="Logo-whatsapp" /></li>
          <li className='media'> <a className='footer-a' href=''></a><img className='social' src="media/pinterest.png" alt="Logo-pinterest" /></li>
          <li className='media'> <a className='footer-a' href=''></a><img className='social' src="media/youtube.png" alt="Logo-youtube" /></li>
        </ul>
    </div>
      </footer>
  );
}

export default Footer;
