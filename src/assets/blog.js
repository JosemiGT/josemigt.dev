
export const blog = {
    nav: null,
    article: null,
    close: null,
    originalTitle: null,
    originalDescription: null,
    originalURL: null,

    slug: location => new URL(location).pathname.split('/')[1],

    init: async function (options = {}) {
        const {
            nav = 'nav',
            close = 'button',
            article = 'article',
            feed = '/posts/index.json'
        } = options;

        this.nav = document.querySelector(nav);
        this.close = document.querySelector(close);
        this.article = document.querySelector(article);

        const response = await fetch(feed);
        const json = await response.json();
        this.posts = json.items;
    }
};

window.onload = function () {
    alert('Hola mundo!');
};

function createCard (articleTittle, articleSummary) {
    const card = document.createElement('div');
    card.className = 'card';

    const title = document.createElement('h3');
    title.innerText = articleTittle;

    const summary = document.createElement('p');
    summary.innerText = articleSummary;
}

// TODO: Establecer fichero donde se reflejará la página de los post, el título, fecha y sus tags. (¿En json?)
// TODO: Leer este fichero desde el onload y guardar en variable.
// TODO: Construir divs en el body con la información obtenida.
