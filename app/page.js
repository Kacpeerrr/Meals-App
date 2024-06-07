import Link from 'next/link'

import classes from './page.module.css'
import ImageSlideshow from '@/components/images/image-slideshow'

export default function Home() {
	return (
		<>
			<header className={classes.header}>
				<div className={classes.slideshow}>
          <ImageSlideshow/>
        </div>
				<div>
					<div className={classes.hero}>
						<h1>MealsApp dla Fanów Dobrego Jedzenia</h1>
						<p>Testuj i dziel się jedzeniem z ludźmi z całego świata</p>
					</div>
					<div className={classes.cta}>
						<Link href='/community'>Dołącz do społeczności</Link>
						<Link href='/meals'>Eksploruj MealsApp</Link>
					</div>
					<div></div>
				</div>
			</header>
			<main>
				{' '}
				<section className={classes.section}>
					<h2>Jak to działa?</h2>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod quia, ut quis natus similique facilis placeat
						dolor corporis ipsam tempore!
					</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</section>
				<section className={classes.section}>
					<h2>Jaki nestępny krok w naszej aplikacji?</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam corrupti deserunt quisquam ratione delectus
						ut sit voluptatem sed optio corporis!
					</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</section>
			</main>
		</>
	)
}
