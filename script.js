function quadrado(id)
{
    var id;
    console.log(id) 
    if (id == "idRoxinho" ){
        document.getElementById("idImagem").src="./imagens/nubank2.gif";
       } else if (id == "idVerdinho"){
            document.getElementById("idImagem").src="./imagens/next.png";
       } else if (id == "idAzulzinho"){
            document.getElementById("idImagem").src="./imagens/neon.jpg";
       }
       return id;
}