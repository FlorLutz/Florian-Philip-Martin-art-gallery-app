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
    <>
      <div className="flex flex-col border-cyan-900 border-4 rounded-xl bg-cyan-600 p-4 gap-4 w-[550px] h-[650px]">
        <div className="h-full overflow-scroll">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="flex justify-between border-2 border-cyan-500 rounded p-2 max-w-l bg-red-200"
            >
              <div className="flex flex-col">
                <p style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                  {comment.text + " "}
                </p>
                <p className="text-sm">({new Date(comment.timestamp).toLocaleString()})</p>
              </div>
              <button
                onClick={() => handleRemoveComment(slug, index)}
                className="font-semibold ml-5 border-2 border-cyan-500 rounded px-1 transition duration-1000 hover:bg-cyan-300"
              >
                remove
              </button>
            </div>
          ))}
        </div>

        <form className="bg-red-200 flex" onSubmit={handleSubmit}>
          <input
            className="text-black bg-cyan-200 h-full flex-grow p-5"
            maxLength={50}
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment"
          />
          <button
            type="submit"
            className="font-semibold border-4 border-cyan-500 rounded p-2 transition duration-1000 hover:bg-cyan-300"
          >
            submit
          </button>
        </form>
      </div>
    </>
  )
}
