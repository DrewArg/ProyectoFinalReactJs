import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Cart from '../src/components/Cart/Cart'
import CartContextProvider from './context/CartContext/CartContext';
import ItemDetailContainer from '../src/container/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../src/container/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import React from 'react'
import FeedBackMessage from './components/FeedBackMessage/FeedBackMessage';
import FeedbackMessageContextProvider from './context/FeedbackMessageContext/FeedbackMessageContext';

function App() {
  return (
    <BrowserRouter>
      <FeedbackMessageContextProvider>
        <CartContextProvider>
          <div className="App">
            <NavBar />
            <Routes>
              <Route
                path="/"
                element=
                {<ItemListContainer />}
              />
              <Route
                path="/ProyectoFinalReactJs"
                element=
                {<Navigate to="/" />}
              />
              <Route
                path="/type/:typeId"
                element=
                {<ItemListContainer />}
              />
              <Route path="/detail/:detailId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="../type/:typeId/detail/:detailId" element={<ItemDetailContainer />} />
              <Route path='/*' element={<FeedBackMessage messageType="error" messageString="404 - Ha ocurrido un error no identificado, por favor regresa a la página principal." buttonTitle='Página principal' buttonStyle='basic' buttonLinkTo='' />} />
            </Routes>

          </div>
        </CartContextProvider>
      </FeedbackMessageContextProvider>
    </BrowserRouter >
  );
}

export default App;

