function generateCode(){
    const length = document.getElementById('length').value;
    const type = document.querySelector('select[name="type"]').value;
    console.log("JS file loaded successfully!");
    if(length < 0 || length > 50){
        alert("Length should be between 1 and 50");
        return;
    }

    let stringPool;
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    if(type === 'letters')
    {
        stringPool= letters;
    }
    else if(type === 'numbers'){
        stringPool= numbers;
    }
    else {
        stringPool = letters + numbers;
    }
    let rendomchar='';
    for(let i= 0; i < length; i++){
        rendomchar+= stringPool.charAt(Math.floor(Math.random() * stringPool.length));
    }
    document.getElementById('result').innerText= `Generated code: ${rendomchar}`;

}