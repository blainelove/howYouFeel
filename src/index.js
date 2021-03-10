//test
const imglist = document.querySelector("div#listsArr")

function listarrfun(){

    fetch("http:localhost:3000/lists")
        .then(response => response.json())
        .then(listarr => {
            console.log(listarr)
            listarr.forEach(list => {
                const imgTag = document.createElement("img")
                const pTag = document.createElement("p")
                

                pTag.textContent = list.created_at
                imgTag.src = list.image
                imgTag.dataset.id = list.id
                
                imglist.append(imgTag)
                imglist.append(pTag)
            })
        })

}

imglist.addEventListener("click", event => {
    
    if (event.target.tagName === "IMG"){

    }
})
listarrfun()