/* 4.ZADATAK
NAPISATI KLASU VOZILO.
POTREBNO JE DA VOZILO IMA SVOJSTVA TIP,MARKA,MODEL,GODINA PROIZVODNJE,
ZAPREMINA MOTORA.
ZATIM INSTANCIRATI DESET NOVIH OBJEKATA KLASE VOZILO.    */

class Vozilo{
    constructor(tip,marka,model,godinaProizvodnje,zapreminaMotora){
    this.proizvodjac=tip;
    this.model=marka;
    this.marka=model;
    this.starost=godinaProizvodnje;
    this.kubikaza=zapreminaMotora;
}
}
let prvoVozilo=new Vozilo("klasicni","Mercedes","S400",2015,2500);
let drugoVozilo=new Vozilo("sportski","Honda","Swift",2014,1800);
let treceVozilo=new Vozilo("klasicni","Fiat","Punto",2019,1600);
let cetvrtoVozilo=new Vozilo("karavan","Opel","Astra",2010,1300);
let petoVozilo=new Vozilo("sportski","Buggati","Cairon",2018,2500);
let sestoVozilo=new Vozilo("sportski","Bentli","Continetal",2020,2100);
let sedmoVozilo=new Vozilo("sportski","Mazda","Miata",2020,2200);
let osmoVozilo=new Vozilo("klasicni","BMW","Grand",2017,1800);
let devetoVozilo=new Vozilo("klasicni","Ford Fiesta",2009,1300);
let desetoVozilo=new Vozilo("klasicni","Reno","Clio",2000,1600);
