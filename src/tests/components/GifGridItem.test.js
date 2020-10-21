import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';
import '@testing-library/jest-dom';

describe('Pruebas en <GifGridItem/>', () => {
    const obj = {
        id: 999,
        type: 'Test',
        title: 'GOW 3',
        import_datetime: new Date().getDate().toString(),
        imagen: `https://media.giphy.com/media/kl5ctZSctCbE4/giphy.gif`,
        source: 'source.net!'
    };
    let wrapper = shallow(<GifGridItem
        {...obj}
    />);

    beforeEach(() => {
        wrapper = shallow(<GifGridItem
            {...obj}
        />);
    })

    test('Debe de Renderizar correctamente el componente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de contener las clases el elemento h5 de `card-title h5` ', () => {
        const img = wrapper.find('img');
        // console.log(img.props());
        // console.log(img.props().src);
        const titleh5 = wrapper.find('h5');
        // console.log(titleh5.props());

        expect(img.props().src).toBe(obj.imagen);
        expect(titleh5.props().className.includes('card-title')).toBe(true);
    });


});