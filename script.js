/* 
    Task 1 : 
    ანა არის 28 წლის , ხოლო მისი ძმა ლევანი 21ის .

    გამოიყენეთ ცვლადები , რომელშიც შეინახავთ თითოეულის ასაკს და სახელს.
    განსაზღვრეთ ახალი სტრინგ ტიპის ცვლადი რომელიც შეინახასვს ტექსტს :
    'ანა ლევანზე 7 წლით უფროსია'
    სხვაობა დათვალეთ დინამიურად ცვლადების და არითმეტიკული ოპერატორების გამოყენებით
    დალოგეთ ზემოაღნიშნული ცვლადი . 
*/

var name = 'ana';
var nameBrother = 'levani';
var age= 28;
var ageBrother = 21;

var sentence= name + " " + nameBrother + "ze" + " " + (age - ageBrother) + " wlit ufrosia";

console.log(sentence)


/*
    Task 2 : 
        გვაქვს სტუდენტების სახელების მასივი ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den']
        დალოგეთ სიის ზუსტად შუაში მყოფი სახელი.

*/


var students = ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den']

console.log(students[4])





/*
    Task 3 : 
    Part 1 : შექმენით სტუდენტის ობიექტი , რომელსაც აქვს 5 property : firstName; lastName; age; subjects; roommate;
    firstname,lastname - string type
    age - number
    subject - object (array of strings)
    roommate - object (რომელსაც აქვს თავის მხრივ ორი property : fullname , age )

    მნიშვნელობები მიანიჭეთ ტიპების მიხედვით . subject- მასივი უნდა შედგებოდეს არანაკლებ 5 ელემენტისგან

    Part 2 : 
        for ციკლის გამოყენებით დალოგეთ თუ რა საგნებს სწავლობს სტუდენტი , subject arrayს ელემენტები.

        ასევე შექმენით ახალი ცვლადი fullName რომელშიც შეინახავთ სტუდენტის სრულ სახელ და გვარს.

        ეს fullName მნიშვნელობასთან ერთად დაამატეთ სტუდენტის ობიექტს. 
         
        დაამატეთ ცვლადი result რომლის მნიშვნელობაც იქნება წინადადება : 
            ' (სტუდენტის სახელი და გვარი) არის age წლის და მისი რუმმეითი არის : roommate fullname
        

*/


let students = {
    firstName : 'teona',
    lastName : 'piranishvili',
    age : 22,
    subjects : ['html', 'css', 'js', 'react', 'angular'],
    fullName: 'teona piranishvili',
    roommate : {
        fullname : 'saba mamasaxlisi',
        age : 21,
    }
}

for (let i = 0; i < students.subjects.length; i++){
    console.log(students.subjects[i])
}
let fullName = students.firstName + " " + students.lastName;
let result = students.fullName + " " + "aris " + students.age + " wlis da misi roommate aris: " + students.roommate.fullname;

console.log(result)



/*
    Task 4 : 
        გვაქვს  მასივი : ["Banana", "Orange", "Apple", "Mango",2,12]
        გამოიყენეთ while ციკლი და მანამ სანამ მასივის ელემენტის ტიპი არის სტრინგი
        დალოგეთ ეს ელემენტი.

*/

var fruit= ["Banana", "Orange", "Apple", "Mango",2,12]

let i = 0;
while (i< fruit.length && typeof fruit[i] == "string"){
    console.log(fruit[i])
    i++;
}


/*
    Task 5 : 
    გვაქვს მასივი : [12,23,43,11,9,2,121,90]
    თუ მასივის ელემენტი მეტია 31ზე და თან არის ლუწი მაშინ დალოგეთ : 'Element is greater than provided value and is EVEN'
    თუ მასივის ელემენტი ნაკლებია 31ზე და თან არის კენტი მაშინ დალოგეთ : 'Element is less than provided value and is ODD'

*/

let numArrey= [12,23,43,11,9,2,121,90]
for(let i = 0; i< numArrey.length; i++){
    if(numArrey[i]> 31 && numArrey[i] %2 == 0){
        console.log('Element is greater than provided value and is EVEN')
    }
    else if (numArrey[i]<31 && numArrey[i] %2 !=0){
        console.log('Element is less than provided value and is ODD')
    }
}


/*
    Task 6 : 
     შექმენით ფუნცქია arrayBreaker რომელიც პარამეტრად მიიღებს ორ ცვლადს . პირველია რა მნიშვნელობაზეც
     უნდა შეწყდეს ციკლი ე.წ breakValue და მეორე პარამეტრი იქნება მასივი .
     დაწერეთ იტერაცია , დალოგეთ ელემენტები მანამ სანამ მასივის ელემენტი არ იქნება 12 ის ტოლი . 

     const BREAKVALUE = 12;
     let array = [41,31,81,9,2,12,71,21,32]
*/


??
