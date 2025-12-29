import HostelList from "../components/HostelList";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-2">
            Hostels in Pondicherry
          </h1>
          <p className="text-gray-600">
            Affordable hostels curated for backpackers
          </p>
        </div>
      </section>

      <HostelList />
    </>
  );
};

export default Home;
