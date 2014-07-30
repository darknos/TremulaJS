


var expect = chai.expect;

mocha.setup({
	ui:'bdd'
	,timeout: 5000 //ms
});

describe("TremulaJS", function() {
	describe("instantiated tremula obj", function() {

		it("it has a Grid obj", function() {
			expect(tremula.Grid).to.be.an('object');
		});

		it("it has no boxes", function() {
			expect(tremula.Grid.boxes).to.be.an('array');
			expect(tremula.Grid.boxes).to.have.length(0);
		});

	});//instantiated tremula obj


	describe("loading 60 items + lastContent", function() {
		it("it now has 61 boxes", function(done) {
			
			loadTestData(60,function(err){
				expect(tremula.Grid.boxes).to.have.length(61);
				done(err);
			});//loadTestData()

		});//it now has 61 boxes

	});//loading 11 items + lastContent


	describe("loading 10 items + lastContent", function() {
		it("it now has 11 boxes", function(done) {
			
			loadTestData(10,function(err){
				expect(tremula.Grid.boxes).to.have.length(11);
				done(err);
			});//loadTestData()

		});//it now has 11 boxes

	});//loading 10 items + lastContent


});//TremulaJS




setTimeout(mocha.run,1200);






