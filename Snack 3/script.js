const array1 = [1,2,3];

const array2 = [1,2,3,4,5,6,7,8,9];

if(array1.length < array2.length) {
    while(array1.length < array2.length) {

        array1.push(array2[array1.length])
        
    }
}




console.log(array1);
console.log(array2);

