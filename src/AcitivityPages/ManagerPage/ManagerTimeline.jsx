import React, { useRef, useEffect, useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';

export const seminerler = [
  {
    seminerNo: 1,
    title: "Bir Okul Yönetmek: Geleneksel Bilgelik ile Modern Liderlik Arasında",
    speaker: "Doç. Dr. Özkan Öztürk",
    date: "24 Aralık Çarşamba",
    time: "19.00",
    year: "2025"
  },
  {
    seminerNo: 2,
    title: "Okul İklimi ve Kurum Kültürü",
    speaker: "Eyyup Demir",
    date: "31 Aralık Çarşamba",
    time: "19.00",
    year: "2025"
  },
  {
    seminerNo: 3,
    title: "Köklerden Kanatlara: Motivasyonu Yeniden İnşa Etmek",
    speaker: "Dr. Sümeyye Kuşakcı",
    date: "7 Ocak Çarşamba",
    time: "19.00",
    year: "2026"
  },
  {
    seminerNo: 4,
    title: "Stratejik Yönetim ve Veriye Dayalı Karar Verme",
    speaker: "Prof. Dr. Özcan Erkan Akgün",
    date: "14 Ocak Çarşamba",
    time: "19.00",
    year: "2026"
  },
  {
    seminerNo: 5,
    title: "Adanmış Yönetici Olmak",
    speaker: "Cemal Yılmaz",
    date: "21 Ocak Çarşamba",
    time: "19.00",
    year: "2026"
  }, 
  {
    seminerNo: 6,
    title: "Yönetimde Güzel Örnekler",
    speaker: "Yıldırım Alkış",
    date: "28 Ocak Çarşamba",
    time: "19.00",
    year: "2026"
  },
  {
    seminerNo: 7,
    title: "Kapsayıcı Liderlik Yaklaşımları ve Öğrenme Ortamlarına Etkisi",
    speaker: "Dr. Muhammed Çelik",
    date: "4 Şubat Çarşamba",
    time: "19.00",
    year: "2026"
  },
  {
    seminerNo: 8,
    title: "Yöneticilikte İletişim ve İnsan İlişkileri",
    speaker: "Doç. Dr. Yasin Çakırel",
    date: "11 Şubat Çarşamba",
    time: "19.00",
    year: "2026"
  },
];

const SeminarTimeline = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedSeminarId, setSelectedSeminarId] = useState(null);
  
  const currentDate = new Date();

  // Helper: Türkçe Ay -> Sayı
  const turkishMonthToNumber = (month) => {
    if (!month) return '01';
    const months = {
      'Ocak': '01', 'Şubat': '02', 'Mart': '03', 'Nisan': '04',
      'Mayıs': '05', 'Haziran': '06', 'Temmuz': '07', 'Ağustos': '08',
      'Eylül': '09', 'Ekim': '10', 'Kasım': '11', 'Aralık': '12'
    };
    return months[month] || '01';
  };

  // Helper: Tarih Parse
  const parseDateTime = (dateStr, timeStr, yearStr) => {
    try {
      const parts = dateStr.split(' ');
      const day = parseInt(parts[0]);
      const monthName = parts[1];
      const monthIndex = parseInt(turkishMonthToNumber(monthName)) - 1;
      const year = parseInt(yearStr);
      let hours = 0;
      if (timeStr) {
        hours = parseInt(timeStr.split('.')[0]);
      }
      return new Date(year, monthIndex, day, hours);
    } catch (e) {
      return new Date(2099, 0, 1);
    }
  };

  // Veriyi Sırala
  const sortedSeminars = useMemo(() => {
    const processed = seminerler.map(seminer => {
      const dateObj = parseDateTime(seminer.date, seminer.time, seminer.year);
      return {
        ...seminer,
        dateObj: dateObj,
        isPast: dateObj < currentDate
      };
    });
    return processed.sort((a, b) => a.dateObj - b.dateObj);
  }, []);

  const nextEvent = sortedSeminars.find(s => !s.isPast);

  // Scroll Logic
  useEffect(() => {
    const checkScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
      }
    };
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      checkScroll();
    }
    return () => container && container.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      const container = scrollContainerRef.current;
      const newPos = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      container.scrollTo({ left: newPos, behavior: 'smooth' });
    }
  };

  const handleCardClick = (seminerNo) => {
    setSelectedSeminarId(seminerNo);
    window.location.hash = `seminar-${seminerNo}`;
  };

  // Progress Bar
  const completedCount = sortedSeminars.filter(s => s.isPast).length;
  const progressPercent = (completedCount / sortedSeminars.length) * 100;

  return (
    // w-full kullanarak tüm genişliği kaplamasını sağladık
    <div className="w-full mt-16 md:mt-32 mb-16"> {/* Container padding ayarlandı */}
    <div className="text-center mb-8 md:mb-16 px-4">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#BDA473] mb-4 md:mb-6 bg-gradient-to-r from-[#BDA473] to-[#BDA473] bg-clip-text text-transparent">
      <span className="block ">  2025 - 2026 </span>
      <span className="block"> (2. Dönem) Seminer Programı</span>
      </h1>
          
          <div className="max-w-xs sm:max-w-sm md:max-w-xl mx-auto bg-gray-800/30 p-4 md:p-6 rounded-2xl backdrop-blur-sm">
            <div className="flex justify-between text-white mb-2 text-sm md:text-base">
              <span>Program İlerlemesi</span>
              <span>{completedCount} / {sortedSeminars.length} Seminer Tamamlandı</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-[#BDA473] h-2 rounded-full transition-all duration-1000"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        {/* Timeline Alanı - Full Genişlik */}
        <div className="relative w-full group">
          
          {/* Sol Ok */}
          {canScrollLeft && (
            <button 
              onClick={() => scroll('left')}
              className="absolute left-2 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-gray-800/90 p-3 md:p-4 rounded-full text-white hover:bg-gray-700 backdrop-blur-sm transition-all hover:scale-110 shadow-lg border border-[#BDA473]/30"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          
          {/* Sağ Ok */}
          {canScrollRight && (
            <button 
              onClick={() => scroll('right')}
              className="absolute right-2 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-gray-800/90 p-3 md:p-4 rounded-full text-white hover:bg-gray-700 backdrop-blur-sm transition-all hover:scale-110 shadow-lg border border-[#BDA473]/30"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide pb-12 w-full relative"
            style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
          >
            <div className="relative min-w-max px-4 md:px-8">
              {/* Çizgi */}
              <div className="absolute h-1 w-full top-24 bg-[#BDA473]"></div>
              
              <div className="flex gap-6 md:gap-10 pt-8">
                {sortedSeminars.map((seminer) => {
                  const day = seminer.dateObj.getDate();
                  const monthName = seminer.dateObj.toLocaleString('tr-TR', { month: 'long' });
                  
                  return (
                    <div 
                      key={seminer.seminerNo} 
                      id={`tl-item-${seminer.seminerNo}`}
                      className="relative w-80 flex-shrink-0 cursor-pointer group/card"
                      style={{ scrollSnapAlign: 'start' }}
                      onClick={() => handleCardClick(seminer.seminerNo)}
                    >
                      {/* Timeline Noktası */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className={`w-8 h-8 md:w-12 md:h-12 
                          ${selectedSeminarId === seminer.seminerNo ? 'bg-[#8B7355]' : 'bg-[#BDA473]'}
                          rounded-full flex items-center justify-center shadow-lg
                          transition-all duration-300 group-hover/card:scale-110`}>
                          <Clock className="w-4 h-4 md:w-6 md:h-6 text-white" />
                        </div>
                      </div>
                      
                      {/* Kart Tasarımı */}
                      <div 
                        className={`mt-16 md:mt-20 bg-gray-800/90 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-xl 
                          transition-all duration-500 border relative h-[300px] flex flex-col
                          ${selectedSeminarId === seminer.seminerNo 
                            ? 'border-[#8B7355] ring-4 ring-[#8B7355]/50 scale-105 shadow-2xl shadow-[#8B7355]/20'
                            : nextEvent && nextEvent.seminerNo === seminer.seminerNo 
                              ? 'border-[#BDA473] ring-2 ring-[#BDA473] scale-100'
                              : 'border-gray-700 hover:scale-105 hover:shadow-2xl hover:border-[#BDA473]/50 hover:bg-gray-800'}`}
                      >
                        {nextEvent && nextEvent.seminerNo === seminer.seminerNo && (
                          <div className="absolute -top-3 right-4 bg-[#BDA473] text-white text-xs px-3 py-1 rounded-full font-medium animate-pulse shadow-lg">
                            Sıradaki
                          </div>
                        )}

                        {/* Tarih Rozeti */}
                        <div className={`
                          ${selectedSeminarId === seminer.seminerNo ? 'bg-[#8B7355]' : 'bg-[#BDA473]'}
                          rounded-lg p-2 md:p-3 -mt-10 md:-mt-12 mx-auto w-24 md:w-28 text-center shrink-0 shadow-lg z-10 transition-colors duration-300
                        `}>
                          <div className="text-xl md:text-2xl font-bold text-white">
                            {day}
                          </div>
                          <div className="text-xs md:text-sm text-white/90 capitalize">
                            {monthName}
                          </div>
                        </div>

                        {/* Başlık */}
                        <h3 className="text-white font-semibold text-base md:text-lg mt-6 text-center group-hover/card:text-[#BDA473] transition-colors line-clamp-3 min-h-[4.5rem]">
                          {seminer.title}
                        </h3>

                        {/* Konuşmacı */}
                        <div className="text-center text-[#BDA473] text-md font-medium mt-2 border-b border-gray-700 line-clamp-2 border-b border-gray-700 pb-4 mb-2">
                            {seminer.speaker}
                        </div>

                        {/* Alt Bilgiler - mt-auto yerine mt-6 kullanıldı */}
                        <div className="mt-6">
                            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm md:text-base line-clamp-2 border-b border-gray-700 pb-6 -mb-2">
                                <Clock className="w-4 h-4" />
                                <span>{seminer.time}</span>
                                <span className="w-1 h-1 bg-gray-500 rounded-full mx-1"></span>
                                <span>{seminer.year}</span>
                            </div>
                        </div>
                        
                        {/* Hover İpucu */}
                        <div className="absolute bottom-2 right-2 opacity-0 group-hover/card:opacity-100 transition-opacity text-[10px] text-[#BDA473]">
                           Detay ↓
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default SeminarTimeline;