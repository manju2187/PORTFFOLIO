export default function Github() {
  return (
    <section id="github" className="py-24 px-6">

      <h2 className="text-center text-4xl font-bold mb-10">
        GitHub
      </h2>

      <div className="max-w-4xl mx-auto bg-white/5 rounded-3xl p-8 backdrop-blur-lg border border-white/10">

        <h3 className="text-2xl font-semibold">
          @manju2187
        </h3>

        <a
          href="https://github.com/manju2187"
          target="_blank"
          className="text-cyan-400"
        >
          View GitHub Profile
        </a>

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <div className="bg-white/5 p-6 rounded-xl">
            Contribution Graph Placeholder
          </div>

          <div className="bg-white/5 p-6 rounded-xl">
            Repositories Placeholder
          </div>

        </div>

      </div>
    </section>
  );
}