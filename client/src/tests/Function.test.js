import React from 'react';
import {validarCamposCrearRaza} from "../utils/functionsCrearRaza/validarCamposCrearRaza" 
import {functionCreadoraObjetoRaza} from "../utils/functionsCrearRaza/functionCreadoraObjetoRaza" 

describe('Funciones de CrearRaza', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe('Funcion validarCamposCrearRaza: ', () => {
    it('Debería devolver un error si un campo requerido se encuentra con valor vacío:', () => {
        const input="name";
        const value=""
        const datosRaza={
            name:"", heightImperialMin:"2", heightImperialMax:"3", heightMetricMin:"6", 
            heightMetricMax: "8", weightImperialMin:"1", weightImperialMax:"5", weightMetricMin:"9",
            weightMetricMax:"10",   life_spanMin:"1", life_spanMax:"2"
        }
        expect(validarCamposCrearRaza(
            input,value,datosRaza
        )).toEqual({name: "name es requerido"});
    });

    it('Debería devolver un objeto vacio si no encuentra errores:', () => {
        const input="heightImperialMax";
        const value="13"
        const datosRaza={
            name:"akita", heightImperialMin:"10", heightImperialMax:"", heightMetricMin:"6", 
            heightMetricMax: "8", weightImperialMin:"1", weightImperialMax:"5", weightMetricMin:"9",
            weightMetricMax:"10",   life_spanMin:"", life_spanMax:""
        }
        expect(validarCamposCrearRaza(
            input,value,datosRaza
        )).toEqual({});
    });
  })


  describe('Funcion functionCreadoraObjetoRaza: ', () => {
    it('Debería devolver un objeto con la inforrmacion de la nueva raza:', () => {
      const temperaments="Happy, Curious"
      const datosRaza={
        name:"akita", heightImperialMin:"10", heightImperialMax:"13", heightMetricMin:"6", 
        heightMetricMax: "8", weightImperialMin:"1", weightImperialMax:"5", weightMetricMin:"9",
        weightMetricMax:"10",   life_spanMin:"", life_spanMax:""
      }
      expect(functionCreadoraObjetoRaza(
        datosRaza,temperaments
      )).toEqual({
        name: "akita",
        weight: {        
            imperial: `1 - 5`,
            metric: `9 - 10`
        }, 
        height: {
            imperial: `10 - 13`,
            metric: `6 - 8`,
        },
        life_span: "",
        temperament: "Happy, Curious",
        image:{
            url: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
        }
      });
    })})

})

