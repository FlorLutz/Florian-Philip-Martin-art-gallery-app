import Spotlight from "@/components/Spotlight/Spotlight";
import { data } from "autoprefixer";

export default function SpotlightPage({ data }) {
  if (!data) {
    return;
  }
  return (
    <>
      <h1>Spotlight</h1>
      <Spotlight pieces={data} />
    </>
  );
}
