"use client";

import { MessageCircleQuestion } from "lucide-react"

const CustomerCare = () => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
        <MessageCircleQuestion className="mt-10" size={200} />
        <p className="font-bold text-lg">No Product Cancellation after Shipping!</p>
        <p className="flex justify-center">For Any help related to refund ,damage Product or issue</p>
        
            <p className="">Please Email at us:<a className="font-bold" href="mailto:hello@gmail.com"> hello@gmail.com</a><br/></p>
            Visit us at :<br/>
            USA
        
      
    </div>
  )
}

export default CustomerCare
