function saludar(){
    let username = 'Esau';

    function displayUserName(){
        return `Hola ${username}`;
    }

    return displayUserName;
}
const s = saludar(); 
console.log(s);
console.log(s());
