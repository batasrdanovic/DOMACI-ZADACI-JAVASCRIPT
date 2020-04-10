/* 6.ZADATAK 
UZ POMOC FOR ...IN PETLJE NAPRAVITI OBJEKAT KLON OBJEKTA KROZ KOJI SE PROLAZI.
KLON OBJEKAT JE OBJEKAT KOJI IMA ISTA SVOJSTVA.  */

let drzava = {
    nazivDrzave: "Japan",
    kontinent: "Azija",
    glavniGrad: "Tokio",
    brojStanovnika: 130000000,
    brojStanovnikaPrestonice: 35000000,
    jezik: "Japanski",
};

for( i in drzava) {
drzava[i]="Belgrade";
console.log( i + ": "+ drzava[i]);
}

/* ISPISACE RESENJE :

nazivDrzave: Belgrade
kontinent: Belgrade
glavniGrad: Belgrade
brojStanovnika: Belgrade
brojStanovnikaPrestonice: Belgrade
jezik: Belgrade       */
