var fruits = ["Mango","Grape","Orange",11];
console.log(fruits.length);
fruits[4]="Apple";
fruits[5]="Pineapple";
fruits.push("xyx");   //add last element
fruits.pop();   //deletes last element
fruits.shift(); //deletes first element
fruits.unshift("added");    //add as first element
console.log(fruits);
