//test
const imglist = document.querySelector("div#listsArr")
const listForm = document.querySelector("form#listsArr")
const newlistForm = document.querySelector("form#newlistsArr")
const deleteItem = document.querySelector("button#deleteItem")
const ul = document.querySelector("ul#to-do")
const items = document.querySelector('div#info ul')


function listarrfun(){

    fetch("http:localhost:3000/lists")
        .then(response => response.json())
        .then(listarr => {
          
            listarr.forEach(list => {
                
                const imgTag = document.createElement("img")
                const pTag = document.createElement("p")
                
                
                pTag.textContent = list.created_at
                imgTag.src = list.image
                imgTag.dataset.id = list.id
                pTag.dataset.id = list.id
                
                imglist.append(imgTag)
                imglist.append(pTag)

                list.items.forEach(item => {
                    const liTag = document.createElement('li')
                    liTag.dataset.id = item.id
                    liTag.dataset.list_id = item.list_id
                    const description = document.createElement('p')
                    description.textContent = item.description
                    const complete = document.createElement('p')
                    complete.textContent = `Complete: ${item.complete}`
                    const priority = document.createElement('p')
                    priority.textContent =`Priority: ${item.priority}`

                    liTag.append(description, complete, priority)
                    ul.append(liTag)
                })
                
            
            })
        })

}



imglist.addEventListener("click", event => {
    console.log("click", event.target.dataset.id)
    
    
    
    if (event.target.tagName === "P"||event.target.tagName === "IMG"){
        

    
        fetch(`http:localhost:3000/lists/${event.target.dataset.id}`)
            .then(response => response.json())
            .then(timeObj => {//listObj change name
            console.log(timeObj)
            const image = document.querySelector("img#image")
            const span = document.querySelector("span#description")
            
           
            listForm.dataset.id = timeObj.id
            deleteItem.dataset.id = timeObj.id

            image.src = timeObj.image
            span.textContent = timeObj.description
            time.textContent = timeObj.created_at

            timeObj.items.forEach(item => {
                const liTag = document.createElement('li')
                liTag.dataset.id = item.id
                liTag.dataset.list_id = item.list_id
                const description = document.createElement('p')
                description.textContent = item.description
                const complete = document.createElement('p')
                complete.textContent = `Complete: ${item.complete}`
                const priority = document.createElement('p')
                priority.textContent = `Priority: ${item.priority}`

                liTag.append(description, complete, priority)
                items.append(liTag)
           
            })
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

newlistForm.addEventListener('submit', event => {
    event.preventDefault()
    

    const image = event.target.imagePic.value
    const description = event.target.newDescription.value

    fetch('http://localhost:3000/lists', {
        method: "POST",
        headers: { "Content-Type": "application/json",
    
                // "Accept": "application/json"
    },
       
        body: JSON.stringify({image: image, description: description})
    })
        .then(response => response.json())
        .then(newObj => {
            
            const imgTag = document.createElement("img")
            const pTag = document.createElement("p")
                

            pTag.textContent = newObj.created_at
            imgTag.src = newObj.image
            imgTag.dataset.id = newObj.id
            pTag.dataset.id = newObj.id
                
            imglist.append(imgTag)
            imglist.append(pTag)
            
        
        newlistForm.reset()
        })    
        
})

deleteItem.addEventListener('click', event => {
    event.preventDefault()
        console.log(event.target, "hello")
    fetch(`http://localhost:3000/lists/${deleteItem.dataset.id}`,{
        method: "DELETE",
         })
        .then(res => res.json())
        .then(res => console.log(res))
        })




// function items (){
// fetch('http://localhost:3000/items')
//         .then(res => res.json())
//         .then(itemarr => {
//             console.log(ul)
//             itemarr.forEach(item => {
//                 const li = document.createElement('li')
//                 li.dataset.id = item.id
//                 li.dataset.list_id = item.list_id 
//                 const description = document.createElement('h6')
//                 description.textContent = item.description
//                 const complete = document.createElement('p')
//                 complete.textContent = `Completed: ${item.complete}`
//                 const priority = document.createElement('p')
//                 priority.textContent = `Prority: ${item.priority}`

//                 li.append(description, complete, priority)
//                 console.log(li)
//                 ul.append(li)
                

//             })
//         })

// }

listarrfun()