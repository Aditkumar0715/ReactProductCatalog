function Filters({categories, activeFilter, setactiveFilter, setproductFilter, productFilter, allProducts}) {
  function categoryHandler(event){
    setactiveFilter(event.target.innerText);
    if(event.target.innerText === "All"){
      setproductFilter(allProducts["products"]);
    }
    else{
      let filtered = allProducts["products"].filter((product)=>{
        return product["category"] === event.target.innerText;
      });
    setproductFilter(filtered);
    }
  }
  return (
    <div className="flex items-center flex-wrap gap-1 my-2">
      {
        categories.map((category, idx)=>{
          return <button key={idx} className={`text-white bg-slate-500 px-2 py-1 rounded box-border outline-none select-none hover:bg-slate-600 active:scale-95" + ${category === activeFilter ? "border-2 border-slate-200" : ""}`} onClick={categoryHandler} >{category}</button>
        })
      }
    </div>
  );
}

export default Filters;
