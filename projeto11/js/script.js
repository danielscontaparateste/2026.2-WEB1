
function mostrar(){
    // console.log('ok');
    var x = Number(document.getElementById("iptX").value);
    // console.log(x);

    var container = document.createElement("div");
    container.setAttribute("id","container");

    for (var k=0; k<x; k++){
        var my_span = document.createElement("span");
        my_span.setAttribute("class","box");
        my_span.innerHTML = k+1;
        container.appendChild(my_span);
    }

    document.querySelector("body").appendChild(container);        

    // var msg = "";
    // for (var k=0; k<x; k++){
    //     // console.log(k);
    //     msg = msg + (k+1) + "</br>";
    // }

    // console.log(k);

    // document.querySelector("#spnMsg").innerHTML = msg;
    // document.querySelector("#spnMsg").textContent = msg;
}

function limpar(){
    document.getElementById("formX").reset();
    // document.querySelector("#spnMsg").innerHTML = "";   
}