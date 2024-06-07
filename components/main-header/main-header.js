import Link from 'next/link'
import logoImg from '@/assets/logo.png'
import MainHeaderBackground from './main-header-background'
import classes from './main-header.module.css'
import Image from 'next/image'
import NavLink from './nav-link'


export default function MainHeader() {
	return (
		<>
			<MainHeaderBackground />
			<header className={classes.header}>
				<Link
					className={classes.logo}
					href='/'>
					<Image
						src={logoImg}
						alt='Talerz jedzenia'
						priority
					/>
					MealsApp
				</Link>
				<nav className={classes.nav}>
					<ul>
						<li>
							<NavLink href='/meals'>Przeglądaj posiłki</NavLink>
						</li>
						<li>
							<NavLink href='/community'>Społeczność</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	)
}
