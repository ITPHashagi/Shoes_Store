import React, { useState } from "react";
import Products from "./Products";
import ProductDetail from "./ProductDetails";
import data from "./data.json";

export default function Content() {
  const [dataShoes, setDataShoes] = useState(data);

  const [dataDetails, setDataDetails] = useState(null);

  const handleViewDetails = (dataShoes) => {
    setDataDetails(dataShoes);
  };
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-lg font-bold mb-4">Danh sách sản phẩm</h2>

      <div className="grid grid-cols-3 gap-4">
        {data.map((item, index) => {
          return (
            <Products
              key={item.id}
              product={item}
              onClickViewDetails={handleViewDetails}
            />
          );
        })}
      </div>

      {!!dataDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] max-w-2xl rounded-lg shadow-lg p-6 relative">
            {/* Close button */}
            <button
              onClick={() => setDataDetails(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            {/* Modal Content */}
            <h2 className="text-lg font-bold mb-4">Thông số kỹ thuật</h2>
            <ProductDetail product={dataDetails} />
          </div>
        </div>
      )}
    </div>
  );
}
