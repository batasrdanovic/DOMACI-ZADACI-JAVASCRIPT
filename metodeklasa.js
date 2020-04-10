/* 5.ZADATAK

DEFINISATI KLASU OSOBA KOJA IMA SVOJSTVA: IME, PREZIME, GODINA RODJENJA,
MESTO RODJENJA, PREBIVALISTE,
ZATIM DEFINISATI METODU : IME I PREZIME KOJA TREBA DA ISPISE IME I PREZIME
OBJEKTA U FORMATU "ZOVEM SE IME,PREZIVAM SE PREZIME".
ZATIM DEFINISATI METODU STAROST KOJA IZRACUNAVA KOLIKO OSOBA IMA GODINA.
KLASA TREBA DA IMA METODU PREBIVALISTE I MESTO RODJENJA KOJA PROVERAVA 
DA LI SE OSOBA RODILA U ISTOM GRADU U KOM ZIVI ,UKOLIKO JESTE ISPISUJE
PORUKU: "RODJEN SAM I ZIVIM U GRAD ", A UKOLIKO NIJE ISPISUJE PORUKU:
"RODJEN SAM U GRAD A ZIVIM U GRAD".     */

class Osoba{
    constructor(ime,prezime,godinaRodjenja,mestoRodjenja,prebivaliste){
        this.ime=ime;
        this.prezime=prezime;
        this.godinaRodjenja=godinaRodjenja;
        this.mestoRodjenja=mestoRodjenja;
        this.prebivaliste=prebivaliste;
        
}
predstaviSe(){
    console.log("Zovem se " + this.ime + " "+ this.prezime);
}

starost(){

    console.log(2020-this.godinaRodjenja)
}
prebivalisteProvera(){

    if(this.mestoRodjenja==this.prebivaliste){
            console.log("Rodjen sam u : " + this.mestoRodjenja + " i zivim u :" + this.prebivaliste);
        }


    else{
        console.log("Rodjen sam u: " + this.mestoRodjenja +  " a zivim u : " + this.prebivaliste);
    }
    }
}
let osoba1=new Osoba("Bata","Srdanovic",1979,"Beograd","Grocka");
osoba1.prebivalisteProvera();