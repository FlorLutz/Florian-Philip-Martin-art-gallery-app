import Spotlight from "@/components/Spotlight/Spotlight"

export default function SpotlightPage({ data }) {
  if (!data) {
    return
  }

  return (
    <>
      <h1>Spotlight</h1>
      <Spotlight pieces={data} />
    </>
  )
}
