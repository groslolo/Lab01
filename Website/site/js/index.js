// This is your JS Entry point... You can add as many as JS files you want if you think it is better!

import axios from 'axios';

/*
var check = document.getElementById('checkbut');
check.onclick = function() {
    var formulaElement = document.getElementById('my-input');

    axios.get('http://localhost:8081/')
    .then((response) => {
      console.log(response);
      echo "aaaa";
    })
    .catch(function (error) {
      console.log(error);
    });
}
*/

/*
function performGetRequest1() {
    var resultElement = document.getElementById('getResult1');
    resultElement.innerHTML = '';
    
    axios.get('http://jsonplaceholder.typicode.com/todos')
      .then(function (response) {
        resultElement.innerHTML = generateSuccessHTMLOutput(response);
      })
      .catch(function (error) {
        resultElement.innerHTML = generateErrorHTMLOutput(error);
      });   
  }
  */

document.getElementsByClassName('my-button')[0].onclick = function (){
    var resultElement = document.getElementById('get-result-check');
    var inputElement = document.getElementById('my-input').value;

    axios.get('http://localhost:8080/')
    .then((response) => {

        if (/^\d+(\.\d+)?( *[\+\-\*\/] *\d+(\.\d+)?)+$/.test(inputElement)){
            if(/\/ *0$/.test(inputElement) || /\/ *0[^\.0-9]/.test(inputElement)){
                resultElement.innerHTML = "Math Error";     
            }
            else{
                resultElement.innerHTML = "La formule est correcte";
            }       
        }

        else{
            resultElement.innerHTML = "Syntax Error";
        }

    })
    .catch((error) => {
        resultElement.innerHTML = "ERROR : FAILED";
    });
}

document.getElementsByClassName('my-button')[1].onclick = function (){
    var resultElement = document.getElementById('get-result-evaluate');
    var inputElement = document.getElementById('my-input').value;

    axios.get('http://localhost:8080/')
    .then((response) => {

    var numbers = inputElement.split(/ *[\/\*\-\+] */);
    var signs = inputElement.match(/[\/\*\-\+]/g);

    if(signs[0] == "/"){
        var results = numbers[0] / numbers[1];
    }
    else if(signs[0] == "*"){
        var results = numbers[0] * numbers[1];
    }
    else if(signs[0] == "-"){
        var results = numbers[0] - numbers[1];
    }
    else if(signs[0] == "+"){
        var results = parseFloat(numbers[0]) + parseFloat(numbers[1]);
    }

    var i = 1;
    while(i<signs.length){
        if(signs[i] == "/"){
            results = results / numbers[i+1];
        }
        else if(signs[i] == "*"){
            results = results * numbers[i+1];
        }
        else if(signs[i] == "-"){
            results = results - numbers[i+1];
        }
        else if(signs[i] == "+"){
            results = parseFloat(results) + parseFloat(numbers[i+1]);
        }
        i++;
    }

    resultElement.innerHTML = results;

    })
    .catch((error) => {
        resultElement.innerHTML = "ERROR : FAILED";
    });

}