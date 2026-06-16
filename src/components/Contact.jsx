export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">

      <h2 className="text-center text-4xl font-bold mb-12">
        Contact
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">

        <div>
          <h3 className="text-2xl font-semibold mb-5">
            Get In Touch
          </h3>

          <p>Email:</p>
          <a
            href="mailto:manjudarshana.kv@gmail.com"
            className="text-cyan-400"
          >
            manjudarshana.kv@gmail.com
          </a>

          <p className="mt-5">GitHub:</p>

          <a
            href="https://github.com/manju2187"
            target="_blank"
            className="text-cyan-400"
          >
            github.com/manju2187
          </a>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
          />

          <textarea
            rows="5"
            placeholder="Message"
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
          />

          <button className="bg-cyan-500 px-6 py-3 rounded-xl">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}