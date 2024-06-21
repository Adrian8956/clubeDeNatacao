const frm = document.querySelector("form");
const resp = document.querySelector("pre");

function retornarTracos(nome){
    let tracos = "";
    for(let i = 0; i < nome.length; i++){
      if(nome[i] !== " "){
        tracos += "-";
      }else{
        tracos += " ";
      }
    }

    return tracos;
}

function categorizarAluno(idade){
    let categoria = "";

    if(idade > 0 && idade <=12){
        categoria += "Infantil";
    }else if(idade >= 13 && idade <= 18){
        categoria += "Juvenil";
    }else{
        categoria += "Adulto";
    }

    return categoria
}

frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const nome = frm.inNome.value;
    const idade = Number(frm.inIdade.value);

    resp.innerText = `${nome}\n${retornarTracos(nome)}\nCategoria: ${categorizarAluno(idade)}`
})