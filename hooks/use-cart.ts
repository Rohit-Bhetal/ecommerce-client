 import {create} from 'zustand';

 import {Product} from "@/types"
import { createJSONStorage, persist } from 'zustand/middleware';
import toast from 'react-hot-toast';

 interface CartModalStore{
    items:Product[]
    addItem:(data:Product)=>void;
    removeItem:(id:string)=>void;
    removeAll:()=>void;
 }

 const useCart = create(persist<CartModalStore>((set,get)=>({
   items:[],
   addItem:(data:Product)=>{
      const currentItems = get().items;
      const existingItem = currentItems.find((item)=>item.id===data.id);
      if(existingItem){
         return toast("Item already in cart.");
      }
      set({
         items:[...get().items,data]
      })
      toast.success("Item added to cart.")
   },
   removeItem:(id:string)=>{
      set({
         items:[...get().items.filter((item)=>item.id!== id)]
         
      })
      toast.success("Items removed from the cart.")
   },
   removeAll:()=>set({
      items:[]
   })
 }),{
   name:"cart-storage",
   storage:createJSONStorage(()=>localStorage)
 }))

 export default useCart;