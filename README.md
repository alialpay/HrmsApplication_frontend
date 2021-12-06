# HRMSApplication
Human Resource Management System

## UML Component Diagram

![GitHub](https://github.com/alialpay/HrmsApplication_frontend/blob/master/images/Untitled%20Diagram.png)

## Açıklama

Sistemimiz üç temel kullanıcı türüne sahiptir. Sistem personeli, İş Arayanlar ve İş verenler. Sistem personeli : Projenizde çalışan kişiler. Örneğin Kariyer.Net personeli.

#[Backend](https://github.com/alialpay/HRMSApplication)

# Veritabanı için PostgreSql kullanıldı

![Github](https://github.com/alialpay/HrmsApplication_frontend/blob/master/images/pgAdmin.png)

## Anasayfa

![GitHub](https://github.com/alialpay/HrmsApplication_frontend/blob/master/images/1.png)

## İş verenler sisteme yeni ilan ekleyebilmelidir

Req : İş verenler, iş ilanı paylaşırken işin yerinde veya uzaktan çalışma türlerinden hangisine uygun olduğunu seçilir kutudan girebilmelidir.

Req : İş verenler işin çalışma zamanı özelliğini seçilir kutudan girebilmelidir. (Örneğin : Yarı Zamanlı, tam zamanlı...)

Req : İş verenler tarafından girilen iş ilanları Hrms personeli tarafından onaylandığında yayına geçmelidir.

Req : Formik kullanarak form tasarımlarınızı oluşturabilirsiniz https://formik.org/

![GitHub](https://github.com/alialpay/HrmsApplication_frontend/blob/master/images/ilanEkleme.png)

# Hatalı ilan

Req : Toast servisimiz kullanıcıyı anlık olarak uyarmalıdır.

![GitHub](https://github.com/alialpay/HrmsApplication_frontend/blob/master/images/hataliIlanEkleme.png)

## İş Arayanlar sisteme kayıt olabilmelidir. 
ilgili kontroller için [tıklayınız](https://github.com/alialpay/HRMSApplication/blob/master/hrms/src/main/java/kodlamaio/hrms/business/concretes/JobSeekerManager.java)

Kabul Kriterleri:

Kayıt sırasında kullanıcıdan ad, soyad, tcno, doğum yılı, e-Posta, şifre, şifre tekrarı bilgileri istenir.
Tüm alanlar zorunludur. Kullanıcı bilgilendirilir.
Mernis doğrulaması yapılarak sisteme kayıt gerçekleştirilir.
Doğrulama geçerli değilse kullanıcı bilgilendirilir.
Daha önce kayıtlı bir e-posta veya tcno var ise kayıt gerçekleşmez. Kullanıcı bilgilendirilir.
Kayıdın gerçekleşmesi için e-posta doğrulaması gerekir.

## İş verenler sisteme kayıt olabilmelidir.

Kabul Kriterleri:

Kayıt sırasında kullanıcıdan şirket adı, web sitesi, web sitesi ile aynı domaine sahip e-posta, telefon, şifre, şifre tekrarı bilgileri istenir.
Burada amaç sisteme şirket olmayanların katılmasını engellemektir.
Tüm alanlar zorunludur. Kullanıcı bilgilendirilir.
Şirket kayıtları iki şekilde doğrulanır. Kayıdın gerçekleşmesi için e-posta doğrulaması gerekir. HRMS personelinin (bizim :)) onayı gerekmektedir.
Daha önce kayıtlı bir e-posta var ise kayıt gerçekleşmez. Kullanıcı bilgilendirilir.

## Sisteme genel iş pozisyonu isimleri eklenebilmelidir. Örneğin Software Developer, Software Architect.

Kabul Kriterleri:

Bu pozisyonlar tekrar edemez. Kullanıcı uyarılır.


![GitHub](https://github.com/alialpay/HrmsApplication_frontend/blob/master/images/2girisYap.png)

## Giriş Ekranı

Bilgiler doğru ise sisteme giriş yapılır

![GitHub](https://github.com/alialpay/HrmsApplication_frontend/blob/master/images/3girisYapEkran.png)

# Giriş yapıldığında kullanıcının profil resmi gözükür.

![Github](https://github.com/alialpay/HrmsApplication_frontend/blob/master/images/4girisYapildi.png)


![Github](https://github.com/alialpay/HrmsApplication_frontend/blob/master/images/5yeniGoruntuPPveSehirler.png)

## İlanı incelemek


![Github](https://github.com/alialpay/HrmsApplication_frontend/blob/master/images/6incele.png)

# Detay Sayfası

![Github](https://github.com/alialpay/HrmsApplication_frontend/blob/master/images/7detaySayfasi.png)

## İlana Başvur

![Github](https://github.com/alialpay/HrmsApplication_frontend/blob/master/images/8basvur.png)

Toast servisimiz kullanıcıyı bilgilendirir

![Github](https://github.com/alialpay/HrmsApplication_frontend/blob/master/images/9basvuruYapildi.png)

# Başvurularım kısmındaki anlık değişim

![Github](https://github.com/alialpay/HrmsApplication_frontend/blob/master/images/10basvurularim.png)

![Github](https://github.com/alialpay/HrmsApplication_frontend/blob/master/images/11basvurularim2.png)





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
