"use strict";
function getNumberOfGames(x)  {
    let numberOfGames=0;
    while(x!=1)
    if(x%2==1){
        x=(x-1)/2;
        numberOfGames+=x;
        x++;
    }else{
        x=x/2;
        numberOfGames+=x;
    }
    return numberOfGames;
}
// getNumberOfGames(20)
let sum=0;
for(let i=2;i<=100;i++){
    sum+=getNumberOfGames(i);

}
console.log(sum);