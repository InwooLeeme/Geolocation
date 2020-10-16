const showText1 = document.querySelector('h1');
const showText2 = document.querySelector('h2');
const getInfoBtn = document.querySelector('button');
const API_URL = "http://ip-api.com/json/";

const theRequest = new Request(API_URL);

const getJson = () => {
    fetch(theRequest,{
        method : 'GET',
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}



const init = () => {
    getInfoBtn.addEventListener('click',getJson);
}

init();