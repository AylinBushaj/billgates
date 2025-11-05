# Bill Gates Harcama Oyunu

Bu proje, Bill Gates’in hayali bakiyesiyle çeşitli lüks ürünleri satın alabileceğiniz etkileşimli bir web uygulamasıdır. Kullanıcılar ürünleri satın alabilir, satabilir ve bakiye durumunu gerçek zamanlı olarak görebilir.

Proje, **React** ve **Vite** kullanılarak geliştirilmiştir.

---

## Özellikler

- Başlangıç bakiyesi: **$100,000,000,000**
- Ürünler listesi (fiyatlarıyla birlikte):
  - Özel Jet - $5,000,000,000
  - Yat - $1,000,000,000
  - Lüks Saat - $15,000,000
  - Özel Ada - $25,000,000,000
  - Futbol Takımı - $3,000,000,000
- Satın alınan ürünlerin alt kısımda listelenmesi, adet ve toplam fiyat gösterimi
- Satın alma ve satma butonlarının duruma göre aktif/pasif olması
  - Bakiye yetersizse “Buy” butonu pasif
  - Ürün adeti 0 ise “Sell” butonu pasif
- Canlı bakiye güncelleme
- Modern ve responsive tasarım

---

## Kurulum

1. Repository’yi klonlayın:

```bash
git clone <repository-url>
cd bill-gates-spending
````

Gerekli bağımlılıkları yükleyin:
```bash
npm install
```

Uygulamayı başlatın:
```bash
npm run dev
````
Kullanım

Buy butonuna tıklayarak ürün satın alabilirsiniz.

Sell butonuna tıklayarak sahip olduğunuz ürünleri satabilirsiniz.

Satın aldığınız ürünler ekranın alt kısmında liste halinde görüntülenir.

Bakiye ve satın alma durumu gerçek zamanlı olarak güncellenir.

Teknolojiler

React – Kullanıcı arayüzü oluşturma

Vite – Hızlı geliştirme ortamı

CSS – Tasarım ve stil

JavaScript – Uygulama mantığı ve state yönetimi