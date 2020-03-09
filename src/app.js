import React from 'react';
import Header from './modules/Header.js';
import Footer from './modules/Footer.js';

import Categories from './components/categories.js';
import Products from './components/products.js';

export default props => {
  console.log('props in app : ', props);
  return (
        <>
        <Header />
        <Products />
        <Categories />
        <Footer />
        </>
  );
};