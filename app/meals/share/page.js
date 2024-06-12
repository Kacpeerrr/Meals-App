'use client'

import {useFormState} from 'react-dom'
import ImagePicker from '@/components/meals/image-picker'
import classes from './page.module.css'
import { shareMeal } from '@/lib/actions'
import MealsFormSubmit from '@/components/meals/meals-form-submit'

export default function ShareMealPage() {
	const [state, formAction] = useFormState(shareMeal, {message: null})

	return (
		<>
			<header className={classes.header}>
				<h1>
					Udostępnij swoje <span className={classes.highlight}>ulubione danie</span>
				</h1>
				<p>Lub każde inne danie, którym chcesz się podzielić!</p>
			</header>
			<main className={classes.main}>
				<form
					className={classes.form}
					action={formAction}>
					<div className={classes.row}>
						<p>
							<label htmlFor='name'>Twoje imię</label>
							<input
								type='text'
								id='name'
								name='name'
								required
							/>
						</p>
						<p>
							<label htmlFor='email'>Twój e-mail</label>
							<input
								type='email'
								id='email'
								name='email'
								required
							/>
						</p>
					</div>
					<p>
						<label htmlFor='title'>Tytuł</label>
						<input
							type='text'
							id='title'
							name='title'
							required
						/>
					</p>
					<p>
						<label htmlFor='summary'>Krótkie podsumowanie</label>
						<input
							type='text'
							id='summary'
							name='summary'
							required
						/>
					</p>
					<p>
						<label htmlFor='instructions'>Instrukcje</label>
						<textarea
							id='instructions'
							name='instructions'
							rows='10'
							required></textarea>
					</p>
					<ImagePicker
						label='Twoje zdjęcie'
						name='image'
					/>
          {state.message && <p>{state.message}</p>}
					<p className={classes.actions}>
						<MealsFormSubmit />
					</p>
				</form>
			</main>
		</>
	)
}
