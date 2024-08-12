import { getChildren, getCelebrities } from "./database.js"

const children = getChildren()
const celebrities = getCelebrities()

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-name="${child.name}" data-celebrityid="${child.celebrityId}" data-type="child" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener("click",(clickEvent) =>{
    const itemClicked = clickEvent.target
    const nameOfKid = itemClicked.dataset.name
    const celebId = parseInt(itemClicked.dataset.celebrityid)
    
    if (itemClicked.dataset.type === "child") {
        celebrities.forEach(celebrity => {
            if (celebrity.id === celebId) {
                
                window.alert(`${nameOfKid} will be making memories with ${celebrity.name}`)
            }            
        });
        
    }


} )

