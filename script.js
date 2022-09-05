const btn = document.getElementById('search');
const user = document.getElementById('user');
async function getUser(){
    let users = user.value;
    const name = async (users)=>{
        const apiGitHub = await fetch(`https://api.github.com/users/${users}`)
        .then(
            response => response.json()
        )
        .then((data)=>{
            document.getElementById('login').innerHTML = `Nome: ${data.login}`
            document.getElementById('id').innerHTML = `Id: ${data.id}`
            document.getElementById('url').innerHTML = `${data.html_url}`
            const idUrl = document.getElementById('url').href = `${data.html_url}`
            document.getElementById('repositorios').innerHTML = `${data.repos_url}`
            const repositorios = document.getElementById('repositorios').href = `${data.repos_url}`
        }
            
        )
            
        
    }
    name(users)
}
btn.addEventListener('click', getUser);