import Image from 'next/image'
import mealIcon from '@/assets/icons/meal.png'
import communityIcon from '@/assets/icons/community.png'
import eventsIcon from '@/assets/icons/events.png'
import classes from './page.module.css'


export default function CommunityPage() {
	return (
		<>
			<header className={classes.header}>
				<h1>
					Jedna wspólna pasja: <span className={classes.highlight}>Jedzenie</span>
				</h1>
				<p>Dołącz do naszej społeczności!</p>
			</header>
			<main className={classes.main}>
				<h2>Korzyści z naszej społeczności</h2>

				<ul className={classes.perks}>
					<li>
						<Image
							src={mealIcon}
							alt='Posiłek'
						/>
						<p>Udostępnij i odkryj przepisy</p>
					</li>
					<li>
						<Image
							src={communityIcon}
							alt='Tłum gotujących ludzi'
						/>
						<p>Znajdź nowych znajomych</p>
					</li>
					<li>
						<Image
							src={eventsIcon}
							alt='
              Tłum ludzi na imprezie kulinarnej'
						/>
						<p>Weź udział w ekskluzywnych wydarzeniach</p>
					</li>
				</ul>
			</main>
		</>
	)
}
