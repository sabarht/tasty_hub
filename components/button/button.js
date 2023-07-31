export default function Button({ children }) {
  return (
    <button type="button" className="border-2 p-1.5 px-6 rounded-lg">
      {children}
    </button>
  );
}
