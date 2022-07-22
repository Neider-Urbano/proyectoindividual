const { Dog, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Dog model', () => {
  before(() => conn.authenticate()
  .catch((err) => {
      console.error('No se pudo conectar con la base de datos:', err);
  }));
  
  describe('Validators', () => {
    beforeEach(() => {
      Dog.sync({ force: true })
    });

    describe('name', () => {
      it('Deveria devolver un error si el nombre en null', async() => {
        try {
          await Dog.create({name: ''});
        } catch (error) {
            expect(error.errors[2].message).to.equal("Validation isAlphanumeric on name failed");
        }
      });

      it('El name debe tener menos de 40 caracteres', async() => {
        try {
          await Dog.create({name: 'Puggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg'});
        } catch (error) {
            expect(error.errors[2].message).to.equal("Validation len on name failed");
        }
      });

      it('Peso metric es requerido', async() => {
        try {
          await Dog.create({name: 'Pug', weight:{imperial:""}});
        } catch (error) {
            expect(error.errors[0].message).to.equal("peso metric requerida");
        }
      });
    });
  });
});
