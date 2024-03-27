import useArtworks from "@/hooks/useArtworks"
import { useState } from "react"

export default function CommentSection({ slug }) {
  const { getComments, addComment, removeComment } = useArtworks("art-pieces-info")
  const [comments, setComments] = useState(getComments(slug))
  const [newComment, setNewComment] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    addComment(slug, newComment)
    setNewComment("")
    setComments(getComments(slug))
  }

  const handleRemoveComment = (slug, index) => {
    removeComment(slug, index)
    setComments(getComments(slug))
  }

  return (
    <div className="flex flex-col border-cyan-900 border-4 rounded-xl bg-cyan-600 p-4 gap-4">
      <h2 className="font-semibold self-center">Comments</h2>
      {comments.map((comment, index) => (
        <div key={index} className="flex justify-between border-2 border-cyan-500 rounded p-2">
          <p>{comment}</p>
          <button
            onClick={() => handleRemoveComment(slug, index)}
            className="font-semibold ml-5 border-2 border-cyan-500 rounded px-1 transition duration-1000 hover:bg-cyan-300"
          >
            remove
          </button>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          className="text-black bg-cyan-200"
          maxLength={50}
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
        />
        <button
          type="submit"
          className="font-semibold ml-5 border-4 border-cyan-500 rounded p-2 transition duration-1000 hover:bg-cyan-300"
        >
          submit
        </button>
      </form>
    </div>
  )
}
