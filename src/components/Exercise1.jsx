// ### **Exercise 1: Basic Conditional Rendering**
// **Task:**
// Create a component that displays "Welcome, User!" if a user is logged in (`isLoggedIn` is true) and "Please log in" if not.

// **Hints:**
// - Use an `if` statement or a ternary operator to conditionally render the text.
// - Add a button to toggle the `isLoggedIn` state.

import { useState } from "react";

const user = {
  name: "Jane",
  isloggedin: true,
};

const Exercise1 = () => {
  const [isloggedin, setIsloggedin] = useState(false);

  const changeStatus = () => {
    setIsloggedin((prev) => !prev);
  };

  return (
    <div className="p-4">
      {isloggedin ? (
        <h1 className="font-bold text-4xl bg-green-300 p-4">
          Welcome, {user.name}!
        </h1>
      ) : (
        <h1 className="font-medium text-4xl bg-amber-600 p-4">
          Please log in!
        </h1>
      )}
      <button onClick={changeStatus} className="border p-4 bg-red-300 mt-5 mb-5">
        Change log in status
      </button>
      <hr className="w-full text-amber-900"/>
    </div>
  );
};

export default Exercise1;
