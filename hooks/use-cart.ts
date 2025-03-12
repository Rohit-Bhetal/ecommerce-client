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
      const existingItem = currentItems.map((item)=>item.id==data.id);
      if(existingItem){
         toast(`Item already in cart.Added by +${existingItem.length}`);
      }
      set({
         items:[...get().items,data]
      })
      toast.success("Item added to cart.")
   },
   removeItem:(id:string)=>{
      const item = [...get().items]
      const index = item.findIndex((item)=>item.id===id)
      if (index!==-1){
         item.splice(index,1)
      }
      set({
         items:item
         
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