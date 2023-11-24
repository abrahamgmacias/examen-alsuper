const { expect } = require('chai');
const jwt = require('jsonwebtoken');
const { crearSessionJWT, validarSessionJWT } = require('../src/util/jwt');


describe("Creates JWT session", () => {
    before(() => {
        process.env.JWT_SECRET = "secretKey";
    });

    it("should create a valid JWT token", () => {
        // Arrange
        const payload = {
            id: "123",
            name: "Abraham"
        }

        // Act
        const token = crearSessionJWT(payload);

        // Assert
        expect(token).to.be.a("string");

        // Verify the structure
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        expect(decodedToken).to.be.an("object");
        
        expect(decodedToken.id).to.equal("123");
        expect(decodedToken.name).to.equal("Abraham");
    });

    after(() => {
        delete process.env.JWT_SECRET;
    });
});