
const card = document.querySelector('#card');
const headLine = document.querySelector('#head-lines');
const categoriasContent = document.querySelector('#categoriasContent')
const toggleMenu = document.querySelector('.toggle-menu');
const navBar = document.querySelector('.navbar');
const btnSearch = document.querySelector('#btn-Search');
const inputSearch = document.querySelector('.input-search');


const divArticulos = document.querySelector('.contenedor-articulos');
const divArticulos2 = document.querySelector('#contenedorArticulos');
const divHeadlines = document.querySelector('#div-headlines') 

const btnBusines = document.querySelector('#business');
const btnEntertaiment = document.querySelector('#entertainment');
const btnGeneral = document.querySelector('#general');
const btnHealth = document.querySelector('#health');
const btnScience = document.querySelector('#science');
const btnSports = document.querySelector('#sports');
const btnTechnology = document.querySelector('#technology');

document.addEventListener('DOMContentLoaded', () =>{
    getCategories('general');
})

    toggleMenu.addEventListener('click', () => {
    navBar.classList.toggle('main-menu--show');
})

/** It shows the healine section when document is ready */

document.addEventListener('DOMContentLoaded', showHeadLines);

/** It shows the healine section when document is ready */


/**Triggers search by categories */
btnBusines.addEventListener('click', (e) =>{
    const entry = e.target.textContent;
    getCategories(entry);
   const title = document.querySelector('.title-artilces')
   title.classList.add('uppercase')
   title.textContent = entry;
   navBar.classList.toggle('main-menu--show');
   
})
btnEntertaiment.addEventListener('click', (e) =>{
    const entry = e.target.textContent;
    getCategories(entry);
   const title = document.querySelector('.title-artilces')
   title.classList.add('uppercase')
   title.textContent = entry;
   navBar.classList.toggle('main-menu--show');
})
btnGeneral.addEventListener('click', (e) =>{
    const entry = e.target.textContent;
    getCategories(entry);
   const title = document.querySelector('.title-artilces')
   title.classList.add('uppercase')
   title.textContent = entry;
   navBar.classList.toggle('main-menu--show');
})
btnHealth.addEventListener('click', (e) =>{
    const entry = e.target.textContent;
    getCategories(entry);
   const title = document.querySelector('.title-artilces')
   title.classList.add('uppercase')
   title.textContent = entry;
   navBar.classList.toggle('main-menu--show');
})
btnScience.addEventListener('click', (e) =>{
    const entry = e.target.textContent;
    getCategories(entry);
   const title = document.querySelector('.title-artilces')
   title.classList.add('uppercase')
   title.textContent = entry;
   navBar.classList.toggle('main-menu--show');
})
btnSports.addEventListener('click', (e) =>{
    const entry = e.target.textContent;
    getCategories(entry);
   const title = document.querySelector('.title-artilces')
   title.classList.add('uppercase')
   title.textContent = entry;
   navBar.classList.toggle('main-menu--show');
})
btnTechnology.addEventListener('click', (e) =>{
    const entry = e.target.textContent;
    getCategories(entry);
   const title = document.querySelector('.title-artilces')
   title.classList.add('uppercase')
   title.textContent = entry;
   navBar.classList.toggle('main-menu--show');
})

/**Triggers search by categories */

const key = '5341d147f4854b068e3d828f66a3efbd';


btnSearch.addEventListener('click', (e) =>{
     const topicSeacrh = inputSearch.value;
     if (topicSeacrh === ''|| Number(topicSeacrh) || topicSeacrh === null) {
        alert('Ingresa un busqueda valida');
        return;
        
     }
     
     getArtilcesByTopic(topicSeacrh);
})

/** --------------------------------------------SHOWS ATILCES BY USER SEARCH BEGIN -------------------------------------------------- */
async function getArtilcesByTopic(topic){

    const url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${key}`

    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        showArticlesBytopics(resultado.articles)
      
    } catch (error) {
        console.log(error);
    }
    
    document.querySelector('.title-artilces').textContent = `Articles About: ${topic}`
}

function showArticlesBytopics(articles){

    while (divArticulos.firstChild) {
        divArticulos.removeChild(divArticulos.firstChild)
        
    }

    articles.forEach(article => {
        const {description, urlToImage, publishedAt, url,author } = article;
        const date = formatDate(publishedAt)
        const divTopics = document.createElement('DIV');
        divTopics.classList.add('card-topics');
        divTopics.innerHTML = `
        <div class="contenido-topics">
        <a href=""><img src=${urlToImage}></a>
                    
            <div>
                <p class="pTopics"><a href=${url}>${description}</a></p>
            </div>
        <p>Publised: <span>${date}</span></p>
        <p>Author: <span>${author}</span></p>
    </div>

        
        `
        divArticulos.appendChild(divTopics);

    })

    
}

/** --------------------------------------------SHOWS ATILCES BY USER SEARCH END -------------------------------------------------- */


/** --------------------------------------------SHOWS ATILCES ONDOCUMENT ONLOAD BEGIN -------------------------------------------------- */



async function getCategories(categorias){
    console.log(categorias)
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categorias}&apiKey=${key}`;
    try {
        const repsuesta = await fetch(url)
        const resultado = await repsuesta.json();
        showCategories(resultado.articles);
        
    } catch (error) {
        console.log(error)
        
    }

}

function showCategories(elemenst){

    while (divArticulos.firstChild) {
        divArticulos.removeChild(divArticulos.firstChild)
        
    }

    elemenst.forEach(categoria => {

        const {urlToImage, url, description, title } = categoria

       
        const divTopics = document.createElement('DIV');
        divTopics.classList.add('card-topics');
        divTopics.innerHTML = `
        <div class="contenido-topics">
        <a href=""><img src=${urlToImage}></a>
                    
            <div>
                <p class="categorias-p"><a href=${url}>${title}</a></p>
            </div>
        </div>

        
        `
        if (urlToImage === null || title === ''|| description === '' ) {
         
            
            divTopics.classList.add('hide');
             return;
         }
       

        divArticulos.appendChild(divTopics);

        

    })

   
}



/** --------------------------------------------SHOWS ARTILCES ONDOCUMENT ONLOAD END -------------------------------------------------- */

getHealines();
async function getHealines() {
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`
    try {
        const respuesta = await fetch(url)
        const resultado = await respuesta.json();
        showHeadLines(resultado.articles)
    } catch (error) {
        console.log(error)
        
    }

    
}

function showHeadLines(articles){
    articles.forEach(articulo => {
        const {urlToImage, url, description, title, content, author } =  articulo;

        const cardHEadlines = document.createElement('DIV');
        cardHEadlines.classList.add('card-headlines');
        cardHEadlines.innerHTML = 

        `
        <img src=${urlToImage}>
            <div>
                <h2 class="card-title">${title}</h2>
                        <p class="card-p">${description}</p>
           </div>
                <div class="leerMas">
                <a  href="${url}">Read more >>></a>
            </div>
        
        `

        if (urlToImage === null || title === ''|| description === '' ) {
         
            cardHEadlines.classList.add('hide');
             return;
         }

        divHeadlines.appendChild(cardHEadlines);

    })
}

function formatDate(date){

const fechaOriginal = date;

const fecha = new Date(fechaOriginal);

const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
const fechaFormateada = fecha.toLocaleString('us-US', options);
return fechaFormateada;


}



