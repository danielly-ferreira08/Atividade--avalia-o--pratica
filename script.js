function corrigir(){
    // let row = document.querySelector('hr'); 
    // row.classList.add('show'); 

	let result = document.querySelector('.hide'); 
    result.classList.remove('hide'); 
    result.classList.add('show');

    let corretas = 4;
    let total = 5;

    percent = (corretas / total)*100;
    console.log(percent);

    let camText = document.getElementById("texto").value;
    document.getElementById("camText").innerHTML = ("Nome: " + camText);

    let QuesPri = document.getElementById("Q01").value;
    document.getElementById("quespri").innerHTML = ("Resposta 1: " + QuesPri);

    let camText2 = document.getElementById("Q02").value;
    document.getElementById("camText2").innerHTML = ("Resposta 2: " + camText2);

    let checkbox_octal = document.getElementById("check1");
    let checkbox_binario = document.getElementById("check2");
    let checkbox_decimal = document.getElementById("check3");
    let checkbox_hexadecimal = document.getElementById("check4");


    if(checkbox_octal.checked){
        document.getElementById("campoOctal").innerHTML = ("Resposta 3: Sistema Octal")
    }if(checkbox_binario.checked){
        document.getElementById("campoBinario").innerHTML = ("Resposta 3: Sistema Binário")
    }if(checkbox_decimal.checked){
        document.getElementById("campoDecimal").innerHTML = ("Resposta 3: Sistema Decimal")
    }if(checkbox_hexadecimal.checked){
        document.getElementById("campoHexadecimal").innerHTML = ("Resposta 3: Algarismos Hexadecimal")
    }

    if(document.getElementById("iso").checked){
        document.getElementById("camRadio").innerHTML = ("Resposta 4: Álcool Isopropílico");
    }else if(document.getElementById("con").checked){
        document.getElementById("camRadio").innerHTML = ("Resposta 4: Limpa Contato");
    }else if(document.getElementById("alc").checked){
        document.getElementById("camRadio").innerHTML = ("Resposta 4: Álcool 70%");
    }else if(document.getElementById("agu").checked){
        document.getElementById("camRadio").innerHTML = ("Resposta 4: Água");
    }

    if(document.getElementById("ver").checked){
        document.getElementById("camRadio2").innerHTML = ("Resposta 5: Verdadeira");
    }else if(document.getElementById("fal").checked){
        document.getElementById("camRadio2").innerHTML = ("Resposta 5: Falsa");
    }

    
}