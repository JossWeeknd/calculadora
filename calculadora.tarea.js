const buttons = document.querySelectorAll(".buttons")
const text = document.getElementById(".text")
const remove = document.getElementById(".remove")
const clear = document.getElementById(".clear")
const result = document.getElementById(".result")


buttons.forEach(buttons=>{
    button.addEventlistener("click",_=>{
        text.value +=button.value
    })
})

remove.addEventListener("click",_=>{
    text.value=text.value.slice(0,-1)
})

clear.addEventListener("click",_=>{
    text.value=""
})


result.addEventListener("click",_=>{
    try {
        text.value = val(text.value)
    } catch(error) {
        text.value=""
        alert("error" )
    }
})