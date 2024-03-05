import Categories from "../categories/categories";
import Collections from "../collections/collections";

export default function CategoriesSection() {
    return (
      <div className="bg-[#22222a] py-[5em] px-[7em]">
        <Categories/>
        <Collections/>
      </div>
    );
}