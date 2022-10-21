
const selecione = window.document.querySelector(".chave-escolha");
const escolha = window.document.querySelector(".sumir");
const bootao= window.document.querySelector(".botaao");
const botaos = window.document.querySelector("button");
const codificar = window.document.querySelector("#cod");
const decodificar = window.document.querySelector("#dcod");
//utilizando o const, pois ele não pode ser redefinido, assim manten



escolha.addEventListener("click", function () { // Fazer sumir o incremento
    if (escolha.value == "base") {
      selecione.style.display = "none";
    } else {
      if (escolha.value=='CC') {
      selecione.style.display = "block";}
    }
  });


            var values = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
            var key = +document.getElementById("key").innerHTML;

            function prev() {
                if(key > 1) {
                    key--;
                    document.getElementById("key").innerHTML = key;
                }
            }

            function next() {
                if(key < 25) {
                    key++;
                    document.getElementById("key").innerHTML = key;
                }
            }
            function calculate() {
                var input = document.getElementById("input").value.toUpperCase();
                var result = "";

                for(var i = 0; i<input.length; i++){ //Passa por cada caracter do input

                    var posicaoDaLetraNoAlfabeto = input.charCodeAt(i)-64; //Identifica qual letra é do alfabeto
                    var letraComDeslocamento = (posicaoDaLetraNoAlfabeto + key) % 26; //Faz o deslocamento de César e mantém dentro do alfabeto (26 letras)
                    letraComDeslocamento = letraComDeslocamento == 0 ? 26 : letraComDeslocamento; //MOD retornar 0 caso o resultado seja 26, tem que tratar isso
                    result += values[letraComDeslocamento-1]; //Faz -1 porque a letra 1 (A) está no índice 0 do teu array.
                }
              }
        
              document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + result + 
                '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
              
            
            
                var values = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
                var key = +document.getElementById("key").innerHTML;
    
                function prev() {
                    if(key > 1) {
                        key--;
                        document.getElementById("key").innerHTML = key;
                    }
                }
    
                function next() {
                    if(key < 25) {
                        key++;
                        document.getElementById("key").innerHTML = key;
                    }
                }
    
                function cifraCesar() {
                    var input = document.getElementById("input").value.toUpperCase();
                    var result = "";
    
                    for(var i = 0; i<input.length; i++){ //Passa por cada caracter do input
    
                        var posicaoDaLetraNoAlfabeto = input.charCodeAt(i)-64; //Identifica qual letra é do alfabeto
                        var letraComDeslocamento = (posicaoDaLetraNoAlfabeto + key) % 26; //Faz o deslocamento de César e mantém dentro do alfabeto (26 letras)
                        letraComDeslocamento = letraComDeslocamento == 0 ? 26 : letraComDeslocamento; //MOD retornar 0 caso o resultado seja 26, tem que tratar isso
                        result += values[letraComDeslocamento-1]; //Faz -1 porque a letra 1 (A) está no índice 0 do teu array.
                    }
    
                    document.getElementById("output").innerHTML = result;
                } 
            
                function cifraCesar() {
                    for (var i = 0; i < input.length; i++) {
                      if (input.charCodeAt(i) >= 97 && input.charCodeAt(i) <= 122) {
                        document.getElementById("output").innerHTML += String.fromCharCode((input.charCodeAt(i) - 97 -  numero + 26) % 26 + 97);
                      } else if (input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90) {
                        document.getElementById("output").innerHTML += String.fromCharCode((input.charCodeAt(i) - 65 - numero + 26) % 26 + 65);
                      } else {
                        document.getElementById("output").innerHTML += String.fromCharCode(input.charCodeAt(i));
                      }
                    }
                    return output;
                  }

                  function base64() {
                    var texto = document.querySelector("#input").value;
                    if (cod.checked) {
                      var codificado = window.btoa(texto);
                      return codificado;
                    } else if (dcod.checked) {
                      var decodificado = window.atob(texto);
                      return decodificado;
                    }
                  }

                  bootao.addEventListener("click", function () {
                    if (cod.checked) {
                      botaos.innerHTML = "<strong>Codificar Mensagem!</strong>";
                    } else if (dcod.checked) {
                      botaos.innerHTML = "<strong>Decodificar Mensagem!</strong>";
                    }
                  });
                  botaos.addEventListener("click", function (event) {
                    event.preventDefault();
                    if (escolha.value === "base") {
                      resultado.innerText = base64();
                    } else if (escolha.value === "CC") {
                      resultado.innerText = cifraCesar();
                    }
                  });

                  
                

            
                