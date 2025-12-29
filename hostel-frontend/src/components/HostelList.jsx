import { useEffect, useState } from "react";
import { fetchHostels } from "../services/api";
import HostelCard from "./HostelCard";

const HostelList = () => {
  const [hostels, setHostels] = useState([]);

  useEffect(() => {
    fetchHostels({ city: "Pondicherry" })
      .then(res => setHostels(res.data))
      .catch(console.error);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hostels.map(hostel => (
          <HostelCard key={hostel.id} hostel={hostel} />
        ))}
      </div>
    </section>
  );
};

export default HostelList;
