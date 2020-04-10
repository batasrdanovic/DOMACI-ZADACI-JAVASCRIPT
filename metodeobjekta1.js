/* 1.ZADATAK
NAPRAVITI OBJEKAT KOJI IMA 5 SVOJSTVA I METODU.
METODA TREBA DA VRSI ISPIS SVIH PAROVA SVOJSTVO I VREDNOST .   */

let objekat={
    ime: "Bata-san konnichiwa",
    boja: "Bata-san konnichiwa",
    godina: "Bata-san konnichiwa",
    tip: "Bata-san konnichiwa",

ispisi: function(){

for(s in objekat){

if(typeof(objekat[s])=="function"){

 continue;
}
else{
console.log(objekat[s]);
}
}
}
}
objekat.ispisi();

/* ISPISACE REZULTAT: 4 PUTA ISPISACE :

 Bata-san konnichiwa      */