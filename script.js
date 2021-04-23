function exibirTexto() {
    /*
    entrada de dados
    */
    var texto;
    var isvalid;

    texto = document.getElementById("nome").value;
    
    /*  passo 1:
	saber o que foi digitado
    */

    /*  passo 2:
	definir o que é um nome correto
		+ regra 1:
		+ regra 2:
		+ ...
    */

    isvalid = true;

   //regra 1: input está vazia
    if( texto == ""){
        isvalid = false;
    }

   //regra 2: input não está vazia
   if( texto == undefined){
    isvalid = false;
   }

    /*  passo 3:
	verificar se o que foi digitado está correto
    */

    /*  passo 4:
	retornar se o nome está ok ou não
    */
   
    
    if(isvalid){
        alert("ok");
    }
    else{
        alert("errroooou!!");
    }
    
}