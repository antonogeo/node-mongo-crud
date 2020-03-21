const chai = require('chai');
const sinon = require('sinon');

const AccountService = require('../../services/AccountService');
const AccountRepository= require('../../repositories/AccountRepository');

describe('Account Service Tests', () => {

    it('should get an acccount by id', (done) => {
        // Given
        const id = '5e75fc46cfc35c3fbceaf36b';

        const expected = {
            _id: id,
            email: 'test@gmail.com',
            firstName: 'Tom',
            age: 20
        }

        sinon.stub(AccountRepository, 'getAccount').resolves(expected);

        // When
        AccountService.getAccount(id).then(actual => {
            // Then
            chai.expect(actual.email).to.equal(expected.email);
            chai.expect(actual.firstName).to.equal(expected.firstName);
            chai.expect(actual.age).to.equal(expected.age);
            done();
        });
    });

})