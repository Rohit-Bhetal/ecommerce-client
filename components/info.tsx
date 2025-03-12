"use-client";

import { Product } from "@/types";
import { FC } from "react";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/Button";
import { ShoppingCart } from "lucide-react";


interface InfoProps{
    data:Product;
}
const Info:FC<InfoProps> = ({data}) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900"><Currency value={data?.price}/></p>

      </div>
      <hr className="my-4"/>
      <div className="flex flex-col gap-y-6">
      <div className="flex items-center gap-x-4">
        <h3 className="font-semibold">Size:</h3>
        <div>
            {data?.size?.name}
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <h3 className="font-semibold">Color:</h3>
        <div className="h-6 w-6 rounded-full border border-gray-60" style={{backgroundColor:data?.color?.value}}/>
            
      </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button className=" flex items-center gap-x-3">
            Add to Cart
            <ShoppingCart/>
        </Button>
      </div>
      <hr/>
      <div className="border rounded-md m-3 px-3 py-2">
        <p className="text-slate-500">
            {data?.description}
        </p>
      </div>
    </div>
  )
}

export default Info
