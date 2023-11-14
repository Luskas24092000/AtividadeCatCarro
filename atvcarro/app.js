const getMarcas = () => {
    const tarefas = fetch('https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/data.json')

    tarefas
        .then(resposta => resposta.json())
        .then(marcas => {
            const ul = document.createElement('ul')
            marcas.forEach(marca => {
                const li = document.createElement('li')
                const logo = document.createElement('img')
                const nome = document.createElement('p')
                nome.innerText = marca.name
                logo.src = marca.image?.optimized
                li.appendChild(logo)
                li.appendChild(nome)
                ul.appendChild(li)
                console.log(marca)
            })
            document.body.appendChild(ul)
        })
        .catch(erro => console.log(erro))
}

const btnMarcas = document.querySelector("#mostrar-marcas")
btnMarcas.addEventListener("click", getMarcas)