import { Provider } from 'react-redux';
import store from 'redux/store';
import { Phonebook } from './Phonebook/Phonebook';

export const App = () => {
  return (
    <Provider store={store}>
      <Phonebook />
    </Provider>
  );
};
