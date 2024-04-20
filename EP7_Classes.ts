// $ 15) Classes [Private, Public, Protected]
class user{
    // -> It will be accessible inside as well as  outside of the class
    
    public email: string
    name : string
    private city : string 
    constructor(email: string, name:string){
        this.email = email;
        this.name = name;
        // -> 15.1) It will be accessible inside the class
        this.city = "Bangalore"; 
    }
}

const aman = new user("a@s.com", "aman");
// aman.city="delhi"
// -> 15.2) City will not be accessible once it becomes private

// -> The error will be shown in TS file using squiggly line but it will run easily in javascript file 
// -> So to counter this in TS config file we have a option to not to produce JS file if the TS code is not correct

// ~  Short way of writing classes

class ShortUser{
    // public email: string
    // name : string
    readonly city : string ="Delhi"
    constructor(public email: string, public name:string){
        // this.email = email;
        // this.name = name;
        // this.city = "Bangalore"; 
    }
}

// continue from here why interfaces are imp..... 3:27:12 (Abstract class)
// https://www.youtube.com/watch?v=30LWjhZzg50