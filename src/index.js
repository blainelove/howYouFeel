//test
const imglist = document.querySelector("div#listsArr")
const listForm = document.querySelector("form#listsArr")

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
    
        fetch(`http:localhost:3000/lists/${event.target.dataset.id}`)
            .then(response => response.json())
            .then(listObj => {
            
            const image = document.querySelector("img#image")
            const span = document.querySelector("span#description")
            const time = document.querySelector("span#time")
        
           
           
            listForm.dataset.id = listObj.id

            image.src = listObj.image
            span.textContent = listObj.description
            time.textContent = listObj.created_at
        


        })
    }
})


listForm.addEventListener('submit', event => {
event.preventDefault()

    const image = event.target.image_pic.value
    const description = event.target.description.value

    const newObj = {image, description}

    fetch(`http://localhost:3000/lists/${listForm.dataset.id}`,{
         method: "PATCH",

        headers: { "Content-Type": "application/json",
                
        },

        body: JSON.stringify(newObj)

})
        .then(response => response.json())
        .then(newObj => {

        console.log(newObj)



    })
        
})
        
        
        


listarrfun()