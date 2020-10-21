import React from 'react';
import '@testing-library/jest-dom';
import { getGifs } from '../../helpers/GetGifs'


describe('Pruebas en el Custom Hook GetGifs', () => {
    test('Debe de retornar 10 elementos de una categoria', async () => {
        const gifs = await getGifs('gokun');
        expect(gifs.length).toBe(10);
    });
    test('Debe de retornar ningun elemento', async () => {
        const gifs = await getGifs('gokun');
        console.log(gifs.length);
    })


});