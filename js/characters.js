const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'container');


app.appendChild(container);



var myCardData = [];
function card(api, img){
  this.api = api;
  this.img = img;
myCardData.push(this);
}

var cards = new card ("?name=Jon+Snow", "../characters/jonsnow.png");
var cards = new card ("?name=Gregor+Clegane", "../characters/gregorclegane.png");
var cards = new card ("?name=Tyrion+Lannister", "../characters/tyrion.png");
var cards = new card ("?name=Samwell+Tarly", "../characters/samwell.png");
var cards = new card ("?name=Missandei", "../characters/missandei.png");
var cards = new card ("?name=Cersei+Lannister", "../characters/cersei.png");
var cards = new card ("?name=Bronn", "../characters/bronn.png");
var cards = new card ("?name=Theon+Greyjoy", "../characters/theongreyjoy,.png");
var cards = new card ("?name=Jaime+Lannister", "../characters/jaimelannister.png");
var cards = new card ("?name=Melisandre", "../characters/melisandre.png");
var cards = new card ("?name=Arya+Stark", "../characters/arya.png");
var cards = new card ("?name=Sandor+Clegane", "../characters/sandor.png");




for (let i in myCardData){
//console.log(myCardData[i].img)

  

fetch ('https://anapioficeandfire.com/api/characters' + myCardData[i].api)
  .then((response) => {
    return response.json()
})
  .then(myJason => {


var card = document.createElement('div');
    card.setAttribute('class', 'card');

var h1 = document.createElement('h1');

           

var img = document.createElement('img');
    img.src = myCardData[i].img;
   
var ul = document.createElement('ul');
var li = document.createElement('li');
var li2 = document.createElement('li');
var li3 = document.createElement('li');

var p = document.createElement('p');
  p.setAttribute('class', 'card__list');


var p2 = document.createElement('p');
  p2.setAttribute('class', 'card__list');


var p3 = document.createElement('p');
  p3.setAttribute('class', 'card__list');

 h1.textContent = myJason[0].name;

 p.textContent = 'Aliases:' + " " + myJason[0].aliases;

 p2.textContent = 'Gender:' + " " + myJason[0].gender;

 p3.textContent = 'Culture:' + " " + myJason[0].culture;





container.appendChild(card);
    card.appendChild(h1);
    card.appendChild(img);
  card.appendChild(ul);
      ul.appendChild(li);
      ul.appendChild(li2);
      ul.appendChild(li3);
      li.appendChild(p);
        li2.appendChild(p2);
        li3.appendChild(p3);




    
});



}