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
    .then(data => showInfoAboutLocation(data))
    .catch(error => console.log(error));
}

const showInfoAboutLocation = (data) => {
    alert('Catch the Request!');
    const {city, country} = data;
    showText1.innerHTML = `My Country : ${country}`;
    showText2.innerHTML = `My City : ${city}`;
    
}

const init = () => {
    getInfoBtn.addEventListener('click',getJson);
}

init();