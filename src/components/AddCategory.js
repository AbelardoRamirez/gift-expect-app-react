import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
    const [newCategorie, setNewCategorie] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if (newCategorie.trim().length > 3) {
            setCategories(cat => [newCategorie, ...cat]);
            setNewCategorie('');

        }
    }

    const handleNewCategorie = (e) => {
        setNewCategorie(e.target.value);

    }

    return (
        <div className="row border my-2 shadow-lg">
            <div className="col">
                <form onSubmit={handleSubmit}>
                    <p>{newCategorie}</p>
                    <input type="text" className="form-control my-2" onChange={handleNewCategorie} value={newCategorie} />
                    <button type='submit' className="btn btn-block btn-dark my-2">
                        Agregar Nuevo Elemento
                </button>
                </form>
            </div>
        </div>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;