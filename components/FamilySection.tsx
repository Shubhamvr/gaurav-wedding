import React from 'react';

const FamilySection: React.FC = () => {
  const pillars = [
    "Mrs. Sunita Garg W/o Late Mr. Rajendra Garg", 
    "Mrs. Monika Garg W/o Mr. Mahesh Chandra Garg", 
    "Mrs. Babita Garg W/o Mr. Sanjay Garg",  
    "Mr. Kishan Garg", 
    "Mr. Roshan Garg", 
    "Mr. Babu Ram Garg", 
    "Mr. Shrinivas Garg",
    "Mr. Dharampal Garg", 
    "Mr. Brahma Garg"
  ];

  const brotherCols = [
    {
      names: ["Mr. Siddharth Garg", "Mr. Devansh Garg", "Mr. Suvansh Garg"]
    },
    {
      names: ["Mr. Manish Garg", "Mr. Tarun Garg", "Mr. Himanshu Garg", "Mr. Anil Garg", "Mr. Nikhil Garg", "Mr. Shubham Garg"]
    },
    {
      names: ["Mr. Saurabh Garg", "Mr. Shilesh Garg", "Mr. Nilesh Garg", "Mr. Aman Garg"]
    }
  ];

  const littleOnes = [
    "Parv", "Varn", "Atharv", "Shaurya", "Aditri", 
    "Jigishah", "Kesari", "Shree", "Hitishah", "Aviraj", "Anamya"
  ];

  return (
    <div className="py-24 px-6 bg-[#F8F4EC] border-b border-[#D6CEC3]/30">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Pillars Section */}
        <div className="mb-32">
          <h2 className="font-luxury text-4xl md:text-5xl mb-20 shimmer uppercase tracking-widest px-4">
            The Pillars of Our Family
          </h2>
          <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-8 gap-y-6 md:gap-y-10 max-w-5xl mx-auto">
            {pillars.map((name, i) => (
              <span key={i} className="font-accent text-sm md:text-base text-[#3A312A]/80 flex items-center px-4 leading-relaxed">
                {name} 
                {i < pillars.length - 1 && (
                  <span className="hidden md:inline-block ml-8 text-[#C5A46D] text-xs font-bold">•</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Brothers Section - 3 Column Layout */}
        <div className="mb-32">
          <h2 className="font-luxury text-4xl md:text-5xl mb-20 shimmer uppercase tracking-widest px-4">
            The Brothers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-5xl mx-auto">
            {brotherCols.map((col, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                {col.names.map((name, nIdx) => (
                  <span key={nIdx} className="font-accent text-sm md:text-base text-[#3A312A]/80 tracking-wide">
                    {name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* The Little Ones Section */}
        <div className="max-w-5xl mx-auto">
          <h2 className="font-luxury text-4xl md:text-5xl mb-20 shimmer uppercase tracking-widest px-4">
            The Little Ones
          </h2>
          <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-8 gap-y-4 md:gap-y-6">
            {littleOnes.map((name, i) => (
              <span key={i} className="font-accent text-sm md:text-base text-[#3A312A]/80 flex items-center px-2">
                {name} 
                {i < littleOnes.length - 1 && (
                  <span className="hidden md:inline-block ml-8 text-[#C5A46D] text-xs font-bold">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilySection;
