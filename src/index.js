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
//29


function listarrfun(){
    console.log(ul)
    fetch("http:localhost:3000/lists")
        .then(response => response.json())
        .then(listarr => {
            ul.innerHTML = " "
            imglist.innerHTML = " "
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
    event.preventDefault()
  
    

    
    if (event.target.tagName === "P"||event.target.tagName === "IMG"){
        
       
    
        fetch(`http:localhost:3000/lists/${event.target.dataset.id}`)
            .then(response => response.json())
            .then(timeObj => {//listObj change name
            console.log(timeObj)
            items.innerHTML = " "

            const image = document.querySelector("img#image")
            const span = document.querySelector("span#description")
            
            itemForm.dataset.id = timeObj.id
            listForm.dataset.id = timeObj.id
            deleteItem.dataset.id = timeObj.id

            image.src = timeObj.image
            span.textContent = timeObj.description
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

deleteItem.addEventListener('click', event => {
    event.preventDefault()
        console.log(event.target, "hello")
    fetch(`http://localhost:3000/lists/${deleteItem.dataset.id}`,{
        method: "DELETE",
        headers: { "Content-Type": "application/json",
        },
       
        })

        .then(res => res.json())
        .then(res => console.log(res))
        listarrfun()

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