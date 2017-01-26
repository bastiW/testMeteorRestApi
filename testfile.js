/**
 * Created by sebastian on 26.01.2017.
 */


Employees = new Mongo.Collection('employees');

Employees.allow({
    'insert': function (userId,doc) {
        /* user and doc checks ,
         return true to allow insert */
        return true;
    },

    'remove': function (userId,doc) {
        /* user and doc checks ,
         return true to allow insert */
        return true;
    }
});