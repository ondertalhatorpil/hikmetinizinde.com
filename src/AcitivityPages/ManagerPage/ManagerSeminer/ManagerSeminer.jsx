import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import SeminerCard from '../../../components/Seminer/Seminer';
import './Seminer.css'

const Seminer = () => {
  const [selectedSeminar, setSelectedSeminar] = useState(null);

  // --- GÜNCELLENEN KISIM BAŞLANGICI ---
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && hash.includes('#seminar-')) {
        const seminarNumber = parseInt(hash.replace('#seminar-', ''));
        setSelectedSeminar(seminarNumber);

        // Masonry ve render işleminin oturması için ufak bir gecikme
        setTimeout(() => {
          const element = document.getElementById(`seminar-${seminarNumber}`);
          
          if (element) {
            // 1. Elementin konumunu ve boyutunu al
            const elementRect = element.getBoundingClientRect();
            const absoluteElementTop = elementRect.top + window.pageYOffset;
            const elementHeight = elementRect.height;

            // 2. Pencere yüksekliğini al
            const windowHeight = window.innerHeight;

            // 3. HESAPLAMA: (Elementin Tepesi) - (Ekranın Yarısı) + (Elementin Yarısı)
            // Bu işlem elementi ekranın tam göbeğine oturtur.
            const scrollToCenter = absoluteElementTop - (windowHeight / 2) + (elementHeight / 2);

            window.scrollTo({
              top: scrollToCenter,
              behavior: 'smooth'
            });
          }
        }, 200); // 200ms gecikme animasyonların çakışmaması için idealdir

      } else {
        setSelectedSeminar(null);
      }
    };

    // Sayfa yüklendiğinde ve hash değiştiğinde çalıştır
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  // --- GÜNCELLENEN KISIM SONU ---

  const breakpointColumns = {
    default: 3,
    1200: 2,
    768: 1
  };

  const seminerler = [
    {
      seminerNo: 1,
      title: "Bir Okul Yönetmek: Geleneksel Bilgelik ile Modern Liderlik Arasında",
      speakers: [
        {
          name: "Doç. Dr. Özkan Öztürk",
          institution: "Kartal AİHL Müdürü",
          image: "images/özkanözturk1.png",
        }
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "Bir Okul Yönetmek: Geleneksel Bilgelik ile Modern Liderlik Arasında",
            speaker: "Doç. Dr. Özkan Öztürk",
            startDate: "24 Aralık 2025 Çarşamba",
            endDate: "19.00"
          }
        ]
      }
    },
    {
      seminerNo: 2,
      title: "Okul İklimi ve Kurum Kültürü",
      speakers: [
        {
          name: "Eyyup Demir",
          institution: "M. Emin Saraç Anadolu İHL Müdürü",
          image: "images/Eyyup Demir.png",
        }
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "Okul İklimi ve Kurum Kültürü",
            speaker: "Eyyup Demir",
            startDate: "31 Aralık 2025 Çarşamba",
            endDate: "19.00"
          }
        ]
      }
    },
   
    {
      seminerNo: 3,
      title: "Köklerden Kanatlara: Motivasyonu Yeniden İnşa Etmek",
      speakers: [
        {
          name: "Dr. Sümeyye Kuşakcı",
          institution: "İbn Haldun Üniversitesi Yönetim Bilimleri Fakültesi",
          image: "images/sumeyyekusakcı.png",
        }
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "Köklerden Kanatlara: Motivasyonu Yeniden İnşa Etmek",
            speaker: "Dr. Sümeyye Kuşakcı",
            startDate: "7 Ocak 2026 Çarşamba",
            endDate: "19.00"
          }
        ]
      }
    },
    {
      seminerNo: 4,
      title: "Stratejik Yönetim ve Veriye Dayalı Karar Verme",
      speakers: [
        {
          name: "Prof. Dr. Özcan Erkan Akgün",
          institution: "İbn Haldun Üniversitesi Rektör Yardımcısı",
          image: "images/Özcan Erkan Akgün Firefly Upscaler 4x scale.png",
        }
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "Stratejik Yönetim ve Veriye Dayalı Karar Verme",
            speaker: "Prof. Dr. Özcan Erkan Akgün",
            startDate: "14 Ocak 2026 Çarşamba",
            endDate: "19.00"
          }
        ]
      }
    },
    {
      seminerNo: 5,
      title: "Adanmış Yönetici Olmak",
      speakers: [
        {
          name: "Cemal Yılmaz",
          institution: "MEB Personel Genel Müdürlüğü Araştırmacısı",
          image: "images/Cemal Yılmaz.png",
        }
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "Adanmış Yönetici Olmak",
            speaker: "Cemal Yılmaz",
            startDate: "21 Ocak 2026 Çarşamba",
            endDate: "19.00"
          }
        ]
      }
    },
    {
        seminerNo: 6,
        title: "Yönetimde Güzel Örnekler",
        speakers: [
          {
            name: "Yıldırım Alkış",
            institution: "Eğitimci-Yazar",
            image: "images/Yıldırım Alkış Firefly Upscaler 4x scale.png",
          }
        ],
        detailData: {
          sessions: [
            {
              number: 1,
              title: "Yönetimde Güzel Örnekler",
              speaker: "Yıldırım Alkış",
              startDate: "28 Ocak 2026 Çarşamba",
              endDate: "19.00"
            }
          ]
        }
      },
      {
        seminerNo: 7,
        title: "Kapsayıcı Liderlik Yaklaşımları ve Öğrenme Ortamlarına Etkisi",
        speakers: [
          {
            name: "Dr. Muhammed Çelik",
            institution: "İstanbul Eğitim Dergisi Baş Editörü",
            image: 'images/muhammedçelik.png'
          }
        ],
        detailData: {
          sessions: [
            {
              number: 1,
              title: "Kapsayıcı Liderlik Yaklaşımları ve Öğrenme Ortamlarına Etkisi",
              speaker: "Dr. Muhammed Çelik",
              startDate: "4 Şubat Çarşamba",
              endDate: "19.00"
            }
          ]
        }
      },
      {
        seminerNo: 8,
        title: "Yöneticilikte İletişim ve İnsan İlişkileri",
        speakers: [
          {
            name: "Doç. Dr. Yasin Çakırel",
            institution: "Proje Danışmanı",
            image: "images/yasinel.png",
          }
        ],
        detailData: {
          sessions: [
            {
              number: 1,
              title: "Yöneticilikte İletişim ve İnsan İlişkileri",
              speaker: "Doç. Dr. Yasin Çakırel",
              startDate: "11 Şubat Çarşamba",
              endDate: "19.00"
            }
          ]
        }
      },
      
      
  ];

  return (
    <div className="min-h-screen py-20 md:py-24">
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-[#BDA473] to-[#BDA473] bg-clip-text text-transparent">
          Seminerler
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-white/90 font-light w-full md:w-[70%] mx-auto leading-relaxed">
          Farklı Perspektiflerle Derinlemesine Öğrenin
        </p>
      </div>
        
        <Masonry
          breakpointCols={breakpointColumns}
          className="hi-masonry-grid"
          columnClassName="hi-masonry-grid_column"
        >
          {seminerler.map((seminer, index) => (
            <div 
              id={`seminar-${seminer.seminerNo}`} 
              key={seminer.seminerNo + '-' + index}
              className={`seminar-card-wrapper transition-all duration-700 
                ${selectedSeminar === seminer.seminerNo ? 'scale-105' : ''}`}
            >
              <div className={`relative ${
                selectedSeminar === seminer.seminerNo 
                  ? 'ring-4 ring-[#D3BD92] rounded-lg shadow-2xl animate-highlight'
                  : ''}`}
              >
                {selectedSeminar === seminer.seminerNo && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 
                    bg-[#D3BD92] text-black text-sm px-4 py-1 rounded-full 
                    font-medium z-10 whitespace-nowrap animate-bounce">
                    Seçili Seminer
                  </div>
                )}
                <SeminerCard {...seminer} />
              </div>
            </div>
          ))}
        </Masonry>
      </div>

      <style jsx>{`
        .seminar-card-wrapper {
          transition: all 0.5s ease-in-out;
        }

        .animate-highlight {
          animation: highlight 2s ease-in-out infinite;
        }

        @keyframes highlight {
          0% {
            box-shadow: 0 0 0 0 rgba(211, 189, 146, 0.4);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(211, 189, 146, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(211, 189, 146, 0);
          }
        }

        .animate-bounce {
          animation: bounce 1s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(-5px) translateX(-50%);
          }
          50% {
            transform: translateY(0) translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Seminer;