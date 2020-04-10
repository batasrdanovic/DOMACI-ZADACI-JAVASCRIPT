/* 2. ZADATAK
DEFINISATI KLASU VOZILO KOJA IMA SVOJSTVA: 
GODINA PROIZVODNJE,BROJ SASIJE,BOJA, KUBIKAZA.
TAKODJE,POTREBNO JE DA OVA KLASA POSEDUJE METODU KOJA IZRACUNAVA STAROST VOZILA
I ISPISUJE PORUKU O TOME KOLIKO JE VOZILO STARO.
ZATIM NAPRAVITI KLASU AUTOMOBIL KOJA NASLEDJUJE KLASU VOZILO I IMA SVOJSTVA:
MARKA,MODEL,POGON,EMISIONA KLASA,BROJ BRZINA,BROJ VRATA,GORIVO.
TAKODJE, POTREBNO JE DA NOVA KLASA POSEDUJE METODU KOJA ISPISUJE SVE PAROVE 
SVOJSTVO : VREDNOST.
NAKON STO JE NAPRAVLJENA KLASA AUTOMOBIL,TREBA NAPRAVITI KLASU KAMION KOJA 
NASLEDJUJE KLASU VOZILO I POSEDUJE SVOJSTVA : MARKA, MODEL, BROJ OSOVINA,
MAXIMALNO OPTERECENJE.
NAKON STO SU NAPISANE KLASE NAPRAVITI OBJEKAT ZA SVAKU KLASU I POZVATI SVE METODE
KOJE SE MOGU POZVATI NAD SVAKIM OBJEKTOM.   */


// DEFINISANJE KLASE VOZILO

class Vozilo {
      constructor(godinaProizvodnje,brojSasije,boja,kubikaza){
      this.godinaProizvodnje=godinaProizvodnje;
      this.brojSasije=brojSasije;
      this.boja=boja;
      this.kubikaza=kubikaza;
}

// DEFINISANJE METODE KOJA IZRACUNAVA STAROST

starostVozila(){
    console.log("Ovo vozilo je staro" + (2020-this.godinaProizvodnje) + "godina");
}
}
// DEFINISANJE KLASE AUTOMOBIL 

class Automobil extends Vozilo{
constructor(godinaProizvodnje,brojSasije,boja,kubikaza,marka,model,pogon,emisionaKlasa,brojBrzina,brojVrata,gorivo){
     super (godinaProizvodnje,brojSasije,boja,kubikaza);
       this.marka=marka;
       this.model=model;
       this.pogon=pogon;
       this.emisionaKlasa=emisionaKlasa;
       this.brojBrzina=brojBrzina;
       this.brojVrata=brojVrata;
       this.gorivo=gorivo;
}

// DEFINISANJE METODE KOJA ISPISUJE PAROVE SVOJSTVO:VREDNOST

ispisiSvojstvoiVrednost(){
    for ( let a in this ){
        console.log( a +  ":" + this[a])
}
}
}

// DEFINISANJE KLASE KAMION

class Kamion extends Vozilo{
constructor(godinaProizvodnje,brojSasije,boja,kubikaza,marka,model,brojOsovina,maksimalnoOpterecenje){
      super(godinaProizvodnje,brojSasije,boja,kubikaza);
       this.marka=marka;
       this.model=model;
       this.brojOsovina=brojOsovina;
       this.maksimalnoOpterecenje=maksimalnoOpterecenje;
}
}

// KREIRANJE OBJEKTA KLASE AUTOMOBIL

let Mitsubishi=new Automobil(2019,5555999,"crvena",3000,"Mitsubishi","Outlander","4x4","euro6",5,5,"benzin");


// KREIRANJE KLASE OBJEKTA KAMION

let Fuso=new Kamion(2018,123456,"siva",8000,"Fuso","Nissan","3","15 tona");

// POZIVANJE SVIH METODA ZA KLASU AUTOMOBIL

Mitsubishi.starostVozila();
Mitsubishi.ispisiSvojstvoiVrednost();

// POZIVANJE SVIH METODA ZA KLASU KAMION

Fuso.starostVozila();