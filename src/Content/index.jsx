import React, { useState } from "react";
import Products from "./Products";
import ProductDetail from "./ProductDetails";
import data from "./data.json";

export default function Content() {
  const [dataShoes, setDataShoes] = useState(data);
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-lg font-bold mb-4">Danh sách sản phẩm</h2>

      <div className="grid grid-cols-3 gap-4">
        {data.map((item, index) => {
          return <Products key={item.id} product={item} />;
        })}
      </div>

      <h2 className="text-lg font-bold mt-8 mb-4">Thông số kỹ thuật</h2>
      <ProductDetail
      // product={dataDetails}
      />
    </div>
  );
}
