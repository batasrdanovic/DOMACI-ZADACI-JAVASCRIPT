/* 2.ZADATAK
PRVOM OBJEKTU IZ PRETHODNOG ZADATKA DODATI NOVO SVOJSTVO,
DRUGOM OBJEKTU DODATI NOVU METODU,
TRECEM OBJEKTU I NOVO SVOJSTVO I NOVU METODU.  */


//Definisanje KONSTRUKTORSKE FUNKCIJA : Osoba

function Osoba(ime,prezime,godinaRodjenja){

    this.ime=ime;
    this.prezime=prezime;
    this.godinaRodjenja=godinaRodjenja;
  
}

//Kreiranje tri NOVA OBJEKTA

let prvaOsoba=new Osoba("Marko","Markovic",1990);
let drugaOsoba=new Osoba("Petar","Petrovic",1970);
let trecaOsoba=new Osoba("Bata","Srdanovic",1979);

/* Dodavanje NOVOG SVOJSTVA :(prebivaliste) i NOVE VREDNOSTI: (Beograd) 
prvom objektu           */


prvaOsoba.prebivaliste="Beograd";

//provera novog svojstva

console.log(prvaOsoba.prebivaliste);

//Dodavanje NOVE METODE drugom objektu

drugaOsoba.starost=function(){

    console.log(2020-this.godinaRodjenja)
}
 
//pozivanje nove metode

drugaOsoba.starost();

/*Dodeljivanje novog svojstva (bojaOciju) i vrednosti (plava), dodeljivanje 
nove metode (izbaci alert sa bojom ociju) trecem objektu  */

trecaOsoba.bojaOciju="zelene";

trecaOsoba.alert=function(){
    alert(this.bojaOciju);
}

//pozivanje nove metode

trecaOsoba.alert();


/* REZULTAT CE ISPISATI ZA PRVI OBJEKAT NOVO SVOJSTVO BICE:

Beograd     */


/* REZULTAT CE ISPISATI ZA DRUGI OBJEKAT NOVA METODA BICE:

50          */

/* REZULTAT CE ISPISATI ZA TRECI OBJEKAT NOVO SVOJSTVO I NOVA METODA BICE:

zelene       */