import { useEffect,useState } from 'react';
import {productsUrl,categoryUrl} from './data';
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import Cards from './components/Cards';
import Spinner from './components/Spinner';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {

  const [products, setProducts] = useState(null);
  const [categories,setcategories] = useState(null);
  const [loading,setloading] = useState(true);
  const [activeFilter, setactiveFilter] = useState("All");

  const [productFilter, setproductFilter] = useState(null);
  const [error,seterror] = useState(null);
  async function fetchCategory(){
    setloading(true);
    try{
      const res = await fetch(categoryUrl);
      const data = await res.json();
      data.unshift("All")
      setcategories(data);
    }
    catch(err){
      seterror(err);
    }
  } 

  async function fetchProducts(){
    try{
      const res = await fetch(productsUrl);
      const data = await res.json();
      setProducts(data);
      setproductFilter(data["products"]);
    }
    catch(err){
      seterror(err);
    }
    setloading(false);
  }

  useEffect(() => {
    fetchCategory();
    fetchProducts();

  }, []); 

  if(error){
    return(<div>Error While fetching the data from the server : {error}</div>);
  }
  return (
    <div className="w-full min-h-[100vh] bg-slate-400">
      <Navbar/>
      {
      loading ? <Spinner/> :
      <div className="flex items-center flex-col gap-4 w-full max-w-[1200px] mx-auto ">
        <Filters categories={categories} activeFilter={activeFilter} setactiveFilter = {setactiveFilter} productFilter = {productFilter} setproductFilter = {setproductFilter} allProducts = {products}/>
        <Cards products = {productFilter}/>
      </div>
      }
    <ToastContainer/>
    </div>
  );
}

export default App;
