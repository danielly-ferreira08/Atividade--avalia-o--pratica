function corrigir(){

    let div = document.querySelector("#resu");
    div.classList.remove("hide");
    div.classList.add("show");

    let acertos = 0;

    let nome = document.querySelector("#nome").value;

    //Questão 1
    let q1 = document.querySelector("#campo_text").value;
    if(q1 == "Administração, Informática, Enfermagem"){
        acertos++;
    }

    //Questão 2
    let octal = document.querySelector("#octal").checked;
    let bi = document.querySelector("#bi").checked;
    let deci = document.querySelector("#deci").checked;
    let hexa = document.querySelector("#hexa").checked;

    if((bi)&&(hexa)){
        acertos++;
        if((octal)||(deci)){
            acertos--;
        }
    }if((octal)||(deci)){
        acertos = acertos;
    }

    //Questão 3
    let cont = document.querySelector("#contato").checked;

    if(cont){
        acertos++
    }

    //Questão 4
    let ver = document.querySelector("#tr").checked;

    if(ver){
        acertos++
    }

    let percent = (acertos*100)/4

    //Resumo
    document.querySelector("#res_nome").innerHTML = "Nome: "+nome;
    document.querySelector("#corretas").innerHTML = "Corretas: "+acertos+" de 4"
    document.querySelector("#percentual").innerHTML = "Percentual: "+percent+"%"   
}