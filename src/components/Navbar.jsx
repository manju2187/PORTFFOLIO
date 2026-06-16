import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        <h1 className="font-bold text-xl text-cyan-400">
          Manju Darshan K V
        </h1>

        <div className="hidden md:flex gap-8">
          {["About","Skills","Projects","Education","Github","Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyan-400 transition"
              >
                {item}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
}