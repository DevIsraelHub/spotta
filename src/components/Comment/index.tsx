import React from 'react'
import { Separator } from "../ui/separator"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

const Comment = () => {
  return (
    <>
      <div className="w-full h-full pb-3 -mt-3 flex items-center gap-x-2">
        <Input
          type="text"
          placeholder="Add a comment"
          className="rounded-none bg-transparent border-0 h-full focus-visible:ring-0 ring-b"
        />
        <Button
          className="uppercase bg-brandColor text-white hover:bg-brandColor/90 hover:scale-105 transition-transform"
        >
          Post
        </Button>
      </div>
      <Separator />
    </>
  )
}

export default Comment
