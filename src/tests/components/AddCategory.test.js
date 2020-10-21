import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';
import '@testing-library/jest-dom';

describe('Pruebas en <AddCategory/>', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        //Para simular eventos no es necesario agregar *onX*
        const value = 'onChange Text';
        input.simulate('change', { target: { value } });
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(value);
    });

    test('NO! debe de postear la informacion con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        //expect(setCategories).not.toHaveBeenCalled();
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Debe de llamar el setCategories & limpiar la caja de texto', () => {
        const value = 'onChange TExt';
        wrapper.find('input').simulate('change', { target: { value } });

        wrapper.find('form').simulate('submit', { preventDefault() { } });
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        //expect(setCategories).toBeCalledTimes(2);
        expect(wrapper.find('input').prop('value')).toBe('');
    });


});