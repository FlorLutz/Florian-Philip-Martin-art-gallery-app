import { useState, useEffect } from "react";

// export default function useLocalStorage(key, defaultValue) {
//
//   const [state, setState] = useState(() => {
//
//     if (typeof window !== 'undefined') {
//       const storedValue = localStorage.getItem(key);
//       if (storedValue !== null) {
//         // If there's already a value in local storage, return that value
//         return JSON.parse(storedValue);
//       }
//     }
//     return null;
//   });
//
//   useEffect(() => {
//     if (typeof window !== 'undefined' && state !== null) {
//       localStorage.setItem(key, JSON.stringify(state));
//     }
//   }, [key, state]);
//
//
//   return [state, setState];
// }
