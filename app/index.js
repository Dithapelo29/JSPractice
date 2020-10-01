let letters = 'qscrgnymlkmjhbygfcrdeszwsqazgasdfghjklqktgbuwnsvfdhj';
let letVal = new Map();

for(let i = 0;i< letters.length;i++){
    let letter = letters[i];
    if(!letVal.has(letter)){
        letVal.set(letter,1);
    }else{
        letVal.set(letter,letVal.get(letter)+1);
    }
}

console.log(letVal);