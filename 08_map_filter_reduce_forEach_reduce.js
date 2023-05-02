//These are known as high order functions

const companies = [
  {
    name: "Google",
    category: "Product Based",
    start: 1981,
    end: 2004,
  },
  {
    name: "Amazon",
    category: "Product Based",
    start: 1992,
    end: 2008,
  },
  {
    name: "PayTM",
    category: "Product Based",
    start: 1999,
    end: 2007,
  },
  {
    name: "Coforge",
    category: "Service Based",
    start: 1989,
    end: 2010,
  },
  {
    name: "Mindtree",
    category: "Service Based",
    start: 1990,
    end: 2010,
  },
];

const ages = [33,19,10,45,67,23,14,55,70,12,25];

//normal for loop
for(let i=0; i<=companies.length;i++){
    console.log(companies[i]);
}


//forEach loop
companies.forEach((company)=>{
  console.log(company.name)
})


//filter
//filter is used to filter out the data from the array

for(let i=0; i<=ages.length;i++){     //by normal for loop
  if(ages[i] >= 18){
    console.log(ages[i])
  }
}

ages.filter((age)=>{                  //by filter method
  if(age>=18){
    console.log(age);
  }
})

companies.filter((company)=>{
  if(company.category === "Service Based"){
    console.log(company.name);      
  }
})



//map method
//map is used to create new array from the existing array so it will return new array where as forEach will not return new array

companies.map((company)=>{
  console.log(company.start);
})



//sort method
//sort method is used to sort the array

const sorted = companies.sort((c1,c2)=>{
  if(c1.start > c2.start){
    return 1;
  }else{
    return -1;
  }
})
console.log(sorted);


//reduce method
//reduce method is used to iterate over an array and accumulate its values into a single value 

let total=0;
for(let i=0; i<=ages.length;i++){    //by using for loop
  total+=ages[i];
}
console.log(total)


const sumAge = ages.reduce((total,age)=>{
  return total + age;
},0)
console.log(sumAge)

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum); // Output: 15