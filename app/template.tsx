import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

interface Props {
  children: React.ReactNode
}

export default function Template({ children }: Props) {
  return (
    <>
      <Navbar />
      <div className="relative z-10">
        <div className="bg-background">
          {children}
        </div>
      </div>
      <Footer />
    </>
  )
}