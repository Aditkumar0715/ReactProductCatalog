import './Spinner.css'

function Spinner(){
  return(
    <div className="flex justify-center items-center flex-col gap-4 min-h-[80vh]">
      <div className='loader'></div>
      <h2 className="text-white font-semibold">Loading...</h2>
    </div>
  );
}

export default Spinner;