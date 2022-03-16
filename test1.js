
//remove a specific element from an array
// remove duplicates from sorted array
var arr1=[1,3,0,8,5,7];
var elm=3
function remove_elm(arr1,elm) {
    for(let i=0 ; i<arr1.length ; i++)
    {
        if(arr1[i]==3)
        {
            for(let j=i ; j<arr1.length; j++)
            {
                  arr1[j]=arr1[j+1];  
            }
            arr1.length--;                 
        }
    }
    if(arr1[arr1.length-1]==3) {
        arr1.length--;
    }
    
}

var arr2=[0,0,5,6,7,7,9,11,11,30];
function remove_dup(arr2) {
var i=arr2.length -1;
while(i>0) {
    if(arr2[i]==arr2[i-1]) {                                 
        for(var j=i ; j<arr2.length ; j++) {
            arr2[j]=arr2[j+1];
        }
        arr2.length--;
    }
    else {
        i--;
    }
}
}

//appel a la 1ere fonction

console.log("array before deleting the element 3:");
console.log(arr1);
console.log("array after deleting the element 3:");
remove_elm(arr1,3);
console.log(arr1);


console.log("-------------------");


console.log("array before deleting the duplicates:");
console.log(arr2);
console.log("array after deleting the duplicates:");
remove_dup(arr2);
console.log(arr2);


