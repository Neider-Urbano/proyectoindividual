import React from 'react';
import Inicial from '../pages/Inicial';
import { render} from '@testing-library/react';
import { shallow} from 'enzyme';

describe("Inicial.js", ()=>{
  let wrapper=shallow(<Inicial />)

  it("Debería renderizarse sin error",()=>{
    expect(wrapper).toHaveLength(1)
  })
  it("Debería existir al menos una img",()=>{
    const componetInicial=render(<Inicial />)
    expect(componetInicial.getByRole("img")).toBeInTheDocument()
  })
  it("Debería existir al menos un buttom",()=>{
    const componetInicial=render(<Inicial />)
    expect(componetInicial.getByRole("button")).toBeInTheDocument()
  })
  it("El input nameUser debe tener un valor inicial de undefined",()=>{
    const input = wrapper.find("input");
    expect(input.value).toEqual(undefined);
  })
  it("El valor del input nameUser cambia cuando escribimos algun dato",()=>{
    wrapper.find("input").simulate("change",{target:{value:"NeiderUrbano09"}});
    expect(wrapper.find("input").prop("value")).toEqual("NeiderUrbano09")
  })
  it("Al ingresar un valor al input el estado inputName cambia",()=>{
    wrapper.find("input").simulate("change",{target:{value:"NeiderUrbano09"}});
    expect(wrapper.state().inputNameUser).toBe('NeiderUrbano09');
  })
})