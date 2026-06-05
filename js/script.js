let btnCalcular = document.getElementById("calcular");
let btnLimpiar = document.getElementById("limpiar");

btnCalcular.addEventListener("click", calcular);
btnLimpiar.addEventListener("click", limpiar);

setInterval(function(){

    let fecha = new Date();

    document.getElementById("hora").textContent =
    "🕒 " + fecha.toLocaleTimeString();

},1000);

function calcular(){

    let producto =
    document.getElementById("producto").value;

    let demanda =
    Number(document.getElementById("demanda").value);

    let aumento =
    Number(document.getElementById("aumento").value);

    let stock =
    Number(document.getElementById("stock").value);

    let resultado =
    document.getElementById("resultado");

    if(
        producto === "" ||
        demanda <= 0 ||
        stock <= 0
    ){
        resultado.innerHTML =
        "<p class='error'>Complete todos los campos.</p>";
        return;
    }

    let nuevaDemanda =
    demanda + (demanda * aumento / 100);

    let diferencia =
    stock - nuevaDemanda;

    let porcentaje =
    (nuevaDemanda * 100) / stock;

    if(porcentaje > 100){
        porcentaje = 100;
    }

    let barra =
    document.getElementById("progreso");

    barra.style.width =
    porcentaje + "%";

    if(diferencia >= 20){

        barra.style.background="#22c55e";

        resultado.innerHTML =
        `
        <p class="exito">
        ✅ Stock suficiente
        </p>

        <div class="tarjeta">
        <h3>📦 Producto</h3>
        <p>${producto}</p>
        </div>

        <div class="tarjeta">
        <h3>📈 Nueva Demanda</h3>
        <p>${nuevaDemanda}</p>
        </div>

        <div class="tarjeta">
        <h3>🏪 Stock Restante</h3>
        <p>${diferencia}</p>
        </div>
        `;
    }
    else{

        barra.style.background="#ef4444";

        resultado.innerHTML =
        `
        <p class="error">
        ❌ Stock insuficiente
        </p>

        <div class="tarjeta">
        <h3>📦 Producto</h3>
        <p>${producto}</p>
        </div>

        <div class="tarjeta">
        <h3>📈 Nueva Demanda</h3>
        <p>${nuevaDemanda}</p>
        </div>

        <div class="tarjeta">
        <h3>⚠️ Faltan</h3>
        <p>${Math.abs(diferencia)}</p>
        </div>
        `;
    }
}

function limpiar(){

    document.getElementById("producto").value="";
    document.getElementById("demanda").value="";
    document.getElementById("aumento").value="";
    document.getElementById("stock").value="";
    document.getElementById("resultado").innerHTML="";
    document.getElementById("progreso").style.width="0%";
}

function caso1(){

    document.getElementById("producto").value="Aceite";
    document.getElementById("demanda").value=100;
    document.getElementById("aumento").value=20;
    document.getElementById("stock").value=150;
}

function caso2(){

    document.getElementById("producto").value="Azúcar";
    document.getElementById("demanda").value=100;
    document.getElementById("aumento").value=80;
    document.getElementById("stock").value=120;
      }
