/* 3.ZADATAK
NAPISATI KLASU OSOBA.
POTREBNO JE DA OSOBA IMA SVOJSTVA : IME, PREZIME, JMBG, MESTO RODJENJA.
ZATIM INSTANCIRATI PET OBJEKATA OVE KLASE .     */


class Osoba{
            constructor(ime,prezime,jmbg,mestoRodjenja){
            this.ime=ime;
            this.prezime=prezime;
            this.jmbg=jmbg;
            this.mestoRodjenja=mestoRodjenja;
}
predstaviSe(){
    console.log("Ovo su 4 svojstva klase:Osoba!");
}
}
let prvaOsoba=new Osoba("Issey","Okajima",2222222,"Kanagawa");
let drugaOsoba=new Osoba("Haruki","Yamamoto",333333,"Uejama");
let trecaOsoba=new Osoba("Tomohiro","Haneda",5555555,"Tokyo");
let cetvrtaOsoba=new Osoba("Taro","Miyazaki",7777777,"Hofu");
let petaOsoba=new Osoba("Kenzo","Matsushita",9999999,"Wakajama");

