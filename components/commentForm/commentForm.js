export default function CommentForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="w-full  max-w-lg md:max-w-xl m-4">
      <label htmlFor="comment">Add a comment:</label>

      <input
        id="comment"
        name="comment"
        className="w-full resize-none border border-gray-400 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Start writing"
        required
      />

      <button type="submit">send</button>
    </form>
  );
}
