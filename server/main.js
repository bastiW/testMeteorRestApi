import { Meteor } from 'meteor/meteor';
import {SimpleRest} from 'meteor/simple:rest';


Meteor.startup(() => {
  // code to run on server at startup
});


Meteor.publish('employees', function tasksPublication() {
    return Employees.find();
});