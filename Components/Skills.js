import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { userinfo, ctaTexts, headings } from '../Constants/userinfo'

const Skills = ({ currentTheme }) => {
    return (
        <>

            <h1 className={styles.workheading} style={{ color: currentTheme.contrastText }} data-aos="fade-up">{headings.capabilities}</h1>
            <div className={styles.skills} style={{ color: currentTheme.contrastText }}>

                {userinfo.capabilities ?
                    userinfo.capabilities.map((value, key1) => {
                        return (
                            <>




                                <div className={styles.skillList} data-aos="fade-up">
                                    <div className={styles.blockTitle}>
                                        <div className={styles.svgIm} style={{ color: currentTheme.contrastText }}>
                                            {value.icones}
                                        </div>
                                        <div className={styles.blockText} style={{ color: currentTheme.contrastText, fontWeight: 'bold' }}>
                                            {value.category}
                                        </div>

                                    </div>

                                    <ul>
                                        {
                                            value.skills ?
                                                value.skills.map((skill, key2) => {
                                                    return (
                                                        <li key={key2}>{skill}</li>
                                                    )
                                                }) : null
                                        }
                                    </ul>
                                </div>
                                {userinfo.capabilities.indexOf(value) === userinfo.capabilities.length - 1 ? null : <div className={styles.line} style={{ backgroundColor: currentTheme.subtext }} data-aos="fade-up"></div>}
                            </>
                        )
                    }) : null
                }

            </div>
            { }
        </>
    )
}

export default Skills
