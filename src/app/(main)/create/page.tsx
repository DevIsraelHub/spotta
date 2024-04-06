import { ModeToggle } from "@/components/ModeToggle"
import { Button } from "@/components/ui/button"
import React from 'react'

const page = () => {
  return (
    <div>
      Leave a review
      <Button>
        Create
      </Button>
      <ModeToggle />
    </div>
  )
}

export default page
