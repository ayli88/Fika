// import { useEffect, useState } from "react";
// import { supabase } from "./services/supabase";

// function App() {
//   const [categories, setCategories] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     async function getCategories() {
//       const { data, error } = await supabase
//         .from("categories")
//         .select("*")
//         .order("sort_order");

//       if (error) {
//         setError(error.message);
//         return;
//       }

//       setCategories(data);
//     }

//     getCategories();
//   }, []);

//   return (
//     <div>
//       <h1>تست اتصال به Supabase</h1>

//       {error && <p>خطا: {error}</p>}

//       {categories.map((category) => (
//         <p key={category.id}>{category.name}</p>
//       ))}
//     </div>
//   );
// }
// console.log(import.meta.env.VITE_SUPABASE_URL);

// export default App;

import Menu from "./pages/Menu";

function App() {
  return <Menu />;
}

export default App;