
---

# Projeto de Categorização de Alunos e Geração de Traços

Este projeto consiste em uma aplicação simples em JavaScript que permite categorizar alunos com base na idade e gerar traços abaixo de um nome fornecido através de um formulário HTML.

## Funcionalidades

1. **Categorização por Idade:**
   - A função `categorizarAluno(idade)` determina a categoria do aluno com base nos seguintes critérios:
     - "Infantil" para idades de 1 a 12 anos.
     - "Juvenil" para idades de 13 a 18 anos.
     - "Adulto" para idades maiores que 18 anos.

2. **Geração de Traços:**
   - A função `retornarTracos(nome)` gera traços abaixo de um nome fornecido, substituindo os espaços por traços (`-`).

3. **Integração com Formulário HTML:**
   - O formulário HTML permite inserir o nome e a idade do aluno.
   - Ao submeter o formulário, o nome é exibido, os traços são gerados abaixo do nome e a categoria do aluno é exibida com base na idade inserida.

## Estrutura do Código

O código JavaScript (`script.js`) utiliza manipulação do DOM para interagir com o formulário e exibir os resultados na página. Aqui está um exemplo simplificado do código relevante:

```javascript
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

function retornarTracos(nome) {
    let tracos = "";
    for (let i = 0; i < nome.length; i++) {
        if (nome[i] !== " ") {
            tracos += "-";
        } else {
            tracos += " ";
        }
    }
    return tracos;
}

function categorizarAluno(idade) {
    let categoria = "";

    if (idade > 0 && idade <= 12) {
        categoria = "Infantil";
    } else if (idade >= 13 && idade <= 18) {
        categoria = "Juvenil";
    } else {
        categoria = "Adulto";
    }

    return categoria;
}

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const nome = frm.inNome.value;
    const idade = Number(frm.inIdade.value);

    resp.innerText = `${nome}\n${retornarTracos(nome)}\nCategoria: ${categorizarAluno(idade)}`;
});
```

## Como Utilizar

Para utilizar este projeto:

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/Adrian8956/clubeDeNatacao.git
   ```

2. Abra o arquivo `index.html` em um navegador web.

3. Preencha o formulário com o nome e a idade do aluno e clique em "Enviar".

4. Verifique os resultados exibidos abaixo do formulário, incluindo o nome com traços e a categoria do aluno.

## Contribuição

Este projeto é um exemplo simples e pode ser expandido ou melhorado de várias maneiras. Se desejar contribuir:

- Faça um fork do repositório.
- Implemente melhorias ou novas funcionalidades.
- Envie um pull request descrevendo suas alterações.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT) - veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

