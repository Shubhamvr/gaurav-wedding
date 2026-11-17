
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EventCardProps {
  date: string;
  title: string;
  time: string;
  description?: string;
  venue?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  date,
  title,
  time,
  description,
  venue
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full max-w-md mx-auto h-72 md:h-80 group perspective-1000">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-full h-full cursor-pointer overflow-hidden rounded-sm border border-[#C5A46D]/20 shadow-2xl bg-white/60"
      >
        {/* Content behind the doors */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-8 text-center space-y-4">

          <p className="font-accent text-[#C5A46D] text-xs uppercase tracking-[0.4em] font-bold">
            {date}
          </p>

          <h3 className="font-luxury text-3xl md:text-4xl text-[#3A312A] uppercase tracking-wide">
            {title}
          </h3>

          <div className="h-[1px] w-10 bg-[#C5A46D]/40" />

          <p className="font-luxury text-xl text-[#3A312A]/70">
            {time}
          </p>

          {description && (
            <p className="font-accent text-sm italic text-[#3A312A]/70 max-w-[280px] font-medium leading-relaxed">
              {description}
            </p>
          )}

          {/* Event Venue */}
          {venue && (
            <div className="flex flex-col items-center gap-1 pt-1">
              <p className="font-accent text-[10px] uppercase tracking-[0.3em] text-[#C5A46D] font-bold">
                Venue
              </p>
              <p className="font-accent text-sm text-[#3A312A]/80 font-medium text-center leading-relaxed">
                {venue}
              </p>
            </div>
          )}

        </div>

        <AnimatePresence>
          {!isOpen && (
            <>
              {/* Left Sliding Door */}
              <motion.div
                initial={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{
                  duration: 1.2,
                  ease: [0.45, 0.05, 0.55, 0.95]
                }}
                className="absolute inset-y-0 left-0 w-1/2 bg-[#3A312A] z-10 border-r border-[#C5A46D]/30 shadow-[5px_0_15px_rgba(0,0,0,0.3)]"
              >
                <div className="absolute top-1/2 right-24 md:right-32 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#C5A46D]/20 flex items-center justify-center">
                  <div className="w-5 h-[1px] bg-[#C5A46D]/40" />
                </div>
              </motion.div>

              {/* Right Sliding Door */}
              <motion.div
                initial={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{
                  duration: 1.2,
                  ease: [0.45, 0.05, 0.55, 0.95]
                }}
                className="absolute inset-y-0 right-0 w-1/2 bg-[#3A312A] z-10 border-l border-[#C5A46D]/30 shadow-[-5px_0_15px_rgba(0,0,0,0.3)]"
              >
                <div className="absolute top-1/2 left-24 md:left-32 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#C5A46D]/20 flex items-center justify-center">
                  <div className="w-5 h-[1px] bg-[#C5A46D]/40" />
                </div>
              </motion.div>

              {/* Call to Action */}
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

        {/* Section Heading */}
        <div className="text-center mb-24">
          <h2 className="font-luxury text-4xl md:text-5xl text-[#3A312A] mb-6 uppercase tracking-widest">
            Wedding Itinerary
          </h2>
          <div className="w-24 h-[1px] bg-[#C5A46D] mx-auto opacity-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

          {/* Day 1 */}
          <div className="space-y-16">
            <h3 className="font-luxury text-2xl text-center text-[#3A312A] tracking-[0.3em] uppercase opacity-40">
              10th December
            </h3>

            <EventCard
              date="10 DEC 2026"
              title="Ring Ceremony"
              time="06:00 PM"
              description="Tilak Ceremony followed by Sangeet & Royal Dinner."
              venue="Vijay Intercontinental - Laurel Banquet"
            />
          </div>

          {/* Day 2 */}
          <div className="space-y-16">
            <h3 className="font-luxury text-2xl text-center text-[#3A312A] tracking-[0.3em] uppercase opacity-40">
              11th December
            </h3>

            <EventCard
              date="11 DEC 2026"
              title="The Wedding"
              time="07:00 PM Onwards"
              description="Baraat Arrival & Wedding followed by Grand Reception at 9 PM."
              venue="The Eternity - IHCL SeleQtions"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Itinerary;
