console.log(myfavoriteColor('red'));


function myfavoriteColor(color){
    if(color == 'blue'){
        return color + " that's the perfect color!";
    }else{
        return '(' + color + ')' + " i don't like thats color only the blue one i like"
    }
}


function myfavoriteAnimal(animal){
    switch(animal){
        case "dog":
            return "Dog is your favorite animal? huh. Awf awf awf"; break;
        case "cat":
            return "Cat is your favorite animal? huh. Meow meow meow"; break;
        case "bird":
            return "Bird is your favorite animal? huh. Twit twit twit"; break;
        default:
            return "That's not an animal. Input a valid value"
    }
}
console.log(myfavoriteAnimal('bird'));