
/*1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if )*/

function findPrime(...numbers){
    for(let i=0; i<numbers.length; i++){
        let control = 0;
        for(let j=2; j<numbers[i]; j++){
            if(numbers[i] % j == 0){
                control++;
            }
        }
        if(control == 0){
            console.log(numbers[i] + " Sayısı Asaldır.");
        }
    }

}
findPrime(3,4,5,6,7,8,9,11,23,54,67,78,90)

/*Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. */

let findFriendsNumber = (num1, num2) => {
    let result1 = 0;
    let result2 = 0;

    for(let i=1; i<num1; i++){
        if(num1 % i == 0){
            result1 += i;
        }
    }

    for(let i=1; i<num2; i++){
        if(num2 % i == 0){
            result2 += i;
        }
    }

    if(num1 == result2 && num2 == result1){
        console.log(num1 + " and " + num2 + " are a friend number.");
    }else{
        console.log(num1 + " and " + num2 + " are a not friend number.");
    }

}

findFriendsNumber(220,284);

// 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.


for(let i=1; i<1000; i++){
    
    let total = 0;
    for(let j=1; j<i; j++){
        if(i % j == 0){
            total += j;
        }
    }
    if(total == i){
       // console.log(i + " is a perfect number.");
    }
}

// 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

for(let i=2; i<1000; i++){
    let control = 0;
    for(let j=2; j<i; j++){
        if(i%j == 0){
            control++;
        }
    }
    if(control == 0){
        console.log(i + " is a prime number.");
    }
}

