let butonAdd = document.querySelector('.butonAdd');
let butonDel = document.querySelector('.butonDel');
let input = document.querySelector('.inputText')
let textInput = document.querySelector('.textInput')
let buttons = document.querySelector('.btn')

butonAdd.addEventListener("click", function () {

    if (input.value == '') {
        alert("inputun ici bosdur!!")
    }else{

        let custom = document.createElement("p");
        custom.innerText = input.value
        custom.style.display = "flex"
        textInput.append(custom)
        input.value = ""
    
        let iconDel = document.createElement("button")
        iconDel.innerText = "DELETE"
        iconDel.style.marginLeft = "25px"
        custom.append(iconDel)
    
        let iconEdit =  document.createElement("button")
        iconEdit.style.marginLeft = "15px"
        iconEdit.innerText = "EDIT"
        custom.append(iconEdit)

        iconEdit.addEventListener('click',function(){
            iconEdit.innerText = ''
            iconDel.innerText = ''
            custom.remove()
            input.value = custom.innerText
        })
    
        
        iconDel.addEventListener('click',function(){
            setTimeout(()=>{
                custom.remove()
                alert("Task Silindi")
            },2000)
        })
        
    }

})


butonDel.addEventListener('click', function () {
    textInput.innerHTML = '';
})