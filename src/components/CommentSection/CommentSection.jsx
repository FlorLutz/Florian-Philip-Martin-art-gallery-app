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
      <h2>Comments</h2>
      {comments.map((comment, index) => (
        <div key={index}>
          <p>{comment}</p>
          <button onClick={() => handleRemoveComment(slug, index)}>Remove</button>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
