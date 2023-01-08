
# Hallo semuanya 👋 
Disini kita akan belajar bagaimana caranya berkontribusi pada project open source, Github. 
Ok, tanpa banyak basa basi langsung saja kita eksekusi 😄.

Anda dapat melihat daftar yang sudah berkontribusi [disini](https://cuingskot76.github.io/belajar-berkontribusi/) <br>

## Persyaratan!
Silahkan install beberapa aplikasi berikut ini, ya agar berjalan mulus 
1. [NodeJs](https://nodejs.org/en/)
2. [Git](https://git-scm.com/)
3. Text editor [Visual Studio Code](https://code.visualstudio.com/)
3. Tidak lupa juga, untuk membuat akun [Github](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home)

## Melakukan Fork pada repository
1.  Silahkan klik **Fork** pada pojok kanan atas <br>
[![fork.webp](https://i.postimg.cc/L4Wcn6vD/fork.webp)](https://postimg.cc/xqKxZQwN) <br> <br> 
2.  Klik **Create Fork** <br>
[![fork-2.webp](https://i.postimg.cc/t4Q8NSKV/fork-2.webp)](https://postimg.cc/KRf9ZNvZ) 
3.  Anda akan dibuatkan salinan dari repository yang saya buat. Anda dapat membuat perubahan apapun pada repository yang sudah anda Fork, tanpa mengganggu repository utama (punya saya😅) <br>
[![fork-3.webp](https://i.postimg.cc/KjCwVJ4w/fork-3.webp)](https://postimg.cc/hQb2Q8L1) <br> <br>

## Melakukan Clone Hasil Fork ke Local (Komputer/ laptop)
1.  Klik tombol **Code**, lalu copy baris kode yang ada pada tab **HTTPS** <br>
[![clone.webp](https://i.postimg.cc/Pf1W8SQ7/clone.webp)](https://postimg.cc/WtbFB6Km) <br> <br>
2.  Buat folder pada komputer/ laptop anda, disini saya membuat folder dengan nama **belajar-berkontribusi**. Klik kanan pada folder tersebut, lalu **Open in terminal**. <br>
    ````bash
    # Clone repository 
    git clone [paste hasil copy an tadi disini]
    ````
    [![clone-2.webp](https://i.postimg.cc/6prgjVKb/clone-2.webp)](https://postimg.cc/pmdsyFpK) <br> <br>
3.  Kalau sudah selesai, pindah ke direktori tersebut <br>
    ````bash
    # Pindah direktori
    cd [nama direktori]
    # Membuka folder dengan Visual Studio Code
    code .
    ````
    [![clone-3.webp](https://i.postimg.cc/qMC9nV5T/clone-3.webp)](https://postimg.cc/dLwHPXFH) <br> <br>

## Membuka Hasil Clone Dengan Visual Studio Code
1.  Klik kanan pada tab ekplorer, klik **Open in Integrated Terminal** <br> <br>
    [![terminal.webp](https://i.postimg.cc/ncXM8zwt/terminal.webp)](https://postimg.cc/LnMmLHpy) <br> <br>
2.  Terminal akan secara otomatis muncul, dan sudah berada pada folder **belajar-berkontribusi**. Jangan khawatir jika terminalnya berbeda, karena ngga berpengaruh pada tahap selanjutnya. (supaya keren pakenya **Git Bash** dong 🤣). <br> 
[![terminal-2.webp](https://i.postimg.cc/ZKXnJS1v/terminal-2.webp)](https://postimg.cc/7fMwNpPq) <br> <br>
3.  Buka file **index.html** dan tambahkan nama anda  <br>
    [![terminal-3.webp](https://i.postimg.cc/tgjgVzRX/terminal-3.webp)](https://postimg.cc/k2TC0KtZ) <br> <br>
## Menyimpan Perubahan File Dengan Terminal 
1.  Pastikan terminalnya masih terbuka ya. lalu, ketikkan kode berikut <br>
    ````bash
    # Menyimpan perubahan file yang baru dibuat
    git add .
    ````
    [![terminal-4.webp](https://i.postimg.cc/6q8FYD6C/terminal-4.webp)](https://postimg.cc/GT1Mpgyp) <br> <br>
2.  Selanjutnya, ketikkan <br>
    ````bash
    # Menyimpan perubahan ke repository 
    git commit -m [nama perubahannya]
    ````
    [![terminal-5.webp](https://i.postimg.cc/kGzJMQhP/terminal-5.webp)](https://postimg.cc/K37SJM20) <br> <br>
3.  Selanjutnya, ketikkan <br>
    ````bash
    # Mengirim perubahan ke repository Github
    git push
    ````
    [![terminal-6.webp](https://i.postimg.cc/DfRmTGJP/terminal-6.webp)](https://postimg.cc/hhbK8f0X) <br> <br>
4.  Sebelum di push, semua nama commit'nya **first commit** <br>
    [![terminal-7.webp](https://i.postimg.cc/Jn693181/terminal-7.webp)](https://postimg.cc/TLb7fvhS) <br>
    Setelah di push, file **index.html** akan berubah dengan nama commit yang anda berikan. Karena kita hanya mengubah pada file **index.html** <br>
    [![terminal-8.webp](https://i.postimg.cc/pTXwnmgG/terminal-8.webp)](https://postimg.cc/wtZfCjxL) <br>

## Melakukan Pull Request 
Ini dilakukan agar kode yang sudah anda buat, dapat diterapkan pada repository original/ repo aslinya (punya saya 🙃). <br>
1.  Pilih menu **Contribute** dan klik **Open pull request** <br>
    [![terminal-9.webp](https://i.postimg.cc/BvgW6TwP/terminal-9.webp)](https://postimg.cc/1gf77qSy) <br> <br>
2.  Anda akan dialihkan ke halaman pull request. Isikan judul pada request yang anda berikan, hal ini untuk memudahkan saya dalam menghandle pull request yang masuk. Pada input comment, anda bebas mengisikan apa saja (Tapi jangan kebablasan juga ya 🤣). Setelah dirasa sudah cukup, klik tombol **Create pull request**
    [![terminal-10.webp](https://i.postimg.cc/DzFknj5K/terminal-10.webp)](https://postimg.cc/PC6FMMB6) <br> <br>
Tugas anda sebagai kontributor sudah selesai sampai disini. Nantinya pemilik repo (dalam hal ini, saya) akan mengkonfirmasi request dari agan agan semua 😁, apakah sesuai atau tidak. <br> 

### Penampakan jika request'nya sudah berhasil (merge) <br>
[![terminal-14.webp](https://i.postimg.cc/PfbfB7HT/terminal-14.webp)](https://postimg.cc/9zMj9Jzn) <br> <br>
### Repo original'nya juga akan otomatis ter-update <br>
[![image.png](https://i.postimg.cc/bvH3Xbz6/image.png)](https://postimg.cc/KKjnB13L) <br> <br>

### Bug? <br>
Entah kenapa ngga ada daftar yang sudah berkontribusi pada bagian samping kanan repo aslinya :) <br>
Jika ada yang tahu langsung saja open issue pada tab **issues** <br>
[![image.png](https://i.postimg.cc/N0JbftHT/image.png)](https://postimg.cc/3yG2nP9J) <br> <br>
gambar diatas adalah hasil kontribusi dari reponya [Mas Syafiq](https://github.com/syafiqfajrianemha/syafiqfajrianemha.github.io) hehehe <br>

### Penutup <br>
Ok, cukup sekian dan terima kasih. <br>
Jika ada kesulitan atau error bisa menghubungi nomor WA saya (bagi yang punya 🤣).
Anda juga bisa berkontribusi untuk menambahkan langkah-langkah tutorial yang sudah saya buat ini, pada file **readme.md** 
