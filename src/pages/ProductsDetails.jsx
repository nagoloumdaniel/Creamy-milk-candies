import React from 'react'
import Footer from '../composants/Footer';
import Header from '../composants/Header';
import Details from '../composants/Details';

function ProductsDetails() {
    return (
        <div>
            <Header />
            <div className='mt-20'>
                <Details />
            </div>
            <Footer />
        </div>
    )
}

export default ProductsDetails
