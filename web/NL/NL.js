const MyTitle = document.getElementById('mytitle');
const MyImage = document.getElementById('myimage');
const MyPlace = document.getElementById('myplace');

let directionButtons = {
    "noord": document.getElementById('KnopNoord'),
    "oost": document.getElementById('KnopOost'),
    "zuid": document.getElementById('KnopZuid'),
    "west": document.getElementById('KnopWest')
}

let current_index = 0;

let lokaties =//Array
[
    {//0 =object
        "titel":"De Voorhal",
        "image":"../img/route/plaats0.jpg",
        "place":0,
        "directions": {
            "noord": 7,
            "oost": 1,
            "west": 12
        }
    },
    {//1 =object
        "titel":"Franse Hoekzaal",
        "image":"../img/route/plaats1.jpg",
        "place":1,
        "directions": {
            "noord": 2,
            "west": 0
        }
    },
    {//2 =object
        "titel":"Het Herenhuis",
        "image":"../img/route/plaats2.jpg",
        "place":2,
        "directions": {
            "noord": 3,
            "zuid": 1
        }
    },
    {//3 =object
        "titel":"Both",
        "image":"../img/route/plaats3.jpg",
        "place":3,
        "directions": {
            "noord": 4,
            "zuid": 2,
            "west": 5
        }
    },
    {//4 =object
        "titel":"Bibliotheek",
        "image":"../img/route/plaats4.JPG",
        "place":4,
        "directions": {
            "zuid": 3
        }
    },
    {//5 =object
        "titel":"William Rex",
        "image":"../img/route/plaats5.jpg",
        "place":5,
        "directions": {
            "oost": 3,
            "west": 6
        }
    },
    {//6 =object
        "titel":"De Nachtwacht",
        "image":"../img/route/plaats6.jfif",
        "place":6,
        "directions": {
            "oost": 5,
            "zuid": 7,
            "west": 8
        }
    },
    {//7 =object
        "titel":"Het melkmeisje",
        "image":"../img/route/plaats7.jpg",
        "place":7,
        "directions": {
            "noord": 6,
            "zuid": 0
        }
    },
    {//8 =object
        "titel":"WillemVanOranjeManiërisme",
        "image":"../img/route/plaats8.jpg",
        "place":8,
        "directions": {
            "oost": 6,
            "west": 9
        }
    },
    {//9 =object
        "titel":"Vlaamse invloed",
        "image":"../img/route/plaats9.jpg",
        "place":9,
        "directions": {
            "noord": 8,
            "zuid": 10
        }
    },
    {//10 =object
        "titel":"Nova Zembla",
        "image":"../img/route/plaats10.jpg",
        "place":10,
        "directions": {
            "noord": 9,
            "oost": 11
        }
    },
    {//11 =object
        "titel":"Schilderkunst",
        "image":"../img/route/plaats11.jpg",
        "place":11,
        "directions": {
            "oost": 12,
            "west": 10
        }
    },
    {//12 =object
        "titel":"Shilderkunst",
        "image":"../img/route/plaats12.jfif",
        "place":12,
        "directions": {
            "oost": 0,
            "west": 11
        }
    }
];

function show(index){
    MyTitle.innerHTML = lokaties[index].titel;
    MyImage.src = lokaties[index].image;
    MyPlace.innerHTML = "Je bent op: "+ lokaties[index].place;
    current_index = index;
    update_directions();
};

function update_directions(){
    let possible = lokaties[current_index].directions;
    let possible_keys = Object.keys(possible);
    let button_keys = Object.keys(directionButtons);

    for(const key of button_keys){
        directionButtons[key].style.visibility = 'hidden';
    };
    for(const key of possible_keys){
        directionButtons[key].style.visibility = 'visible';
    };
};

function getinput(){
    show(MyInput.value);
    MyInput.value = "";
    MyInput.focus();
}

function goDirection(richting){
    let punt_index = lokaties[current_index].directions[richting];
    show(punt_index);
}
show(0)