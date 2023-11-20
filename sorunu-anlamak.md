# Sorunu Anlamak:

1. 1 butonuna basılmasından, güncellenen değerimizin render edilmesine kadar olan uygulama adımları nelerdir?
   Her adım için kodun hangi bölümünün geçerli olduğunu listeleyin.

- Kullanıcı 1 butonuna tıkadı.
-

1. ckickHandler ile butona tıklandığında yapılacak olayların tanımlandığı fonsiyon tetikleniyor
2. bu fonksiyon ile dispach fonksiyonu tetikleniyor, ve dispach ile hangi case tetiklenecekse o değer ayarlanıyor

3. daha sonra swich case içerisinde ayarlanmış olan durumlardan dispach ile setlediğimiz durum eşleniyor ve o durumda belirtilen fonksiyon çakışarak dçndürüllen değer state e atanıyor

   ...

- TotalDisplay total artı 1'i gösterdi.
