const MyTitle = document.getElementById('mytitle');
const MyImage = document.getElementById('myimage');

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
        "titel":"De Voorhal 0",
        "image":"../img/route/plaats0.jpg",
        "directions": {
            "noord": 7,
            "oost": 1,
            "zuid":1 ,
            "west": 12
        }
    },
    {//1 =object
        "titel":"Franse Hoekzaal 1",
        "image":"../img/route/plaats1.jpg",
        "directions": {
            "noord": 2,
            "west": 0
        }
    },
    {//2 =object
        "titel":"Het Herenhuis 2",
        "image":"../img/route/plaats2.jpg",
        "directions": {
            "noord": 3,
            "zuid": 1
        }
    },
    {//3 =object
        "titel":"Both 3",
        "image":"../img/route/plaats3.jpg",
        "directions": {
            "noord": 4,
            "zuid": 2,
            "west": 5
        }
    },
    {//4 =object
        "titel":"Bibliotheek 4",
        "image":"../img/route/plaats4.JPG",
        "directions": {
            "zuid": 3
        }
    },
    {//5 =object
        "titel":"William Rex 5",
        "image":"../img/route/plaats5.jpg",
        "directions": {
            "oost": 3,
            "west": 6
        }
    },
    {//6 =object
        "titel":"De Nachtwacht 6",
        "image":"../img/route/plaats6.jfif",
        "directions": {
            "oost": 5,
            "zuid": 7,
            "west": 8
        }
    },
    {//7 =object
        "titel":"Het melkmeisje 7",
        "image":"../img/route/plaats7.jpg",
        "directions": {
            "noord": 6,
            "zuid": 0
        }
    },
    {//8 =object
        "titel":"WillemVanOranjeManiërisme 8",
        "image":"../img/route/plaats8.jpg",
        "directions": {
            "oost": 6,
            "west": 9
        }
    },
    {//9 =object
        "titel":"Vlaamse invloed 9",
        "image":"../img/route/plaats9.jpg",
        "directions": {
            "noord": 8,
            "zuid": 10
        }
    },
    {//10 =object
        "titel":"Nova Zembla 10",
        "image":"../img/route/plaats10.jpg",
        "directions": {
            "noord": 9,
            "oost": 11
        }
    },
    {//11 =object
        "titel":"Schilderkunst 11",
        "image":"../img/route/plaats11.jpg",
        "directions": {
            "oost": 12,
            "west": 10
        }
    },
    {//12 =object
        "titel":"Shilderkunst 12",
        "image":"../img/route/plaats12.jfif",
        "directions": {
            "oost": 0,
            "west": 11
        }
    }
];

function show(index){
    MyTitle.innerHTML = lokaties[index].titel;
    MyImage.src = lokaties[index].image;
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