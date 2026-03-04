const Banner = ({ inProgress = 0, resolved = 0 }) => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 mt-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* In Progress */}
          <div className="banner-card banner-progress">
            <p className="text-white/90 text-lg font-medium">In-Progress</p>
            <p className="text-white text-5xl font-semibold mt-4">
              {inProgress}
            </p>
          </div>

          {/* Resolved */}
          <div className="banner-card banner-resolved">
            <p className="text-white/90 text-lg font-medium">Resolved</p>
            <p className="text-white text-5xl font-semibold mt-4">{resolved}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
