// ### **Exercise 3: Conditional Rendering with Elements**
// **Task:**
// Create a component that displays:
// - A "Profile" button if `isLoggedIn` is true.
// - A "Log In" button and "Sign Up" button if `isLoggedIn` is false.

// **Hints:**
// - Use inline `&&` and `||` operators for rendering specific elements.

import { useState } from "react";

const Exercise3 = () => {
  const [isloggedin, setIsloggedin] = useState(false);

  const changeStatus = () => {
    setIsloggedin((prev) => !prev);
  };

  return (
    <div className="p-4">
      {isloggedin === true && (
        <div>
          <button className="border p-4 bg-blue-400 mt-5 mb-5 w-1/5 font-bold">Profile</button>
        </div>
      )}
      {isloggedin === false && (
        <div>
          <button className="border p-4 bg-blue-200 mt-5 mb-5 w-1/5 font-bold">Log In</button>
          <button className="border p-4 bg-blue-200 mt-5 mb-5 w-1/5 font-bold">Sign Up</button>
        </div>
      )}

      <button
        onClick={changeStatus}
        className="border p-4 bg-red-300 mt-5 mb-5"
      >
        Change log in status
      </button>

      <hr className="w-full text-amber-900" />
    </div>
  );
};

export default Exercise3;
