/* 1.ZADATAK 
DEFINISATI KLASU OSOBA KOJA SADRZI SVOJSTVA KOJA IDENTIFIKUJU OSOBU.
ZATIM DEFINISATI STATICKU METODU KOJA PRIMA PARAMETAR I ISPISUJE JMBG OBJEKTA. */

// DEFINISANJE KLASE: OSOBA

class Osoba{
           constructor(ime,prezime,godinaRodjenja,jmbg){
           this.ime=ime;
           this.prezime=prezime;
           this.godinaRodjenja=godinaRodjenja;
           this.jmbg=jmbg;
}
// DEFINISANJE STATICKE METODE KOJA PRIMA OBJEKAT KAO PARAMETAR

static identifikacijaJmbg(mojObjekat){
  return console.log("Ovo je  moj JMBG:" + mojObjekat.jmbg );
}
}

// DEFINISANJE OBJEKTA : KLASE OSOBA

let drugaOsoba=new Osoba("Bata","Srdanovic",1979,777733334444);

// POZIVANJE STATICKE METODE KOJA PRIMA OBJEKAT KAO PARAMETAR

Osoba.identifikacijaJmbg(drugaOsoba);
