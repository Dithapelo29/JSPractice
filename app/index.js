let numArr = [[1,'One'],[2,'Two'],[3,'Three']];

let numMap = new Map(numArr);

for(let [key,val] of numMap.entries()){
    console.log(`${key} => ${val}`);
}