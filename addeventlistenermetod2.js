 /* 4.ZADATAK

 NA VASOJ HTML STRANICI DODATI h1 TAG KOME JE POTREBNO DODELITI DVA EVENT
 LISTENERA.
 PRVI TREBA DA PROMENI BOJU h1 TAGA KADA JE DOGADJAJ ISPUNJEN DOK DRUGI TREBA 
 DA PROMENI SADRZAJ UNUTAR NJEGA.   */

 <h1 id="tokyo">Kono machi wa nan to iiu machi desu ka?</h1>

 function machi(){
    bata.style.color="yellow";
    }
    
    let bata=document.getElementById("tokyo");
    bata.addEventListener("click", machi); 
    
    bata.addEventListener("mouseover", function(){
    bata.style.color="blue";
    })  
    
    
    
    