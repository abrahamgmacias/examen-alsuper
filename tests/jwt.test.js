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

    it("should return isValid: false for an invalid JWT", () => {
        // Arrange
        const invalidToken = "something_token";

        // Act
        const result = validarSessionJWT(invalidToken);

        // Assert
        expect(result).to.be.an("object");
        expect(result.isValid).to.be.false;
        expect(result.payload).to.be.undefined;
    });

    after(() => {
        delete process.env.JWT_SECRET;
    });
});