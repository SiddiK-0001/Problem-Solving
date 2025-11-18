<!-- *?What are some differences between interfaces and types in TypeScript? -->

Interfaces and types both are used to declare types but there are some differences between them:

1. Interface only works for object type data like: array, object,function.
But it is not valid for primitive type data like string, number or boolean since interface has to be declared like this: 
    interface name{

    }
But in type aliasing we can store primitive type data like this: 
    type name = string;

2. If we want we can merge the properties of type aliases by using intersection , where in case of interface we cannot merge but we can extend the properties of one interface to another like this: 
    interface user extends name{

    }


<!-- *?What is the use of the keyof keyword in TypeScript? Provide an example. -->

keyof is a type operator which means it works on types. If we just need the keys of an object type then we can use this operator.
A very good usage of this could be- when we want to take an object and a key as an input of a function to return the value of that key in that object.

    type Toys={
        car: string;
        bike: string;
        plane: string;
    }
    type MyToy = keyof Toys; // "car" | "bike" | "plane"

    function getToy(obj: Toys, key: MyToy){
        return obj[key];
    }

    const toys: Toys ={
        car : "Yamaha",
        bike: "s",
        plane: "a"
    }

    const myToy: MyToy = "bike";

    console.log(getToy(toys,myToy))

Here in the function, for the parametre "key" we declared MyToy as type which is quite safe as compare to string , as it won't accept any string other than car,bike,plane. So there is no chance of error in the return line and if a user is inputting a wrong key they will get it in the very first place.