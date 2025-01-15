import React from "react";

export default function ProductDetail({ product }) {
  return (
    <div className="flex gap-6">
      <div className="w-1/4 space-y-6">
        <h4 className="text-2xl font-bold">{product.name}</h4>
        <img src={product.image} alt="imgShoes" className="w-full h-[300px]" />
      </div>
      <div className="w-2/3 space-y-4">
        <h4 className="text-2xl font-bold">Thông số</h4>
        <div className="space-y-4 ">
          <div className="flex space-x-4 items-center">
            <p>Name</p>
            <p>{product.name}</p>
          </div>
          <div className="flex space-x-4 items-center">
            <p>Alias</p>
            <p>{product.alias}</p>
          </div>
          <div className="flex space-x-4 items-center">
            <p>Price</p>
            <p>{product.price}$</p>
          </div>
          <div className="flex space-x-4 ">
            <p>Description</p>
            <p>{product.description}</p>
          </div>
          <div className="flex space-x-4 items-center">
            <p>Short Description</p>
            <p>{product.shortDescription}</p>
          </div>
          <div className="flex space-x-4 items-center">
            <p>Quantity</p>
            <p>{product.quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
