function bt10() {
    document.getElementById("pantalla").value="10000";
}

function bt20() {
    document.getElementById("pantalla").value="20000";
}

function bt40() {
    document.getElementById("pantalla").value="40000";
}

function bt50() {
    document.getElementById("pantalla").value="50000";
}

function bt100() {
    document.getElementById("pantalla").value="100000";
}

function bt200() {
    document.getElementById("pantalla").value="200000"; 
    }

    function bt1(){
    document.getElementById("pantalla").value=document.getElementById("pantalla").value +="1";
    }

    function bt2(){
    document.getElementById("pantalla").value=document.getElementById("pantalla").value+="2";
    }

    function bt3(){
    document.getElementById("pantalla").value=document.getElementById("pantalla").value+="3";
    }

    function bt4(){
    document.getElementById("pantalla").value=document.getElementById("pantalla").value+="4";
    }

    function bt5(){
    document.getElementById("pantalla").value=document.getElementById("pantalla").value+="5";
    }

    function bt6(){
    document.getElementById("pantalla").value=document.getElementById("pantalla").value+="6";
    }

    function bt7(){
    document.getElementById("pantalla").value=document.getElementById("pantalla").value+="7";
    }

    function bt8(){
    document.getElementById("pantalla").value=document.getElementById("pantalla").value+="8";
    }

    function bt9(){
    document.getElementById("pantalla").value=document.getElementById("pantalla").value+="9";
    }

    function bt0(){
    document.getElementById("pantalla").value=document.getElementById("pantalla").value+="0";
}

function quitar (){
    let value=document.getElementById("pantalla").value=visualViewport.substring(0,visualViewport.length-1);
}

function btc() {
document.getElementById("pantalla").value="";
document.getElementById("factura").value="";
}

function btr(){
    let valor = document.getElementById("pantalla").value
    document.getElementById("pantalla").value=valor.substring(0,valor.length-1);
}

function btr() {
    let valor = document.getElementById("pantalla").value
    document.getElementById("pantalla").value=valor.substring(0,valor.length-1);
}

function btr() {
    let valor = document.getElementById("pantalla").value
    document.getElementById("pantalla").value=valor.substring(0,valor.length-1);
}

function bta(){
    let montoretiro =  document.getElementById("pantalla").value;
    let b10 = 10
    let b20 = 10
    let b50 = 10
    let b100 = 10

    let be10 = 0
    let be20 = 0
    let be50 = 0
    let be100 = 0

    let totaldisponible = 1800000
    let totalentregado = 0

    console.log("Inciando facturacion...")

    if (montoretiro>0  && montoretiro<=totaldisponible) {
        while((montoretiro-totalentregado)>=100000 && b100>0){       
            b100=b100-1
            be100=be100+1
            totaldisponible=totaldisponible-100000;
            totalentregado=totalentregado+100000;
        }
    }

    else{
        alert("saldo inssuficiente")
    }

document.getElementById("factura").value="retiro efectivo: "+totalentregado+ "billetes entregados: " + be100;

    while ((montoretiro-totalentregado)>=50000 && b50>0) {
        b50=b50-1
        be50=be50+1
        totaldisponible=totaldisponible-50000;
        totalentregado=totalentregado+50000;
        document.getElementById("factura").value="retiro efectivo: "+totalentregado+ "billetes entregados: " + be50;
    }

    while ((montoretiro-totalentregado)>=20000 && b20) {
        b20=b20-1
        be20=be20+1
        totaldisponible=totaldisponible-20000;
        totalentregado=totalentregado+20000;
        document.getElementById("factura").value="retiro efectivo: "+totalentregado+ "billetes entregados: " + be20;
    }

    while ((montoretiro-totalentregado  )>=10000 && b10) {
        b10=b10-1
        be10=be10+1
        totaldisponibletotaldisponible-10000;
        totalentregado=totalentregado+10000;
        document.getElementById("factura").value="retiro efectivo: "+totalentregado+ "billetes entregados: " + be10;
    }

}

function btc() {
document.getElementById("pantalla").value="";
document.getElementById("factura").value="";
}

