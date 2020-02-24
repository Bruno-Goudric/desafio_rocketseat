const cards = document.querySelectorAll('.card');
const showHides = document.getElementsByClassName('recipes')

const description = document.querySelector(".description")



for(let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function(){
        window.location.href = `/recipe/${i}`
    })
}


for(let showHide of showHides){
    const content = showHide.querySelector('a')
    console.log(content)
    content.addEventListener('click', function(){
    if(content.innerHTML == "esconder"){
        showHide.querySelector('.description').classList.add('hidden')
        content.innerHTML = "mostrar"
    }else{
        showHide.querySelector('.description').classList.remove('hidden')
        content.innerHTML = "esconder"
    }   
    })
}

