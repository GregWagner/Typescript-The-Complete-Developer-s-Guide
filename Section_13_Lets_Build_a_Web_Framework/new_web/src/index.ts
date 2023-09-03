import {User} from "./models/User.ts";

const user = new User({name: 'NEW RECORD', age: 0});

user.on('Change', () => {})