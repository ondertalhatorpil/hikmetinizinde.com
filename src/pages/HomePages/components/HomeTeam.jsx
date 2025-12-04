import TeamGallery from "../../../components/TeamGallery/TeamGallery";

const HomeTeam = () => {
  const teamMembers = [
    {
      name: "Prof. Dr. Recep Şentürk",
      title: "Akademik Danışman",
      image: "/images/recepsenturk.png",
      bio: "1964’te Çankırı’da doğdu. Lisans eğitimini Marmara Üniversitesi İlahiyat Fakültesinde, yüksek lisansını İstanbul Üniversitesi Edebiyat Fakültesi Sosyoloji Bölümden tamamladı. Aynı bölümde asistanlık yaptı. Columbia Üniversitesi Sosyoloji Bölümünde doktorasını tamamladı. 1998-2007 yılları arasında İSAM’da araştırmacı olarak çalıştı. Fatih Sultan Mehmet Vakıf Üniversitesi Medeniyetler İttifakı Enstitüsü kuruluşunda görev aldı. Atlanta’da Emory Üniversitesi Hukuk Fakültesinde misafir araştırmacı olarak bulundu. Oxford Brookes Üniversitesi Sosyal Bilimler ve Hukuk Fakültesi’nde çalışmalarını yürüttü. 2003 yılında doçent, 2008 yılında profesör oldu. Kurucu rektör olarak atandığı İbn Haldun Üniversitesi’nde 2021 yılına kadar bu görevi yürüttü. Halen Hamad Bin Khalifa üniversitesi İslami İlimler Fakültesi dekanıdır. Türkçe, İngilizce ve Arapça birçok kitap ve makale yayını vardır.",
    },
    {
      name: "Ahmet YAPICI ",
      title: "İHAMER Başkanı",
      image: "images/Ahmet YAPICI.png",
      bio: "İlahiyat alanında lisans (2000), Din Sosyolojisi alanında yüksek lisans (2012) eğitimlerini Marmara Üniversitesinde tamamladı. 10 yıl Diyanet İşleri Başkanlığında çalıştıktan sonra Millî Eğitim Bakanlığı bünyesinde imam hatip lisesi meslek dersleri kitapları, din dersi kitapları ve seçmeli din dersleri kitapları yazarlığı; öğretmen, müdür yardımcısı, okul müdürü ve şube müdürlüğü yaptı. Hâlen İstanbul İl Millî Eğitim Müdür Yardımcısı olarak görev alan Ahmet Yapıcı'nın İnanmış Bir Adam Mehmet Akif Ersoy, Tekkeler ve Cumhuriyet, Ailemizle 52 Ders Serisi gibi yayımlanmış kitapları vardır ve Gümüş Kalemler yazar grubu üyesidir.",
    },
    {
      name: "Sinan Özyurt",
      title: "ÖNDER Genel Başk. Yard.",
      image: "/images/sinanozyurt.png",
      bio: "1977 yılında Erzurum’un Hınıs ilçesinde dünyaya geldi. İlk ve ortaöğrenimini memleketi olan Trabzon’un Araklı ilçesinde tamamladı. 1994 yılında Araklı İmam Hatip Lisesinden mezun oldu. Aynı yıl başladığı Marmara Üniversitesi İlahiyat Fakültesini 2000 yılında bitirdi. 1998 – 2002 yılları arasında farklı üniversitelerden arkadaşlarıyla birlikte “Yürüyüş” dergisini çıkardı. 28 Şubat sürecine şahitlik eden ve tavır koyan dergide yayınlanan başörtüsü yasağını eleştiren yazıları nedeniyle zamanın Türk Ceza Kanunun 312. maddesine istinaden 3 ayrı davadan yargılandı ve beraat etti. 2000 yılında başladığı ve ara vermek zorunda kaldığı İslam Mezhepleri Tarihi alanındaki yüksek lisansını 2010 yılında tamamladı. Aynı yıl halen yürütmekte olduğu öğretmenlik görevine başladı. Yazıları; Yürüyüş, Siyer-i Nebi, Cafcaf, CF, Genç Düşünce, Temmuz ve Hancı dergilerinde yayınlandı. Evli ve dört çocuk babasıdır.",
    },
    {
      name: "Muhammed Furkan TATLI ",
      title: "Proje Koordinatörü",
      image: "images/Muhammed Furkan TATLI.png",
      bio: "2001 yılında İstanbul’da doğan Muhammed Furkan TATLI, klasik İslami ilimler alanındaki dört yıllık medrese eğitiminin ardından 2025 yılında İstanbul Üniversitesi İlahiyat Fakültesi’nden mezun olmuştur. Medrese geleneğine dayalı eğitimle modern ilahiyat perspektifini birleştiren Muhammed Furkan, özellikle İslam hukukunda değişim olgusu, mezhepler tarihi ve din eğitimi üzerine çalışmalar yürütmektedir. Hâlihazırda İHAMER’de araştırmacı olarak görev yapmakta ve din eğitimi alanındaki kurumsal araştırmalara katkı sunmaktadır.",
    },
    {
      name: "Suzan Ören",
      title: "Proje Koordinatörü",
      image: "/images/suzanoren.png",
      bio: "Atatürk Üniversitesi Fen Edebiyat Fakültesi Türk Dili ve Edebiyatı bölümünü bitirdi. Çesitli STK'larda eğitim koordinatörlüğü yaptı. Farklı dergilerde kitap tanıtımı yazıları yazdı. Özel ,  kamu kurum ve kuruluşlarında görev aldı. Halen İstanbul' da bir İmam hatip lisesinde ögretmenlik yapmaktadır.",
    },
    {
      name: "Doç.Dr. Özkan ÖZTÜRK",
      title: "Kartal AİHL Müdürü",
      image: "images/özkanözturk1.png",
      bio: "1979 senesinde İstanbul-Kartal’da doğdu. 1997 yılında Kartal Anadolu İmam Hatip Lisesi’nden mezun oldu. 2003 senesinde Marmara Üniversitesi İlahiyat Fakültesi’nde lisans eğitimini bitirdi. Marmara Üniversitesi Sosyal Bilimler Enstitüsü’nde başladığı yüksek lisansını, 2007 yılında “Çağdaş Türk Düşüncesinde İbn Arabî Felsefesinin Ele Alınışı” başlıklı tezi ile bitirdi. 2014 yılında ise aynı enstitüde “Tasavvuf Geleneğinin Osmanlı Siyasî Düşüncesinde Tezâhürü” başlıklı doktora çalışmasını tamamladı. Her iki çalışmasını da Prof. Dr. İsmail KARA’nın danışmanlığında gerçekleştirdi. 2003-2015 yılları arasında Milli Eğitim Bakanlığı’na bağlı okullarda öğretmenlik ve idarecilik görevlerinde bulundu. 2015 yılında göreve başladığı Tekirdağ Namık Kemal Üniversitesi İlahiyat Fakültesi’nde öğretim üyeliği ve dekan yardımcılığı vazifelerinde bulundu. Tekirdağ Namık Kemal Üniversitesi İlahiyat Fakültesi’nde Doç. Dr. olarak çalışmalarına devam eden Özkan Öztürk, 25.11.2020 yılında Kartal Anadolu İmam Hatip Lisesi Müdürü olarak görevlendirildi. Öztürk, evli ve iki çocukludur.",
    },
    {
      name: "Enes KAVAS",
      title: "Proje Ekibi",
      image: "images/Enes KAVAS.png",
      bio: `Enes Kavas, İstanbul Şehir Üniversitesi İslami İlimler Bölümü'nden 2020 yılında lisans derecesiyle mezun olmuştur. Yüksek lisans eğitimini 2023 yılında İstanbul 29 Mayıs Üniversitesi Manevi Danışmanlık ve Rehberlik Anabilim Dalı'nda, "Askeriyede Manevi Danışmanlık ve Rehberlik" başlıklı teziyle tamamlamıştır. Akademik çalışmalarına 2024 yılında kabul edildiği İstanbul Üniversitesi Din Eğitimi Doktora Programı'nda devam etmektedir. Temel akademik ilgi ve çalışma alanları manevi danışmanlık, müzik terapi ve din eğitimi konularında yoğunlaşmaktadır. Aktif olarak İmam Hatip Araştırmaları Merkezi (İHAMER) bünyesinde araştırmacı olarak görev yapmakta ve Talim Dergisi'nin çeşitli editoryal süreçlerinde yer almaktadır.`,
    },
    {
      name: "Kamil Karakurt",
      title: "Proje Ekibi",
      image: "/images/kamil karakurt.png",
      bio: "1984 yılında Konya’da doğdu. 2002-2011 yılları arasında Konya bölgesi futbol hakemi olarak görev yaptı. 2007 yılında Necmettin Erbakan Üniversitesi Eğitim Fakültesi Fen Bilgisi öğretmenliğinden mezun oldu. 2011 yılında Kamu Personeli Seçme Sınavında kendi branşında Türkiye 25.’si olarak İstanbul Küçükçekmece Yunus Emre Ortaokulu’na ilk ataması gerçekleşti. 2017 yılında İstanbul Üniversitesi Açıktan ve Uzaktan Eğitim Fakültesi Sosyoloji lisans eğitimini, 2019 yılında Anadolu Üniversitesi Açık öğretim Fakültesi Adalet ön lisans bölümünü tamamladı. 2015-2018 yılları arasında önce Bahçelievler Prof. Dr. Osman Öztürk İmam Hatip Ortaokulu’nda sonra Kudret Saraçoğlu İmam Hatip Ortaokulunda müdür yardımcılığı yaptı. Bahçelievler 15 Temmuz Şehitleri Anadolu İmam Hatip Lisesi’nde fen bilimleri öğretmenliğine devam etmektedir",
    },
    {
      name: "Muhammed ÇELİK ",
      title: "Proje Ekibi",
      image: "/images/muhammedçelik.png",
      bio: "1986 yılında Tokat’ta doğdu. İlkokulu Tokat’ta, ortaokul ve liseyi İstanbul’da tamamladı. 2008 yılında Selçuk Üniversitesi Eğitim Fakültesi İngilizce Öğretmenliği bölümünden mezun oldu. 2013 yılında Sakarya Üniversitesi Eğitim Bilimleri Enstitüsü Eğitim Yönetimi ve Denetimi Anabilim Dalı’nda yüksek lisans, 2019 yılında ise aynı alandaki doktora eğitimini Bolu Abant İzzet Baysal Üniversitesi’nde tamamladı. Millî Eğitim Bakanlığına bağlı yurt içi ve yurt dışı (Cidde Uluslararası Türk Okulu, Suudi Arabistan) her kademe okulda (ilkokul, ortaokul, lise, imam hatip, bilsem), bazı AB ve ABD projelerinde (Erasmus Öğrenci Değişim Programı, Piktes+, Comenius, Grundtvig, Work and Travel), çeşitli özel kurum ve sivil toplum örgütlerinde öğretmenlik, idarecilik, proje uzmanlığı, editörlük ve liderlik görevlerinde bulundu. Hâlen İstanbul İl Millî Eğitim Müdürlüğü bünyesinde gerçekleştirilen akademik kongrelerin planlanması ve yürütülmesinde aktif görev almakta; ayrıca yayıma hazırlanan hakemli bir akademik yayın olan İstanbul Eğitim Dergisi'nin başeditörlüğü görevini yürütmektedir.",
    },
    {
      name: "Sema Bekiroğlu",
      title: "Proje Ekibi",
      image: "images/semabekireoğlu.png",
      bio: "Lisans eğitimini 1999’da Marmara Üniversitesi Atatürk Eğitim Fakültesi Tarih Öğretmenliği Bölümünde tamamladı. Yüksek lisans eğitimine Sabahattin Zaim Üniversitesi Sosyal Bilimler Enstitüsü’nde Tarih ve Medeniyet Araştırmaları dalında devam ederek 2020 yılında “Sadettin Ökten’de Medeniyet Tasavvuru ve Çağdaşı Düşünürlerle Mukayesesi” başlıklı tezini yazdı. 2022’de Sadettin Ökten ve Medeniyet Tasavvuru kitabı yayımlandı.",
    },
    {
      name: "Sultan Tekin",
      title: "Proje Ekibi",
      image: "/images/sultantekin.png",
      bio: "1988 yılında Tekirdağ’da doğdu. 2005 yılında Tekirdağ Tuğlacılar Süper Lisesi’nden mezun oldu. Aynı yıl başladığı Kocaeli Üniversitesi Matematik Öğretmenliği bölümünü 2009 yılında tamamladı. 2012 yılında Kamu Personeli Seçme Sınavı’nda 94,56 puan aldı ve Türkiye 240.sı olup kendi branşında derece yaparak İstanbul’a atandı. 2012-2014 yılları arasında Akşemsettin Kız Anadolu İmam Hatip Lisesi’nde, 2014-2023 yılları arasında Şehit Muhammed Aksu Kız Anadolu İmam Hatip Lisesi’nde görev yapmıştır. Halen Üsküdar Ali Fuat Başgil Kız Anadolu İmam Hatip Lisesi’nde matematik öğretmenliği görevine devam etmektedir. Öğrenciliğinde İmam Hatip okullarında okuyamasa da, İstanbul’a atandığı yıldan itibaren İmam Hatip okullarında görev yapmaktadır. 2024 yılında Fatih Sultan Mehmet Vakıf Üniversitesi Bilim Tarihi Tezli Yüksek Lisans programından mezun oldu.",
    },
    {
      name: "Yunus Vehbi KARAMAN ",
      title: "Proje Ekibi",
      image: "images/yunusvehbikaraman.png",
      bio: "Lisans eğitimini Samsun Ondokuz Mayıs Üniversitesi Eğitim Fakültesi’nde aldı. Yüksek lisans eğitimini 2020 yılında İstanbul Sabahattin Zaim Üniversitesi Sosyoloji Bölümü’nde tamamladı. Halihazırda İstanbul Medeniyet Üniversitesi Sosyoloji Bölümü’nde doktora eğitimine devam etmektedir. Toplumsal hareketler, toplumsal değişim, eğitim, tabakalaşma ve sosyal hareketlilik alanlarına ilgi duymaktadır.",
    },
   
   
  ];

  return (
    <TeamGallery
      title="Ekibimiz"
      subtitle=""
      overlineText=""
      members={teamMembers}
      cardWidth={400}
      visibleCards={3}
    />
  );
};

export default HomeTeam;
