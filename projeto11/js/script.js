
function mostrar(){
    // console.log('ok');
    var x = Number(document.getElementById("iptX").value);
    // console.log(x);

    var msg = "";
    for (var k=0; k<x; k++){
        // console.log(k);
        msg = msg + (k+1) + "</br>";
    }

    // console.log(k);

    document.querySelector("#spnMsg").innerHTML = msg;
    // document.querySelector("#spnMsg").textContent = msg;
}

function limpar(){
    document.getElementById("formX").reset();
    document.querySelector("#spnMsg").innerHTML = "";   
}