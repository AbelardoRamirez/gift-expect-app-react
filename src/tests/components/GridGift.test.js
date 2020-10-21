import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';



describe('Pruebas en el Componente <GriGift/>', () => {
    test('Debe de mostrar el componente correctamente', () => {
        const wrapper = shallow(<GifGrid category="react" />);
        expect(wrapper).toMatchSnapshot();
    });

})
