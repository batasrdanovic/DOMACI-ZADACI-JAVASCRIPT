/* 1.ZADATAK
NAPISATI KONSTUKTORSKU FUNKCIJU OSOBA I ZATIM KREIRATI 4 OSOBE UZ POMOC FUNKCIJE */

function Osoba(ime,prezime,datumRodjenja,jmbg){

    this.ime=ime;
    this.prezime=prezime;
    this.datumRodjenja=datumRodjenja;
    this.jmbg=jmbg;
}
let prvaOsoba=new Osoba("Marko","Markovic",1990,123123123123);
let drugaOsoba=new Osoba("Petar","Petrovic",1970,22222222222);
let trecaOsoba=new Osoba("Bata","Srdanovic",1979,33333333333);
let cetvrtaOsoba=new Osoba("Filip","Filipovic",1995,11111111);

prvaOsoba.ime

// REZULTAT CE ISPISATI :

"Marko"

prvaOsoba.prezime

// REZULTAT CE ISPISATI :

"Markovic"

drugaOsoba.datumRodjenja

// REZULTAT CE ISPISATI :

1970
