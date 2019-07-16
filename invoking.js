// Functions Invoking other Functions

// You task in this exercise is to write three functions.

// mealMaker
// slice
// cook

// The mealMaker function should accept an array of objects.Each object in the array should represent a food item.Each should have a food and a type key.The type key should have one of two values: meat or vegetable. 

/* {
    "food": "beef",
        "type": "meat"
}

or

{
    "food": "zucchini",
        "type": "vegetable"
}

The mealMaker function should iterate the array.Determine if each object in the array represents a meat or a vegetable.If it is a meat, the cook function should be invoked and the object sent as an argument.If it represents a vegetable, then the slice function should be invoked and the object sent as an argument.

The cook function should return the string "Cooked beef" if the argument's value is "beef".

The slice function should return the string "Beet slices" if the argument's value is "beet".

Inside the mealMaker function, define a new array.

The mealMaker function should populate that new array with the strings representing the prepared foods.For example, if the original contains the objects above, the final array returned by the function should be the following.

["Cooked beef", "Zucchini slices"] */

const foodObjects = [
    {food: 'beef', type: 'meat'},
    {food: 'chicken', type: 'meat'},
    {food: 'broccoli', type: 'vegetable'},
    {food: 'green beans', type: 'vegetable'},
    {food: 'carrots', type: 'vegetable'}
];

const mealMaker = (array) => {
    let mealItems = [];

    array.forEach(object => {
        if (object.type === 'meat') {
            let cookedItem = cook(object);
            mealItems.push(cookedItem);
        } else {
            let slicedItem = slice(object);
            mealItems.push(slicedItem);
        }
    });

    return mealItems;
}

const cook = (object) => {
    return `Cooked ${object.food}`;
};

const slice = (object) => {
    return `Sliced ${object.food};`
};

const meal1 = mealMaker(foodObjects);

// console.log(meal1);