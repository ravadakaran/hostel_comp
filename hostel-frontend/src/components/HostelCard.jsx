const HostelCard = ({ hostel }) => {
    return (
      <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
        <div className="h-48 bg-gray-200" />
  
        <div className="p-4">
          <h3 className="font-semibold text-lg">{hostel.name}</h3>
          <p className="text-sm text-gray-500">{hostel.city}</p>
  
          <div className="mt-3 flex justify-between items-center">
            <span className="text-sm text-gray-500">Starting from</span>
            <span className="font-bold text-lg">₹{hostel.price}</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default HostelCard;
  