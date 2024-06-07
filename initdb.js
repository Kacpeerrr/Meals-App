const sql = require('better-sqlite3');
const db = sql('meals.db');

const dummyMeals = [
   {
     title: 'Soczysty Cheeseburger',
     slug: 'soczysty-cheeseburger',
     image: '/images/burger.jpg',
     summary:
       'Aromatyczny burger z soczystym kotletem wołowym i roztopionym serem, podawany w miękkiej bułce.',
     instructions: `
       1. Przygotuj kotlet:
          Wymieszaj 200g mielonej wołowiny z solą i pieprzem. Uformuj kotlet.
 
       2. Usmaż kotlet:
          Rozgrzej patelnię z odrobiną oleju. Smaż kotlet przez 2-3 minuty z każdej strony, aż się zarumieni.
 
       3. Złóż burgera:
          Podpiecz połówki bułki. Na dolnej połowie ułóż sałatę i pomidora. Dodaj usmażony kotlet i przykryj plasterkiem sera.
 
       4. Podawaj:
          Złóż burgera z górną połówką bułki i podawaj na gorąco.
     `,
     creator: 'Jan Kowalski',
     creator_email: 'email1@gmail.com',
   },
   {
     title: 'Ostre Curry',
     slug: 'ostre-curry',
     image: '/images/curry.jpg',
     summary:
       'Bogate i pikantne curry, naszpikowane egzotycznymi przyprawami i kremowym mlekiem kokosowym.',
     instructions: `
       1. Pokrój warzywa:
          Pokrój wybrane warzywa na kawałki wielkości kęsa.
 
       2. Podsmaż warzywa:
          Na patelni z olejem podsmaż warzywa, aż zaczną mięknąć.
 
       3. Dodaj pastę curry:
          Dodaj 2 łyżki pasty curry i smaż przez kolejną minutę.
 
       4. Duś z mlekiem kokosowym:
          Wlej 500ml mleka kokosowego i doprowadź do wrzenia. Gotuj na wolnym ogniu przez około 15 minut.
 
       5. Podawaj:
          Ciesz się tym kremowym curry z ryżem lub chlebem.
     `,
     creator: 'Maksymilian Czarny',
     creator_email: 'email1@gmail.com',
   },
   {
     title: 'Domowe Pierogi',
     slug: 'domowe-pierogi',
     image: '/images/dumplings.jpg',
     summary:
       'Delikatne pierogi wypełnione aromatycznym mięsem i warzywami, gotowane na parze do perfekcji.',
     instructions: `
       1. Przygotuj farsz:
          Wymieszaj mielone mięso, posiekane warzywa i przyprawy.
 
       2. Napełnij pierogi:
          Umieść łyżkę farszu na środku każdego ciasta na pierogi. Zwilż brzegi i złóż, aby zamknąć.
 
       3. Gotuj pierogi na parze:
          Ułóż pierogi w parowarze. Gotuj na parze przez około 10 minut.
 
       4. Podawaj:
          Ciesz się tymi pierogami na gorąco, z sosem do maczania według uznania.
     `,
     creator: 'Emilia Chen',
     creator_email: 'email1@gmail.com',
   },
   {
     title: 'Klasyczny Mac n Cheese',
     slug: 'klasyczny-mac-n-cheese',
     image: '/images/macncheese.jpg',
     summary:
       'Kremowy i serowy makaron, klasyczne danie, które zawsze zadowala tłumy.',
     instructions: `
       1. Ugotuj makaron:
          Ugotuj makaron według instrukcji na opakowaniu, aż będzie al dente.
 
       2. Przygotuj sos serowy:
          W rondlu roztop masło, dodaj mąkę i stopniowo mieszaj mleko, aż zgęstnieje. Dodaj starty ser i mieszaj, aż się rozpuści.
 
       3. Połącz:
          Wymieszaj sos serowy z odcedzonym makaronem.
 
       4. Piecz:
          Przełóż do naczynia do zapiekania, posyp bułką tartą i piecz, aż wierzch się zarumieni.
 
       5. Podawaj:
          Podawaj na gorąco, udekorowane natką pietruszki, jeśli chcesz.
     `,
     creator: 'Laura Nowak',
     creator_email: 'email1@gmail.com',
   },
   {
     title: 'Autentyczna Pizza',
     slug: 'autentyczna-pizza',
     image: '/images/pizza.jpg',
     summary:
       'Ręcznie wyrabiana pizza z pikantnym sosem pomidorowym, świeżymi dodatkami i roztopionym serem.',
     instructions: `
       1. Przygotuj ciasto:
          Wyrabiaj ciasto na pizzę i pozostaw do wyrośnięcia, aż podwoi swoją objętość.
 
       2. Uformuj i dodaj dodatki:
          Rozwałkuj ciasto, rozsmaruj sos pomidorowy i dodaj ulubione dodatki oraz ser.
 
       3. Piecz pizzę:
          Piecz w nagrzanym piekarniku w temperaturze 220°C przez około 15-20 minut.
 
       4. Podawaj:
          Pokrój gorącą pizzę i ciesz się, posypując listkami bazylii.
     `,
     creator: 'Mariusz Rossi',
     creator_email: 'email1@gmail.com',
   },
   {
     title: 'Wienerski Schnitzel',
     slug: 'wienerski-schnitzel',
     image: '/images/schnitzel.jpg',
     summary:
       'Chrupiący, złocisty kotlet cielęcy w panierce, klasyczne danie austriackie.',
     instructions: `
       1. Przygotuj cielęcinę:
          Rozbij kotlety cielęce na równą grubość.
 
       2. Panieruj cielęcinę:
          Obtocz każdy kotlet w mące, zanurz w roztrzepanych jajkach, a następnie w bułce tartej.
 
       3. Smaż schnitzel:
          Rozgrzej olej na patelni i smaż każdy schnitzel na złoty kolor z obu stron.
 
       4. Podawaj:
          Podawaj na gorąco z plasterkiem cytryny i sałatką ziemniaczaną lub zielonymi warzywami.
     `,
     creator: 'Franciszek Huber',
     creator_email: 'email1@gmail.com',
   },
   {
     title: 'Świeża Sałatka Pomidorowa',
     slug: 'swieza-salatka-pomidorowa',
     image: '/images/tomato-salad.jpg',
     summary:
       'Lekka i orzeźwiająca sałatka z dojrzałymi pomidorami, świeżą bazylią i pikantnym winegretem.',
     instructions: `
       1. Przygotuj pomidory:
          Pokrój świeże pomidory i ułóż na talerzu.
 
       2. Dodaj zioła i przyprawy:
          Posyp posiekaną bazylią, solą i pieprzem.
 
       3. Udekoruj sałatkę:
          Skrop oliwą z oliwek i octem balsamicznym.
 
       4. Podawaj:
          Ciesz się tą prostą, pełną smaku sałatką jako dodatkiem lub lekkim posiłkiem.
     `,
     creator: 'Zofia Zielona',
     creator_email: 'email1@gmail.com',
   },
 ];

db.prepare(`
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO meals VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  for (const meal of dummyMeals) {
    stmt.run(meal);
  }
}

initData();
