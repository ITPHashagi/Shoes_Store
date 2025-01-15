import React from "react";

export default function ProductDetail() {
  return (
    <div className="flex gap-6">
      <div className="space-y-6">
        <h4 className="text-2xl font-bold">Adidas Prophere</h4>
        <img
          src="http://svcy3.myclass.vn/images/adidas-prophere.png"
          alt="imgShoes"
          className="w-full h-[300px]"
        />
      </div>
      <div className="space-y-4">
        <h4 className="text-2xl font-bold">Thông số</h4>
        <div>
          <div className="flex space-x-4 items-center mt-4">
            <p>Name</p>
            <p>Adidas Prophere</p>
          </div>
          <div className="flex space-x-4 items-center mt-4">
            <p>Alias</p>
            <p>Adidas-prophere</p>
          </div>
          <div className="flex space-x-4 items-center mt-4">
            <p>Price</p>
            <p>350$</p>
          </div>
          <div className="flex space-x-4 items-center mt-4">
            <p>Description</p>
            <p>
              The adidas Primeknit upper wraps the foot with a supportive fit
              that enhances movement.
            </p>
          </div>
          <div className="flex space-x-4 items-center mt-4">
            <p>ShortDescription</p>
            <p>
              The midsole contains 20% more Boost for an amplified Boost
              feeling.
            </p>
          </div>
          <div className="flex space-x-4 items-center mt-4">
            <p>Quantity</p>
            <p>995</p>
          </div>
        </div>
      </div>
    </div>
  );
}
