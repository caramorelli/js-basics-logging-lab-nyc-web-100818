const driver = 'bob';

console.log("this code was called");
console.log(driver);
console.log(`$driver is the driver variable name`);


//   describe('console.log()', function () {
//     const spy = sinon.spy(console, 'log');

//     after(function () {
//       spy.restore();
//     });

//     it('invokes console.log() with the string "this code was called"', function () {
//       expect(spy.calledWithExactly('this code was called')).to.be.true;
//     });

//     it('invokes console.log() with the `driver` variable', function () {
//       expect(spy.calledWithExactly('bob')).to.be.true;
//     });

//     it('invokes the console.log with the `driver` variable as the first argument and `is the driver variable name` as the second argument', function () {
//       expect(spy.calledWithExactly('bob', 'is the driver variable name')).to.be.true;

