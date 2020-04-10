/* KREIRANJE 3 OBJEKTA NEKE KLASE KOJE POCINJU VELIKIM SLOVOM UZ POMOC
REZERVISANE RECI CLASS 

KORISTICEMO KONSTRUKTORSKU METODU KOJOJ PROSLEDJUJEMO NEKA SVOJSTVA I DAJEMO JOJ 
NEKE VREDNOSTI KOJE CEMO POVEZATI UZ POMOC RECI THIS.  */


class JapanskiGrad {
    constructor (prefektura,glavniGrad,region,ostrvo,brojStanovnika,){
    this.prefektura=prefektura;
    this.glavniGrad=glavniGrad;
    this.region=region;
    this.ostrvo=ostrvo;
    this.brojStanovnika=brojStanovnika;
    

    }

/* OVDE VRSIMO ISPISIVANJE METODE RECJU ISPISIMI() DA NAM ISPISE I VRATI SVOJSTVA 
KOJU MI ZELIMO DA NAM PRIKAZE UZ POMOC RECI THIS.   */ 

ispisiMi(){
    console.log(this.prefektura + " " + this.glavniGrad + " " + this.region + " " + this.ostrvo + " " + this.brojStanovnika);
}
}

/* ISPISIVANJE NEKA TRI NOVA OBJEKTA UNUTAR TE KLASE UZ POMOC REZERVISANE RECI 
LET KOME DODAJEMO REZERVISANU REC NEW I NAZIV TE KLASE KOME DODAJEMO PARAMETRE  */ 

let gradJedan=new JapanskiGrad("Tokio","Shinjuku","Kanto","Honshu",12000000);
let gradDva=new JapanskiGrad("Kagawa","Takamacu","Shikoku","Shikoku",1200000);
let gradTri=new JapanskiGrad("Okinawa","Naha","Kyushu","Ryukyu",1300000);


// POZIVANJE METODE ISPISIMI() UNUTAR KLASE 

gradJedan.ispisiMi();
gradDva.ispisiMi();
gradTri.ispisiMi();

// VRACANJE NEKOG SVOJSTVA 

gradTri.ostrvo;