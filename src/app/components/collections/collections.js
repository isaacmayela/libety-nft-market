import CollectionsList from "../collections-list/collections-list";
export default function Collections() {
    return (
        <div className="text-[#fff]">
        <h1 className="text-center text-[2em] font-bold mb-[3em]">Explore Some Hot <span className="text-[#7453fc]">Collections</span> In Market.</h1>
        <CollectionsList/>
      </div>
    );
}