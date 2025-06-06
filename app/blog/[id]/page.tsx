"use client"

import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/avatar"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { CustomEase } from "gsap/CustomEase"
import { useEffect, useRef } from "react"

gsap.registerPlugin(SplitText, CustomEase)

CustomEase.create("mtx-ease", "M0,0 C0.2,0.1 0.2,1 1,1");

export default function Page({ params }: { params: { slug: string } }) {
  const headingRef = useRef<HTMLHeadingElement>(null)


  useEffect(() => {
    if (!headingRef.current) return;

    const splitText = SplitText.create(headingRef.current, { type: "words" });

    gsap.fromTo(splitText.words, { yPercent: 110 }, { yPercent: 0, duration: 0.6, stagger: 0.06, ease: "mtx-ease" });

    return () => {
      splitText.revert();
      gsap.killTweensOf(splitText.words);
    }
  }, [])

  return (
    <div className="relative">
      <div className="container mx-auto pt-32 flex flex-col gap-4">
        <h1 className="text-6xl font-bold uppercase" data-split="heading" ref={headingRef}>From SplitText to MorphSVG: 5 Creative Demos Using Free GSAP Plugins</h1>
        <h3 className="text-xl font-bold flex items-center gap-2">April 23, 2025 by <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
          <span className="font-bold">Ricky Hanlon</span></h3>
        <hr />
      </div>
      <div className="container px-8 lg:px-0 md:mx-auto py-16">
        <div className="flex flex-row">
          <div className="flex-3/4">
            <article className="text-justify">
              <p>
                We assume that by now you’ve all read the wonderful news about GSAP now becoming 100% free, for everyone. Thanks to Webflow’s support, all of the previously paid plugins in GSAP are now accessible to everyone. That’s why today, Osmo, Codrops and GSAP are teaming up to bring you 5 demos, available both as a Webflow cloneable and CodePen. We hope these will provide a fun intro to some cool plugins and spark a few ideas!

                What you’ll learn:
                SplitText basics: Break text into lines, words, or letters—with the new automatic resizing and built-in masking options!
                DrawSVG scribbles: Add a playful, randomized underline to links (or anything) on hover using DrawSVG.
                Physics2D text smash: Combine SplitText + Physics2D so your headline shatters into letters that tumble off the top of the viewport like a roof.
                Inertia dot grid: Create an interactive, glowing dot matrix that springs and flows with your cursor for a dynamic background effect.
                MorphSVG toggle: Build a seamless play/pause button that morphs one SVG into another in a single tween.
                Before we dive in, let’s make sure you have the GSAP core included in your project. I will let you know the exact plugins you need per demo! You can use the official GSAP Install Helper if you need the correct npm commands or CDN links. If you’re following this as a Webflow user and you want to build from scratch, Webflow has made it super easy to integrate GSAP into your project. If you want, you can read more here. When using this approach, just make sure to add your custom code somewhere in the before <code>/body</code> section of the page or project settings.

                Perfect, with that set, let’s start building an interactive SplitText demo!
              </p>
            </article>
          </div>
          <div className="flex-1/4 px-8">
            <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
            <div className="grid grid-cols-1 gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
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
                      <Button className="cursor-pointer" data-cursor="hover">Read More</Button>
                    </CardAction>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}