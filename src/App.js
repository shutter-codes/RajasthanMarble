
import { Routes,Route,BrowserRouter } from "react-router-dom";
import SingleProductPage from "./Pages/SingleProductPage";
import HomePage from './Pages/HomePage'
import ProductInfo from "./coomponents/ProductInfo";
// import { ProductList } from "./coomponents/productList";
import ProductCard from "./coomponents/ProductCard";

export default function App() {
  return (
<BrowserRouter>

<Routes>

<Route path="/" element={<HomePage/>} />

<Route path="/productInfo/:id" element={<SingleProductPage/>} />
 </Routes>

</BrowserRouter>
  );
}
