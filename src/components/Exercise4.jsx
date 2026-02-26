// ### **Exercise 4: Rendering Different Components**
// **Task:**
// Build a component that displays different child components based on a user role (`userRole`):
// - `AdminPanel` component if the role is `admin`.
// - `UserDashboard` component if the role is `user`.
// - `GuestPage` component if no role is set.

// **Hints:**
// - Use `switch-case` or conditional rendering.

import { useState } from "react";

const Exercise4 = () => {
  const [role, setRole] = useState("");

  const changeRole = () => {
    setRole((prev) => {
        if (prev === "") return "admin";
        if (prev === "admin") return "user";
        return "";
    });
  };

  return (
    <div className="p-4">
      {role === "admin" && (
        <div>
          <h1 className="p-4 bg-blue-500 mt-5 mb-5 w-full text-5xl font-bold">
            AdminPanel
          </h1>
        </div>
      )}
      {role === "user" && (
        <div>
          <h1 className="p-4 bg-blue-400 mt-5 mb-5 w-full text-5xl font-bold">
            UserDashboard
          </h1>
          ;
        </div>
      )}
      {role === "" && (
        <div>
          <h1 className="p-4 bg-blue-300 mt-5 mb-5 w-full text-5xl font-bold">
            GuestPage
          </h1>
        </div>
      )}

      <button onClick={changeRole} className="border p-4 bg-red-300 mt-5 mb-5">
        Change role
      </button>

      <hr className="w-full text-amber-900" />
    </div>
  );
};

export default Exercise4;
