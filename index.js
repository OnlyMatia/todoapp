let elemInputa = document.getElementById('input');
let contentDiv = document.getElementById('content')


document.addEventListener('keypress', function(event) {
    
    if(event.keyCode === 13 && elemInputa.value !== ""){
        doThis();
    }
});


function doThis(){
    var createParag = document.createElement('p'); 
    //localStorage.setItem(createParag); later

    createParag.innerHTML = `${elemInputa.value}`
        
    createParag.addEventListener('click', function() {
        createParag.classList.toggle('line');
    });

    createParag.addEventListener('dblclick', function() {
        createParag.remove();
    });

    contentDiv.appendChild(createParag);
    elemInputa.value = "";  
      
}
