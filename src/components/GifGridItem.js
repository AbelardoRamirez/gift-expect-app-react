import React from 'react';
import PropTypes from 'prop-types';

const GifGridItem = ({ id, type, imagen, title, source, import_datetime }) => {

    return (
        <div key={id} className="col-3 animate__animated animate__fadeIn">
            <hr className="hr shadow-lg border" />
            <div className="card text-center">
                <div className="card-header">
                    T: <span className="font-weight-bolder">{type}</span> - ID: <span className="font-weight-lighter">{id}</span>
                </div>
                <div className="card-body">
                    <img src={imagen} alt={title} className="img-fluid" />
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Source: <span className="font-weight-lighter text-monospace">{source}</span></p>
                </div>
                <div className="card-footer text-muted">
                    {import_datetime}
                </div>
            </div>
        </div>
    );
}

GifGridItem.propTypes = {
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    import_datetime: PropTypes.string.isRequired,
}

export default GifGridItem;