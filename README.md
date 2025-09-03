# Portfolio Website

Modern ve minimalist tasarıma sahip kişisel portfolio web sitesi. React ve Tailwind CSS kullanılarak geliştirilmiştir.

## Özellikler

- 🎨 Modern ve minimalist tasarım
- 📱 Tamamen responsive (mobil uyumlu)
- ⚡ Hızlı ve performanslı
- 🔧 TypeScript desteği
- 🎯 SEO dostu yapı
- 📧 İletişim formu
- 🚀 Kolay özelleştirme

## Teknolojiler

- **Frontend:** React 18, TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Heroicons (SVG)
- **Build Tool:** Create React App
- **Deployment:** Netlify/Vercel ready

## Kurulum

1. Projeyi klonlayın:
```bash
git clone [repository-url]
cd portfolio
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm start
```

4. Tarayıcınızda `http://localhost:3000` adresini açın.

## Özelleştirme

### Kişisel Bilgileri Güncelleme

`src/data/mockData.ts` dosyasını düzenleyerek kendi bilgilerinizi ekleyin:

- Projeler
- Yetenekler
- Deneyimler
- İletişim bilgileri

### Renk Temasını Değiştirme

`tailwind.config.js` dosyasındaki renk paletini değiştirerek kendi temanızı oluşturabilirsiniz.

### Resimler

`src/assets/images/` klasörüne kendi resimlerinizi ekleyin ve `mockData.ts` dosyasındaki URL'leri güncelleyin.

## Klasör Yapısı

```
src/
├── components/
│   ├── layout/          # Layout bileşenleri
│   ├── sections/        # Ana sayfa bölümleri
│   └── ui/             # Yeniden kullanılabilir UI bileşenleri
├── data/               # Mock veriler
├── pages/              # Sayfa bileşenleri
├── types/              # TypeScript tip tanımları
├── utils/              # Yardımcı fonksiyonlar
└── assets/             # Statik dosyalar
```

## Deployment

### Netlify

1. Projeyi build edin:
```bash
npm run build
```

2. `build` klasörünü Netlify'a yükleyin.

### Vercel

1. Vercel CLI'yı kurun:
```bash
npm i -g vercel
```

2. Deploy edin:
```bash
vercel
```

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## Destek

Herhangi bir sorunuz veya öneriniz varsa, lütfen issue açın veya benimle iletişime geçin.