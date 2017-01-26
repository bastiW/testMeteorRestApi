import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';

import './main.html';

Template.employees.onCreated(function helloOnCreated() {
    //this.state = new ReactiveDict();
    Meteor.subscribe('employees');
});

Template.employees.helpers({


    employees(){
        return Employees.find({})
    }
});

Template.employees.events({
    'click button'(event, instance) {
    },
});


