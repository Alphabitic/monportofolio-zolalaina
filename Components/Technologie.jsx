
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { userinfo, ctaTexts, headings } from '../Constants/userinfo'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Technologie = ({ currentTheme, project, id }) => {
    return (
        <>
            <h1 className={styles.workheading} data-aos="fade-up">{headings.capabilities}</h1>
            <div className={styles.skills} style={{ color: currentTheme.subtext }}>

                {userinfo.capabilities ?
                    userinfo.capabilities.map((value, key1) => {
                        return (
                            <>
                                <ul className={styles.skillList} data-aos="fade-up">
                                    <h1 className={styles.skillHeading} style={{ color: currentTheme.text }}>{value.category}</h1>
                                    <div className={styles.projectContent}>
                                        <div className={styles.projectIcon} style={{ color: currentTheme.accent, backgroundColor: currentTheme.footerColor, borderColor: currentTheme.accent }}><Link href="#"><a><FontAwesomeIcon /></a></Link></div>
                                        <h1 className={styles.projectTitle}>test</h1>
                                        <h2 className={styles.projectSubTitle} style={{ color: currentTheme.subtext }}>{project.description}</h2>
                                        <Link href='/work'><a className={styles.cta2} style={{ color: currentTheme.tertiary }}>Voir plus</a></Link>
                                    </div>
                                </ul>
                                {userinfo.capabilities.indexOf(value) === userinfo.capabilities.length - 1 ? null : <div className={styles.line} style={{ backgroundColor: currentTheme.subtext }} data-aos="fade-up"></div>}
                            </>
                        )
                    }) : null
                }

            </div>
            <div style={{ textAlign: 'center', padding: '1rem 0' }}><Link href="/contact"><a className={styles.cta3} style={{ background: 'transparent', border: `2px solid ${currentTheme.accent}` }}>{ctaTexts.capabCTA} <span>&gt;</span></a></Link></div>
        </>
    )
}

export default Technologie