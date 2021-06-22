const {expect, test, describe} = require('@jest/globals');
const {returnTwo, greeting, add, multiply} = require('./function');
 
// test('returnTwo equals 2', function(){
//     expect(returnTwo()).toBe(2);
// })
 
// test('Greeting', function(){
//     expect(greeting('Evan')).toBe('Hello, Evan');
//     expect(greeting('Bob')).toBe('Hello, Bob');
// })
 
// describe('Adding Numbers', function(){
//     test('Add', function(){
//         expect(add(1, 2)).toBe(3);
//         expect(add(5, 9)).toBe(14);
//     })
// })
 
test('Mulitply', function(){
   expect(multiply(5, 8)).toBe(40)
})
