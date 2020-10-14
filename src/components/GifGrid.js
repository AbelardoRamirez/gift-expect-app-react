import React, { useEffect, useState } from 'react'

export const GifGrid = ({ category }) => {

    const [imagenes, setImagenes] = useState([]);

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${category}&api_key=Us5ddAo4CXQDQjg5xYxz2uFrH73kiYmw`)
            .then(resp => resp.json())
            .then(data => {
                console.log('====================================');
                console.log(data);
                console.log('====================================');
            })
    }, []);

    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-1">
            <div className="card">
                <img src="..." className="card-img-top" />
                <div className="card-body">
                    <p className="card-text">
                        {category}
                    </p>
                </div>
            </div>
        </div>
    )
}
