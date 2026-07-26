import Portfolio from "./Portfolio";
import { Loader } from "@/components/portfolio/Loader";
import { Cursor } from "@/components/portfolio/Cursor";

export default function App() {
  return (
    <>
      <Loader />
      <Cursor />
      <Portfolio />
    </>
  );
}
