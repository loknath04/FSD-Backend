const fs=require("fs");
const write = async()=>{
    const data = "I'm new Data"
    fs.writeFile("./data.txt",data,(err)=>{
        if(err) throw err;
        else{
            console.log("File updated successfully");
        }
    });
};
write();