document.getElementById("button-ok").addEventListener("click", function () {
    event.preventDefault();

    var primeiroJogador = document.getElementById("input-jogador-1").value;
    var segundoJogador = document.getElementById("input-jogador-2").value;
    pegarUser1(primeiroJogador);
    pegarUser2(segundoJogador);
});

function pegarUser1(user) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var div2 = document.getElementById("jogador-1");
            div2.innerHTML = "";
            var obj = JSON.parse(xhttp.responseText);
            var tabela = document.createElement('table');   
           
            var td = document.createElement('td');   
            var td2 = document.createElement('td');   
            var td3 = document.createElement('td');
            var tr = document.createElement('tr');
            td.append("CRITÉRIOS");
            tr.append(td);
            td2.append("QTD");
            tr.append(td2);
            td3.append("Pontos");
            tr.append(td3);
            tabela.append(tr);

            var td = document.createElement('td');   
            var td2 = document.createElement('td');  
            var td3 = document.createElement('td'); 
            var tr = document.createElement('tr');
            td.append("Repositories");
            tr.append(td);
            td2.append(obj.public_repos);
            tr.append(td2);

            var totalReposit = obj.public_repos * 20;
            td3.append(totalReposit);
            tr.append(td3);
            tabela.append(tr);

            var td = document.createElement('td');   
            var td2 = document.createElement('td');   
            var td3 = document.createElement('td');   
            var tr = document.createElement('tr');
            td.append("Followers");
            tr.append(td);
            td2.append(obj.followers);
            tr.append(td2);

            var totalFollowers = obj.followers * 10;
            td3.append(totalFollowers);
            tr.append(td3);
            tabela.append(tr);

            var td = document.createElement('td');   
            var td2 = document.createElement('td'); 
            var td3 = document.createElement('td');  
            var tr = document.createElement('tr');
            td.append("Following");
            tr.append(td);
            td2.append(obj.following);
            tr.append(td2);
            var totalFollowing = obj.following * 5;
            td3.append(totalFollowing);
            tr.append(td3);
            tabela.append(tr);

            var td = document.createElement('td');   
            var td2 = document.createElement('td');   
            var td3 = document.createElement('td');
            var tr = document.createElement('tr');
            td.append("Stars");
            tr.append(td);
            td2.append("0");
            tr.append(td2);
            td3.append("0");
            tr.append(td3);
            tabela.append(tr);           
                        
            div2.append(tabela);
        }
    };
    xhttp.open("GET", `https://api.github.com/users/${user}`, true);
    xhttp.send();

}
function pegarUser2(user) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var div2 = document.getElementById("jogador-2");
            div2.innerHTML = "";
            var obj = JSON.parse(xhttp.responseText);
            var tabela = document.createElement('table');   
           
            var td = document.createElement('td');   
            var td2 = document.createElement('td');   
            var td3 = document.createElement('td');
            var tr = document.createElement('tr');
            td.append("CRITÉRIOS");
            tr.append(td);
            td2.append("QTD");
            tr.append(td2);
            td3.append("Pontos");
            tr.append(td3);
            tabela.append(tr);

            var td = document.createElement('td');   
            var td2 = document.createElement('td');  
            var td3 = document.createElement('td'); 
            var tr = document.createElement('tr');
            td.append("Repositories");
            tr.append(td);
            td2.append(obj.public_repos);
            tr.append(td2);

            var totalReposit = obj.public_repos * 20;
            td3.append(totalReposit);
            tr.append(td3);
            tabela.append(tr);

            var td = document.createElement('td');   
            var td2 = document.createElement('td');   
            var td3 = document.createElement('td');   
            var tr = document.createElement('tr');
            td.append("Followers");
            tr.append(td);
            td2.append(obj.followers);
            tr.append(td2);

            var totalFollowers = obj.followers * 10;
            td3.append(totalFollowers);
            tr.append(td3);
            tabela.append(tr);

            var td = document.createElement('td');   
            var td2 = document.createElement('td'); 
            var td3 = document.createElement('td');  
            var tr = document.createElement('tr');
            td.append("Following");
            tr.append(td);
            td2.append(obj.following);
            tr.append(td2);
            var totalFollowing = obj.following * 5;
            td3.append(totalFollowing);
            tr.append(td3);
            tabela.append(tr);

            var td = document.createElement('td');   
            var td2 = document.createElement('td');   
            var td3 = document.createElement('td');
            var tr = document.createElement('tr');
            td.append("Stars");
            tr.append(td);
            td2.append("0");
            tr.append(td2);
            td3.append("0");
            tr.append(td3);
            tabela.append(tr);
            
            div2.append(tabela);
        }
    };
    xhttp.open("GET", `https://api.github.com/users/${user}`, true);
    xhttp.send();

}