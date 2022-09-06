const inputcep = document.getElementById('inputcep');

const btn = document.getElementById('btn');
async function apiRequest(cep){
    const api_url = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json()
        .then(
            (data) => {
                document.getElementById('cep').innerHTML = data.cep;
                document.getElementById('logradouro').innerHTML = data.logradouro;
                document.getElementById('bairro').innerHTML = data.bairro;
                document.getElementById('localidade').innerHTML = data.localidade;
                document.getElementById('uf').innerHTML = data.uf;
                document.getElementById('ddd').innerHTML = data.ddd;
            }
        ))
}
document.addEventListener('keypress', function chamarInput(e){
    if(e.key === 'Enter'){
        apiRequest(inputcep.value)
    }
});
btn.addEventListener("click", function chamarInput(e){
    apiRequest(inputcep.value)
});