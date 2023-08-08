import { MdSearch } from "react-icons/md";
export default function SearchForm({ onChange }) {
  return (
    <form className="w-3/4 xl:w-2/3 relative">
      <input
        className="w-full m-2 p-2 border-2 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:border-customOrange border-customGreenLight "
        type="search"
        id="search"
        name="search"
        placeholder="Search for a recipe..."
        onChange={onChange}
      />
      <MdSearch className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" />
    </form>
  );
}
