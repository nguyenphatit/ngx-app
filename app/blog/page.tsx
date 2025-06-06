import PostList from "./PostList";

export default function Page() {
  return (
    <>
      <div className="container mx-auto pt-32">
        <h1 className="text-9xl font-bold font-[Vina_Sans]">Our Blog</h1>
      </div>
      <div className="container px-8 lg:px-0 md:mx-auto py-16">
        <PostList />
      </div>
    </>
  )
}