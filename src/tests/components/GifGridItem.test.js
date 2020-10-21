import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem/>', () => {
    test('Debe de Renderizar correctamente el componente', () => {
        const obj = {
            id: 999,
            type: 'Test',
            title: 'GOW 3',
            import_datetime: new Date().getDate().toString(),
            imagen: `https://media.giphy.com/media/kl5ctZSctCbE4/giphy.gif`,
            source: 'source.net!'
        };
        const wrapper = shallow(<GifGridItem
            {...obj}
        />);
        const img = wrapper.find('img');
        // console.log(img.html());
        // console.log(img.props());
        // console.log(img.props().src);
        const titleh5 = wrapper.find('h5');
        // console.log(titleh5.html());
        // console.log(titleh5.props());

        expect(wrapper).toMatchSnapshot();
        expect(img.props().src).toBe(obj.imagen);
        expect(titleh5.props().children).toBe(obj.title);
    });

})
