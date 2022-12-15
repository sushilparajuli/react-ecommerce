import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import { createUserDocumentFromAuth, onAuthStateChangedListener,getCategoriesAndDocuments } from './utils/firebase';
import { setCurrentUser } from './store/user/user.action';
import { useDispatch } from 'react-redux';
import { setCategoriesMap } from './store/categories/categories.action';

const App = () => {
  const dispatch = useDispatch();
  
  // fetching Auth from Firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);

  // fetching Categories from Firebase
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap, 'categoryMap');
      dispatch(setCategoriesMap(categoryMap));
    };
    
    getCategoriesMap();
    
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;