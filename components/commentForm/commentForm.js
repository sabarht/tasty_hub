import { VscSend } from "react-icons/vsc";
export default function CommentForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="w-full  max-w-lg md:max-w-xl m-4">
      <label htmlFor="comment">Add a comment:</label>
      <div className="flex">
        <input
          id="comment"
          name="comment"
        placeholder="Start writing"

          className="w-full resize-none border border-customOrange rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Start writing"
          required
        />
        <button
          className="p-2 px-2.5 ml-1.5 bg-customOrange rounded-lg"
          name="Send Comment"
        >
          <VscSend />
        </button>
      </div>

    </form>
  );
}
