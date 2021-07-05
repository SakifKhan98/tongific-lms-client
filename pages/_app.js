import TopNav from '../components/TopNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import '../public/css/styles.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from '../context';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider>
      <ToastContainer position="top-right" />
      <TopNav></TopNav>
      <Component {...pageProps}></Component>
    </Provider>
  );
};

export default MyApp;
