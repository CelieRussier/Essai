const button = document.getElementById('actionButton');
const totoButton = document.getElementById('totoButton');

button.addEventListener('click', function() {
    const value = document.getElementById('inputText').value;
    const listResult = document.getElementById('resultList');
    
    listResult.innerHTML =  "<li>" + value + "</li>" + listResult.innerHTML;
    
    document.getElementById('inputText').value = '';

    const lis = document.querySelectorAll('li');
    for (const li of lis) {
        li.addEventListener('click', function(){
            let text = li.innerHTML;
            document.getElementById('inputText').value = text;
        });
    }
});


totoButton.addEventListener('click', function() {
    const lis = document.querySelectorAll('li');
    for (const li of lis) {
        li.innerHTML = 'toto';
    }
});
