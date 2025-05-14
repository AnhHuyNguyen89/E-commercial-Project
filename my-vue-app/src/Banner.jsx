export function Hero() {
  return (
    <section className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Delicious Food & Refreshing Drinks
          </h2>
          <p className="text-xl mb-8">
            Order online or visit us for the best dining experience in town
          </p>
          <a
            href="#menu"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            View Menu
          </a>
        </div>
      </div>
    </section>
  );
}
