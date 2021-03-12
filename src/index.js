//test
const imglist = document.querySelector("div#listsArr")
const listForm = document.querySelector("form#listsArr")
const itemForm = document.querySelector("form#itemCreate")
const newlistForm = document.querySelector("form#newlistsArr")
const deleteItem = document.querySelector("button#DeleteList")
const ul = document.querySelector("ul#to-do")
const items = document.querySelector('div#info ul')
const but = document.querySelector("button.monkey")
const listItems = document.querySelector("div#info ul")
const imagedis = document.querySelector("img#image")
const spandis = document.querySelector("span#description")

//29


function listarrfun(){
    console.log(ul)
    fetch("http:localhost:3000/lists")
        .then(response => response.json())
        .then(listarr => {
            spandis.innerHTML = ""
            console.log(imagedis.src)
            imagedis.src = "data:image/png;base64,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"
            time.innerHTML = ""
            ul.innerHTML = ""
            imglist.innerHTML = ""
            listarr.forEach(list => {
                // const spanTag = document.createElement("span")
                const imgTag = document.createElement("img")
                // const pTag = document.createElement("p")
                // spanTag.dataset.id = list.id
                let formatdate = list.created_at.split("T")[0]
                // pTag.textContent = formatdate
                imgTag.src = list.image
                imgTag.dataset.id = list.id
                // pTag.dataset.id = list.id
                // spanTag.append(imgTag)
                imglist.append(imgTag)

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
    event.preventDefault()
    if (event.target.tagName === "IMG" ){
        
       
    
        fetch(`http:localhost:3000/lists/${event.target.dataset.id}`)
            .then(response => response.json())
            .then(timeObj => {//listObj change name
            console.log(timeObj)
            items.innerHTML = ""

            
            
            itemForm.dataset.id = timeObj.id
            listForm.dataset.id = timeObj.id
            deleteItem.dataset.id = timeObj.id

            imagedis.src = timeObj.image
            spandis.textContent = timeObj.description
            time.textContent = timeObj.created_at

            timeObj.items.forEach(item => {
                console.log(item)
                const liTagz = document.createElement('li')
                const delButton = document.createElement('BUTTON')
                delButton.classList.add("monkey")
                delButton.innerHTML = "Delete Item"
                delButton.dataset.id = item.id
                delButton.addEventListener("click", event => {
                    console.log(event.target)
                    fetch(`http://localhost:3000/items/${event.target.dataset.id}`,{
                            method: "DELETE",
                            headers: { "Content-Type": "application/json",
                        },
                    
                        })

                        .then(res => res.json())
                        .then(data => {
                            
                            let li = listItems.querySelector(`[data-id="${event.target.dataset.id}"]`)
                            li.remove()
                        })
                        listarrfun()


                        }


                )
                liTagz.dataset.id = item.id
                liTagz.dataset.list_id = item.list_id
                const description = document.createElement('p')
                description.textContent = item.description
                const complete = document.createElement('p')
                complete.textContent = `Complete: ${item.complete}`
                const priority = document.createElement('p')
                priority.textContent = `Priority: ${item.priority}`
                
               
                liTagz.append(description, complete, priority, delButton)
                items.append(liTagz)
                console.log(items)
           
            })
        })
    }
})



listForm.addEventListener('submit', event => {
event.preventDefault()

    const image = event.target.image_pic.value
    const description = event.target.description.value

    const newObj = {image, description}
    console.log(newObj)
    fetch(`http://localhost:3000/lists/${listForm.dataset.id}`,{
         method: "PATCH",

        headers: { "Content-Type": "application/json",
                
        },

        body: JSON.stringify(newObj)

})
        .then(response => response.json())
        .then(newObj => {

        console.log(newObj)
        listForm.reset()
        listarrfun()
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
console.log({deleteItem})

document.addEventListener('click', event => {
        console.log(event.target, "hello")
        if (event.target.id === "DeleteList") {
            fetch(`http://localhost:3000/lists/${deleteItem.dataset.id}`,{
                method: "DELETE",
                headers: { "Content-Type": "application/json",
                },
            })
            .then(res => res.json())
            .then(res => {
                console.log(res)
        
            listarrfun()
            
            const list = document.querySelector(`[data-id="${deleteItem.dataset.id}"]`)
        
            console.log(list)
            list.remove()
        })
        }
})

itemForm.addEventListener('submit', event => {
    event.preventDefault()
    
    const description = event.target.ItemDescription.value
    const priority = event.target.PriorityStatus.value
    const complete = event.target.CompleteStatus.value
    console.log(itemForm.dataset.id)

    fetch('http://localhost:3000/items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            list_id: itemForm.dataset.id,
            description: description,
            priority: priority,
            complete: complete
        })
    })
        .then(res => res.json())
        .then(item => {
            console.log(item)
            const liTagz = document.createElement('li')
            const delButton = document.createElement('BUTTON')
            delButton.classList.add("monkey")
            delButton.innerHTML = "Delete Item"
            delButton.dataset.id = item.id
            delButton.addEventListener("click", event => {
                console.log(event.target)
                fetch(`http://localhost:3000/items/${event.target.dataset.id}`,{
                        method: "DELETE",
                        headers: { "Content-Type": "application/json",
                    },
                    })

                    .then(res => res.json())
                    .then(data => {
                        
                        let li = listItems.querySelector(`[data-id="${event.target.dataset.id}"]`)
                        li.remove()
                    })
                    listarrfun()

                    }
            )
            liTagz.dataset.id = item.id
            liTagz.dataset.list_id = item.list_id
            const description = document.createElement('p')
            description.textContent = item.description
            const complete = document.createElement('p')
            complete.textContent = `Complete: ${item.complete}`
            const priority = document.createElement('p')
            priority.textContent = `Priority: ${item.priority}`
                
               
            liTagz.append(description, complete, priority, delButton)
            console.log(liTagz)
            items.append(liTagz)
            listarrfun()
            itemForm.reset()
        })

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
// function handleDelete (id){
        // console.log("click",event.target)
        


// document.addEventListener
//     // if (event.target === but)
// })
listarrfun()