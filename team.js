const array = [
    {
        name: "Jacopo",
        surname: "Sangregorio",
        age: 18,
        city: "Paternò",
        hobby: "Music",
        favoriteFood: "Pizza",
        favoriteVideoGame: "Minecraft",
        favoriteFilm: "Interstellar",
        favoriteBook: "The Magic",
        petName: "Lilo",
    },
    {
        name: "Raffaele",
        surname: "Filannino",
        age: 24,
        city: "Barletta",
        hobby: "football",
        favoriteFood: "Ragu",
        favoriteVideoGame: "Black ops 2",
        favoriteFilm: "signore degli anelli",
        favoriteBook: "intelligenza emotiva",
        petName: "shila",
    },
    {
        name: "Sabrina",
        surname: "Moccia",
        age: 30,
        city: "Rome",
        hobby: "gardening",
        favoriteFood: "carbonara",
        favoriteVideoGame: "Call of Duty",
        favoriteFilm: "The Godfather",
        favoriteBook: "Pride and Prejudice",
        petName: "Nala",
    },
    {
        name: "Tommaso",
        surname: "Merli",
        age: 26,
        city: "Milan",
        hobby: "Video Games",
        favoriteFood: "Carbonara",
        favoriteVideoGame: "League Of Legends",
        favoriteFilm: "Star Wars",
        favoriteBook: "Bible",
        petName: "Leia",
    },
    {
        name: "matteo",
        surname: "petrucci",
        age: 25,
        city: "rieti",
        hobby: "boh",
        favoriteFood: "riso",
        favoriteVideoGame: '"',
        favoriteFilm: '"',
        favoriteBook: '"',
        petName: "adalgiso"
    },
];

function gameLol(arr) { //Print who wrote ‘LOL’ or ‘League Of Legends’ as a favorite video game. (name).
    let gameLolArr = [];
    for (let i = 0; i < arr.length; i++) {
        let gameString = arr[i].name;
        if (arr[i].favoriteVideoGame === "League Of Legends") {
            gameLolArr.push(gameString);
        };
    };
    return gameLolArr;
};
console.log(gameLol(array));

function petName(arr) { //Print who has a pet (name petName).
    let petNameArr =[];
    for (let i = 0; i < arr.length; i++) {
        let petString = arr[i].name + " " + arr[i].petName;
        if (arr[i].petName !== "") {
            petNameArr.push(petString);
        }
    }
    return petNameArr;
}
console.log(petName(array));

/*function ordineCrescente(arr) { //Print the team in age order (name age).
    let nameAgeArr =[];
    let app = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let k = i+1; k < arr.length; k++) {
            let ageString = arr[i].name + " " + arr[i].age;
            if(arr[k].age<arr[i].age) { //simbolo per crescente o descrescente 
                app=arr[i].age;
                arr[i].age=arr[k].age;
                arr[k].age=app;
                nameAgeArr.push(ageString);
         };
         //return nameAgeArr;
        };
    };
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].age);
        return arr[i].age;
    }
    ordineCrescente();
};
console.log (ordineCrescente(array));*/

function ArrayAvg(arrayAge) {  //Print the team middle age.

    var i = 0, sum = 0, ArrayLen = arrayAge.length;
    while (i<ArrayLen) {
        sum = sum + arrayAge[i++];

    }
        return sum / ArrayLen;
}

var arrayAge = [18, 24, 30, 26, 25];
var media = ArrayAvg(arrayAge);
console.log(media);

function arraySurnameName(arr) {
    let arraySurnameNameArr = [];
    for (let i = 0; i < arr.length; i++) {
        let surnameName = arr[i].surname + " " + arr[i].name;
        if (surnameName !== "") {
            surnameName = arraySurnameName.sort();
            arraySurnameNameArr.push(surnameName);
        };
    };
    return arraySurnameNameArr;
};
console.log(arraySurnameName(array));