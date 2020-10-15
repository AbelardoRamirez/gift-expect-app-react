import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
    const [newCategorie, setNewCategorie] = useState('');

    const handleClick = () => {
        if (newCategorie !== '' && newCategorie.length > 3) {
            setCategories(cat => [newCategorie, ...cat]);
            setNewCategorie('');
        } else {
            console.log('====================================');
            console.log(`La Categoria debe de contener >= 3 caracteres`);
            console.log('====================================');
        }
    }

    const handleNewCategorie = (e) => {
        setNewCategorie(e.target.value);
    }

    return (
        <div className="row border my-2 shadow-lg">
            <div className="col">
                <input type="text" className="form-control my-2" onChange={handleNewCategorie} value={newCategorie} />
                <button className="btn btn-block btn-dark my-2" onClick={handleClick}>
                    Agregar Nuevo Elemento
                </button>
            </div>
        </div>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;