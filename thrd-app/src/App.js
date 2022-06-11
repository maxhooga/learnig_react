import React, { useContext } from 'react'
import Shop from './components/Shop';
import Header from './components/Header';
import Footer from './components/Footer';
import CartContent from './components/CartContent';
import { Context } from './ContextReducer/ContextReducer'

function App() {
  const [state, dispatch] = useContext(Context);
  return (
    <>
      <Header />
      {state.isVisible ? <Shop /> : <CartContent />}
      <Footer />
    </>
  );
}

export default App;