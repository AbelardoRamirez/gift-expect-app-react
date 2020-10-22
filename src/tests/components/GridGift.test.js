import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import '@testing-library/jest-dom';
jest.mock('../../hooks/useFetchGifs');



describe('Pruebas en el Componente <GriGift/>', () => {

    test('Debe de mostrar el componente correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: false
        });
        const wrapper = shallow(<GifGrid category="react" />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Mostrar Items cargados correctamente', () => {

        const gifs = [{
            type: 'Games', id: 999, title: 'IMG_21-10-2020', import_datetime: new Date().getDate().toString(), imagen: 'https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif', source: 'GIPHY.com'
        }]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category='react' />);

        // expect( wrapper ).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });

});