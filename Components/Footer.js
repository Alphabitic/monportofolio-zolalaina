import styles from '../styles/NavbarFooter.module.css';
import { userinfo } from '../Constants/userinfo'
import Link from 'next/link'

const Footer = ({ currentTheme }) => {
    return (
        <div className={styles.footermain} style={{ backgroundColor: currentTheme.footerColor, color: currentTheme.subtext }}>
            <div className={styles.footertable}>
                <Link href='/'><a><h2 className={styles.footerlogo}>{userinfo.logoText}</h2></a></Link>
                <ul>
                    <li className={styles.listHeading}>Socials</li>
                    {userinfo.socials ?
                        userinfo.socials.map((social, key) => {
                            return (
                                <Link href={social.link} key={key}><a><li>{social.type}</li></a></Link>
                            )
                        }) : null
                    }
                    <Link href={`mailto:${userinfo.contact.email ? userinfo.contact.email : ''}`}><a><li>Mail</li></a></Link>
                </ul>
                <ul>
                    <li className={styles.listHeading}>Pages</li>
                    <Link href='/'><a><li>Accueil</li></a></Link>
                    <Link href='/#about'><a><li>A mon sujet</li></a></Link>
                    <Link href='/work'><a><li>Projets</li></a></Link>
                    <Link href='/contact'><a><li>Informations personnelles</li></a></Link>
                </ul>
            </div>
            <hr style={{ height: '1px', backgroundColor: currentTheme.subtext, border: 'none', opacity: '0.5' }}></hr>
            <h2 className={styles.footercontent}>@ Zolalaina</h2>
        </div>
    )
}

export default Footer
