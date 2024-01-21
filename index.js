let elemInputa = document.getElementById('input');
let contentDiv = document.getElementById('content')


document.addEventListener('keypress', function(event) {
    if(event.keyCode === 13 && elemInputa.value !== ""){
        var createParag = document.createElement('p'); 

        createParag.innerHTML = `${elemInputa.value}`
        
        contentDiv.appendChild(createParag);
        elemInputa.value = "";
    }

    createParag.addEventListener('click', function(){
        createParag.classList.add('line');
    });
    createParag.addEventListener('dblclick', function(){
        createParag.remove()
    });
});


