const data = {
    categories: [{
            name: 'Viešbučiai',
            path: 'viesbuciai',
            cities: [['Augustavas', '801578009'], ['Prienai', '801624355'], ['Ryga', '801578027'], ['Vilnius', '428300744'], //filters[6]
                ['Kaunas', '428385389'], ['Druskininkai', '428385366'], ['Birštonas', '428385367'], ['Palanga', '428385369'],
                ['Trakai', '428385371'], ['Anykščiai', '428385372'], ['Jūrmala', '801256175'], ['Kiti', '428385400']],
            peopleCount: [['1', '452295912'], ['2', '452295918'], ['3', '452296019'], ['4', '452295948'], ['5+', '452296156']], //filter[18]
            nights: [['1', '454241031'], ['2', '454241047'], ['3+', '454241095']], //filter[20]
            hotelTypes: [['Viešbutis 5★', '443598939'], ['Viešbutis 4★', '443598955'], ['Viešbutis 3★', '443598971'],
                ['Viešbutis 2★', '443777395'], ['Viešbutis 1★', '443598976'], ['Sveikatingumo centrai', '443693715'],
                ['Poilsio namai', '443598990'], ['Dvarai', '443693752'], ['Vilos', '443599003'],
                ['Apartamentai', '443693774'], ['Sodybos', '443599002']] //filters[15]
        },
        {
            name: 'Kelionės',
            path: 'keliones',
            travelToCountry: [
                ['Argentina', '801105097'], ['Brazilija', '801735710'], ['Filipinai', '802594790'], ['Fuertaventūra', '802180062'],
                ['Madagaskaras', '488740964'], ['Maldyvai', '801735732'], ['Urugvajus', '801105102'], ['Lietuva', '428300731'],
                ['Latvija', '428366309'], ['Estija', '428385442'], ['Lenkija', '428385457'], ['Albanija', '428385418'],
                ['Austrija', '428385423'], ['Baltarusija', '428385435'], ['Belgija', '428385437'], ['Bulgarija', '428385438'],
                ['Čekija', '428385439'], ['Egiptas', '428385441'], ['Egzotinės', '435315126'], ['Graikija', '428385443'],
                ['Ispanija', '428385446'], ['Italija', '428385447'], ['Izraelis', '428385448'], ['Korėja', '428835580'],
                ['Jordanija', '433899638'], ['Kanarų salos', '428385451'], ['Marokas', '445430771'], ['Kipras', '428385452'],
                ['Laplandija', '434022468'], ['Malta', '428385462'], ['Olandija', '428385465'], ['Portugalija', '428385466'],
                ['Prancūzija', '428385467'], ['Rusija', '428385469'], ['Slovakija', '428385470'], ['Suomija', '428385471'],
                ['Švedija', '428385472'], ['Šveicarija', '428385484'], ['Turkija', '428385489'], ['Ukraina', '428385490'],
                ['Vengrija', '428385491'], ['Vokietija', '428385513'], ['Azijos Šalys', '428385514']
            ],
            travelTime: [
                ['1 diena', '454432905'], ['2-3 dienos', '454432921'], ['4-8 dienos', '454432952'], ['9+ dienos', '454432983']
            ]
        }
    ]
}

export { data }

// categories: [
//     ['Viešbučiai', 'viesbuciai/'],
//     ['Kelionės', 'keliones/'],
//     ['Laisvalaikis', 'paslaugos/laisvalaikis/'],
//     ['Restoranai', 'paslaugos/restoranai/'],
//     ['Grožis', 'paslaugos/grozis-ir-sveikata/'],
//     ['Sveikata', 'paslaugos/sveikata/'],
//     ['Nežinau', 'dovanos/']
// ],

// travelTypes: [
//     ['Poilsinės', 'poilsines-keliones/'], ['Pažintinės', 'pazintines-keliones/'], ['Kruizai', 'kruizai/'],
//     ['Lietuvoje', 'keliones-lietuvoje/'], ['Šeimai', 'seimos-keliones/'], ['Autobusu', 'keliones-autobusu/'],
//     ['Savaitgalio', 'savaitgalio-keliones/'], ['Naujametinės', 'naujametines-keliones/'], ['Agentūros', 'kelioniu-agentura/'],
//     ['Žiemos kelionės', 'ziemos-sezono-keliones/'], ['Egzotinės', 'egzotines/'], ['Vizos', 'viza/'],
//     ['Paskutinė minutė', 'paskutine-minute/'], ['Vasaros kelionės 2019', 'vasaros-keliones-2019/']
//
// ],
//     travelAgencies: [
//     ['Itaka', 'itaka/'], ['Topturas', 'topturas/'], ['Eura Travel', 'eura-travel/'], ['Interlux Travel', 'interlux-travel/'],
//     ['Kelionių Laikas', 'kelioniu-laikas/'], ['Excursus', 'excursus/'], ['700LT', '700lt/'], ['Vizalija', 'vizalija/']
// ],
//     summerTravels: [
//     ['Albanija', 'Albanija'], ['Bulgarija', 'Bulgarija'], ['Graikija', 'Graikija/'], ['Italija', 'Italija'],
//     ['Turkija', 'Turkija/'], ['Madagaskaras', 'madagaskaras']
// ],
//     greeceTravels: ['Korfu', 'Zakintas'],
//     turkeyTravels: [
//     ['Alanija', 'Alanija'], ['Antalija', 'Antalija'], ['Belekas', 'Belekas'], ['Bodrumas', 'Bodrumas'],
//     ['Didimas', 'Didyma'], ['Kemeras', 'Kemeras'], ['Kušadasis', 'Kušadasis'], ['Side', 'Side']
// ]