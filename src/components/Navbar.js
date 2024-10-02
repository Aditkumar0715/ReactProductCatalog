import { FcGallery } from "react-icons/fc";

function Navbar(){
  return(
    <nav className="w-full bg-slate-600 flex items-center gap-3 justify-center p-2">
      <FcGallery className="text-4xl"/>
      <h1 className="text-4xl text-white font-bold">Products Gallery</h1>
    </nav>
  );
}

export default Navbar;