import CategoriesList from "../categories-list/categories-list";

export default function Categories() {
    return (
      <div className="text-[#fff]">
        <h1 className="text-center text-[2em] font-bold mb-[3em]">Browse Through Our <span className="text-[#7453fc]">Categories</span> Here.</h1>
        <CategoriesList/>
      </div>
    );
}