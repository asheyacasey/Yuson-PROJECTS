let obj = [ 
    
        {
            "name": "Luke Skywalker",
            "height": "172",
            "mass": "77",
            "hair_color": "blond",
            "skin_color": "fair",
            "eye_color": "blue",
            "birth_year": "19BBY",
            "gender": "male"
        },
        {
            "name": "C-3PO",
            "height": "167",
            "mass": "75",
            "hair_color": "n/a",
            "skin_color": "gold",
            "eye_color": "yellow",
            "birth_year": "112BBY",
            "gender": "n/a"
        },
        {
            "name": "R2-D2",
            "height": "96",
            "mass": "32",
            "hair_color": "n/a",
            "skin_color": "white, blue",
            "eye_color": "red",
            "birth_year": "33BBY",
            "gender": "n/a"
        },
        {
            "name": "Darth Vader",
            "height": "202",
            "mass": "136",
            "hair_color": "none",
            "skin_color": "white",
            "eye_color": "yellow",
            "birth_year": "41.9BBY",
            "gender": "male"
        },
        {
            "name": "Leia Organa",
            "height": "150",
            "mass": "49",
            "hair_color": "brown",
            "skin_color": "light",
            "eye_color": "brown",
            "birth_year": "19BBY",
            "gender": "female"
    }
]

runsystem = () =>
{
    let function1= "1. Return an array of Gender : Male characters (name only)";
    let function2 = "2. Return an array of Gender : Female characters (name only)";
    let function3 = "3. Return an array of Gender : N/A characters (name only)";
    let function4 = "4. Return an array of characters whose height is greater than 150 (name only)";
    let names = [];


    let choice = Number(prompt("Choose a function: \n"+function1+"\n"+function2+"\n"+function3+"\n"+function4));
    names = getResult(choice);
    names.length > 0 ? alert("These are the names : \n"+ names) : alert("No names displayed");
}

    getResult = (num) => 
    {
    var list =  [];
    switch(num)
    {
        case 1: list = getMales(); break;
        case 2: list = getFemales(); break;
        case 3: list = getNoGender(); break;
        case 4: list = getTallPeople(); break;
        default: alert("That is an invalid input"); break;
    }
    return list;
    }

    getMales = () =>
    {
        var males = [];
        for(let x of obj)
        {
            if(x-gender == "male")
            males.push(x.name);
        }
        return males;
    }

    getFemales = () =>
    {
        var females = [];
        for(let x of obj)
        {
            if(x.gender == "female")
            females.push(x.name);
        }
        return females;
    }

    getNoGender = () =>
    {
        var none = [];
        for(let x of obj)
        {
            if(x.gender == "n/a")
            none .push(x.name);
        }
        return none;
    }

    getTallPeople = () =>
    {
        var people = [];
        for(let x of obj)
        {
            if(x.height > 150)
            people.push(x.name);
        }
        return people;
    }

runsystem();

