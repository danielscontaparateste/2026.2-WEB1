function mostrar(){
    var objIptNome = document.getElementById("iptNome");
    // console.log('Daniel');
    console.log(typeof(objIptNome));

    var username = objIptNome.value;

    // objIptNome.style.backgroundColor = "red";

    /* Comentários 
        de múltiplas
            linhas 
    */

    var objSpnMsg = document.querySelector("#spnMsg");

    objSpnMsg.style.display = "block";
    // objSpnMsg.style.border = "1px solid black";
    objSpnMsg.style.marginTop = "20px";
    objSpnMsg.style.color = "red";
    
    objSpnMsg.innerHTML = "O nome digitado é: " + username;
    

    // alert(username);
}


function limpar(){

    var objIptNome = document.getElementById("iptNome");
    objIptNome.value = "";

    document.querySelector("#spnMsg").innerHTML = "";

    document.getElementById("spnContador").textContent = "";

}

function contador(){
    var objIptNome = document.getElementById("iptNome");

    var username =  objIptNome.value;

    var objSpnContador = document.getElementById("spnContador");

    objSpnContador.textContent = username.length;
}

// Comentários 

/* Implementação 
        das Operações
*/    

function operacao(){
    var iptX = document.getElementById("iptX");
    // var x = Number(iptX.value);
    var x = parseInt(iptX.value);

    // var y = Number(document.getElementById("iptY").value);
    var y = parseInt(document.getElementById("iptY").value);

    // var op = Number(document.getElementById('iptOp').value);
    var op = Number(document.getElementById('slctOper').value);

    var res = 0;
    if (op==0){
        res = somar(x, y);
    }else if (op==1){
        res = subtrair(x, y);
    }else if (op==2){
        res = multiplicar(x, y);
    }else if (op==3){
        if (y!=0){
            res = dividir(x,y);
        }else{
            res = 'inválido';    
        }    
    }else{
        res = 'inválido';
    }

    document.getElementById("spnRes").innerHTML = `resultado da operação = ${res}`;

}

function somar(a , b){
    return (a+b);
}

function subtrair(a, b){
    return (a-b);
}

function multiplicar(a, b){
    return (a*b);
}

function dividir(a, b){
    return (a/b);
}