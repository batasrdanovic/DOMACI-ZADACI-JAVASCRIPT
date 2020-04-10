/* 3.ZADATAK
DEFINISATI OBJEKAT GRAD KOJI SADRZI SVOJSTVA  NAZIV: DRZAVA,BROJ STANOVNIKA,
I POSTANSKI BROJ.
POTREBNO JE DEFINISATI GET I SET METODU .
GET METODA TREBA DA VRACA SVOJSTVO NAZIV, DOK SET METODA TREBA DA MENJA POSTANSKI
BROJ GRADA.
POZVATI GET I SET METODU I ZATIM ISPISATI VREDNOSTI ZA TA SVOJSTVA .  */

// OVO JE PRIMER KAKO IDE NEKA SET METODA :

let grad={
    nazivDrzave:"Japan",
    brojStanovnika:127000000,
    postanskiBroj:94378,

set metropolis(noviGrad){
    this.nazivDrzave=noviGrad;
}
};
grad.metropolis="Tokyo";
alert(grad.nazivDrzave);     

/* ISPISACE REZULTAT :

Tokyo      */



// NA OSNOVU GORNJEG PRIMERA RESITI ZADATAK BR.3
// sa get metodom 

let grad={
    nazivDrzave:"Japan",
    brojStanovnika:127000000,
    postanskiBroj:94378,

get megapolis(){
    return this.nazivDrzave

}
};
alert(grad.megapolis);

/* ISPISACE REZULTAT :

Japan     */

//sa set metodom

let grad={
    nazivDrzave:"Japan",
    brojStanovnika:127000000,
    postanskiBroj:94378,

set megapolis(noviGrad){
    this.postanskiBroj=noviGrad;
}
};

grad.megapolis="Sendai";
alert(grad.postanskiBroj);

/* ISPISACE REZULTAT :

Sendai    */