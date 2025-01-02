import Header from "./Header";
import Projects from "./Projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Header />

      <hr className="scale-100 md:scale-0" />
      <Projects />
    </div>
  );
}
