
import { Suspense } from 'react'
import Link from 'next/link'
import classes from './page.module.css'
import MealsGrid from '@/components/meals/meals-grid'
import { getMeals } from '@/lib/meals'

export const metadata = {
	title: 'Wszystkie posiłki',
	description: 'Sprawdź nasze wszystkie posiłki',
  };


async function Meals() {
	const meals = await getMeals()

	return <MealsGrid meals={meals} />
}

export default function MealsPage() {
	return (
		<>
			<header className={classes.header}>
				<h1>
					Wspaniałe posiłki, stworzone <span className={classes.highlight}>przez Ciebie</span>
				</h1>
				<p>Wybierz swój najlepszy przepis i ugotuj samemu</p>
				<p className={classes.cta}>
					<Link href='/meals/share'>Udostępnij swój ulubiony przepis</Link>
				</p>
			</header>
			<main className={classes.main}>
				<Suspense fallback={<p className={classes.loading}>Ładowanie...</p>}>
					<Meals />
				</Suspense>
			</main>
		</>
	)
}
