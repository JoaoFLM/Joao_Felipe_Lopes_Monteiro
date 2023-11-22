function verificar(){
    const nome = document.getElementById("idNome");
    var enviar = true;
    if (nome.value.length == 0){
        nome.style.backgroundColor = "black";
        nome.style.color = "red";
        enviar = false;
    }

    const idade = document.getElementById("idIdade");
    if(isNaN(idade.value) || idade.value.length == 0){
        idade.style.backgroundColor = "black";
        idade.style.color = "red";
        enviar = false;
    }

    const email = document.getElementById("idEmail");
    if(email.value.indexOf("@") < 0 || email.value.indexOf(".") < 0){
        email.style.backgroundColor = "black";
        email.style.backgroundColor = "red";
        enviar = false;
    }

    if(enviar){
        document.form1.submit();
    }
}