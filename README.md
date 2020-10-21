# Comandos & Plug-ings utiles para React

1. _npm run build_ Para realizar un _*Build* de produccion_..
2. _npm i --global http-server_
   1. _Para probar un Build de Produccion & ver si funciona el proyecto..._
      1. Para montar el proyecto _bebe_ _ubicarse en el Path del Build de produccion &_: http-server -o

# Configuracion de Enzyme para pruebas.

1. Instalacion && Configuracion de Enzyme
   1. Instalacion: _npm i --save-dev enzyme enzyme-adapter-react-16_
2. Instalacion && Configuracion de Enzyme-to-Json
   1. Instalacion: \_npm i --save-dev enzyme-to-json

### Configuracion del Enzyme & Serializer

_setupTest*.js*_

```
import Enzyme from 'Enzyme';
import { Adapter } from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer( { mode: 'deep' } ));
```

Pasos para Realizar una prueba con un SnapShot

1. Importar el `{ shallow } from 'enzyme'`
2. Aplicarlo a un Contenedor `const wrapper = shallow(<MiComponent A='A' B='B' C='D' />`
3. Realizar un Expect del resultado del `wrapper`
   1. expect(wrapper).toMatchSnapshot();
4. Si se quiere realizar esa prueba con dicho snapShot o es la primera vez que se compila etc. para actualizar el snapShot presionar la tecla `u`

## Pruebas a Realizar
