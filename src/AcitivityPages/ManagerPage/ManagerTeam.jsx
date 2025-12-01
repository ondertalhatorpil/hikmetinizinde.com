import TeamGallery from '../../components/TeamGallery/TeamGallery';

const ManagerTeam = () => {
  const teamMembers = [
    {
      name: "Doç. Dr. Özkan ÖZTÜRK",
      title: "(Kartal AİHL Müdürü)",
      image: "images/özkanözturk1.png",
      bio: "1979 senesinde İstanbul-Kartal’da doğdu. 1997 yılında Kartal Anadolu İmam Hatip Lisesi’nden mezun oldu. 2003 senesinde Marmara Üniversitesi İlahiyat Fakültesi’nde lisans eğitimini bitirdi. Marmara Üniversitesi Sosyal Bilimler Enstitüsü’nde başladığı yüksek lisansını, 2007 yılında “Çağdaş Türk Düşüncesinde İbn Arabî Felsefesinin Ele Alınışı” başlıklı tezi ile bitirdi. 2014 yılında ise aynı enstitüde “Tasavvuf Geleneğinin Osmanlı Siyasî Düşüncesinde Tezâhürü” başlıklı doktora çalışmasını tamamladı. Her iki çalışmasını da Prof. Dr. İsmail KARA’nın danışmanlığında gerçekleştirdi. 2003-2015 yılları arasında Milli Eğitim Bakanlığı’na bağlı okullarda öğretmenlik ve idarecilik görevlerinde bulundu. 2015 yılında göreve başladığı Tekirdağ Namık Kemal Üniversitesi İlahiyat Fakültesi’nde öğretim üyeliği ve dekan yardımcılığı vazifelerinde bulundu. Tekirdağ Namık Kemal Üniversitesi İlahiyat Fakültesi’nde Doç. Dr. olarak çalışmalarına devam eden Özkan Öztürk, 25.11.2020 yılında Kartal Anadolu İmam Hatip Lisesi Müdürü olarak görevlendirildi. Öztürk, evli ve iki çocukludur."
    },
    {
      name: "Eyyup Demir",
      title: "(M. Emin Saraç Anadolu İHL Müdürü)",
      image: "images/Eyyup Demir.png",
      bio: ""
    },
    {
      name: "Dr. Sümeyye Kuşakcı",
      title: "(İbn Haldun Üniversitesi Yönetim Bilimleri Fakültesi)",
      image: "images/sumeyyekusakcı.png",
      bio: "1983 doğumlu Sümeyye Kuşakcı Avrupa’nın en iyi ekonomi üniversiteleri arasında kabul edilen Viyana Ekonomi Üniversitesi’nin İşletme Bölümü’nde birleşik lisans ve yüksek lisans eğitimini 2007 yılında tamamlamıştır. Yüksek lisansını biri Entegre Muhasebe, diğeri Stratejik Yönetim-Liderlik-Danışmanlık olmak üzere iki ayrı alanda yapmıştır. Türkiye örneğinde KOBİ’ler için Danışmanlık Sektörü – Danışmanlık Yaklaşımları, Mevcut Durum ve Tahminler başlıklı tezinde empirik bir çalışma ile Türk KOBİ’lerinin danışmanlık sektörüne bakışlarını ve mevcut danışmanlık yaklaşımlarını ortaya koymaya çalışmıştır. 2008-2015 yılları arasında Uluslararası Saraybosna Üniversitesi Ekonomi ve Yönetim Bilimleri Fakültesi’nde araştırma ve öğretim görevlisi olarak görev yapmıştır. Aynı üniversitede sürdürdüğü doktora çalışmalarını 2017 yılında tamamlamış, Yönetim Bilimleri ve Liderlik alanında doktor unvanını almaya hak kazanmıştır. Islamic Books of Advice: An Aspiration Applicable to Modern Management başlıklı doktora teziyle Türk İslam medeniyetinin kendine has liderlik anlayışını akademik düzlemde tartışmayı hedeflemiştir. Sümeyye Kuşakcı’nın çalışma alanları Liderlik, İş ahlakı, İnsan Kaynakları Yönetimi ve Stratejik Yönetim olarak sıralanabilir. Evli ve üç çocuk annesidir."
    },
    {
      name: "Prof. Dr. Özcan Erkan Akgün",
      title: "(İbn Haldun Üniversitesi Rektör Yardımcısı)",
      image: "images/Özcan Erkan Akgün Firefly Upscaler 4x scale.png",
      bio: "1999 yılında Yüksek Öğretim Kurulu Öğretim Üyesi Yetiştirme Programını kazandı. 2002 yılında Ankara Üniversitesi, Eğitim Bilimleri Enstitüsü, Eğitim Programları ve Öğretim, Eğitim Teknolojisi Yüksek Lisans Programını 2005 yılında aynı ana bilim dalında Doktora Programını tamamladı. 2006 ile 2015 yılları arasında Sakarya Üniversitesi, Eğitim Fakültesi’nde Bilgisayar ve Öğretim Teknolojileri Eğitimi bölümünde öğretim üyesi olarak çalışmaya başladı. 2010 ile 2015 yılları arasında kuruluş aşamasından itibaren (bir yıllık yurt dışı görevinin dışında) Eğitim Bilimleri Enstitüsünde Müdür Yardımcılığı yaptı. 2015 yılı Kasım ayında İstanbul Medeniyet Üniversitesi, Eğitim Bilimleri Fakültesinde göreve başladı. 2023 yılında İbn Haldun Üniversitesi, Eğitim Bilimleri Fakültesi, Eğitim Bilimleri Bölümünde öğretim üyesi olarak çalışmaya göreve başladı. Aynı Üniversitede Rektör Yardımcısı ve Eğitim Bilimleri Fakültesi Dekan Vekili olarak görevine devam etmektedir. Öğretim tasarımı, öğrenmenin geliştirilmesi, e-öğrenme, uzaktan eğitim, eğitimde teknoloji (özellikle yapay zeka) entegrasyonu, STEM, yüksek öğretimde yetkinlikler, akreditasyon, etkili öğrenme-öğretme ve öğrenme motivasyonu konularında tamamlanmış projeleri, makaleleri, bildirileri, kitap ve kitap bölümleri bulunmaktadır."
    },
    {
      name: "Cemal Yılmaz",
      title: "(MEB Personel Genel Müdürlüğü Araştırmacısı)",
      image: "images/Cemal Yılmaz.png",
      bio: "1967’da Giresun/ Şebinkarahisar’da doğdu. Ortaöğrenimini Şebinkarahisar İmam Hatip Lisesinde Okudu. Lisansını 1991’de Marmara Üniversitesi İlahiyat Fakültesinde bitirdi. Yüksek lisansı ise 2008 yılında Yeditepe Üniversitesinde Eğitim Yönetimi ve Denetimi Alanında Yaptı. 2 yıl Divriği, Sarıyer, Kâğıthane, Pendik ve Fatih’te öğretmenlik yaptı. 10 yıl İstanbul’da Özel Birikim Eğitim Kurumlarının Genel Müdürlüğünü yaptı. 2014-2018 yılları arası beş yıl Küçükçekmece İlçe Mili Eğitim Müdürlüğü yaptı. 2018-2021 yılları arasında üç yıl Kahramanmaraş İl Milli Eğitim Müdürlüğü yaptı. Halen Milli Eğitim Bakanlığı Personel Genel Müdürlüğünde Araştırmacı olarak çalışıyor. Yurt içinde ve yurt dışında, eğitim, aile ve gençlik konularında konferanslar veriyor. Çok sayıda STK´nın yönetim kademelerinde görevleri bulunuyor.  Evli ve beş çocuk babası"
    },
    {
      name: "Yıldırım Alkış",
      title: "(Yıldırım Alkış, Eğitimci-Yazar)",
      image: "images/Yıldırım Alkış Firefly Upscaler 4x scale.png",
      bio: `1963 Göksun doğumlu olan Yıldırım Alkış, Selçuk Üniversitesi İlahiyat Fakültesi mezunudur ve 1985 yılından 2018'deki emekliliğine kadar eğitim ve idarecilik alanında kapsamlı bir kariyere sahiptir. Kariyerine Ceyhan'da Din Kültürü ve Ahlak Bilgisi öğretmenliği ile başlayan Alkış, özellikle Kahramanmaraş, Türkoğlu ve Mersin Anadolu İmam Hatip Liselerinde uzun yıllar öğretmenlik ve okul müdürlüğü görevlerinde bulunmuştur. Eğitim yönetimi tecrübesini, 2012-2014 yıllarında yürüttüğü Kars İl Millî Eğitim Müdürlüğü göreviyle zirveye taşımıştır. Ayrıca, Ağrı İbrahim Çeçen Üniversitesi'nde Öğrenci İşleri Daire Başkanlığı yapmış ve Eğitim Fakültesinde psikoloji, edebiyat ve bilim tarihi dersleri okutmuştur. Çalışma hayatının son dönemlerinde ise Türkiye Diyanet Vakfı Yurtlar ve Sosyal Tesisler İktisadi İşletmesi Müdürlüğü yapmıştır. Alkış, mesleki çalışmalarının yanı sıra seminer ve cami sohbetlerine aralıksız devam etmiş, sivil toplum kuruluşlarında aktif roller üstlenmiş, İmam Hatip Lisesi yayın organlarında (Dost ve Gonca) yazılar yazmış ve aralarında "Hafız Ali Efendi ve Mücadelesi" ile "Öğretmenlik Sanatı" gibi yedi adet basılı esere sahiptir.`
    },
    {
      name: "Dr. Muhammed Çelik",
      title: "(İstanbul Eğitim Dergisi Baş Editörü)",
      image: "images/muhammedçelik.png",
      bio: "1986 yılında Tokat’ta doğdu. İlkokulu Tokat’ta, ortaokul ve liseyi İstanbul’da tamamladı. 2008 yılında Selçuk Üniversitesi Eğitim Fakültesi İngilizce Öğretmenliği bölümünden mezun oldu. 2013 yılında Sakarya Üniversitesi Eğitim Bilimleri Enstitüsü Eğitim Yönetimi ve Denetimi Anabilim Dalı’nda yüksek lisans, 2019 yılında ise aynı alandaki doktora eğitimini Bolu Abant İzzet Baysal Üniversitesi’nde tamamladı. Millî Eğitim Bakanlığına bağlı yurt içi ve yurt dışı (Cidde Uluslararası Türk Okulu, Suudi Arabistan) her kademe okulda (ilkokul, ortaokul, lise, imam hatip, bilsem), bazı AB ve ABD projelerinde (Erasmus Öğrenci Değişim Programı, Piktes+, Comenius, Grundtvig, Work and Travel), çeşitli özel kurum ve sivil toplum örgütlerinde öğretmenlik, idarecilik, proje uzmanlığı, editörlük ve liderlik görevlerinde bulundu. Hâlen İstanbul İl Millî Eğitim Müdürlüğü bünyesinde gerçekleştirilen akademik kongrelerin planlanması ve yürütülmesinde aktif görev almakta; ayrıca yayıma hazırlanan hakemli bir akademik yayın olan İstanbul Eğitim Dergisi'nin başeditörlüğü görevini yürütmektedir."
    },
    {
      name: "Doç. Dr. Yasin Çakırel",
      title: "(Proje Danışmanı)",
      image: "images/yasinel.png",
      bio: "1982 yılında Kırklareli’nde doğdu. 1999 yılında Kırklareli İmam Hatip Lisesi’nden mezun oldu. İstanbul Üniversitesinde İşletme Yönetimi ve Organizasyon alanında doktorasını verdi. Halen Kırklareli Üniversitesi İktisadi İdari Bilimler Fakültesi’nde öğretim üyesi olarak çalışmalarını sürdürüyor. Uluslararası hakemli dergilerde makaleleri ve çeşitli yayınevlerinde kitapları yayınlandı. İyi derecede İngilizce biliyor."
    },
  ];
  return (
    <TeamGallery
      title="Hocalarımız"
      subtitle="Hocalarımızla Bilgiye Yolculuk"
      overlineText=""
      members={teamMembers}
      cardWidth={400}
      visibleCards={3}
    />
  );
};

export default ManagerTeam;