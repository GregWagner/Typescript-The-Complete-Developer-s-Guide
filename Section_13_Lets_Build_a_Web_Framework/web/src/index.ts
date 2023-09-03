import {User} from "./models/User";

const user = new User({name: 'greg', age: 62});

console.log(user.get('name'));
console.log(user.get('age'));
