"use client";
import Counter from "./components/Counter.jsx";
import Heading from "./components/HeadingSection.jsx";
import Mirror from "./components/Mirror.jsx";
import Race from "./components/Race.jsx";
import ToggleBox from "./components/ToggleBox.jsx";

export default function Home() {
  return (
    <main>
      <Heading />
      <ToggleBox />
      <Mirror />
      <Counter />
      <Race />
    </main>
  );
}
