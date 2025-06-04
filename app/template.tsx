import Navbar from "@/components/Navbar"

interface Props {
  children: React.ReactNode
}

export default function Template({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}