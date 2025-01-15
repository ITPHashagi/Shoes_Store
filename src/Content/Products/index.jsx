import React from "react";

export default function Products({ product, onClickViewDetails }) {
  return (
    <div className="w-full border border-input rounded-lg p-6 space-y-4">
      <img
        src={product.image}
        alt="imgShoes"
        className="w-full h-[250px] object-cover"
      />
      <h3 className="text-lg font-semibold ">{product.name}</h3>
      <p>{product.price}$</p>
      <button
        className="bg-gray-900 text-white py-2 px-3 "
        onClick={() => {
          onClickViewDetails(product);
        }}
      >
        Xem thông số
      </button>
    </div>
  );
}
