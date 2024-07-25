let ul = document.querySelector(".lista")

document.querySelector("#input__descricao")

let adicionarBotao = document.querySelector(".addBotao")

adicionarBotao.addEventListener("click", adicionarItemNaLista)

function adicionarItemNaLista(event) {
    event.preventDefault()

    const formulario = document.querySelector('.formulario')
    const inputImagem = document.querySelector('.input__image')
    const imagem = inputImagem.value
    const inputTitle = document.querySelector('.input__texto')
    const itemTitle = inputTitle.value
    const titleNode = document.createTextNode(itemTitle)
    const inputDescricao = document.querySelector('#input__descricao')
    const itemDescription = inputDescricao.value
    const descriptionNode = document.createTextNode(itemDescription)
    
    const file = inputImagem.files[0]

    if(file && file.type.startsWith('image/') && itemTitle != "" && itemDescription != ""){
        const imgElement = document.createElement('img')
        imgElement.setAttribute('class', 'img__style')
        imgElement.src = URL.createObjectURL(file)
        
        const listItem = document.createElement('li')
        listItem.setAttribute('class', 'lista__item')
        const divItem = document.createElement('div')
        divItem.setAttribute('class', 'lista__texto')
        listItem.appendChild(imgElement)
        listItem.appendChild(divItem)
        const titleItem = document.createElement('h2')
        divItem.appendChild(titleItem)
        titleItem.appendChild(titleNode)
        const paragraphItem = document.createElement('p')
        divItem.appendChild(paragraphItem)
        paragraphItem.appendChild(descriptionNode)

        const imageList = document.querySelector('.lista')
        imageList.appendChild(listItem)

        formulario.reset()
        

    }else {
        alert('Há algum campo vazio.')
    }


}
