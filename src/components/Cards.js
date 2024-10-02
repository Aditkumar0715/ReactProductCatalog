import Card from './Card';

function Cards({products}){
  return(
    <div className="flex flex-wrap justify-center gap-2 mb-4">
    {
      products.length === 0?<h1 className="text-white text-xl font-semibold">Sorry, we are out of products in this category</h1>:
      products.map((product)=>{
        return <Card key = {product.id} product = {product} />
      })
    }
    </div> 
  );
}

export default Cards;