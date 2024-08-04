import React from 'react'
import Link from "next/link"
import { blogs } from "@/constants";
function page (){
  return (
    <div className="flex gap-5 py-10">
      {blogs.map((item, index) => (
        <Link key={item.id} href={`/Blog/${item.id}`}> {item.title} </Link>
      ))}
    </div>
  )
}

export default page
