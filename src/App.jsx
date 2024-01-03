import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavigationBar } from './sections/NavigationBar';
import { Cataloge } from './sections/Cataloge';
import { HotOffer } from './sections/HotOffer';
import { Gallary } from './sections/Gallary';
import { Footer } from './sections/Footer';
import { Cart } from './sections/Cart';
import { Icons } from './util/Icons';
import './App.css';
import { Contacts } from './sections/Сontacts';
import { Delivery } from './sections/Delivery';

export const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<Cataloge />} />
        {/* Визначте компоненти для інших шляхів тут */}
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <HotOffer />
      <Gallary />
      <Icons />
      <Cart />
      <Footer />
    </Router>
  );
};
