import Image from "next/image";
import UsefulFeatures from "@/utils/usefulFeatures";
import CategoriesItems from "../categories-items/categories-items";

export default function CategoriesList({src, description}) {

    const categoriesItemsList = UsefulFeatures.cOllectionsItemsElements()

    return (
      <div className="grid grid-cols-[repeat(6,1fr)] gap-[1em] justify-between">
        {
            categoriesItemsList.map((element, index) =>(
                <CategoriesItems key={index} src={element.source} description={element.description}/>
            ))
        }

      </div>
    );
}