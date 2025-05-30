"use client";

import { Product } from "@/types";
import Image from "next/image";
import { FC, MouseEventHandler } from "react";
import IconButton from "@/components/ui/icon-button";
import {  Expand, ShoppingCart } from "lucide-react";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

interface ProductCardtypes{
    data:Product
}
const ProductCard:FC<ProductCardtypes> = ({
    data
}) => {
    const previewModal = usePreviewModal()
    const router = useRouter();
    const cart = useCart();
    const handleClick= ()=>{
        router.push(`/product/${data?.id}`)
    }
    const onPreview:MouseEventHandler<HTMLButtonElement> =(event)=>{
        event.stopPropagation();
        previewModal.onOpen(data);
    }
    const onAdd:MouseEventHandler<HTMLButtonElement> =(event)=>{
            event.stopPropagation();
            cart.addItem(data);
    }

  return (
    <div onClick={handleClick} className="bg-white group cursor-poiner rounded-xl border p-3 space-y-4 sm:m-3">
      
        <div className="aspect-square rounded-xl bg-gray-100 relative">
            <Image src={data?.images?.[0]?.url} alt="Image" fill className="aspect-square object-cover rounded-md"/>
            <div className="hidden sm:flex opacity-0 gap-x-3 group-hover:opacity-100 transition justify-center absolute w-full px-6 bottom-5">
                <div className="flex  gap-x-6 justify-center">
                    <IconButton onClick={onPreview} icon={<Expand size={20} className="text-gray-600"/>}/>
                </div>
                <div className="flex gap-x-6 justify-center">
                    <IconButton onClick={onAdd} icon={<ShoppingCart size={20} className="text-gray-600"/>}/>
                </div>
            </div>
        </div>
        <div >
            <p className="font-semibold text-lg">
                {data.name}
            </p>
            <p className="text-sm text-gray-500">
                {data.category.name}
            </p>
        </div>
        <div className="flex items-center justify-between">
            <Currency value={data?.price}/>
        </div>
      
    </div>
  )
}

export default ProductCard
