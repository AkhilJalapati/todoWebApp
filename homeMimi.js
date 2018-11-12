var addTodo=document.getElementById('add')
addTodo.addEventListener('click',addItem)

var removeTodo=document.getElementById('remove')
removeTodo.addEventListener('click',removeItem)

var reset=document.getElementById('reset')
reset.addEventListener('click',removeAll)

var ul=document.getElementById('list')

var li;

function addItem(){
    var input= document.getElementById('input')
    var item= input.value
    ul=document.getElementById('list')
    var textnode=document.createTextNode(item)

    if (item==='' || item===" ") {
return false
    }else{
        li=document.createElement('li')
        var checkbox=document.createElement('input')
        checkbox.type='checkbox'
        checkbox.setAttribute('class','check')

        var label=document.createElement('label')

        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textnode)
        li.appendChild(label)

        ul.insertBefore(li,ul.childNodes[0])

        setTimeout(() => {
            li.setAttribute('class','visual')
        }, 5);
        input.value=''
    }

}

function removeItem(){
    li=ul.children
    for (let index = 0; index < li.length; index++) {
        while(li[index] &&  li[index].children[0].checked){
            ul.removeChild(li[index])
        }
        
    }
}

function removeAll(){
    li=ul.children
    for (let index = 0; index < li.length; index++) {
       ul.removeChild(li[index])
        
    } 
}
