const sinon = require('sinon');
const { sequelize } = require("../src/database/models/index");;
const { expect } = require('chai');
const { login } = require('../src/controllers/auth');
const { crearSessionJWT } = require('../src/util/jwt');
const { usuarios } = require('../src/database/models/index');


describe("User logs in", () => {
    before(() => {
      // Arrange
      const correo_electronico = "abrahamgonzalez@alsuper.com";
      const contrasena = "contrasena";
  
      const mockUserData = {
        id: 1,
        name: "Abraham",
        apellido_paterno: "González",
        contrasena: "contrasena",
      };
  
      const mockToken = "mockedToken";
  
      sinon.stub(usuarios, "findOne").resolves(mockUserData);
  
      // Use callsFake directly for synchronous functions
      sinon.stub(global, "crearSessionJWT").callsFake(() => mockToken);
    });
  
    it("should return success: true with valid credentials", async () => {
      // Act
      const loginObject = await login(
        "abrahamgonzalez@alsuper.com",
        "contrasena"
      );
  
      // Assert
      expect(loginObject).to.be.an("object");
      expect(loginObject.success).to.equal(true);
      expect(loginObject.userData).to.be.an("object");
      expect(loginObject.userData.nombre).to.equal("Abraham");
      expect(loginObject.userData.apellido_paterno).to.equal("González");
      expect(loginObject.userData.token).to.equal("mockedToken");
    });
  
    after(() => {
      sinon.restore();
    });
  });
  