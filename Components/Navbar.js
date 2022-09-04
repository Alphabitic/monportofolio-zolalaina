import { Switch } from "@chakra-ui/react"
import styles from '../styles/NavbarFooter.module.css'
import Navlinks from './Navlinks'
import { useMediaQuery } from "@chakra-ui/react"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Avatar } from "@chakra-ui/react"
import { DiCssdeck, DiScala } from 'react-icons/di';

const Navbar = ({ toggleTheme, currentTheme }) => {
    const [drawerVisible] = useMediaQuery("(max-width: 950px)")
    const [sticky, setSticky] = useState(false)

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
            setSticky(true);
        }
        else {
            setSticky(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    return (
        <div className={styles.navbar} style={{ backgroundColor: currentTheme.secondary, boxShadow: currentTheme.boxShadow, position: sticky ? 'fixed' : 'static' }}>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: !drawerVisible ? '0' : '10px' }}>
                <div classNamme={styles.blockNav}>
                    <div classNamme={styles.blockTitle}>
                        <Avatar width={50} height={50} name='Herivony Zolalaina' src='https://i.ibb.co/10TM2G3/tof.jpg'  ></Avatar>

                        <Link href='/'>
                            <a>
                                <h2 className={styles.logo}> </h2>
                            </a></Link>

                    </div>
                </div>
                {!drawerVisible
                    ? <div style={{ display: 'flex' }}>
                        <Navlinks />
                    </div>
                    : null
                }
                <Switch id="dark-mode" colorScheme="white" size={!drawerVisible ? 'lg' : 'md'} isChecked={currentTheme.name === 'dark' ? true : false} onChange={() => toggleTheme()} />
            </div>
            {drawerVisible
                ? <>
                    <hr></hr>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '10px' }}>
                        <Navlinks />
                    </div>
                </>
                : null
            }
        </div>
    )
}

export default Navbar
