import { toast } from "react-toastify";
import { FaCartPlus } from "react-icons/fa";
import { useState } from "react";

function Card({product}){

  const [desc,setdesc] = useState(product.description.substr(0,20) + "...");
  const [text,settext] = useState(true);

  function buyHandler(){
    toast.success("Added to cart");
  }
  function wishlistHandler(){
    toast.info("Added to wishlist");
  }

  function textHandler(){
    settext(!text);
    text?setdesc(product.description.substr(0,20)+"..."):setdesc(product.description);
  }

  return(
    <div className="flex flex-col justify-between max-w-[18rem] rounded-md bg-slate-500 p-3 text-white">
      <img src={product.thumbnail} alt={product.title} loading="lazy" />
      <span className="text-gray-200 mb-2 text-xs self-end">Category : {product.category}</span>
      <h2 className="text-xl font-semibold">{product.title}</h2>
      <h3 className="font-semibold mt-3 text-green-500">₹ {product.price}</h3>
      <p>{desc} <span className="text-blue-300 select-none cursor-pointer" onClick={textHandler}>{text?"more":"less"}</span></p>

      <button onClick={buyHandler} className="bg-green-600 mt-3 rounded-md p-1 font-semibold border-none outline-none active:scale-95 hover:bg-green-500 flex justify-center items-center gap-3"> <FaCartPlus /> Add to Cart</button>
      <button onClick={wishlistHandler} className="bg-gray-400 mt-3 rounded-md p-1 font-semibold border-none outline-none active:scale-95 hover:bg-gray-500">Add to Wishlist</button>

    </div>
  );
}


export default Card;