const should = require('chai').should();
const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

//unit test for fizzBuzzer
describe('fizzBuzzer', function() {
	//test normal case
	it('should return "fizz-buzz" if number is multiple of 15', function() {
		[15, 30, 60].forEach(function(input) {
		  expect(fizzBuzzer(input)).to.equal('fizz-buzz');
		});
	});
    
     it('should return "fizz" if number is multiple of 3', function() {
		[3, 9, 12].forEach(function(input) {
			expect(fizzBuzzer(input)).to.equal('fizz');
		});
	});

     it('should return "buzz" if number is multiple of 5', function() {
		[5, 10, 20].forEach(function(input) {
			expect(fizzBuzzer(input)).to.equal('buzz');
		});
	});

     it('should return number if number is not a multiple of 3 or 5', function() {
		[2, 4, 7].forEach(function(input) {
			expect(fizzBuzzer(input)).to.equal(input);
		});
	});

     it('should produce error message if input is not a number', function() {
		const badInputs = ["a", "5", false, true, function(){} ].forEach(function(input) {
			expect(function(){fizzBuzzer(input)}).to.throw(Error);
			// fizzBuzzer(input).should.throw(Error);
		});
	});

});