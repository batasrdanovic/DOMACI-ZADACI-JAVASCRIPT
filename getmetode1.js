/* 2.ZADATAK 
DEFINISATI OBJEKAT OSOBA KOJI SADRZI SVOJSTVA KOJA IDENTIFIKUJU JEDNU OSOBU.
ZATIM NAPISATI GET METODU KOJA VRACA JMBG OSOBE.
POZVATI GET METODU.  */

let osoba={
           ime:"Bata",
           prezime:"Srdanovic",
           jmbg:222222222,
           prebivaliste:"Grocka",
           zip:11306,
           visina:1.86,
           tezina:85,
get biografija(){
    return this.jmbg;
}
};
alert(osoba.biografija);


/* ISPISACE REZULTAT :

222222222                 */


// ILI POSREDSTVOM CONSOLE.LOG DA POZOVEMO ISTI REZULTAT BI BIO 


let osoba={
    ime:"Bata",
    prezime:"Srdanovic",
    jmbg:222222222,
    prebivaliste:"Grocka",
    zip:11306,
    visina:1.86,
    tezina:85,
get biografija(){
return this.jmbg;
}
};
console.log(osoba.biografija);

/* ISPISACE REZULTAT :

222222222                 */


