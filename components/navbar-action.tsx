"use client";

import Button from "@/components/ui/Button";
import useCart from "@/hooks/use-cart";
import { MessageCircleQuestion, ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NavbarAction = () =>{

    const [isMounted ,setIsMounted] = useState(false);

    useEffect(()=>{
        setIsMounted(true)
    },[]);

    const cart = useCart();
    const router = useRouter();

    if(!isMounted){
        return null
    }

    return (
        <div className="ml-auto flex items-center gap-x-4">
            <Button onClick={()=>router.push("/cart")} className="flex items-center rounded-full bg-black px-4 py-2">
                <ShoppingBag size={20} color="white"/>
                <span className="ml-2 text-sm font-medium text-white">{cart.items.length}</span>
            </Button>
            <Button onClick={()=>router.push("/customercare")} className="flex items-center rounded-full bg-black px-4 py-2">
                <MessageCircleQuestion size={20} color="white"/>
            </Button>
        </div>
    )
}

export default NavbarAction;