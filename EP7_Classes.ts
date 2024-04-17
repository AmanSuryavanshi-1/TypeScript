//  how to setup Typescript for projects
// --> 1) tsc --init 
//        -> Installing typescript in our project 
//        -> It will genarate a tsconfig.json file

// --> 2  
class user{
    email: string
    name : string
    city : string 
    constructor(email: string, name:string){
        this.email = email;
        this.name = name;
    }
}

const aman = new user("a@s.com", "aman");
aman.city="delhi"
// -> The error will be shown in TS file using squiggly line but it will run easily in javascript file 
// -> So to counter this in TS config file we have a option to not to produce JS file if the TS code is not correct