import React from 'react'
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Links() {
  return (
    <>
    <div className="flex justify-center gap-4 mt-6">
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <Button
      variant="outline"
      className="flex items-center gap-2 rounded-full px-4 py-2 bg-gray-100"
    >
      <Facebook size={18} />
    </Button>
  </a>

  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
    <Button
      variant="outline"
      className="flex items-center gap-2 rounded-full px-4 py-2 bg-gray-100"
    >
      <Twitter size={18} />
    </Button>
  </a>

  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <Button
      variant="outline"
      className="flex items-center gap-2 rounded-full px-4 py-2 bg-gray-100"
    >
      <Instagram size={18} />
    </Button>
  </a>
</div>
    </>
  )
}


