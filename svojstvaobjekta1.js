/* 2 ZADATAK
NAPRAVITI OBJEKAT ZIVOTINJA KOJI TREBA DA IMA 4 SVOJSTVA.
SVAKOM SVOJSTVU PRISTUPITI I ISPISATI GA .  */

// PRVI NACIN ISPISA JE :

let zivotinja= {imeZivotinje:"Puma",
                rodZivotinje:"sisar",
                godinaZivotinje: 15,
                bojaZivotinje:"Crna"};
alert(zivotinja.imeZivotinje)
                

// DRUGI NACIN ISPISA JE :

let zivotinja= new Object;
               zivotinja.imeZivotinje="Puma";
               zivotinja.rodZivotinje="sisar";
               zivotinja.godinaZivotinje= 15;
               zivotinja.bojaZivotinje="Crna";
alert(zivotinja["imeZivotinje"])