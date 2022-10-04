import styles from '../styles/Home.module.css'
import Link from 'next/link'
import HomeProject from './HomeProject'
import Skills from './Skills'
import { projects } from '../Constants/projects'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { userinfo, ctaTexts, headings } from '../Constants/userinfo'
import Education from './Education'
import BackgroundAnimation from './BackgroundAnimation'
import Technologie from './Technologie'
import Experiences from './Experiences'
import Work from './Work'

const HomePage = ({ currentTheme }) => {
    return (
        <div>

            <div className={styles.homeheading} style={{ backgroundColor: currentTheme.fourth }}>
                <div className={styles.heading}>
                    <div className={styles.headingLeft}>
                        {userinfo.greeting.title}

                        <h2 className={styles.subheading} style={{ color: currentTheme.subtext }}>{userinfo.greeting.subtitle}</h2>

                        <h2 className={styles.subheading} style={{ color: currentTheme.subtext }}>{userinfo.greeting.subtitle2}</h2>
                        <Link href='/Andry.pdf' locale={false} ><a className={styles.cta1} style={{ background: 'transparent', border: `2px solid ${currentTheme.text}`, color: currentTheme.text }}>{ctaTexts.landingCTA}</a></Link>

                    </div>

                    <div className={styles.headingRight}>
                        <BackgroundAnimation />
                    </div>

                </div>

            </div>

            <div id="skills" className={styles.homeSkillSection} style={{ backgroundColor: currentTheme.secondary }}>

                <Skills currentTheme={currentTheme} />
            </div>
            <div>
                {
                    userinfo.education.visible ? <Education currentTheme={currentTheme} /> : null
                }
            </div>
            <Work currentTheme={currentTheme} />


            {/*
            <h1 className={styles.workheading}>{headings.workHomePage}</h1>
            <div className={styles.homeWorkSection} id="work">

                
                    projects.slice(0, 3).map((project, key) => {
                        return (
                            <div key={key} data-aos="fade-up">
                                <HomeProject currentTheme={currentTheme} project={project} id={key} />

                            </div>
                        )
                    })
              

            </div>
            <div style={{ textAlign: 'center', paddingBottom: '2rem' }}><Link href="/work"><a className={styles.cta3} style={{ background: 'transparent', border: `2px solid ${currentTheme.text}`, color: currentTheme.text }}>{ctaTexts.workCTA} <span></span></a></Link></div>


  */ }




        </div >
    )
}

export default HomePage
