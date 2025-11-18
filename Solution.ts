

function formatValue(value: string | number | boolean) {
    if (typeof value === "string" && value.length > 0) {
        return value.toUpperCase();
    } else if (typeof value === "number") {
        return value * 10;
    } else if (typeof value === "boolean") {
        return !value;
    }
}





function getLength(value: string | (string | number | boolean)[]) {
    if (typeof value === "string" && value.length > 0) {

        return value.replace(/[^a-zA-Z0-9]/g, "").length; 
    }
    else if (Array.isArray(value)) {
        let size = value.filter(i => !/[^a-zA-Z0-9]/.test(String(i))).length;

        return size;
    }
}




class Person {
    constructor(public name: string, public age: number) {

    }
    getDetails() {
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
}







type Person_Obj = {
    title: string,
    rating: number
}
function filterByRating(value: Person_Obj[]) {
    let new_arr = value.filter((item) => { return item.rating >= 4 })
    // {} use krsi tai return likhte hobe 
    return new_arr;
}





type User = {
    id: number,
    name: string,
    email: string,
    isActive: boolean
}
function filterActiveUsers(value: User[]) {
    let updated = value.filter(i => i.isActive === true)
    return updated;
}







interface Book {
    title: string,
    author: string,
    publishedYear: number,
    isAvailable: boolean
}


function printBookDetails(value: Book) {
    value.isAvailable ?
        console.log(`Title: ${value.title}, Author: ${value.author}, Published: ${value.publishedYear}, Available: Yes`)
        :
        console.log(`Title: ${value.title}, Author: ${value.author}, Published: ${value.publishedYear}, Available: No`)
}








type arr = (string | number)[]

function getUniqueValues(arr1: arr, arr2: arr) {
    let new_arr: arr = [];

    for (let i = 0; i < arr1.length; i++) {

        if (typeof arr1[i] === "string") {
            if ((arr1[i] as string).trim() !== "") {

                new_arr[new_arr.length] = arr1[i];
            }
        } else {
            new_arr[new_arr.length] = arr1[i];

        }
    }
    for (let i = 0; i < arr2.length; i++) {

        if (typeof arr2[i] === "string") {
            if ((arr2[i] as string).trim() !== "") {

                new_arr[new_arr.length] = arr2[i];
            }
        } else {
            new_arr[new_arr.length] = arr2[i];

        }
    }

    let unique: arr = [];

    for (let i = 0; i < new_arr.length; i++) {
        let exists = false;
        for (let j = 0; j < unique.length; j++) {
            if (new_arr[i] === unique[j]) {
                exists = true;
                break
            }
        }

        if (!exists) {
            unique[unique.length] = new_arr[i] as string | number;
        }
    }

    return unique;

}








type Obj = {
    name: string,
    price: number,
    quantity: number,
    discount?: number
}

function calculateTotalPrice(value: Obj[]) {

    let total: number[] = value.map((i) => {
        if (i.discount) {
            return (i.price * i.quantity) - (i.price * i.quantity) * (i.discount / 100)
        } else {
            return (i.price * i.quantity)
        }
    })

    let sum = 0;
    for (let x = 0; x < total.length; x++) {
        sum += total[x];
    }
    return sum;
}
