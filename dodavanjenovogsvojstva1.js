/* 4.ZADATAK
NAPRAVITI OBJEKAT OSOBA.
POTREBNO JE DA SADRZI SVOJSTVO KOJA IDENTIFIKUJU JEDNU OSOBU,
ZATIM PROMENITI IME I PREZIME OSOBE .   */

// PRVI NACIN :

/*let osoba={ ime_i_Prezime:"Bratislav Srdanovic",
            datumRodjenja:"03.04.1979",
            mestoRodjenja:"Beograd",
            prebivaliste:"Grocka",
            jmbg:"035559998877",
            pol:"muski" };
osoba.ime_i_Prezime="Miyamoto Musashi";   */

// DRUGI NACIN :

let osoba={ ime_i_Prezime:"Bratislav Srdanovic",
            datumRodjenja:"03.04.1979",
            mestoRodjenja:"Beograd",
            prebivaliste:"Grocka",
            jmbg:"035559998877",
            pol:"muski" };
osoba["ime_i_Prezime"]="Miyamoto Musashi";

