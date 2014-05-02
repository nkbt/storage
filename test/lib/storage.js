define(['lib/storage'], function (storage) {
	"use strict";


	describe('Storage', function () {

		beforeEach(function (done) {
			storage.clear(function () {
				storage.set('always', {ok: true}, done);
			});
		});

		afterEach(function (done) {
			storage.clear(done);
		});


		it('should set item', function (done) {
			storage.set('test', {ok: true}, function (error, data) {
				expect(data).to.be.an('object');
				expect(data).to.have.key('ok');
				expect(data.ok).to.be.true;
				done();
			});
		});

		it('should get item', function (done) {
			storage.get('always', function (error, data) {
				expect(data).to.be.an('object');
				expect(data).to.have.key('ok');
				expect(data.ok).to.be.true;
				done();
			});
		});


	});


});
