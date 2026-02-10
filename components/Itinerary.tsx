
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EventCardProps {
  date: string;
  title: string;
  time: string;
  description?: string;
}

const EventCard: React.FC<EventCardProps> = ({ date, title, time, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full max-w-md mx-auto h-72 md:h-80 group perspective-1000">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-full h-full cursor-pointer overflow-hidden rounded-sm border border-[#C5A46D]/20 shadow-2xl bg-white/60"
      >
        {/* Content behind the doors */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center space-y-5">
          <p className="font-accent text-[#C5A46D] text-xs uppercase tracking-[0.4em] font-bold">{date}</p>
          <h3 className="font-luxury text-3xl md:text-4xl text-[#3A312A] uppercase tracking-wide">{title}</h3>
          <div className="h-[1px] w-10 bg-[#C5A46D]/40" />
          <p className="font-luxury text-xl text-[#3A312A]/70">{time}</p>
          {description && <p className="font-accent text-sm italic text-[#3A312A]/70 max-w-[280px] font-medium leading-relaxed">{description}</p>}
        </div>

        <AnimatePresence>
          {!isOpen && (
            <>
              {/* Left Sliding Door */}
              <motion.div
                initial={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 1.2, ease: [0.45, 0.05, 0.55, 0.95] }}
                className="absolute inset-y-0 left-0 w-1/2 bg-[#3A312A] z-10 border-r border-[#C5A46D]/30 shadow-[5px_0_15px_rgba(0,0,0,0.3)]"
              >
                {/* Decorative Handle - Moved further right (relative to left door) to ensure wide gap */}
                <div className="absolute top-1/2 right-24 md:right-32 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#C5A46D]/20 flex items-center justify-center">
                  <div className="w-5 h-[1px] bg-[#C5A46D]/40" />
                </div>
              </motion.div>

              {/* Right Sliding Door */}
              <motion.div
                initial={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 1.2, ease: [0.45, 0.05, 0.55, 0.95] }}
                className="absolute inset-y-0 right-0 w-1/2 bg-[#3A312A] z-10 border-l border-[#C5A46D]/30 shadow-[-5px_0_15px_rgba(0,0,0,0.3)]"
              >
                {/* Decorative Handle - Moved further left (relative to right door) to ensure wide gap */}
                <div className="absolute top-1/2 left-24 md:left-32 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#C5A46D]/20 flex items-center justify-center">
                  <div className="w-5 h-[1px] bg-[#C5A46D]/40" />
                </div>
              </motion.div>

              {/* Call to Action Text */}
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none px-4"
              >
                <p className="font-luxury text-[#C5A46D] uppercase tracking-[0.4em] text-xs md:text-sm font-bold bg-[#3A312A] px-4">
                  Tap to Open
                </p>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Itinerary: React.FC = () => {
  return (
    <div className="py-32 px-6 bg-[#F8F4EC]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="font-luxury text-4xl md:text-5xl text-[#3A312A] mb-6 uppercase tracking-widest">Wedding Itinerary</h2>
          <div className="w-24 h-[1px] bg-[#C5A46D] mx-auto opacity-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Day 1 */}
          <div className="space-y-16">
            <h3 className="font-luxury text-2xl text-center text-[#3A312A] tracking-[0.3em] uppercase opacity-40">24th February</h3>
            <EventCard 
              date="24 FEB 2026" 
              title="Haldi Carnival" 
              time="12:00 PM" 
              description="A vibrant celebration of love, colors, and eternal traditions."
            />
            <EventCard 
              date="24 FEB 2026" 
              title="Ring Ceremony" 
              time="06:00 PM" 
              description="Tika Ceremony followed by Cocktail & Royal Dinner."
            />
          </div>

          {/* Day 2 */}
          <div className="space-y-16">
            <h3 className="font-luxury text-2xl text-center text-[#3A312A] tracking-[0.3em] uppercase opacity-40">25th February</h3>
            <EventCard 
              date="25 FEB 2026" 
              title="Chak Bhat" 
              time="10:00 AM" 
              description="A sacred morning ritual honoring maternal heritage and family bonds."
            />
            <EventCard 
              date="25 FEB 2026" 
              title="The Wedding" 
              time="01:00 PM Onwards" 
              description="Baraat Arrival & Wedding followed by Grand Reception at 7 PM."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
