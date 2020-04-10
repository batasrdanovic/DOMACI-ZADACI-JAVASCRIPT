// PRIMER KREIRANJA VISE OBJEKATA UZ POMOC KONSTRUKTORSKE FUNKCIJE OBJEKATA

/* KREIRANJE KONSTRUKTORSKE FUNKCIJE TEHNIKA UZ REZERVISANU REC FUNCTION GDE
KONSTRUKTORSKU FUNKCIJU MORAMO ZAPOCETI VELIKIM SLOVOM KOME DODAJEMO PARAMETRE 
KOJE POVEZUJEMO UZ POMOC RECI THIS */

function Tehnika(marka,tip,godinaProizvodnje,boja,namena,cena){
       this.marka=marka;
       this.tip=tip;
       this.godinaProizvodnje=godinaProizvodnje;
       this.boja=boja;
       this.namena=namena;
       this.cena=cena;

}

/* KREIRANJE VISE RAZLICITIH OBJEKATA JEDNOG TIPA UZ KONSTRUKTORSKU FUNKCIJU 
UZ POMOC NEKE PROMENLJIVE KOME SU DODELJENE NEKA SVOJSTVA KOJE IMAJU SVOJE 
VREDNOSTI*/

let prvaTehnika=new Tehnika("Aiwa","mini-linija",2020,"crna","usluzna",50.000);
let drugaTehnika=new Tehnika("Sony","TV uredjaj",2015,"siva","korisnicka",100.000);
let trecaTehnika=new Tehnika("Kawasaki","motor",2010,"crvena","licna",200.000);

// ISPISIVANJE VREDNOSTI NEKOG SVOJSTVA KOJE ZELIMO DA NAM PRIKAZE 

console.log(prvaTehnika.marka);
console.log(drugaTehnika.godinaProizvodnje);
console.log(trecaTehnika.boja);