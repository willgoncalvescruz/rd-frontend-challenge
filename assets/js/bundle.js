(() => {
    const selector = selector => document.querySelector(selector);
      
    const create = element => document.createElement(element);

    const app = selector('#app');

    const Login = create('div');
    Login.classList.add('login');

    const Logo = create('img');
    Logo.src = './assets/images/logo.svg';
    Logo.classList.add('logo');

    const Form = create('form');

    Form.onsubmit = async e => {
        e.preventDefault();
        const [email, password] = [selector('#email'), selector('#password')] /* trecho omitido */

        const {url} = await fakeAuthenticate(email.value, password.value);

        location.href='#users';
        
        const users = await getDevelopersList(url);
        renderPageUsers(users);
    };


    Form.oninput = e => {
        const [email, password, button] = e.target.parentElement.children;
        (!email.validity.valid || !email.value || password.value.length <= 5) 
            ? button.setAttribute('disabled','disabled')
            : button.removeAttribute('disabled');
    };

    Form.innerHTML = " <input type='text' name='email' id='email' placeholder='Entre  com seu E-mail'> <input type='password' name='password' id='password' placeholder='Digite a sua senha supersecreta' minlength='5' required> <button>Entrar</button> ";

    app.appendChild(Logo);
    Login.appendChild(Form);
    app.appendChild(Login);

    async function fakeAuthenticate(email, password) {

        /**
         * bloco de código omitido
         * aqui esperamos que você faça a requisição ao URL informado
         */

               

        var url = 'http://www.mocky.io/v2/5dba690e3000008c00028eb6';
        var ajax = new XMLHttpRequest();

        // Seta tipo de requisição e URL com os parâmetros
        ajax.open("GET", url, true);
        // Envia a requisição
        ajax.setRequestHeader('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9');
        //ajax.setRequestHeader('Accept-Encoding', 'gzip, deflate');
        ajax.setRequestHeader('Accept-Language', 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7');
        //ajax.setRequestHeader('Connection', 'keep-alive');
        //ajax.setRequestHeader('Host', 'www.mocky.io');
		
        ajax.setRequestHeader('Upgrade-Insecure-Requests', '1');


        
		
		
		      const fakeJwtToken = `${btoa(email+password)}.${btoa(data.url)}.${(new Date()).getTime()+300000}`;
        /* faltou eu completar */

        return data;
    }

    async function getDevelopersList(url) {

        //
        var minhaPromisse = function(){
            return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://www.mocky.io/v2/5dba68fb3000007400028eb5')
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4){
                if (xhr.status === 2000) {
                    resolve(JSON.parce(xhr.responseText));
                } else {
                    reject ('Erro na Requisição')
                }
            }
        }
    });
}
var resultado = minhaPromisse();
console.log(resultado);
//
        
        /**
         * fazer segunda requisicao para carregar a lista de desenvolvedores
         */


         // Code goes here jason will
function loadBands() {
  
    var saida = '';
    
    var bands = [];
    
    $.getJSON("./assets/jason/database.json", function(data) {
        bands = data.bands;
        
        for (i = 0; i < bands.length; i++) {
          saida += '<div class="row">';
          saida += '<div class="col-lg-4 band-img">';
          saida += '<img src="' + bands[i].picture + '" alt="' + bands[i].name + '" title="' + bands[i].name + '">';
          saida += '</div>';
          saida += '</div>';
        }
        
        document.getElementById('tela').innerHTML = saida;
    });
  }
  // Code goes here jason will


    }

    function renderPageUsers(users) {
        app.classList.add('logged');
        Login.style.display = '';/* completar */

        const Ul = create('ul');
        Ul.classList.add('container')

        /**
         * irei exibir a lista de desenvolvedores aqui
         * 
         * login  e  avatar_url
         */

        app.appendChild(Ul)
    }

    // init
    (async function(){
        const rawToken = '';/* completar */
        const token = rawToken ? rawToken.split('.') : null
        if (!token || token[2] < (new Date()).getTime()) {
            localStorage.removeItem('token');
            location.href='#login';
            app.appendChild(Login);
        } else {
            location.href='#users';
            const users = await getDevelopersList(atob(token[1]));
            renderPageUsers(users);
        }
    })()
})()