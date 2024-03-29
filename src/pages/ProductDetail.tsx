import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { add } from "../slices/Carts";
import { useGetProductByIdQuery, useGetProductsQuery } from "../api/Product";

type Props = {};

const ProductDetail = (props: Props) => {
  const { id } = useParams();
  const {data:product , error , isLoading } = useGetProductByIdQuery(id)
  const dispatch = useAppDispatch();
  return (
    <div className="max-w-[1000px] mx-auto mt-4">
      <div className="flex gap-4">
        <div>
          <h1 className="text-2xl font-bold p-2">{product?.name}</h1>
          <p className="font-bold p-2">{product?.price}</p>
          <Button onClick={() => dispatch(add({ ...product, quantity: 1 }))}>
            Thêm giỏ hàng
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
