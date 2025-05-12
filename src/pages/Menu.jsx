import React from "react";
import MenuItem from "../components/MenuItem";
import useMenu from "../hooks/useMenu";

export default function Menu() {
  const [menu] = useMenu();

  return (
    <div className="px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">
          Delicious Food Items Are Here
        </h1>
        <p className="text-lg text-gray-600">
          Discover a variety of delicious food items to satisfy your cravings.
          From juicy burgers to authentic pizzas, we have something for
          everyone.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {menu.map((item) => (
          <MenuItem key={item._id} dish={item} />
        ))}
      </div>
    </div>
  );
}
