// PISANJE FORIN PETLJE NAD NEKIM OBJEKTOM I PISANJE METODE NEKOG OBJEKTA


// KREIRANJE OBJEKTA KOJE IMAJU SVOJE SVOJSTVO I NEKE NJEMU DODELJENE VREDNOSTI

let zivotinja={
    vrsta:"Tigar",
    rod:"sisar",
    pol:"muzjak",
    godinaStarosti:"15 godina",
    boja:"crno-smedja",
    duzina: "2.5 m",
    visina: "120 cm",
    brzina: "65 km/h",
    ishrana:"mesojed",
}

// KAKO FORIN PETLJA ISPISUJE PAROVE VREDNOSTI OVOG OBJEKTA 

for (imenuj in zivotinja){
    console.log(imenuj + " : " + zivotinja[imenuj]);
}


// NACIN ISPISIVANJA METODE NEKOG OBJEKTA 

let predavac={
    ime:"Filip",
    prezime:"Filipovic",
    godinaRodjenja:1995,
    mestoRodjenja:"Lazarevac",
    prebivaliste:"Beograd",
    jmbg:3333444888,

    
// ISPISIVANJE METODE UNUTAR OBJEKTA PREDAVAC

    prikazi:function(){
        console.log(predavac.ime + " " + predavac.prezime + " " + predavac.godinaRodjenja);
    
         }
    }
   
/* ILI NA DRUGI NACIN MOZEMO ISPISATI METODU UNUTAR OBJEKTA POMOCU RECI THIS.

    prikazi:function(){
        console.log(this.ime + " " + this.prezime + " " + this.godinaRodjenja);
    
         }
    }     */
   

// POZIVANJE METODE DA ISPISE NEKU VREDNOST

predavac.prikazi();
