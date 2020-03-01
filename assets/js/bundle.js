(() => {
    const selector = selector => "";/* completar */
    const create = element => "";/* completar */

    const app = selector('#app');

    const Login = create('div');
    Login.classList.add('login');

    const Logo = create('img');
    Logo.src = './assets/images/logo.svg';
    Logo.classList.add('logo');

    const Form = create('form');

    Form.onsubmit = async e => {
        e.preventDefault();
        const [email, password] = /* completar */

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

    Form.innerHTML = /**
    *  formulário
    */

    app.appendChild(Logo);
    Login.appendChild(Form);

    async function fakeAuthenticate(email, password) {

        /**
         fazer a requisição ao URL informado
consumir dados "url": http://www.mocky.io/v2/5dba690e3000008c00028eb6
         {
    url proveniente lista "url": "http://www.mocky.io/v2/5dba68fb3000007400028eb5"
}

         */

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
    }

    function renderPageUsers(users) {
        app.classList.add('logged');
        Login.style.display = /* completar */

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
        const rawToken = /* completar */
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