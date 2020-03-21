import React from 'react';
import './App.css';
import ProductsContainer from './app/products/components/ProductsContainer';
import ProductsForm from './app/products/components/ProductsForm';

function App() {
  return (
    <div className="App">
   <ProductsContainer/>
   <ProductsForm/>
    </div>
  );
}

export default App;
