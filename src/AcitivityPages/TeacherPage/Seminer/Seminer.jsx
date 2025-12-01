import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import SeminerCard from "../../../components/Seminer/Seminer";

const Seminer = () => {
  const [selectedSeminar, setSelectedSeminar] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const seminarNumber = parseInt(hash.replace("#seminar-", ""));
        // Gelen seminarNumber'ı doğru seminere eşleştir
        const foundSeminar = seminerler.find(
          (s) => s.seminerNo === seminarNumber
        );
        if (foundSeminar) {
          setSelectedSeminar(foundSeminar.seminerNo);
          // Kartı görünür alana scroll et
          const element = document.getElementById(`seminar-${seminarNumber}`);
          if (element) {
            setTimeout(() => {
              element.scrollIntoView({ behavior: "smooth", block: "center" });
            }, 100);
          }
        }
      } else {
        setSelectedSeminar(null);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const breakpointColumns = {
    default: 3,
    1200: 2,
    768: 1,
  };

  // Seminerler Tarih Sırasına Göre Yeniden Düzenlendi (8 Aralık 2025 -> Şubat 2026)
  const seminerler = [
    {
      seminerNo: 1,
      title: "Hafızlık Eğitiminde Yeni Bir Yaklaşım",
      speakers: [
        {
          name: "Gülsüm Arslan",
          institution: "Öğretim Görevlisi - Hafız ",
          image: "images/Gülsüm Arslan.png",
        },
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title:
              "Örgün Eğitimde Koro, Musiki Makamları, Mana-Mealle Hafızlık Yöntem",
            speaker: "Gülsüm Arslan",
            startDate: "22 Aralık 2025 Pazartesi",
            endDate: "19.00",
          },
          {
            number: 2,
            title:
              "Dünyada Hafızlık Uygulamaları ve Koro Yöntemi ile Klasik (Osmanlı usulü) Yöntem: Benzerlikler, Farklılıklar",
            speaker: "Gülsüm Arslan",
            startDate: "29 Aralık 2025 Pazartesi",
            endDate: "19.00",
          },
          {
            number: 3,
            title: "Hafızlıkta Musiki Makamlarının Kullanımı: Uygulamalı",
            speaker: "Gülsüm Arslan",
            startDate: "5 Ocak 2026 Pazartesi",
            endDate: "19.00",
          },
          {
            number: 4,
            title:
              "Hafızlıkta Mana-Meal, Kur’an Bilinci: Serlevha Ayetler ile Uygulamaları",
            speaker: "Gülsüm Arslan",
            startDate: "12 Ocak 2026 Pazartesi",
            endDate: "19.00",
          },
        ],
      },
    },
    {
      seminerNo: 2,
      title: "Ses Temelli/ Mahreçli Kur'an Öğretimi Yöntem ve Teknikleri",
      speakers: [
        {
          name: "Abdullah Açık",
          institution: "Öğretmen",
          image: "images/Abdullah Açık Firefly Upscaler 2x scale.png",
        },
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "Niçin ses Temelli Kur'an öğretimi?",
            speaker: "Abdullah Açık",
            startDate: "22 Aralık 2025 Pazartesi",
            endDate: "21.00",
          },
          {
            number: 2,
            title: "Ses temelli Kur'an/elifba öğretimi esasları ",
            speaker: "Abdullah Açık",
            startDate: "29 Aralık 2025 Pazartesi",
            endDate: "21.00",
          },
          {
            number: 3,
            title: "Ses Temelli Kur'an öğretimi ders işleyişi ",
            speaker: "Abdullah Açık",
            startDate: "5 Ocak 2026 Pazartesi",
            endDate: "21.00",
          },
          {
            number: 4,
            title: "Ses temelli yüzünden Kur'an okuma ve ezber eğitimi",
            speaker: "Abdullah Açık",
            startDate: "12 Ocak 2026 Pazartesi",
            endDate: "21.00",
          },
        ],
      },
    },
    {
      seminerNo: 3,
      title: "Afrika’da Neler Oluyor?",
      speakers: [
        {
          name: "İbrahim Tığlı",
          institution: "Gazeteci",
          image: "images/İbrahim Tığlı.png",
        },
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "Afrika’da Neler Oluyor?",
            speaker: "İbrahim Tığlı",
            startDate: "23 Aralık 2025 Salı",
            endDate: "19.00",
          },
          {
            number: 2,
            title: "Afrika’da Neler Oluyor?",
            speaker: "İbrahim Tığlı",
            startDate: "30 Aralık 2025 Salı",
            endDate: "19.00",
          },
        ],
      },
    },
    {
      seminerNo: 4,
      title: "Hadis ile Dirilmek: Nebevî Mesajı Günümüze Taşımanın Yolları ",
      speakers: [
        {
          name: "Dr. Mesut Çakır",
          institution: "FSM Vakıf Üniversitesi İslami İlimler Fakültesi",
          image: "images/mesutcakir.png",
        },
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "Hz. Peygamber’i Günümüze Taşımak?",
            speaker: "Dr. Mesut Çakır",
            startDate: "23 Aralık 2025 Salı",
            endDate: "21.00",
          },
          {
            number: 2,
            title: "Hadis ve hayat",
            speaker: "Dr. Mesut Çakır",
            startDate: "30 Aralık 2025 Salı",
            endDate: "21.00",
          },
          {
            number: 3,
            title: "Hadis Okuma Usulü",
            speaker: "Dr. Mesut Çakır",
            startDate: "6 Ocak 2026 Salı",
            endDate: "21.00",
          },
        ],
      },
    },
    {
      seminerNo: 5,
      title: "Siyonist Edebiyat ‘’Portreler, Yayınlar, Söylemler’’",
      speakers: [
        {
          name: "Peren Birsaygılı Mut",
          institution: "Yazar, Belgesel Metin Yazarı, Yayıncı",
          image: "/images/Peren Birsaygılı.png",
        },
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "Siyonist edebiyat nasıl doğdu ve gelişti?",
            speaker: "Peren Birsaygılı Mut",
            startDate: "24 Aralık 2025 Çarşamba",
            endDate: "21.00",
          },
          {
            number: 2,
            title:
              "Siyonist edebiyatın ilk temsilcileri ve eserlerinden örnekler (1830-1917)",
            speaker: "Peren Birsaygılı Mut",
            startDate: "31 Aralık 2025 Çarşamba",
            endDate: "21.00",
          },
          {
            number: 3,
            title:
              "Balfour Deklarasyonu’ndan Nekbe’ye siyonist edebiyat (1917-1948)",
            speaker: "Peren Birsaygılı Mut",
            startDate: "7 Ocak 2026 Çarşamba",
            endDate: "21.00",
          },
          {
            number: 4,
            title: "Nekbe sonrası siyonist edebiyat (1948’ten günümüze) ",
            speaker: "Peren Birsaygılı Mut",
            startDate: "14 Ocak 2026 Çarşamba",
            endDate: "21.00",
          },
        ],
      },
    },
    {
      seminerNo: 6,
      title: "Kitap Tahlili",
      speakers: [
        {
          name: "Doç. Dr. Aytaç Ören",
          institution: "Sağlık Bilimleri Üniversitesi Öğretim Üyesi ",
          image: "images/Aytaç Ören Firefly Upscaler 4x scale.png",
        },
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "Oryantalizm",
            speaker: "Doç. Dr. Aytaç Ören",
            startDate: "25 Aralık 2025 Perşembe",
            endDate: "19.00",
          },
          {
            number: 2,
            title: "Sineklerin Tanrısı",
            speaker: "Doç. Dr. Aytaç Ören",
            startDate: "1 Ocak 2026 Perşembe",
            endDate: "19.00",
          },
        ],
      },
    },
    {
      seminerNo: 7,
      title: "İnanç Problemleri",
      speakers: [
        {
          name: "Prof. Dr. Soner Duman",
          institution: "Sakarya Üniversitesi İlahiyat Fakültesi",
          image: "images/Prof.Dr. Soner Duman Firefly Upscaler 4x scale.png",
        },
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "İnanç Problemleri",
            speaker: "Prof. Dr. Soner Duman",
            startDate: "25 Aralık 2025 Perşembe",
            endDate: "21.00",
          },
          {
            number: 2,
            title: "İnanç Problemleri",
            speaker: "Prof. Dr. Soner Duman",
            startDate: "1 Ocak 2026 Perşembe",
            endDate: "21.00",
          },
        ],
      },
    },
    {
      seminerNo: 8,
      title: "Erken Çocukluk Döneminde Din ve Değerler Eğitimi",
      speakers: [
        {
          name: "Dr. Sümeyra UZUN",
          institution: "İstanbul İl Millî Eğitim Müdürlüğü, Okul Öncesi Eğitim",
          image: "images/Dr. Sümeyra Uzun.webp",
        },
        {
          name: "Zeynep FİDAN DAL",
          institution: "Öğretmen",
          image: "images/Zeynep Fidan Dal.png",
        },
        {
          name: "Zeynep ÖZDEMİR",
          institution: "Öğretmen, MEB Kitap Komisyonu",
          image: "images/Zeynep Özdemir.png",
        },
        {
          name: "Feyza Yadikar Sarıoğlu",
          institution: "Okulöncesi Öğretmeni - Çocuk Gelişim Uzmanı",
          image: "images/feyza yadikar.png",
        },
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "Erken Çocukluk Döneminde Dinî Gelişim ve Din Eğitimi",
            speaker: "Dr. Sümeyra UZUN",
            startDate: "26 Aralık 2025 Cuma",
            endDate: "21.00",
          },
          {
            number: 2,
            title:
              "Erken Çocukluk Dönemi Din ve Değer Eğitiminde Düşünme Süreçlerini Etkinleştirmek",
            speaker: "Zeynep FİDAN DAL",
            startDate: "2 Ocak 2026 Cuma",
            endDate: "21.00",
          },
          {
            number: 3,
            title: "Erken Çocukluk Dönemi Din ve Değer Eğitiminde Oyun",
            speaker: "Zeynep ÖZDEMİR",
            startDate: "9 Ocak 2026 Cuma",
            endDate: "21.00",
          },
          {
            number: 4,
            title: "Erken Çocukluk Dönemi Din ve Değer Eğitiminde Masallar",
            speaker: "Feyza Yadikar SARIOĞLU",
            startDate: "16 Ocak 2026 Cuma",
            endDate: "21.00",
          },
        ],
      },
    },
    {
      seminerNo: 9,
      title: "Örnek Şahsiyetler ",
      speakers: [
        {
          name: "Mahmut Bıyıklı",
          institution: "MEB Bakan Danışmanı",
          image: "images/Mahmut Bıyıklı.png",
        },
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "Fethi Gemuhluoğlu",
            speaker: "Mahmut Bıyıklı",
            startDate: "27 Aralık 2025 Cumartesi",
            endDate: "19.00",
          },
          {
            number: 2,
            title: "Sezai Karakoç",
            speaker: "Mahmut Bıyıklı",
            startDate: "3 Ocak 2026 Pazartesi",
            endDate: "19.00",
          },
          {
            number: 3,
            title: "Dr. Mehmet Doğan",
            speaker: "Mahmut Bıyıklı",
            startDate: "10 Ocak 2026 Pazartesi",
            endDate: "19.00",
          },
          {
            number: 4,
            title: "Yavuz Bülent Bakiler",
            speaker: "Mahmut Bıyıklı",
            startDate: "17 Ocak 2026 Pazartesi",
            endDate: "19.00",
          },
        ],
      },
    },
    {
      seminerNo: 10,
      title: "Cinsiyet Kimlik Bozukluğu",
      speakers: [
        {
          name: "Prof. Dr. Zeki Bayraktar ",
          institution: "Tıp Doktoru-Akademisyen",
          image: "images/zekibayraktar.png",
        },
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "Cinsiyet Kimlik Gelişiminde Ebeveyn ve Öğretmenin Rolü",
            speaker: "Prof. Dr. Zeki Bayraktar ",
            startDate: "27 Aralık 2025 Cumartesi",
            endDate: "21.00",
          },
          {
            number: 2,
            title:
              "Cinsiyet Kimlik Bozukluğu: Cinsiyet Hoşnutsuzluğu/Transseksüellik",
            speaker: "Prof. Dr. Zeki Bayraktar ",
            startDate: "3 Ocak 2026 Cumartesi",
            endDate: "21.00",
          },
        ],
      },
    },
    {
      seminerNo: 11,
      title: "Filistin Okumaları",
      speakers: [
        {
          name: "Prof. Dr. Ahmet Türkan",
          institution:
            "NEÜ Ahmet Keleşoğlu İlahiyat Fakültesi'nde Dinler Tarihi Anabilim Dalı Başkanı",
          image: "images/ahmetturkan.png",
        },
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title:
              "Filistin’de Kiliseler Arasındaki Rekabetler ve Osmanlı Barışı",
            speaker: "Prof. Dr. Ahmet Türkan",
            startDate: "2 Ocak 2026 Cuma",
            endDate: "19.00",
          },
          {
            number: 2,
            title: "Siyonizm’in Doğuşu, Gelişimi ve Kurumsallaşması",
            speaker: "Prof. Dr. Ahmet Türkan",
            startDate: "9 Ocak 2026 Cuma",
            endDate: "19.00",
          },
          {
            number: 3,
            title:
              "Arap Ülkelerinden İsrail’e Yahudi Göçleri ve Sonuçları (20. yy)",
            speaker: "Prof. Dr. Ahmet Türkan",
            startDate: "16 Ocak 2026 Cuma",
            endDate: "19.00",
          },
          {
            number: 4,
            title:
              "Günümüz Filistin’indeki Dini Gruplar: Uzlaşma ve Gerilimler",
            speaker: "Prof. Dr. Ahmet Türkan",
            startDate: "23 Ocak 2026 Cuma",
            endDate: "19.00",
          },
        ],
      },
    },
    {
      seminerNo: 12,
      title: "İslam Metafiziğinde Aile",
      speakers: [
        {
          name: "Dr. Şeyda Şahin Karakaya ",
          institution: "Öğretmen",
          image: "images/Dr. Şeyda Şahin Karakaya  .png",
        },
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "İnsan–Âlem Aynalığı ve Karşılıklık",
            speaker: "Dr. Şeyda Şahin Karakaya ",
            startDate: "6 Ocak 2026 Salı",
            endDate: "19.00",
          },
          {
            number: 2,
            title: "İlişkisel Varlık Olarak İnsan ve Aileye Yansımaları",
            speaker: "Dr. Şeyda Şahin Karakaya ",
            startDate: "13 Ocak 2026 Salı",
            endDate: "19.00",
          },
        ],
      },
    },
    {
      seminerNo: 13,
      title: "Doğu Türkistan",
      speakers: [
        {
          name: "Abdullah Oğuz",
          institution: "Araştırmacı-Yazar",
          image: "images/Abdullah Oğuz.png",
        },
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "Merkezi Krallığı (Çin) Tanımak",
            speaker: "Abdullah Oğuz",
            startDate: "10 Ocak 2026 Cumartesi",
            endDate: "21.00",
          },
          {
            number: 2,
            title: "Çin İşgali Öncesi Doğu Türkistan Tarihi ",
            speaker: "Abdullah Oğuz",
            startDate: "17 Ocak 2026 Cumartesi",
            endDate: "21.00",
          },
          {
            number: 3,
            title: "Doğu Türkistan Varlık Mücadele Tarihi ",
            speaker: "Abdullah Oğuz",
            startDate: "24 Ocak 2026 Cumartesi",
            endDate: "21.00",
          },
          {
            number: 4,
            title: "Son Soykırım Denemesi ve Güncel Durum",
            speaker: "Abdullah Oğuz",
            startDate: "31 Ocak 2026 Cumartesi",
            endDate: "21.00",
          },
        ],
      },
    },
    {
      seminerNo: 14,
      title: "Bağımlılık",
      speakers: [
        {
          name: "Afra Sevde Çelebi",
          institution: "Yeşilay Akademi Eğitmeni – Uzman Psikolog",
          image: "images/Afra Sevde Çelebi.png",
        },
        {
          name: "Şevval Uçar",
          institution: "Yeşilay Akademi Eğitmeni – Uzman Psikolog",
          image: "images/Şevval Uçar.png",
        },
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "Bağımlılıkları Anlamak",
            speaker: "Afra Sevde Çelebi",
            startDate: "13 Ocak 2026 Salı",
            endDate: "21.00",
          },
          {
            number: 2,
            title: "Bağımlılıkla Mücadelede Gönüllülüğün Rolü",
            speaker: "Şevval Uçar",
            startDate: "20 Ocak 2026 Salı",
            endDate: "19.00",
          },
        ],
      },
    },
    {
      seminerNo: 15,
      title: "Eğitimde Dekolonizasyon: Multiplex Eğitim ",
      speakers: [
        {
          name: "Prof. Dr. Recep Şentürk ",
          institution:
            "Hamad Bin Khalifa Üniversitesi İslami İlimler Fakültesi Dekanı",
          image: "/images/recepsenturk.png",
        },
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title:
              "1. Kütür Sömürgeciliğinin ve Batılılaşmanın Aracı olarak Eğitim.",
            speaker: "Prof. Dr. Recep Şentürk",
            startDate: "10 Ocak 2026 Pazartesi ",
            endDate: "19.00",
          },
          {
            number: 2,
            title:
              "Dekolonizasyon: Kültür Sömürgeciliğinden Kurtulmak ve Fikri Bağımızlık. ",
            speaker: "Prof. Dr. Recep Şentürk",
            startDate: "26 Ocak 2026 Pazartesi ",
            endDate: "19.00",
          },
          {
            number: 3,
            title:
              "Ders: Multiplex Eğitim ve Köklü Yenilikçilik: Eğitimde Yeniden Çok-Katmanlı Varlık, Bilgi, Hakikat ve Değer Anlayışı",
            speaker: "Prof. Dr. Recep Şentürk",
            startDate: "2 Şubat 2026 Pazartesi ",
            endDate: "19.00",
          },
        ],
      },
    },
    {
      seminerNo: 16,
      title: "Dr. Şule Şahin Ünlü",
      speakers: [
        {
          name: "Dr. Şule Şahin Ünlü",
          institution: "Öğretmen - Yazar",
          image: "images/sulesahin.png",
        },
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "İbnü’l-Arabî'nin Metafizik Düşüncesinde Kadın",
            speaker: "Dr. Şule Şahin Ünlü",
            startDate: "19 Ocak 2026 Pazartesi",
            endDate: "21.00",
          },
          {
            number: 2,
            title: "İlişkisel Varlık Olarak İnsan ve Aileye Yansımaları",
            speaker: "Dr. Şule Şahin Ünlü",
            startDate: "26 Ocak 2026 Pazartesi",
            endDate: "21.00",
          },
        ],
      },
    },
    {
      seminerNo: 17,
      title: "Güncel Dini Meseleler",
      speakers: [
        {
          name: "Doç. Dr. Ahmet Ekşi",
          institution:
            "Kocaeli Üniversitesi İlahiyat Fakültesi Fıkıh Anabilim Dalı Öğretim Üyesi",
          image: "images/ahmeteksi.png",
        },
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "Günümüz Fıkıh Problemlerinin Çözümünde İlke ve Yöntemler",
            speaker: "Doç. Dr. Ahmet Ekşi",
            startDate: "20 Ocak 2026 Salı",
            endDate: "21.00",
          },
          {
            number: 2,
            title: "Mahremiyet ve Tesettür ",
            speaker: "Doç. Dr. Ahmet Ekşi",
            startDate: "27 Ocak 2026 Salı",
            endDate: "21.00",
          },
          {
            number: 3,
            title:
              "İslam Hukukunun Çocuk İstismarını Önlemeye Yönelik Getirdiği Tedbirler ",
            speaker: "Doç. Dr. Ahmet Ekşi",
            startDate: "3 Şubat 2026 Salı",
            endDate: "21.00",
          },
          {
            number: 4,
            title: "Cinsiyete Müdahalenin Sınırları",
            speaker: "Doç. Dr. Ahmet Ekşi",
            startDate: "10 Şubat 2026 Salı",
            endDate: "21.00",
          },
        ],
      },
    },
    {
      seminerNo: 18,
      title: "Ergenlik Dönemi ve Ergenlerle İletişim",
      speakers: [
        {
          name: "Psk. Yasir Cebeci",
          institution: "Klinik Psikolog ",
          image: "images/Yasir Cebeci.png",
        },
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "Ergenlik Dönemi ve Ergenlerle İletişim",
            speaker: "Psk. Yasir Cebeci",
            startDate: "21 Ocak 2026 Çarşamba",
            endDate: "21.00",
          },
          {
            number: 2,
            title: "Ergenlik Dönemi ve Ergenlerle İletişim",
            speaker: "Psk. Yasir Cebeci",
            startDate: "28 Ocak 2026 Çarşamba",
            endDate: "21.00",
          },
        ],
      },
    },
    {
      seminerNo: 19,
      title: "Değişen Dünyada Sosyal Bilimler ve Toplumsal İnşa",
      speakers: [
        {
          name: "Doç. Dr. Fatih Kucur",
          institution: "İstanbul Üniversitesi Sağlık Bilimleri Fakültesi",
          image: "images/fatih kucur.png",
        },
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "Arka plan ve Bilimin İşlevi Yeni Toplum",
            speaker: "Doç. Dr. Fatih Kucur",
            startDate: "23 Ocak 2026 Cuma",
            endDate: "21.00",
          },
          {
            number: 2,
            title: "21. Yüzyılda Dünya; insan ve Toplum",
            speaker: "Doç. Dr. Fatih Kucur",
            startDate: "30 Ocak 2026 Cuma",
            endDate: "21.00",
          },
        ],
      },
    },
    {
      seminerNo: 20,
      title: "Yapay Zeka ve Hayatımıza Yansımaları",
      speakers: [
        {
          name: "Prof. Dr. Ali Osman Kuşakçı",
          institution: "Uluslararası Saraybosna Üniversitesi Rektörü",
          image: "images/Ali Osman Kuşakçı Firefly Upscaler 2x scale.png",
        },
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "Yapay Zeka Nedir ?",
            speaker: "Prof. Dr. Ali Osman Kuşakçı",
            startDate: "24 Ocak 2026 Cumartesi",
            endDate: "19.00",
          },
          {
            number: 2,
            title: "Makine Nasıl Öğrenir ?",
            speaker: "Prof. Dr. Ali Osman Kuşakçı",
            startDate: "29 Ocak 2026 Perşembe",
            endDate: "21.00",
          },
          {
            number: 3,
            title: "Yapay Zeka ve Etik ",
            speaker: "Prof. Dr. Ali Osman Kuşakçı",
            startDate: "5 Şubat 2026 Perşembe",
            endDate: "21.00",
          },
          {
            number: 4,
            title: "Yapay Zeka Eğitimde Nasıl Kullanılabilir ?",
            speaker: "Prof. Dr. Ali Osman Kuşakçı",
            startDate: "12 Şubat 2026 Perşembe",
            endDate: "21.00",
          },
        ],
      },
    },
    {
      seminerNo: 21,
      title: "Öğretmen'in Kur'an Kültürü",
      speakers: [
        {
          name: "Zekeriya Çelik",
          institution: "Eğitimci",
          image: "images/Zekeriya Çelik.png",
        },
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "Yahudilikte Kudüs",
            speaker: "Zekeriya Çelik",
            startDate: "29 Ocak 2026 Perşembe",
            endDate: "19.00",
          },
          {
            number: 2,
            title: "Örnek Aileler",
            speaker: "Zekeriya Çelik",
            startDate: "2 Şubat 2026 Pazartesi",
            endDate: "21.00",
          },
          {
            number: 3,
            title: "Örnek Öğretmenler",
            speaker: "Zekeriya Çelik",
            startDate: "7 Şubat 2026 Cumartesi",
            endDate: "21.00",
          },
          {
            number: 4,
            title: "Kur’an Dersinden Ders Çıkarmak",
            speaker: "Zekeriya Çelik",
            startDate: "9 Şubat 2026 Pazartesi",
            endDate: "21.00",
          },
        ],
      },
    },
    {
      seminerNo: 22,
      title: "MEDENİYET MİRASIMIZI BUGÜNDEN DÜŞÜNMEK",
      speakers: [
        {
          name: "Doç. Dr. Vahdettin Işık ",
          institution:
            "İbn Haldun Üniversitesi Medeniyetler İttifakı Enstitüsü’nde Öğretim Üyesi ve Enstitü Müdürü",
          image: "images/vahdettin.png",
        },
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "Oturum: Medeniyet Mirasımızı Bugünden Okumak-Oluşum Süreci",
            speaker: "Doç. Dr. Vahdettin Işık ",
            startDate: "30 Ocak 2026 Cuma",
            endDate: "19.00",
          },
          {
            number: 2,
            title:
              "Oturum: Medeniyet Mirasımızı Bugünden Okumak-İktidar Dönemi",
            speaker: "Doç. Dr. Vahdettin Işık ",
            startDate: "6 Şuabt 2026 Cuma",
            endDate: "19.00",
          },
          {
            number: 3,
            title:
              "Oturum: Medeniyet Mirasımızı Bugünden Okumak-Yenilgi ve Arayış Dönemi",
            speaker: "Doç. Dr. Vahdettin Işık ",
            startDate: "13 Şubat 2026 Cuma",
            endDate: "19.00",
          },
        ],
      },
    },
    {
      seminerNo: 23,
      title: "Nezâket, Zarâfet ve Hitâbetin İzdüşümünde",
      speakers: [
        {
          name: "Hasan Kocaboğa",
          institution: "",
          image: "images/Hasan Kocaboğa.png",
        },
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "Nezâket, Zarâfet ve Hitâbetin İzdüşümünde",
            speaker: "Hasan Kocaboğa",
            startDate: "31 Ocak 2026 Cumartesi",
            endDate: "19.00",
          },
          {
            number: 2,
            title: "Yönetim Sanatının İncelikl",
            speaker: "Hasan Kocaboğa",
            startDate: "7 Şubat 2026 Cumartesi",
            endDate: "19.00",
          },
        ],
      },
    },
    {
      seminerNo: 24,
      title: "Kur’an’ın Anlamının Belirlenmesinde Sünnetin Yeri",
      speakers: [
        {
          name: "Prof. Dr. Hacı Yunus Apaydın ",
          institution: "Erciyes Üniversitesi İlahiyat Fakültesi Öğretim Üyesi",
          image: "images/yunusapaydın.png",
        },
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "Kur’an’ın Anlamının Belirlenmesinde Sünnetin Yeri",
            speaker: "Prof. Dr. Hacı Yunus Apaydın ",
            startDate: "3 Şubat 2026 Salı",
            endDate: "19.00",
          },
        ],
      },
    },
    {
      seminerNo: 25,
      title: "Aile olmak, takım oyunu oynamak gibidir",
      speakers: [
        {
          name: "Saliha Erdim",
          institution: "Uzman Aile Danışmanı /Yazar",
          image: "images/SalihaErdim.png",
        },
      ],
      detailData: {
        sessions: [
          {
            number: 1,
            title: "Aile: Bir Takım Oyunudur. ",
            speaker: "Saliha Erdim",
            startDate: "5 Şubat 2026 Perşembe",
            endDate: "19.00",
          },
          {
            number: 2,
            title: "Ailede çözüm odaklı iş birliği modeli.",
            speaker: "Saliha Erdim",
            startDate: "12 Şubat 2026 Perşembe",
            endDate: "19.00",
          },
        ],
      },
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
          className="flex -ml-8 w-auto"
          columnClassName="pl-8 bg-clip-padding space-y-8"
        >
          {seminerler.map((seminer) => (
            <div
              id={`seminar-${seminer.seminerNo}`}
              key={`${seminer.seminerNo}`}
              className={`transition-all duration-700 ${
                selectedSeminar === seminer.seminerNo
                  ? "scale-105"
                  : "scale-100"
              }`}
            >
              <div
                className={`relative ${
                  selectedSeminar === seminer.seminerNo
                    ? "ring-4 ring-[#BDA473] rounded-lg shadow-2xl animate-pulse"
                    : ""
                }`}
              >
                {selectedSeminar === seminer.seminerNo && (
                  <div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 
                      bg-[#BDA473] text-white text-sm px-4 py-1 rounded-full 
                      font-medium z-10 whitespace-nowrap animate-bounce"
                  >
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
        @media (max-width: 1200px) {
          .masonry-grid {
            margin-left: -24px;
          }
          .masonry-grid_column {
            padding-left: 24px;
          }
        }
        @media (max-width: 768px) {
          .masonry-grid {
            margin-left: -16px;
          }
          .masonry-grid_column {
            padding-left: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default Seminer;
