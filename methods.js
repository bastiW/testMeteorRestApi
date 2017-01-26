/**
 * Created by sebastian on 26.01.2017.
 */
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

Meteor.methods({
    'employee.insert'(firstname, lastname) {
       console.log('you are within the Method')

        console.log(firstname)
        //check(vorname, String);
        //check(nachname, String);
    },



})
