function desenhando_triangulo(tam){

    let desenho = "#", linhas;

    linhas = 1;
    
    do{

        console.log(desenho);
        linhas++;
        desenho += "#";

    }while(linhas <= tam)

}
function tabuleiroxadrez(tam){

    let linhas = ["# # # # "], linhas2 = [" # # # #"];

        for (let i = 1;  i <= tam ; i++ ) {
           
        if (i % 2 != 0){

            console.log(linhas);

        } else if(i % 2 == 0){
            
            console.log(linhas2);

        }
        
    }

}
function descobrepalindromos(palavra){

    let conferePalindromo;

    conferePalindromo = palavra.split('').reverse().join('');

    if(palavra == conferePalindromo){

        console.log("E um palindromo")

    } else if (palavra != conferePalindromo){

        console.log("Nao e um palindromo");

    }

}
function Fizz(){

    for(let i = 1; i <= 100; i++){

        if (i % 3 == 0){
            if(i % 5 == 0){

                console.log("FizzBuzz");

            } else {

                console.log("Fizz");

            }


        } else if (i % 5 == 0){

            console.log("Buzz");

        } else {

            console.log(i);

        }

    }

}
function min(a,b){

    if(a<b){

        return a;

    } else if (a>b){

        return b;

    } else if (a == b){

        console.log("os numeros sao iguais");
        return a;

    }

}
function max(a,b){

    if(a<b){

        return b;

    } else if (a>b){

        return a;

    } else if (a == b){

        console.log("os numeros sao iguais");
        return a;

    }

}

function mod2(number){

    if(number % 2 == 0){

        return true;

    } else{

        return false;

    }

}
function mod(num, mod){

    if (num % mod == 0){

        return true;

    } else {

        return false;

    }

}

function countChars(frase, c){

    let repeticoes = 0;

    for (let index = 0; index <= frase.length; index++) {
        if (frase[index] == c) {
            repeticoes++;
        }
        
    }

    return repeticoes;    
}
function range(min, max, i){

    let vet = [], contador;

    contador = i;

    while (min < max){

        if(i != 0){

        min++;

        if(contador == i){

        vet.push(min);

            contador = 0;
        } else{

            contador++;

        }
        } else {

            while (min < max){

                min++;
                vet.push(min);

            }

        }

    }
    return vet;
}
function reverseArray(array){

    array.reverse();

    return array;

}
