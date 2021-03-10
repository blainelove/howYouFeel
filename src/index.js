//test

function listarrfun(){

    fetch("http:localhost:3000/lists")
        .then(response => response.json())
        .then(listarr => {
            console.log(listarr)
            listarr.forEach(list => {
                const imgTag = document.createElement("img")
                const pTag = document.createElement("p")
                const imglist = document.querySelector("div#listsArr")

                pTag.textContent = list.created_at
                imgTag.src = list.image
                
                imglist.append(imgTag)
                imglist.append(pTag)
            })
        })

}
listarrfun()