import TeamGallery from '../../components/TeamGallery/TeamGallery';

const TeacherTeam = () => {
  const teamMembers = [
    {
      name: "Zekeriya Çelik",
      title: "(Eğitimci)",
      image: "images/Zekeriya Çelik.png",
      bio: "1962 yılında Konya'da doğdu ilkokul ortaokul İmam Hatip lisesi ve İlahiyat Fakültesini Konya'da okudu. 1986 yılında İstanbul Sarıyer'de Yaşar Dedeman okulunda öğretmenliğe başladı. O günden bugüne aynı okulda öğretmenliğe devam etmektedir. Çeşitli dergilerde İslami konularda makaleler yazdı. Sarıyer’de FERAHDER derneği başta olmak üzere çeşitli derneklerin kuruculuğunu yaptı... İslam'ı dernek ve vakıflarda davet konuşmaları konferans ve seminerler veriyor. Cuma akşamları FERAHDER derneğinde ve YouTube üzerinden canlı Tefsir ve hadis derslerine devam etmektedir."
    },
    {
      name: "Abdullah Açık",
      title: "(Öğretmen)",
      image: "images/Abdullah Açık Firefly Upscaler 2x scale.png",
      bio: `Marmara Üniversitesi İlahiyat Fakültesi'nden mezun olan ve aynı üniversitede Hadis alanında Yüksek Lisansını tamamlayan Abdullah Açık, 1995 yılından bu yana DİKAB Öğretmenliği ve idarecilik pozisyonlarında 25 yılı aşkın köklü bir mesleki deneyime sahiptir. Kariyeri boyunca hem MEB'e bağlı okullarda (Rauf Orbay, Fatih İmam Hatip, Hakkı Demir Anadolu İHL) hem de özel eğitim kurumlarında (Özel Derya Öncü, Özel Büyük Çamlıca) görev almıştır. Eğitim alanındaki uzmanlığı, özellikle Kur'an-ı Kerim öğretim yöntemleri üzerine yoğunlaşmıştır; bu alanda 2004 yılından itibaren teorik ve uygulamalı çalışmalar yürütmüş, "Ses Temelli Elif Ba" ve "Öğretmen Kitabı" adlı yayınları telif etmiş, Diyanet TV'de yayınlanan 30 bölümlük bir programda görev almış ve MEB kitap yazım komisyonunda yer almıştır. Ayrıca, 4-6 yaş Kur'an öğretimi yöntemleri üzerine seminerler vermekte ve Ensar Vakfı gibi çeşitli kurumlarda eğitimler düzenlemektedir. Sahip olduğu dil becerileri arasında Dimaşk Üniversitesi'nde tamamladığı eğitimlerle edindiği iyi düzeyde (konuşma seviyesinde) Arapça ve orta düzeyde İngilizce bulunmaktadır. Açık, aynı zamanda İzcilik Federasyonuna bağlı Şafak İzci Kulübü'nün kurucuları arasında yer alarak, on beş yılı aşkın süre izcilik eksenli din eğitimi çalışmaları da yapmıştır.`
    },
    {
      name: "Gülsüm Arslan ",
      title: "(Öğretim Görevlisi - Hafız )",
      image: "images/Gülsüm Arslan.png",
      bio: "Sivas-Gürün doğumlu olup lisans eğitimlerini Anadolu Üniversitesi İktisadi ve İdari Bilimler Fakültesi “Kamu Yönetimi” bölümü ile Dokuz Eylül Üniversitesi İlahiyat Fakültesi’nde, yüksek lisans (tezli) eğitimini ise İstanbul Sabahattin Zaim Üniversitesi (İZÜ) Temel İslam Bilimleri Anabilim Dalı “Kırâat” alanında tamamlamıştır. Otuz yaşında başlamış olduğu hafızlık eğitimini iki yılda tamamlamıştır. Uzun yıllar tasavvuf mûsikîsi nazariyat eğitimi almıştır. Diyanet İşleri Başkanlığı ve MEB’e bağlı muhtelif kurumların yanı sıra sivil toplum kuruluşlarında (STK) “tashîh-i hurûf” ve Kur’an kırâatinde mûsikî makamlarının kullanımına dair dersleri vermiştir. 2019 yılından itibaren İstanbul Sabahattin Zaim Üniversitesi (İZÜ) İslami İlimler Fakültesi’nde Kur’ân-ı Kerîm ve tecvîd dersleri “öğretim görevlisi” olarak görev yapmaktadır. Bunun yanı sıra hafızlık eğitimi yapılan İHL ve Kur’an kurslarında hafızlık eğitim koordinatörlüğü yapmaktadır. İHL’lerdeki bu uygulamaların Gülsüm Arslan’ın koordinatörlüğünde daha nitelikli ve sitemli yapılabilmesi için MEB-Din Öğretimi Genel Müdürlüğü ile İZÜ arasında Gülsüm Arslan’ın koordinatörlüğünde bir protokol imzalanmıştır. Gülsüm Arslan’ın “75 Günde Koro, Musiki Makamları ve Mana-Mealle Hafızlık” adıyla geliştirip farklı kurumlarda pek çok (yaklaşık 23) uygulamasını yaptığı yöntemine Kültür ve Turizm Bakanlığı “Te’lif Hakları”nca “patent” verilmiştir. Yine bu alanda tercüme-te’lif makaleleri ve Örgün Eğitim Kapsamında Hafızlık (2021), 75 Günde Hafızlık: Yeni Nesil Hafızlık Modeli (2025) adlı kitapları ve Ayet Ayet Açılan Kapılar: Zihin Haritalarıyla Sureler ve Dualar (2025/Oğuz Saygın ile) kitapları bulunmaktadır."
  },
  {
    name: "Mesut Çakır",
    title: "(FSM Vakıf Üniversitesi İslami İlimler Fakültesi)",
    image: "images/mesutcakir.png",
    bio: "Tokat’ın Erbaa ilçesinde doğdu. İlk, orta ve lise öğrenimini Erbaa’da tamamladı. 2004 yılında İstanbul Üniversitesi İlahiyat Fakültesi’nden mezun olduktan sonra aynı yıl Marmara Üniversitesi Sosyal Bilimler Enstitüsü Hadis Anabilim Dalı’nda yüksek lisans eğitimine başladı. 2007 yılında “Fezâilü’l-Kur’ân Hadisleri Çerçevesinde Kur’ân’ın Ezberlenmesi ile İlgili Rivayetlerin Tahrîc ve Değerlendirmesi” başlıklı teziyle yüksek lisansını tamamladı. 2018 yılında Sakarya Üniversitesi Sosyal Bilimler Enstitüsü Hadis Anabilim Dalı’nda hazırladığı “İmam Birgivî’nin Kitâbu’l-Îmân Adlı Eserinin Tahkik ve Tahlili” adlı doktora teziyle “Doktor” unvanını aldı. 2004–2020 yılları arasında Diyanet İşleri Başkanlığı’na bağlı olarak İmam-Hatiplik görevinde bulundu. İlahiyat tahsili süresince ve sonrasında Merhum M. Emin Saraç Hocaefendinin ilim halkasında derslere devam etti. Kasım 2020 itibarıyla Fatih Sultan Mehmet Vakıf Üniversitesi İslami İlimler Fakültesi Hadis Anabilim Dalı’nda Dr. Öğretim Üyesi olarak çalışmalarına devam etmektedir. Hâlihazırda Öğretim Üyeliği görevinin yanında Fakülte Dekan Yardımcılığı, Fakülte Kurulu üyeliği ve Fakülte Yönetim Kurulu üyeliği görevlerini sürdürmektedir. Hadis alanında telif ve tercüme çalışmaları ile çeşitli akademik dergilerde yayımlanmış makaleleri bulunmaktadır."
},
{
  name: "İbrahim Tığlı",
  title: "(Gazeteci)",
  image: "images/İbrahim Tığlı.png",
  bio: "İbrahim Tığlı, gazeteciliğe Akif Emre yönetimindeki Dünya Bülteni haber sitesinde başladı. TRT Türk için Güney Afrika'nın Cape Town şehrinde muhabir olarak çalıştı. Anadolu Ajansı'nın Afrika editörlüğü kuruluşunda yer aldı ve Etiyopya'nın Addis Ababa kentindeki Afrika Haber Müdürlüğü görevini üstlendi. Yeni Şafak gazetesinde ve Gerçek Hayat dergisinde Afrika konusunda yazılar kaleme aldı. Daily Africa News ve Merhaba Afrika haber sitelerinde geneldaha az okuyayın yönetmenliği yaptı. 500'den fazla makalesi bulunan Tığlı, şu anda bağımsız bir gazeteci olarak kariyerine devam etmektedir."
},
{
  name: "Peren Birsaygılı Mut",
  title: "(Yazar, Belgesel Metin Yazarı, Yayıncı)",
  image: "/images/Peren Birsaygılı.png",
  bio: `İzmir doğumlu olan ve Tarih eğitimi alan bu yazar ve editör, kariyerini belgesel film metin yazarlığı ve yayın editörlüğü yaparak sürdürmektedir. Küçük yaşlardan itibaren edebiyata ilgi duyan yazar, çalışmalarını özellikle Filistin edebiyatı ve direniş tarihi üzerine yoğunlaştırmıştır. Arap dünyasında Türkiye tezlerini savunan ilk Ermeni Soykırımı belgeseli olan "Common Pain, Ortak Acı" (2011) ve Filistin edebiyatını konu alan "Sürgündeki Sevda Filistin" (2016) gibi önemli belgesellerin metin yazarlığını üstlenmiştir. Filistin edebiyatı üzerine yaptığı derin araştırmalarla tanınan yazar, **2022'de "Nizar Kabbani Nişanı"**nı alan ilk Türk olmuş, ayrıca 2023 Tyb Özel Ödülü ve 2025 Necip Fazıl Fikir Araştırma Ödülü gibi önemli ödüllerin sahibidir. Başlıca eserleri arasında "Zeytin Ağaçlarının Arasında: Filistin Direniş Edebiyatından Portreler" (2018) ve "İsrail'in Zihin Haritası; Siyonist Edebiyat" (2025) bulunmaktadır.`
},
    
    {
      name: "Dr. Aytaç Ören",
      title: "(Sağlık Bilimleri Üniversitesi Öğretim Üyesi)",
      image: "images/Aytaç Ören Firefly Upscaler 4x scale.png",
      bio: "1972 Ankara doğumludur. 1997 yılı Atatürk Üniversitesi Kazım Karabekir Eğitim Fakültesi İngilizce Öğretmenliği Bölümü mezunudur. Samuel Beckett’in Godot’yu Beklerken üzerine yüksek lisans tezi ve David Lodge’un kampüs romanlarında üstkurmaca üzerine doktora çalışması vardır. İngiliz edebiyatının önde gelen isimlerinden David Lodge’un Kurgu Sanatı, Yazıdaki Yaşamlar ve Bilinç ve Roman adlı yapıtlarını, İngiliz edebiyatında farklı bir kimlikle tanınan Graham Greene’in Generali Tanımak adlı eserini ve önemli bir boşluğu dolduracak Kenneth McMillan Newton’un Yirminci Yüzyıl Edebiyat Teorisi’ni Türkçemize kazandırmıştır. Üstkurgu kavramının Türk edebiyatında daha iyi anlaşılması için Üstkurgu/Üstkurmaca Üzerine başlıklı derlemeyi hazırlamıştır. Çağdaş Edebiyatın Kuramsal Seyri adlı çalışmanın editörlüğünü yapmıştır. Roman, roman kuramı, üstkurmaca, postmodern edebiyat teorileri ve karşılaştırmalı edebiyat üzerine çeşitli çalışmaları bulunmaktadır. Farklı kurumlarda çalıştıktan sonra şu an İstanbul’da Sağlık Bilimleri Üniversitesi’nde öğretim üyesi olarak görev yapmaktadır."
  },
  {
    name: "Prof.Dr. Soner Duman",
    title: "(Sakarya Üniversitesi İlahiyat Fakültesi yazalım)",
    image: "images/Prof.Dr. Soner Duman Firefly Upscaler 4x scale.png",
    bio: "1975 yılında İstanbul’da doğdu. Marmara üniversitesi İlahiyat Fakültesi’nden mezun oldu (1998). Aynı üniversitenin Sosyal Bilimler Enstitüsü’nde, “Cessas’ın el-Fusûl fi’l-usûl Adlı Eserinde İllet Kavramı” adlı teziyle yüksek lisansını (2000), “Şâfiî’nin Kıyas Anlayışı” adlı çalışmasıyla doktorasını (2007) tamamladı. 2011 yılında Sakarya Üniversitesi İlahiyat Fakültesi’nde yardımcı doçent, 2014’te doçent, 2019’da profesör oldu. Halen Sakarya Üniversitesi İlahiyat Fakültesi’nde öğretim üyesidir."
},
{
  name: "Dr. Sümeyra Uzun ",
  title: "(İstanbul İl Millî Eğitim Müdürlüğü, Okul Öncesi Eğitim)",
  image: "images/Dr. Sümeyra Uzun.webp",
  bio: "Lisans eğitimini Marmara Üniversitesi İlahiyat ve Boğaziçi Üniversitesi Okul Öncesi Öğretmenliği bölümlerinde tamamlayan Sümeyra Uzun, yüksek lisans eğitimini İstanbul Üniversitesi Din Kültürü Eğitimi Bölümü’nde karşılaştırmalı eğitim (erken çocukluk dönemi din eğitimi) konulu tezi ile tamamlamıştır. Uzun, doktora çalışmasını ise din eğitimi alanında “erken çocukluk din eğitiminde program geliştirme” üzerine yapmıştır. Erken çocukluk dönemi din eğitiminde program geliştirme, bütünleştirilmiş eğitim programı, dini gelişim kuramları üzerine ulusal ve uluslararası yayın, makale, araştırma ve kitap bölümleri olan Uzun, 2011 yılından beri MEB bünyesindeki okullarda öğretmenlik ve idarecilik yapmaktadır. Sümeyra Uzun, Enstitü Sosyal bünyesinde yürütülen eğitim araştırmalarına destek vermektedir."
},
{
  name: "Zeynep FİDAN DAL ",
  title: "(Öğretmen)",
  image: "images/Zeynep Fidan Dal.png",
  bio: "Zeynep Fidan Dal, Gazi Üniversitesi Çocuk Gelişimi ve Eğitimi Öğretmenliği bölümünden mezun olmuş, lisansüstü eğitimine İstanbul Üniversitesi Felsefe ve Din Bilimleri Anabilim Dalı’nda devam etmiştir. “Okul Öncesi Değerler Eğitimi Uygulamalarının Değerlendirilmesi” başlıklı teziyle yüksek lisansını tamamlamış, aynı anabilim dalında doktora çalışmasını sürdürmektedir. 2010 yılından bu yana Çocuk Gelişimi ve Eğitimi Öğretmeni olarak İstanbul’da görev yapmakta; çocuk edebiyatı, yaratıcı drama, P4C, ve değerler eğitimi gibi alanlarda aldığı eğitimlerle öğretim süreçlerini zenginleştirmektedir. Akademik çalışmalarının yanı sıra erken çocukluk döneminde değerler eğitimi ve çoklu düşünme becerileri konularında öğretmen eğitimleri vermektedir."
},
{
  name: "Zeynep Özdemir",
  title: "(Öğretmen, MEB Kitap Komisyonu)",
  image: "images/Zeynep Özdemir.png",
  bio: "1984 yılında Konya’da doğdu, ilk öğrenimini Mısır’da orta ve lise öğrenimini ise Ankara’da tamamladı. 2008 yılında Marmara Üniversitesi Okul öncesi Öğretmenliği bölümünden mezun olarak aynı yıl öğretmenlik görevine başladı. 2011 yılında İstanbul Ticaret Üniversitesi’nde Uygulamalı Psikoloji alanında yüksek lisansını tamamladı. 2004 yılından bu yana değerler eğitimi alanında pek çok çalışma yapmış, eğitim ve seminer vermiştir. Okul öncesi öğretmenlerine yönelik değerler eğitimi etkinlikleri içeren bir kitabı bulunmaktadır. 2008 yılında başladığı öğretmenlik vazifesine Millî Eğitim Bakanlığı kitap komisyonunda devam etmektedir. "
},

{
  name: "Feyza Yadikar Sarıoğlu",
  title: "(Okulöncesi Öğretmeni - Çocuk Gelişim Uzmanı)",
  image: "images/feyza yadikar.png",
  bio: `Marmara Üniversitesi İlahiyat Fakültesi'nden mezun olan ve aynı üniversitede Hadis alanında Yüksek Lisansını tamamlayan Abdullah Açık, 1995 yılından bu yana DİKAB Öğretmenliği ve idarecilik pozisyonlarında 25 yılı aşkın köklü bir mesleki deneyime sahiptir. Kariyeri boyunca hem MEB'e bağlı okullarda (Rauf Orbay, Fatih İmam Hatip, Hakkı Demir Anadolu İHL) hem de özel eğitim kurumlarında (Özel Derya Öncü, Özel Büyük Çamlıca) görev almıştır. Eğitim alanındaki uzmanlığı, özellikle Kur'an-ı Kerim öğretim yöntemleri üzerine yoğunlaşmıştır; bu alanda 2004 yılından itibaren teorik ve uygulamalı çalışmalar yürütmüş, "Ses Temelli Elif Ba" ve "Öğretmen Kitabı" adlı yayınları telif etmiş, Diyanet TV'de yayınlanan 30 bölümlük bir programda görev almış ve MEB kitap yazım komisyonunda yer almıştır. Ayrıca, 4-6 yaş Kur'an öğretimi yöntemleri üzerine seminerler vermekte ve Ensar Vakfı gibi çeşitli kurumlarda eğitimler düzenlemektedir. Sahip olduğu dil becerileri arasında Dimaşk Üniversitesi'nde tamamladığı eğitimlerle edindiği iyi düzeyde (konuşma seviyesinde) Arapça ve orta düzeyde İngilizce bulunmaktadır. Açık, aynı zamanda İzcilik Federasyonuna bağlı Şafak İzci Kulübü'nün kurucuları arasında yer alarak, on beş yılı aşkın süre izcilik eksenli din eğitimi çalışmaları da yapmıştır.`
},
{
  name: "Prof. Dr. Zeki Bayraktar",
  title: "(Tıp Doktoru-Akademisyen)",
  image: "images/zekibayraktar.png",
  bio: `1967 yılında Rize-Ardeşen’de doğdu. İlk, orta ve lise tahsilini burada tamamladı. Tıp Fakültesi eğitimini 1985-1991 yılları arasında Uludağ Üniversitesi Tıp Fakültesi’nde aldı. Mecburi hizmetini pratisyen tabip olarak 1991-1993 yılları arasında T.C. Sağlık Bakanlığı Gökçeada Merkez Sağlık Ocağında yaptı. 1993 yılında İstanbul Üniversitesi İstanbul Tıp Fakültesi Kalp-Damar Cerrahisi Anabilim Dalında ihtisasa başladı. 1994 yılında bu bölümden istifa ederek üroloji ihtisasına başladı [1995]. Üroloji ihtisasını Bezmialem Vakıf Gureba Eğitim ve Araştırma Hastanesinde 1999’da tamamlayarak uzman oldu. 2012’de üroloji doçenti, 2018’de üroloji profesörü oldu [İstanbul Medipol Üniversitesi]. Sağlık Bakanlığı Cinsiyet Değiştirme Denetim ve Değerlendirme Bilimsel Komisyonu Başkanlığını yürüten Bayraktar, halen Sağlık Bilimleri Üniversitesi Sancaktepe Şehit Prof. Dr. İlhan Varank Eğitim ve Araştırma Hastanesi Üroloji Kliniğinde görevine devam etmektedir. Üroloji-Androloji alanında yayımlanmış [ulusal ve uluslararası] yüze yakın akademik makale ve tebliği ve üç kitabı bulunmaktadır [“İnterseks-Hermafrodit ve Eşcinsel”, “Transseksüellik Cinsiyetin Değişimi Mi İptali Mi?”, “Bilimsel Veriler Işığında Sansürsüz Cinsellik”]. Sağlık Bakanlığı “Cinsiyet değiştirme denetim ve değerlendirme bilimsel Komisyonu” başkanıdır. Kitap Kültür Sanat Dergisi Book Culture Art Times tarafından Altın Yazar ödülüne layık görülen Bayraktar evli ve iki çocuk babasıdır.`
},
{
  name: "Mahmut Bıyıklı",
  title: "(MEB Bakan Danışmanı)",
  image: "images/Mahmut Bıyıklı.png",
  bio: `1976 yılında Kayseri’nin Develi ilçesinde doğdu. Yükseköğrenimini Marmara Üniversitesi’nde tamamladı. Öğrencilik yıllarında çeşitli sivil toplum kuruluşlarında kültür ve sanat faaliyetlerinde bulundu, farklı dergilerin çıkarılmasına öncülük etti. Türkiye’nin birçok şehrinde kültür, medeniyet, şehir ve eğitim eksenli konferanslar verdi; çok sayıda sempozyum, çalıştay, kongre ve zirvede bildiriler sundu. Ulusal ölçekte yayın yapan radyo ve dergilerde Genel Yayın Yönetmeni olarak görev yaptı. Çeşitli belgesellerde metin yazarlığı ve danışmanlık yaptı. Edebi ve kültürel muhtevalı dergilerde yazıları ve şiirleri yayımlandı. Ulusal gazetelerde köşe yazarlığı yaptı; Haber7’de haftalık yazılarına devam etmektedir. Sivil toplum faaliyetlerini Türkiye Yazarlar Birliği İstanbul Şube Başkanı olarak sürdürmektedir. Bayrampaşa Belediyesi’nde Kültür Müdürü, İstanbul Millî Eğitim Müdürlüğü’nde Basın Müdürü olarak görev yaptı. Halen Millî Eğitim Bakanlığı’nda Bakan Danışmanı olarak, Türkiye genelinde başlatılan Öğretmen Akademileri Projesi’nin yürütücülüğünü sürdürmektedir. “Şehrin Kaybolan Efendileri, Teravihte Gülen Çocuklar, Hak Dostlarından Hatıralar, Sezai Karakoç’u Anlamak” gibi birçok eser kaleme almıştır.`
},
{
  name: "Dr. Şeyda Şahin Karakaya ",
  title: "(Öğretmen)",
  image: "images/Dr. Şeyda Şahin Karakaya  .png",
  bio: "2010 yılında Uludağ Üniversitesi İlahiyat Fakültesi’nden mezun olduktan sonra mesleki kariyerine öğretmen olarak başlamıştır. Yüksek lisansını İslam Hukuku alanında tamamlamıştır. Öğretmenlik sürecinde, ebeveynlerle gençler arasındaki ilişkilerin güçlenmesine katkıda bulunmayı ve din eğitimi ile sosyolojiyi bütünleştirerek öğrencilere kapsamlı bir eğitim sunmayı amaç edinmiştir. İstanbul Üniversitesi’nde Aile Sosyolojisi alanında doktora eğitimini tamamlayarak aile sosyolojisi disiplini kapsamında derinlemesine bilgi sahibi olmuştur. Ayrıca, Hayat Boyu Öğrenme kapsamında yürütülen aile okulu projesinde formatör öğretmen olarak görev yapmakta; eğitici ve veli eğitimleri düzenleyerek ailelerin eğitim süreçlerine katkıda bulunmaktadır. Evli ve üç çocuk annesidir."
},
{
  name: "Abdullah Oğuz ",
  title: "(Araştırmacı-Yazar)",
  image: "images/Abdullah Oğuz.png",
  bio: "1973 yılında Doğu Türkistan’ın Hoten şehrinde doğan Abdullah Oğuz, 1980’de Türkiye’ye yerleşti ve eğitimini burada tamamladı. İstanbul Üniversitesi Türkiyat Enstitüsü’nde doktora çalışmalarını sürdüren Oğuz, aynı enstitüde yüksek lisansını tamamlamış, Selçuk Üniversitesi’nde işletme eğitimi almıştır. Doğu Türkistan davasına yönelik uluslararası farkındalık oluşturmak amacıyla çeşitli sivil toplum kuruluşlarında aktif görevler üstlenen Oğuz; Buğra Akademi’de başkan yardımcılığı, İsa Yusuf Alptekin Vakfı’nda genel sekreterlik, Doğu Türkistanlılar Federasyonu’nda başdanışmanlık ve Farabi Eğitim Derneği’nde denetim kurulu başkanlığı görevlerini yürütmektedir. Şarki Türkistan Tarihi başta olmak üzere çok sayıda kitap çevirisi, editörlüğü ve makalesi bulunan Oğuz; Türk Yurdu, Turan, Siyer ve İnsicam gibi dergilerde yayımlanan yazılarında Doğu Türkistan’ın tarihi, Çin’in politikaları ve bölgedeki soykırım uygulamalarını akademik ve toplumsal boyutlarıyla ele almaktadır."
},
{
  name: "Prof. Dr. Ahmet Türkan",
  title: "(Necmettin Erbakan Üniversitesi İlahiyat Fakültesi Dinler Tarihi Anabilim Dalı Başkanı)",
  image: "images/ahmetturkan.png",
  bio: "1976 yılında Düzce'de doğdu. 1994 yılında Düzce İmam Hatip Lisesinden, 2000 yılında Selçuk Üniversitesi İlahiyat Fakültesi'nden mezun oldu. Selçuk Üniversitesi Sosyal Bilimler Enstitüsü Felsefe ve Din Bilimleri Anabilim Dalı Dinler Tarihi bilim dalında 2003 yılında Yüksek Lisansını ve 2011 yılında Doktorasını tamamladı. 2013 yılında Dumlupınar Üniversitesi İlahiyat Fakültesi Felsefe ve Din Bilimleri Bölümü Dinler Tarihi Anabilim Dalında Doktor Öğretim Üyesi olarak göreve başladı, 2018 yılında doçent ve 2023 yılında profesör oldu. Dumlupınar Üniversitesi Senato üyeliği ve Kütüphane Daire Başkanı görevlerinin yanında aynı üniversitenin İlahiyat Fakültesinde Felsefe ve Din Bilimleri Bölüm Başkanlığı ve Dekan Yardımcılığı yaptı. 2021 yılında Necmettin Erbakan Üniversitesi Ahmet Keleşoğlu İlahiyat Fakültesinde Dinler Tarihi Anabilim Dalında göreve başladı. Ahmet TÜRKAN halen NEÜ Ahmet Keleşoğlu İlahiyat Fakültesi'nde Dinler Tarihi anabilim dalı başkanlığının yanı sıra NEÜ Kurumsal Kalite ve Akreditasyon koordinatörü olarak görevini sürdürmektedir."
},
{
  name: "Prof. Dr. Recep Şentürk",
  title: "(Hamad Bin Khalifa Üniversitesi İslami İlimler Fakültesi Dekanı)",
  image: "/images/recepsenturk.png",
  bio: "1964’te Çankırı’da doğdu. Lisans eğitimini Marmara Üniversitesi İlahiyat Fakültesinde, yüksek lisansını İstanbul Üniversitesi Edebiyat Fakültesi Sosyoloji Bölümden tamamladı. Aynı bölümde asistanlık yaptı. Columbia Üniversitesi Sosyoloji Bölümünde doktorasını tamamladı. 1998-2007 yılları arasında İSAM’da araştırmacı olarak çalıştı. Fatih Sultan Mehmet Vakıf Üniversitesi Medeniyetler İttifakı Enstitüsü kuruluşunda görev aldı. Atlanta’da Emory Üniversitesi Hukuk Fakültesinde misafir araştırmacı olarak bulundu. Oxford Brookes Üniversitesi Sosyal Bilimler ve Hukuk Fakültesi’nde çalışmalarını yürüttü. 2003 yılında doçent, 2008 yılında profesör oldu. Kurucu rektör olarak atandığı İbn Haldun Üniversitesi’nde 2021 yılına kadar bu görevi yürüttü. Halen Hamad Bin Khalifa üniversitesi İslami İlimler Fakültesi dekanıdır. Türkçe, İngilizce ve Arapça birçok kitap ve makale yayını vardır."
},
{
  name: "Dr. Şule Şahin Ünlü",
  title: "(Öğretmen - Yazar)",
  image: "images/sulesahin.png",
  bio: "1988 yılında Bayburt’ta doğmuştur. İlköğreniminin ardından Bayburt Anadolu İmam Hatip Lisesi’nden mezun olmuştur. Lisans eğitimini Marmara Üniversitesi İlahiyat Fakültesi’nde tamamlamış; ardından Marmara Üniversitesi Temel İslam Bilimleri Anabilim Dalı, Hadis bilim dalında yüksek lisans yapmıştır. Doktora eğitimini Ankara Üniversitesi İlahiyat Fakültesi Tasavvuf Anabilim Dalı’nda, “İbnü’l-Arabî’nin tasavvuf düşüncesinde kadın” konulu tez çalışmasıyla tamamlamıştır. Akademik çalışmaları ağırlıklı olarak metafizik düşünce, tasavvuf, kadın ve toplumsal yapı arasındaki ilişkiler üzerine yoğunlaşmaktadır. Bu alanlarda çeşitli makaleler, kitap bölümleri ve kitap çalışmaları kaleme almaktadır. Hâlihazırda Millî Eğitim Bakanlığı’nda alan koordinatörü olarak görev yapmakta; metafizik, tasavvuf ve kadın konuları üzerine araştırma, yazı ve kitap çalışmalarını sürdürmektedir."
},
{
  name: "Afra Sevde Çelebi",
  title: "(Yeşilay Akademi Eğitmeni – Uzman Psikolog)",
  image: "images/Afra Sevde Çelebi.png",
  bio: ""
},
{
  name: "Şevval Uçar",
  title: "(Yeşilay Akademi Eğitmeni – Uzman Psikolog)",
  image: "images/Şevval Uçar.png",
  bio: ""
},
{
  name: "Psk. Yasir Cebeci",
  title: "(Klinik Psikolog)",
  image: "images/Yasir Cebeci.png",
  bio: "M. Yasir Cebeci, lisans ve yüksek lisans eğitimini Uluslararası Saraybosna Üniversitesi’nde Psikoloji ve Klinik Psikoloji alanlarında tamamladı. Bosna Hersek’te geçen on dört yıllık eğitim, araştırma ve kültürel çalışmaların ardından mesleki yolculuğunu son üç yıldır Türkiye’de sürdürmektedir. İstanbul’da gençler, yetişkinler ve çiftlerle psikoterapi çalışmalarına devam eden Cebeci; aynı zamanda İlim Yayma Cemiyeti Psikolojik Danışma ve Araştırma Birimi Müdürü olarak görev yapmaktadır. Bunun yanı sıra çeşitli sivil toplum kuruluşlarında eğitim, danışmanlık ve proje çalışmalarına katkı sunmakta, özellikle gençlere yönelik rehberlik, kişisel gelişim ve kültürel faaliyetlerde aktif rol almaktadır. Balkan kültürü, düşüncesi ve edebiyatına dair yazılarını düzenli olarak Bağlar dergisinde yayımlayan Cebeci, aynı zamanda FACT – Akademik ve Kültürlerarası Çalışmalar Vakfı’nın Genel Sekreterliği görevini yürütmektedir. Evli ve iki çocuk babasıdır."
},
{
  name: "Doç. Dr. Fatih Kucur",
  title: "(İstanbul Üniversitesi Sağlık Bilimleri Fakültesi)",
  image: "images/fatih kucur.png",
  bio: "Fatih Kucur; lisans eğitimini Erzurum Atatürk Üniversitesi İktisadi ve İdari Bilimler Fakültesi İktisat Bölümünde tamamladı. 2003-2008 yılları arasında Almanya’da bulundu ve Bielefeld Üniversitesi’nde bir müddet psikoloji eğitimi aldı. 2015 Yılında İstanbul Üniversitesi İktisat Fakültesi, Çalışma Ekonomisi ve Endüstri İlişkileri Bölümünde doktorasını tamamladı. Hâlen İstanbul Üniversitesi-Cerrahpaşa Sosyal Hizmet Bölümünde öğretim üyesi olarak akademik hayatına devam etmektedir."
},
{
  name: "Prof. Dr. Ali Osman Kuşakçı",
  title: "(Uluslararası Saraybosna Üniversitesi Rektörü)",
  image: "images/Ali Osman Kuşakçı Firefly Upscaler 2x scale.png",
  bio: " Viyana Teknik Üniversitesi Endüstri Mühendisliği bölümünden 2006 yılında lisans derecesini aldı. Aynı üniversitenin Endüstri Mühendisliği bölümünde Finans Mühendisliği uzmanlık alanındaki çalışmalarıyla Endüstri Mühendisliği yüksek lisans programını bitirdi. 2008 yılından itibaren araştırma ve öğretim görevlisi olarak Uluslararası Saraybosna Üniversitesi'nde çalıştı. Makine öğrenmesi ve doğadan esinlenen algoritmalar alanlarında araştırmalar yaptı. Aynı üniversitenin Endüstri Mühendisliği bölümünde “Constrained Optimization with Evolution Strategies: Adaptive Approaches” başlıklı tezi ile 2013 yılında doktorasını tamamladı. Üniversitenin AR&GE merkezi müdürlüğünü yaptı ve İslam Kalkınma Bankası destekli “kapasite geliştirme” projesini yürüttü. İstanbul Ticaret Üniversitesi Endüstri Mühendisliği bölümünde görev yaptı ve tersine lojistik ve sürdürülebilirlik alanında araştırmalar yürüttü. Akabinde İbn Haldun Üniversitesi'ne katıldı. Havacılık Yönetimi ve İş Analitiği alanlarında çeşitli yüksek lisans programları tasarladı, profesyonel eğitimler verdi. Üç yıl Üniversitenin Bilimsel Araştırma Projeleri koordinatörlüğü görevini yürüttü. Halen İbn Haldun Üniversitesi Lisansüstü Eğitim Enstitüsü Müdürü olarak görev yapmaktadır. Saygın akademik dergilerde çok sayıda yayını bulunan Ali Osman Kuşakcı’nın çalışmalarının odağında karar verme, yöneylem araştırması, iş analitiği ve makine öğrenmesi, sezgisel algoritmalar ve tedarik zinciri ağ tasarımı konuları bulunmaktadır."
},
{
  name: "Doç. Dr. Ahmet Ekşi",
  title: "(Kocaeli Üniversitesi İlahiyat Fakültesi Fıkıh Anabilim Dalı Öğretim Üyesi)",
  image: "images/ahmeteksi.png",
  bio: "1972 yılında Erzurum’da doğdu. 1997’de Marmara Üniversitesi İlahiyat Fakültesi’nden mezun oldu. Marmara Üniversitesi İslam Hukuku Anabilim Dalında Yüksek Lisans öğretim programını tamamladı. Bu süre içerisinde “İslam Hukukunda Mağdurun Rızasının Hukuka Aykırılığa Etkisi ve Sorumluluk Bakımından Sonuçları” adlı Yüksek Lisans Tezini hazırladı. Din Kültürü ve Ahlak Bilgisi öğretmeni olarak göreve başladı. 2006 yılında Milli Eğitim Bakanlığı Din Öğretimi Genel Müdürlüğü tarafından ders kitaplarını yazım komisyonunda görevlendirildi. 2010 yılında Konya Selçuk Ünv. Sosyal Bil. Ens. İslam Hukuku Bilim dalında “İslam Hukukunda Tıbbi Müdahalelerden Doğan Hukuki Sorumluluk” adlı teziyle doktora unvanını aldı. 2012 yılında Yıldız Teknik Üniversitesi Eğitim Fakültesine öğretim üyesi olarak atandı. 2014 yılında Ürdün Üniversitesi Dil Merkezinde 3 ay süreyle misafir araştırmacı olarak çalıştı. 2015’den beri Kocaeli Üniversitesi İlahiyat Fakültesi Fıkıh Anabilim Dalı öğretim üyeliğini devam ettirmekte, SUSEM’de Güncel Fıkıh Problemleri seminerleri vermektedir."
},
{
  name: "Hasan Kocaboğa",
  title: "()",
  image: "images/Hasan Kocaboğa.png",
  bio: "Dünyayla merhabalaşması küçük bir Anadolu kasabasında başlayan Hasan Kocaboğa; Yıldız Teknik Üniversitesinde lisans ve yüksek lisansını tamamlamıştır. Fatih Sultan Mehmet Vakıf Üniversitesinde doktora eğitimine devam eden Kocaboğa, İstanbul Öğretmen Akademilerinde İstanbul Değer Erdem Projesi Koordinatörü olarak nezâketin, zarâfetin ve hitâbetin izini sürmektedir. Dünyanın bir sahne, hayatın ise birer perde olduğu bu düzlemde rolünü icra eden insanın inkişâfını ‘’yolu görmek, yola çıkmak ve yol almak’’ olduğuna inanmaktadır."
},
{
  name: "Prof. Dr. Hacı Yunus Apaydın",
  title: "(Erciyes Üniversitesi İlahiyat Fakültesi Öğretim Üyesi)",
  image: "images/yunusapaydın.png",
  bio: "Lisans eğitimini 1983 yılında Ankara Üniversitesi İlahiyat Fakültesinde tamamladı. Aynı üniversitenin Sosyal Bilimler Enstitüsü İslam Hukuku Anabilim Dalında “Hukuki İşlemlerin Hükümsüzlüğü” (Butlan Teorisi) başlıklı teziyle 1989 yılında doktor oldu. 1991 yılında doçent ve 1997 yılında profesör oldu. 1984 yılından beri Erciyes Üniversitesi İlahiyat Fakültesinde görev yapmakta olan Apaydın ağırlıklı olarak fıkıh usulü ile klasik fıkhın mantığı ve sistematiği üzerinde yoğunlaştı. Son yıllarda sahih anlam ve meşru yorum üzerinde ve bağlamda özellikle temel İslam bilimlerinin tarihsel tecrübedeki işlevleri ve bu işlevlerin günümüzde nasıl gerçekleştirilebileceği üzerinde çalışmaktadır. Apaydın’ın Diyanet Vakfı İslam ansiklopedisinde 50’nin üzerinde maddesi, onlarca makale ve bilimsel bildirisi vardır. Yayımlanmış çalışmaları İslam Hukuna Giriş (editör ve bölüm yazarı), İslam Hukuk Usulü (2016), Fıkhın Kaynakları (2017), İbn Hazm: Zahirilik Düşüncesinin Teorisyeni (2017) adlı kitaplardır. Bunun yanında Gazzali’den ve Şeyh Bedreddin’den çevirileri yayımlanmıştır."
},
    {
      name: "Saliha Erdim",
      title: "(Uzman Aile Danışmanı /Yazar)",
      image: "images/SalihaErdim.png",
      bio: "1956 Samsun Havza doğumlu. İlk okulu Vezirköprü’de, Orta okulu Çorum Sağlık Okulu’nda ve liseyi de Zeynep Kâmil Sağlık Koleji’nde okudu. Hacettepe Yüksek Hemşirelik Bölümü’nü kazandı fakat terör sebebiyle devam edemedi. Uluslararası Newport Üniversitesi Davranış Bilimleri’nde lisans ve yüksek lisans yaptı. İki tez yazdı. Lisans tezini “çocuk kıskançlığı”, yüksek lisans tezini ise “yetişkin kıskançlığı” üzerine yaptı.  Anadolu Üniversitesi Açık Öğretim Fakültesi’nde Sosyal Bilimler ve Sosyoloji okudu. Prof. Dr. Mehmet Sungur’dan dört yıl Kognitif ve Davranışçı Terapi, Çift ve Cinsel İşlev Bozuklukları Terapisi eğitimlerini aldı. İngiliz aile terapisti Stephan Bray’dan bir yıl aile terapisi eğitimi aldı. Medeniyet Üniversitesi’nde Aile Danışmanlığı Yüksek lisansı yaptı. Şimdi İstanbul Ticaret Üniversitesinde tezli yüksek lisansa geçti ve tez yazıyor. Uzunca bir süre radyo ve televizyon programcılığı yaptı. Şimdi ise Vav Tv’de haftada bir daimi uzman konuk olarak program yapıyor, Diriliş Postası gazetesinde haftada bir gün beş yıl köşe yazarlığı yaptı. Lâcivert dergisinde aylık yazılar yazıyor.  Bir eğitim derneği tarafından “yılın annesi” seçildi, radyo programcılığı dalında “medya etik ödülü” aldı. Bir iş adamları derneği tarafından “Toplum değerlerine katkıda en iyi ödülü” aldı.  “Kendime yardım etmek istiyorum”, “Eşimi anlamak istiyorum”, “Ailemde huzur istiyorum”, “Kendime düşeni yaparak mutlu olmak istiyorum” ve “Çocuk kıskançlığı” isimlerinde beş kitabı yayınlandı. Şimdi ise yurt içinde ve yurt dışında eğitimler ve konferanslar veriyor. Kendi aile şirketinde “aile danışmanlığı” yapıyor. Evli ve altı çocuk annesi."
    },
    {
      name: "Doç. Dr. Vahdettin Işık",
      title: "(İbn Haldun Üniversitesi Medeniyetler İttifakı Enstitüsü Müdürü)",
      image: "images/vahdettin.png",
      bio: ` Lisans eğitimini İstanbul Üniversitesi Sosyoloji Bölümü’nde tamamladı. Yüksek lisansını “II. Meşrutiyet’te ve Günümüzde Kültürel Yabancılaşma”, doktorasını da “II. Meşrutiyet Dönemi Türk Düşüncesinde Doğu-Batı Algısı: İctihad ve Sırat-ı Müstakim Dergileri Örneği” tezleriyle yaptı. Siyaset, Din ve Değişim Sosyolojisi alanlarında doçent olan IŞIK, “Osmanlı-Türkiye Modernleşme Tecrübesinin Meseleleri”, “Çağdaş İslam Düşüncesi”, “Said Halim Paşa”, “Mehmed Âkif”, “Modern Dünyada Din ve Toplum”, “Medeniyet Meselesi” gibi konularda dersler vermektedir. Yüzyılın İslamcı mirasının en önemli mecralarından birini oluşturan dergileri dijital bir platformda toplamayı da içeren “1908’den 2008’e İslamcı Dergiler Projesi”ni hazırladı. Hâlen bu projede danışmanlık yapmaktadır. Bir grup öğrenci ile "Tanzimat Dönemi Süreli Yayınlarında Medeniyet Tartışmaları Literatürü" üzerine okumalar yapmakta ve proje yürütmektedir.`
    },


  ];
  return (
    <TeamGallery
       title="Hocalarımız"
       subtitle="Hocalarımızla Bilgiye Yolculuk"
      // overlineText="OUR TEAM"
      members={teamMembers}
      cardWidth={400}
      visibleCards={3}
    />
  );
};

export default TeacherTeam;