const fs =require("fs");
/*let hello=()=>{
    console.log("Hello GitHub!!");
};
 hello();*/
fs.writeFile("sample.txt","Hello World. Welcome to Node.js File System module.",
    (err) => {
        if(err) throw err;
        console.log("File created!")
    }
);

fs.readFile("sample.txt",(err,data)=>{
    if (err) throw err;
    console.log(data.toString())
});