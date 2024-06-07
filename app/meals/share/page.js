import ImagePicker from '@/components/meals/image-picker';
import classes from './page.module.css';

export default function ShareMealPage() {

  async function shareMeal(formData) {
    'use server'

    const meal = {
      title: formData.get('title'),
      summary: formData.get('summary'),
      instructions: formData.get('instructions'),
      image: formData.get('image'),
      creator: formData.get('name'),
      creator_email: formData.get('email')
    }

    console.log(meal);
  }

  return (
    <>
      <header className={classes.header}>
        <h1>
          Udostępnij swoje <span className={classes.highlight}>ulubione danie</span>
        </h1>
        <p>Lub każde inne danie, którym chcesz się podzielić!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={shareMeal}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Twoje imię</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Twój e-mail</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Tytuł</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Krótkie podsumowanie</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instrukcje</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Twoje zdjęcie" name="image"/>
          <p className={classes.actions}>
            <button type="submit">Udostępnij danie</button>
          </p>
        </form>
      </main>
    </>
  );
}