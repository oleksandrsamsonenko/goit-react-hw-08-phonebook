import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store, persistor } from 'redux/store';
import AuthBar from './AuthBar/AuthBar';
import PhonebookPage from 'pages/PhonebookPage/PhonebookPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import { PersistGate } from 'redux-persist/integration/react';
import AuthLayout from 'modules/AuthLayout/AuthLayout';
import Homepage from 'pages/HomePage/HomePage';
import PrivateRoute from 'modules/PrivateRoute/PrivateRoute';
import PublicRoute from 'modules/PublicRoute/PublicRoute';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthLayout>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <AuthBar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route element={<PublicRoute />}>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
              </Route>
              <Route element={<PrivateRoute />}>
                <Route path="/phonebook" element={<PhonebookPage />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </AuthLayout>
      </PersistGate>
    </Provider>
  );
};
