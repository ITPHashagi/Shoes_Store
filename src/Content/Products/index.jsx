import React from "react";

export default function Products() {
  return (
    <div className="w-full border border-input rounded-lg p-6 space-y-4">
      <img
        src="http://svcy3.myclass.vn/images/adidas-prophere.png"
        alt="imgShoes"
        className="w-full h-[250px] object-cover"
      />
      <h3 className="text-lg font-semibold ">Adidas Prophere</h3>
      <p>350$</p>
      <button className="bg-gray-900 text-white py-2 px-3 ">
        Xem thông số
      </button>
    </div>
  );
}
