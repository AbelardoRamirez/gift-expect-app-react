import React, { useState } from 'react'
import AddCategory from './AddCategory';
import { GifGrid } from './GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {
    const [categories, setCategories] = useState(defaultCategories);

    return (
        <div className="row justify-content-center">
            <div className="col">
                <h2 className="h2 font-weight-lighter text-center text-muted my-3">
                    GiftExpertApp
                </h2>
                <AddCategory setCategories={setCategories} />
                <hr className="hr shadow-lg" />
                <div className="row justify-content-center">
                    <div className="col">
                        {
                            categories.map(cat => (<GifGrid category={cat} key={cat} />))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GifExpertApp