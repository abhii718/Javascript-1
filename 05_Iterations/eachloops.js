const coding = ["1js", "ruby", "java", "python"];

// for Each
coding.forEach(function(val){
    console.log(val);
})


// for of
for (const key of coding) {
    console.log(key)
}

// Arrow function 
coding.forEach( (item) => {
console.log(item)
})

// function printMe
function printMe(item)
{
    console.log(item)
}

coding.forEach(printMe)

coding.forEach( (item, index,arr)=> {
    console.log(item, index,arr)
})


const mycoding = [
    {
        languageName: "javascript",
        languageFileName: "java"
    },
    {
        languageName: "javass",
        languageFileName: "2java"
    },
    {
        languageName: "javv",
        languageFileName: "3java"
    }
]
mycoding.forEach( (item) => { 
    console.log(item.languageFileName);
    console.log(item.languageName);
})