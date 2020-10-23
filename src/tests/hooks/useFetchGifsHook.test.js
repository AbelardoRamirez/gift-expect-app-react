import React from 'react';
import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el CustomHook useFetchGifsHook', () => {
    test('Debe de retornar el Estado Inicial', async () => {
        const category = '';

        //{ loading, data: imagenes } => Response from original customHook
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category));
        await waitForNextUpdate();
        const { data, loading } = result.current;
        console.log(`waitForNextUpdate()=> Category = ''`, data.length);
        expect(loading).toBe(false);
        expect(data.length).toBe(0);
    });

    test('Debe de retornar 10 Elementos de una categoria', async () => {
        const category = 'React';
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category));
        await waitForNextUpdate();
        const { data, loading } = result.current;
        console.log(`waitForNextUpdate()=> Category = 'React'`, data.length);
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });


});