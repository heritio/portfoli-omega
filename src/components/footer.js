
import React from 'react'

function Footer() {
    return (
        <div className="footer">
            <svg className="footer__logo" xmlns="http://www.w3.org/2000/svg" width="61" height="32"><path fill="#33323D" fill-rule="evenodd" d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"/></svg>
            <ul className="footer__links">
                <li className="footer__links-item">Home</li>
                <li className="footer__links-item">Portfolio</li>
                <li className="footer__links-item">Contact me</li>
            </ul>
            <ul className="footer__socials">
                <li className="footer__socials-item"><a href="https://www.linkedin.com/in/heritier-akilimali-6a2856141/"><i class="fab fa-linkedin"></i></a></li>
                <li className="footer__socials-item"><a href="https://github.com/heritio"><i class="fab fa-github"></i></a> </li>
            </ul>
        </div>
    )
}

export default Footer;
