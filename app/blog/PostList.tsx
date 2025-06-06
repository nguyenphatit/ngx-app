"use client"

import { Card, CardContent, CardFooter, CardTitle, CardAction } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function PostList() {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 12 }).map((_, index) => (
        <Card className="p-0" key={index}>
          <img
            src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
            alt="Thumbnail"
            className="w-full h-48 object-cover rounded-t-sm"
          />
          <CardContent>
            <CardTitle className="text-xl font-semibold">Your Card Title</CardTitle>
            <p className="text-sm line-clamp-2 py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, corporis? Voluptatum veritatis quam consequatur deserunt alias, assumenda culpa fuga nihil nobis accusantium totam. Animi architecto delectus aliquam, earum maiores illum.</p>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <CardAction>
              <Button className="cursor-pointer" data-cursor="hover" onClick={() => router.push(`/blog/${index + 1}`)}>Read More</Button>
            </CardAction>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}