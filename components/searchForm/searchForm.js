export default function SearchForm({ onChange }) {
  return (
    <form>
      <label htmlFor="search"></label>
      <input
        className="max-w-min m-2 p-2 border-2 rounded-md border-gray-400"
        type="search"
        id="search"
        name="search"
        placeholder="Search for a recipe..."
        onChange={onChange}
      />
    </form>
  );
}
