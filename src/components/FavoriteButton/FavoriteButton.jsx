import React from "react";
// import useLocalStorage from "@/hooks/useLocalStorage"

const FavoriteButton = ({isFavorite, slug }) => {

  // const setState = useLocalStorage("art-pieces-info", null)

  // function toggleFav() {
  //
  //
  // const index = state.findIndex(item => item.id === slug);
  //
  // // If the item is found
  // if (index !== -1) {
  //   const newState = [...state];
  //
  //   console.log("newState", newState)
  //
  //   newState[index].isFavorite = !newState[index].isFavorite;
  //
  //   setState(newState);
  // }
  // }

  return(
    <div>
      <button>
        {/*onClick={() => toggleFav()}*/}
        {isFavorite ? "I'm favorite": "I'm not favorite"}
      </button>
    </div>
  )
}

export default FavoriteButton