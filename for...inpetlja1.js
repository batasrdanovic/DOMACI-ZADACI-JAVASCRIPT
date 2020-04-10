/* 5.ZADATAK
UZ POMOC PETLJE FOR...IN IZMENITI VREDNOSTI ZA SVAKO SVOJSTVO NEKOG OBJEKTA. */


let zivotinja = {
                 vrsta: "Delfin",
                 staniste: "Voda",
                 boja: "Plava",
                 ljubimac: "Svaciji",
}
for( s in zivotinja){
    alert ( s + " " + zivotinja[s]);
}

/* ISPISACE REZULTAT:

vrsta Delfin
staniste Voda
boja Plava
ljubimac Svaciji     */