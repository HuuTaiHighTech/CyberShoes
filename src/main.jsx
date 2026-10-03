import { createRoot } from 'react-dom/client';
import Layout from './layout/Layout';
import 'animate.css';
import ProductList from './pages/ProductList'
import './main.css';

createRoot(document.getElementById('root')).render(
  <>
  <Layout/>
  {/* <ProductList></ProductList> */}
  </>
)