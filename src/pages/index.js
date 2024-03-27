import Spotlight from "@/components/Spotlight/Spotlight"

export default function SpotlightPage({ data }) {
  if (!data) {
    return
  }

  return (
    <>
      <Spotlight pieces={data} />
    </>
  )
}
