/* 1. ZADATAK
NAPRAVITI OBJEKAT OSOBA.
OBJEKAT TREBA DA SADRZI: IME, PREZIME, GODINU RODJENJA I PREBIVALISTE  */

// PRVI NACIN : 
// OVDE JE SA VITICASTIM ZAGRADAMA 

let prvaOsoba ={ ime: "Bratislav",
             prezime: "Srdanovic",
             godinaRodjenja: 1979,
             prebivaliste: "Grocka" };
alert(prvaOsoba.ime)

// DRUGI NACIN :
// OVDE NEMA VITICASTIH ZAGRADA I UPOTREBLJAVAMO ELEMENT: new Object() .

let drugaOsoba = new Object();
    drugaOsoba.ime="Bratislav";
    drugaOsoba.prezime="Srdanovic";
    drugaOsoba.godinaRodjenja=1979;
    drugaOsoba.prebivaliste="Grocka";
alert(drugaOsoba.prezime)

