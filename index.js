const haberlerKapsayici = document.getElementById("haberlerKapsayici");
const haberDetayModal = document.getElementById("haberDetayModal");
const kapatmaButonu = document.querySelector(".kapatma-butonu");
const modalBaslik = document.getElementById("modalBaslik");
const modalTarih = document.getElementById("modalTarih");
const modalYazar = document.getElementById("modalYazar");
const modalKategori = document.getElementById("modalKategori");
const modalFotograf = document.getElementById("modalFotograf");
const modalIcerik = document.getElementById("modalIcerik");
const aramaKutusu = document.getElementById("aramaKutusu");
const kategoriFiltresi = document.getElementById("kategoriFiltresi");

const mockHaberler = [
	{
		id: "1",
		baslik: "Yapay Zeka Destekli Yeni Siber Saldırı Vektörleri",
		ozet: "Siber güvenlik uzmanları, yapay zeka ve makine öğrenimi tekniklerini kullanan yeni nesil siber saldırıların yükselişte olduğunu belirtiyor.",
		icerik:
			"<p>Son dönemde, siber saldırganlar yapay zeka (YZ) ve makine öğrenimi (ML) algoritmalarını kullanarak saldırılarını daha sofistike hale getirmeye başladı. Bu yeni vektörler, geleneksel güvenlik önlemlerini aşmada daha başarılı oluyor.</p><p>Özellikle hedefli kimlik avı (spear phishing) saldırılarında YZ kullanımı, e-postaların ve mesajların çok daha ikna edici olmasını sağlıyor. YZ, kurbanın davranış kalıplarını analiz ederek, sahte mesajları kişiselleştirebiliyor ve böylece başarı oranını artırıyor.</p><p>Bir diğer endişe verici alan ise otonom kötü amaçlı yazılımlar. Bu yazılımlar, YZ sayesinde kendi kendilerine öğrenebiliyor, ağlar üzerinde daha etkili bir şekilde yayılabiliyor ve tespit edilmekten kaçınabiliyor. Bu durum, siber güvenlik savunmalarının sürekli olarak güncellenmesini ve YZ tabanlı tehdit istihbarat sistemlerinin geliştirilmesini zorunlu kılıyor.</p><p>Uzmanlar, şirketlerin ve bireylerin bu yeni tehditlere karşı hazırlıklı olması gerektiğini vurguluyor. Güçlü parola politikaları, çok faktörlü kimlik doğrulama, düzenli güvenlik güncellemeleri ve çalışan eğitimleri, YZ destekli siber saldırılara karşı alınabilecek temel önlemler arasında yer alıyor.</p>",
		fotograf:
			"https://placehold.co/800x450/00ffff/0d0d0d?text=Yapay+Zeka+Saldırıları",
		tarih: "2024-07-20",
		kategori: "Siber Güvenlik",
		yazar: "Ayşe Yılmaz",
	},
	{
		id: "2",
		baslik: "Rust Programlama Dili Neden Yükselişte?",
		ozet: "Sistem programlama alanında güvenliği ve performansı bir araya getiren Rust, geliştiriciler arasında hızla popülerlik kazanıyor.",
		icerik:
			"<p>Rust, Mozilla tarafından geliştirilen ve sistem programlama için tasarlanmış modern bir programlama dilidir. Güvenlik, performans ve eşzamanlılık konularında sunduğu avantajlarla dikkat çekmektedir.</p><p>Rust'ın en önemli özelliklerinden biri, 'bellek güvenliği' garantisi sunmasıdır. Derleme zamanında bellek hatalarını (null pointer dereferences, data races vb.) yakalayarak, C ve C++ gibi dillerde sıkça karşılaşılan güvenlik açıklarını büyük ölçüde ortadan kaldırır. Bu, özellikle kritik altyapı ve güvenlik odaklı uygulamalar için Rust'ı cazip kılmaktadır.</p><p>Performans açısından da Rust, C++'a yakın bir seviyededir. Düşük seviyeli donanım kontrolüne izin vermesi ve sıfır maliyetli soyutlamalar sunması sayesinde, işletim sistemleri, oyun motorları, web sunucuları ve gömülü sistemler gibi performansın kritik olduğu alanlarda tercih edilmektedir.</p><p>Geliştirici topluluğu da Rust'ın yükselişinde önemli bir rol oynamaktadır. Aktif bir topluluk, zengin bir ekosistem ve mükemmel dokümantasyon, yeni başlayanlar için öğrenme sürecini kolaylaştırmaktadır. Ayrıca, büyük teknoloji şirketlerinin (Microsoft, Amazon, Google) Rust'ı projelerinde kullanmaya başlaması, dilin geleceği için umut verici sinyaller vermektedir.</p>",
		fotograf: "https://placehold.co/800x450/8a2be2/0d0d0d?text=Rust+Dili",
		tarih: "2024-07-18",
		kategori: "Yazılım Dilleri",
		yazar: "Mehmet Demir",
	},
	{
		id: "3",
		baslik: "Kuantum Bilgisayarlar ve Kriptografi Üzerindeki Etkileri",
		ozet: "Kuantum bilgisayarların gelişimi, mevcut kriptografik algoritmalar için ciddi bir tehdit oluşturuyor ve yeni güvenlik çözümlerini zorunlu kılıyor.",
		icerik:
			"<p>Kuantum bilgisayarlar, klasik bilgisayarların çözmekte zorlandığı veya imkansız olduğu bazı problemleri çözme potansiyeline sahip, devrim niteliğinde teknolojilerdir. Özellikle Shor algoritması ve Grover algoritması gibi kuantum algoritmaları, günümüzdeki yaygın kriptografik sistemler için ciddi bir tehdit oluşturmaktadır.</p><p>Shor algoritması, büyük sayıları asal çarpanlarına ayırma yeteneği sayesinde RSA gibi popüler açık anahtarlı şifreleme algoritmalarını kırabilir. Grover algoritması ise simetrik anahtar algoritmalarının (AES gibi) kaba kuvvet saldırılarına karşı direncini azaltabilir.</p><p>Bu durum, 'kuantum sonrası kriptografi' (post-quantum cryptography - PQC) alanının hızla gelişmesine yol açmıştır. PQC, kuantum bilgisayarların bile kıramayacağı yeni kriptografik algoritmalar geliştirmeyi hedefler. Ulusal Standartlar ve Teknoloji Enstitüsü (NIST), bu alanda standartlar belirlemek için çalışmalar yürütmektedir.</p><p>Kurumlar ve devletler, hassas verilerini kuantum tehditlerine karşı korumak için şimdiden PQC çözümlerini araştırmaya başlamışlardır. Bu geçiş süreci, mevcut altyapıların güncellenmesini ve yeni güvenlik protokollerinin benimsenmesini gerektirecektir. Kuantum bilgisayarların tam kapasiteye ulaşması biraz zaman alsa da, siber güvenlik uzmanları şimdiden hazırlık yapmanın önemini vurgulamaktadır.</p>",
		fotograf:
			"https://placehold.co/800x450/00ffff/0d0d0d?text=Kuantum+Kriptografi",
		tarih: "2024-07-15",
		kategori: "Siber Güvenlik",
		yazar: "Zeynep Kara",
	},
	{
		id: "4",
		baslik: "WebAssembly (Wasm) ile Tarayıcıda Yüksek Performanslı Uygulamalar",
		ozet: "WebAssembly, web tarayıcılarında neredeyse yerel hızda kod çalıştırma imkanı sunarak web uygulamalarının performansını dönüştürüyor.",
		icerik:
			"<p>WebAssembly (Wasm), web tarayıcılarında yüksek performanslı uygulamalar çalıştırmak için tasarlanmış düşük seviyeli bir ikili talimat formatıdır. JavaScript'in aksine, Wasm önceden derlenmiş kodları tarayıcıda çok daha hızlı bir şekilde yürütebilir.</p><p>Wasm'ın temel amacı, C, C++, Rust gibi dillerde yazılmış kodların web'de çalıştırılabilmesini sağlamaktır. Bu sayede, oyun motorları, video düzenleyiciler, CAD yazılımları ve bilimsel simülasyonlar gibi performans yoğun uygulamalar doğrudan tarayıcıda, eklentiye ihtiyaç duymadan çalıştırılabilir.</p>",
		fotograf: "https://placehold.co/800x450/8a2be2/0d0d0d?text=WebAssembly",
		tarih: "2024-07-12",
		kategori: "Yazılım Geliştirme",
		yazar: "Can Ateş",
	},
	{
		id: "5",
		baslik: "Makine Öğrenimi Modellerini Dağıtma: MLOps Yaklaşımları",
		ozet: "Makine öğrenimi modellerini üretim ortamına güvenli ve verimli bir şekilde dağıtmak için MLOps prensipleri büyük önem taşıyor.",
		icerik:
			"<p>Makine öğrenimi (ML) modellerinin geliştirilmesi kadar, bu modellerin üretim ortamına dağıtılması ve yaşam döngülerinin yönetilmesi de kritik bir süreçtir. MLOps (Machine Learning Operations), bu süreci otomatikleştirmeyi ve standartlaştırmayı amaçlayan bir dizi prensip ve uygulamadır.</p><p>MLOps, DevOps prensiplerini makine öğrenimi iş akışlarına uygular. Bu, model eğitimi, doğrulama, dağıtım, izleme ve yeniden eğitim gibi adımların sürekli entegrasyon (CI) ve sürekli dağıtım (CD) yaklaşımlarıyla yönetilmesini sağlar.</p>",
		fotograf: "https://placehold.co/800x450/00ffff/0d0d0d?text=MLOps",
		tarih: "2024-07-10",
		kategori: "Yapay Zeka",
		yazar: "Deniz Akın",
	},
	{
		id: "6",
		baslik: "Blockchain Teknolojisi ve Akıllı Sözleşmeler",
		ozet: "Blockchain'in sadece kripto paralarla sınırlı kalmayıp, akıllı sözleşmeler aracılığıyla birçok sektörü dönüştürme potansiyeli bulunuyor.",
		icerik:
			"<p>Blockchain teknolojisi, merkeziyetsiz ve değişmez bir defter sistemi sunarak, güvenli ve şeffaf işlemlerin gerçekleştirilmesini sağlar. Kripto paraların temelini oluşturan bu teknoloji, son yıllarda 'akıllı sözleşmeler' ile yeni bir boyut kazanmıştır.</p><p>Akıllı sözleşmeler, blockchain üzerinde çalışan, önceden belirlenmiş koşullar yerine getirildiğinde otomatik olarak yürütülen kod parçacıklarıdır. Bu sözleşmeler, aracıya ihtiyaç duymadan, güvenli ve şeffaf bir şekilde anlaşmaların yapılmasını sağlar. Örneğin, bir ürün teslim edildiğinde otomatik ödeme yapılması veya belirli bir tarihte hisse senedi transferinin gerçekleşmesi gibi işlemler akıllı sözleşmelerle otomatize edilebilir.</p><p>Akıllı sözleşmeler, finans, tedarik zinciri, gayrimenkul, sağlık ve hukuk gibi birçok sektörde devrim yaratma potansiyeline sahiptir. Güvenilirliği artırır, maliyetleri düşürür ve süreçleri hızlandırır. Ethereum, bu alanda en popüler platformlardan biridir, ancak diğer blockchain ağları da kendi akıllı sözleşme çözümlerini geliştirmektedir.</p>",
		fotograf:
			"https://placehold.co/800x450/8a2be2/0d0d0d?text=Blockchain+Akıllı+Sözleşmeler",
		tarih: "2024-07-08",
		kategori: "Blockchain",
		yazar: "Emre Can",
	},
	{
		id: "7",
		baslik: "Sıfır Güven (Zero Trust) Mimarisi Siber Güvenliğin Geleceği",
		ozet: "Sıfır Güven, hiçbir kullanıcı veya cihazın varsayılan olarak güvenilmediği, sürekli doğrulama gerektiren bir güvenlik modelidir.",
		icerik:
			"<p>Geleneksel siber güvenlik yaklaşımları, ağın içindeki her şeyin güvenli olduğunu varsayan 'kale ve hendek' modeline dayanıyordu. Ancak modern tehdit ortamında, bu yaklaşım yetersiz kalmaktadır. Sıfır Güven (Zero Trust) mimarisi, bu paradigmeyi değiştirerek, 'Asla Güvenme, Her Zaman Doğrula' prensibini benimser.</p><p>Sıfır Güven modeli, ağ içindeki veya dışındaki her erişim isteğini potansiyel bir tehdit olarak değerlendirir. Her kullanıcı, cihaz ve uygulama, ağ kaynaklarına erişmeden önce kimlik doğrulamadan ve yetkilendirmeden geçmek zorundadır. Bu, en küçük bir ihlal durumunda bile saldırının yatay hareketini (lateral movement) kısıtlamayı amaçlar.</p><p>Uygulamada, Sıfır Güven; çok faktörlü kimlik doğrulama (MFA), mikro segmentasyon, ağ erişim kontrolü (NAC) ve sürekli izleme gibi teknolojilerin entegre kullanımını gerektirir. Bu yaklaşım, uzaktan çalışanların artması ve bulut bilişim hizmetlerinin yaygınlaşmasıyla daha da önem kazanmıştır.</p>",
		fotograf:
			"https://placehold.co/800x450/00ffff/0d0d0d?text=Zero+Trust+Security",
		tarih: "2024-07-05",
		kategori: "Siber Güvenlik",
		yazar: "Canan Yılmaz",
	},
	{
		id: "8",
		baslik: "Edge Computing: Veri İşlemede Yeni Sınırlar",
		ozet: "Edge Computing, verilerin kaynağına daha yakın işlenmesini sağlayarak gecikmeyi azaltıyor ve bant genişliği kullanımını optimize ediyor.",
		icerik:
			"<p>Bulut bilişim, veri işleme ve depolama için merkezi sunuculara dayanırken, Edge Computing (Uç Bilişim) verilerin üretildiği noktaya, yani ağın 'ucuna' daha yakın işlem gücü getirir. Bu yaklaşım, özellikle IoT (Nesnelerin İnterneti) cihazlarının ve gerçek zamanlı uygulamaların artmasıyla önem kazanmıştır.</p><p>Edge Computing'in temel avantajı, gecikmeyi (latency) önemli ölçüde azaltmasıdır. Veriler, merkezi bir bulut sunucusuna gönderilip işlenmek yerine, kaynağa yakın bir uç cihazda veya sunucuda işlenir. Bu, otonom araçlar, akıllı şehirler, endüstriyel otomasyon ve artırılmış gerçeklik gibi uygulamalar için kritik öneme sahiptir.</p><p>Ayrıca, Edge Computing, ağ bant genişliği kullanımını optimize eder. Tüm verinin buluta gönderilmesi yerine, sadece işlenmiş ve filtrelenmiş veriler gönderilir, bu da maliyetleri düşürür ve ağ tıkanıklığını azaltır. Güvenlik ve gizlilik açısından da, hassas verilerin yerel olarak işlenmesi, buluta aktarılmasından daha güvenli olabilir.</p>",
		fotograf: "https://placehold.co/800x450/8a2be2/0d0d0d?text=Edge+Computing",
		tarih: "2024-07-02",
		kategori: "Donanım",
		yazar: "Burak Kaya",
	},
	{
		id: "9",
		baslik:
			"Python'da Asenkron Programlama: Asyncio ile Daha Hızlı Uygulamalar",
		ozet: "Python'da eşzamanlı ve verimli I/O işlemleri için `asyncio` kütüphanesi, uygulamaların performansını artırmanın anahtarıdır.",
		icerik:
			"<p>Python, basitliği ve geniş kütüphane desteği sayesinde popüler bir programlama dilidir. Ancak, geleneksel olarak senkron (blocking) I/O işlemleri nedeniyle performans darboğazları yaşayabilirdi. `asyncio` kütüphanesi, Python'a asenkron (non-blocking) programlama yeteneği kazandırarak bu sorunu çözmüştür.</p><p>`asyncio`, tek bir iş parçacığı (thread) üzerinde birden fazla görevi eşzamanlı olarak yürütmeyi sağlar. Bu, özellikle ağ istekleri, veritabanı sorguları veya dosya okuma/yazma gibi I/O yoğun işlemler için idealdir. Bir I/O işlemi beklerken, `asyncio` diğer görevleri çalıştırabilir, böylece CPU zamanı boşa harcanmaz.</p><p>`async`/`await` anahtar kelimeleri, `asyncio` ile asenkron kod yazmayı kolaylaştırır. Bu yapı, kodun okunabilirliğini artırırken, karmaşık geri çağırma (callback) zincirlerinden kaçınmayı sağlar. Web sunucuları (FastAPI, Aiohttp), veritabanı sürücüleri ve ağ araçları gibi birçok Python kütüphanesi artık `asyncio` desteği sunmaktadır.</p>",
		fotograf: "https://placehold.co/800x450/00ffff/0d0d0d?text=Python+Asyncio",
		tarih: "2024-06-28",
		kategori: "Yazılım Dilleri",
		yazar: "Cemil Öz",
	},
	{
		id: "10",
		baslik: "DevSecOps: Güvenliği Geliştirme Sürecine Entegre Etmek",
		ozet: "DevSecOps, güvenlik uygulamalarını yazılım geliştirme yaşam döngüsünün her aşamasına entegre ederek daha güvenli yazılımlar üretmeyi hedefler.",
		icerik:
			"<p>DevSecOps, DevOps felsefesinin bir uzantısıdır ve güvenliği geliştirme, test etme ve dağıtım süreçlerine erken aşamadan itibaren dahil etmeyi amaçlar. Geleneksel olarak güvenlik, geliştirme sürecinin sonuna bırakılan bir adımdı, bu da 'sonradan yamalama' ve maliyetli düzeltmelerle sonuçlanıyordu.</p><p>DevSecOps ile güvenlik, 'shift-left' prensibiyle geliştirme yaşam döngüsünün (SDLC) her aşamasına entegre edilir. Bu, kod yazılırken güvenlik açıklarının taranmasını, bağımlılıkların analiz edilmesini, güvenlik testlerinin otomatize edilmesini ve güvenlik politikalarının sürekli olarak uygulanmasını içerir.</p>",
		fotograf: "https://placehold.co/800x450/8a2be2/0d0d0d?text=DevSecOps",
		tarih: "2024-06-25",
		kategori: "Yazılım Geliştirme",
		yazar: "Elif Sönmez",
	},
	{
		id: "11",
		baslik: "Yazılım Geliştirmede Test Odaklı Geliştirme (TDD)",
		ozet: "Test Odaklı Geliştirme (TDD), yazılım geliştirmede önce testleri yazmayı, sonra kodu geliştirmeyi içeren bir yaklaşımdır.",
		icerik:
			"<p>Test Odaklı Geliştirme (TDD), yazılım geliştiricilerin önce başarısız olacak bir test yazmasını, ardından testi geçecek en az kodu yazmasını ve son olarak kodu yeniden düzenlemesini içeren bir yazılım geliştirme metodolojisidir. Bu döngü, 'Kırmızı-Yeşil-Refaktör' olarak bilinir.</p><p>TDD'nin temel faydaları arasında daha az hata, daha temiz ve sürdürülebilir kod, daha iyi tasarım ve geliştiriciler arasında daha yüksek güven yer alır. Testler, kodun nasıl çalışması gerektiğine dair açık bir spesifikasyon görevi görür ve gelecekteki değişikliklerin mevcut işlevselliği bozmadığından emin olunmasını sağlar.</p><p>Her ne kadar başlangıçta biraz zaman alıcı gibi görünse de, uzun vadede TDD, hata ayıklama süresini azaltır ve yazılımın kalitesini artırır. Özellikle büyük ve karmaşık projelerde, TDD, kod tabanının yönetilebilirliğini ve genişletilebilirliğini önemli ölçüde iyileştirir.</p>",
		fotograf: "https://placehold.co/800x450/00ffff/0d0d0d?text=TDD+Yazılım",
		tarih: "2024-06-22",
		kategori: "Yazılım Geliştirme",
		yazar: "Burak Yılmaz",
	},
	{
		id: "12",
		baslik: "Siber Güvenlikte Sosyal Mühendislik Saldırıları",
		ozet: "Sosyal mühendislik, insan faktörünü kullanarak bilgi çalma veya sistemlere erişim sağlama tekniklerini kapsar.",
		icerik:
			"<p>Siber saldırıların büyük bir kısmı, teknik zafiyetlerden ziyade insan faktörünü hedef alan sosyal mühendislik teknikleri aracılığıyla gerçekleşir. Sosyal mühendislik, kurbanları manipüle ederek gizli bilgileri ifşa etmelerini veya istenmeyen eylemleri gerçekleştirmelerini sağlamayı amaçlar.</p><p>En yaygın sosyal mühendislik saldırıları arasında kimlik avı (phishing), oltalama (spear phishing), vishing (sesli kimlik avı) ve smishing (SMS kimlik avı) bulunur. Bu saldırılar genellikle aciliyet hissi yaratma, korkutma veya sahte otorite figürleri kullanma gibi psikolojik manipülasyon tekniklerini içerir.</p><p>Sosyal mühendislikten korunmanın en iyi yolu, farkındalık ve eğitimdir. Şirketler, çalışanlarını bu tür saldırılar hakkında düzenli olarak bilgilendirmeli, şüpheli e-postaları veya mesajları tanıma konusunda eğitimler vermelidir. Ayrıca, güçlü kimlik doğrulama yöntemleri ve güvenlik politikaları da bu tür saldırıların etkisini azaltmada kritik rol oynar.</p>",
		fotograf:
			"https://placehold.co/800x450/8a2be2/0d0d0d?text=Sosyal+Mühendislik",
		tarih: "2024-06-19",
		kategori: "Siber Güvenlik",
		yazar: "Deniz Kara",
	},
	{
		id: "13",
		baslik: "Makine Öğrenimi Modellerinde Açıklanabilirlik (XAI)",
		ozet: "Açıklanabilir Yapay Zeka (XAI), makine öğrenimi modellerinin kararlarını insanlar tarafından anlaşılır hale getirme çabasıdır.",
		icerik:
			"<p>Makine öğrenimi modelleri, özellikle derin öğrenme modelleri, karmaşık yapıları nedeniyle 'kara kutu' olarak adlandırılır. Bu modellerin neden belirli bir karar verdiğini anlamak zor olabilir, bu da özellikle sağlık, finans veya hukuk gibi kritik alanlarda güven sorunlarına yol açar.</p><p>Açıklanabilir Yapay Zeka (Explainable AI - XAI), bu 'kara kutu' sorununu çözmeyi hedefler. XAI teknikleri, modellerin iç işleyişini ve belirli bir tahmin için hangi özelliklerin daha etkili olduğunu ortaya koyarak, modelin kararlarını insanlar tarafından anlaşılır ve yorumlanabilir hale getirir.</p><p>XAI'nin kullanıldığı alanlar arasında model hata ayıklama, güven oluşturma, düzenleyici uyumluluk ve etik değerlendirme yer alır. LIME, SHAP, ELI5 gibi araçlar, model tahminlerini açıklamak için yaygın olarak kullanılan XAI teknikleridir. XAI, yapay zekanın daha geniş kitleler tarafından benimsenmesi ve güvenle kullanılması için kritik bir adımdır.</p>",
		fotograf: "https://placehold.co/800x450/00ffff/0d0d0d?text=XAI+Yapay+Zeka",
		tarih: "2024-06-16",
		kategori: "Yapay Zeka",
		yazar: "Cenk Akın",
	},
	{
		id: "14",
		baslik: "Microservices Mimarisi: Avantajları ve Zorlukları",
		ozet: "Microservices (Mikroservisler), büyük uygulamaları küçük, bağımsız ve birbirleriyle iletişim kuran servisler halinde bölme yaklaşımıdır.",
		icerik:
			"<p>Monolitik mimariler, büyük ve karmaşık uygulamaların geliştirilmesini ve bakımını zorlaştırabilir. Microservices mimarisi, bu sorunları çözmek için ortaya çıkmıştır. Her mikroservis, belirli bir işlevselliği yerine getiren bağımsız bir birimdir ve kendi veritabanına sahip olabilir.</p><p>Mikroservislerin başlıca avantajları arasında daha hızlı geliştirme ve dağıtım, daha iyi ölçeklenebilirlik, teknoloji bağımsızlığı ve hata izolasyonu yer alır. Her servis bağımsız olarak geliştirilip dağıtılabildiği için, ekipler daha çevik çalışabilir ve uygulamanın sadece belirli bir kısmı ölçeklendirilebilir.</p><p>Ancak mikroservislerin de zorlukları vardır. Dağıtık sistemlerin karmaşıklığı, servisler arası iletişimin yönetimi, veri tutarlılığı ve izleme (monitoring) gibi konular dikkatli planlama gerektirir. Doğru araçlar ve güçlü bir DevOps kültürü ile bu zorlukların üstesinden gelinebilir.</p>",
		fotograf: "https://placehold.co/800x450/8a2be2/0d0d0d?text=Microservices",
		tarih: "2024-06-13",
		kategori: "Yazılım Geliştirme",
		yazar: "Ebru Demir",
	},
	{
		id: "15",
		baslik: "Siber Güvenlikte Tehdit İstihbaratı (Threat Intelligence)",
		ozet: "Tehdit İstihbaratı, potansiyel siber saldırılar hakkında bilgi toplayıp analiz ederek proaktif savunma sağlamayı amaçlar.",
		icerik:
			"<p>Siber tehditler sürekli evrim geçirdiği için, kuruluşların sadece tepkisel değil, proaktif güvenlik önlemleri alması hayati önem taşır. Tehdit İstihbaratı (Threat Intelligence), bu proaktif yaklaşımın temelini oluşturur.</p><p>Tehdit İstihbaratı, siber saldırganların taktikleri, teknikleri ve prosedürleri (TTP'ler), kötü amaçlı yazılım türleri, güvenlik açıkları ve saldırı kampanyaları hakkında toplanan ve analiz edilen bilgidir. Bu bilgiler, kuruluşların potansiyel tehditleri önceden belirlemesine, riskleri değerlendirmesine ve savunma stratejilerini buna göre ayarlamasına yardımcı olur.</p><p>İstihbarat kaynakları arasında açık kaynaklar (OSINT), ticari tehdit istihbaratı beslemeleri, siber güvenlik toplulukları ve kendi iç güvenlik olayları yer alır. Etkili tehdit istihbaratı, güvenlik ekiplerinin daha bilinçli kararlar almasını, saldırılara karşı daha dirençli olmasını ve olası ihlallerin etkisini en aza indirmesini sağlar.</p>",
		fotograf:
			"https://placehold.co/800x450/00ffff/0d0d0d?text=Threat+Intelligence",
		tarih: "2024-06-10",
		kategori: "Siber Güvenlik",
		yazar: "Fatih Güneş",
	},
];

let filtrelenmisHaberler = [...mockHaberler]; // filtreleme için kopya

// kategorileri doldur
function kategorileriDoldur() {
	const tumKategoriler = new Set(mockHaberler.map((haber) => haber.kategori));
	kategoriFiltresi.innerHTML = '<option value="">Tüm Kategoriler</option>';
	tumKategoriler.forEach((kategori) => {
		const option = document.createElement("option");
		option.value = kategori;
		option.textContent = kategori;
		kategoriFiltresi.appendChild(option);
	});
}

// haberleri ekrana basma işlevi
function haberleriGoster(haberler) {
	haberlerKapsayici.innerHTML = ""; // önceki haberleri temizle
	if (haberler.length === 0) {
		haberlerKapsayici.innerHTML = `<p style="color: #ff0000; text-align: center; font-size: 1.2rem;">Aradığınız kriterlere uygun haber bulunamadı.</p>`;
		return;
	}
	haberler.forEach((haber) => {
		const haberKarti = document.createElement("div");
		haberKarti.classList.add("haber-karti");
		haberKarti.innerHTML = `
                    <img src="${haber.fotograf}" alt="${haber.baslik}" onerror="this.onerror=null;this.src='https://placehold.co/800x450/3a3a3a/e0e0e0?text=Görsel+Bulunamadı';">
                    <div class="haber-karti-icerik">
                        <h3>${haber.baslik}</h3>
                        <p>${haber.ozet}</p>
                        <div class="haber-karti-bilgi">
                            <span><i class="fas fa-calendar-alt"></i> ${haber.tarih}</span>
                            <span><i class="fas fa-user"></i> ${haber.yazar}</span>
                        </div>
                        <a href="#" class="haber-karti-link" data-id="${haber.id}">Devamını Oku <i class="fas fa-arrow-right"></i></a>
                    </div>
                `;
		haberlerKapsayici.appendChild(haberKarti);
	});

	// haber kartı linklerine tıklama olayını ekle
	document.querySelectorAll(".haber-karti-link").forEach((link) => {
		link.addEventListener("click", (e) => {
			e.preventDefault(); // varsayılan link davranışını engelle
			const haberId = e.currentTarget.dataset.id;
			haberDetayGoster(haberId);
		});
	});
}

// apiden haberleri getirme işlevi
async function haberleriYukle() {
	// Loader'ı göster
	haberlerKapsayici.innerHTML = `
                <div class="yukleyici-kapsayici">
                    <div class="yukleyici"></div>
                </div>
            `;

	try {
		await new Promise((resolve) => setTimeout(resolve, 1500)); // 1.5 saniye bekle

		filtrelenmisHaberler = [...mockHaberler]; // başlangıçta tüm haberleri yükle
		haberleriGoster(filtrelenmisHaberler);
		kategorileriDoldur(); // kategorileri doldur
	} catch (hata) {
		console.error("Haberler yüklenirken bir hata oluştu:", hata);
		haberlerKapsayici.innerHTML = `<p style="color: #ff0000; text-align: center; font-size: 1.2rem;">Haberler yüklenirken bir sorun oluştu. Lütfen daha sonra tekrar deneyin.</p>`;
	}
}

// haber detay modalını göster
function haberDetayGoster(id) {
	const secilenHaber = mockHaberler.find((haber) => haber.id === id);
	if (secilenHaber) {
		modalBaslik.textContent = secilenHaber.baslik;
		modalTarih.innerHTML = `<i class="fas fa-calendar-alt"></i> ${secilenHaber.tarih}`;
		modalYazar.innerHTML = `<i class="fas fa-user"></i> ${secilenHaber.yazar}`;
		modalKategori.innerHTML = `<i class="fas fa-tag"></i> ${secilenHaber.kategori}`;
		modalFotograf.src = secilenHaber.fotograf;
		modalIcerik.innerHTML = secilenHaber.icerik;
		haberDetayModal.style.display = "block";
		document.body.style.overflow = "hidden"; // arka planı kaydırmayı engelle
	}
}

// haber detay modalını kapat
kapatmaButonu.addEventListener("click", () => {
	haberDetayModal.style.display = "none";
	document.body.style.overflow = ""; // arka plan kaydırmayı etkinleştir
});

// modal dışına tıklayınca kapat
window.addEventListener("click", (e) => {
	if (e.target === haberDetayModal) {
		haberDetayModal.style.display = "none";
		document.body.style.overflow = "";
	}
});

// arama ve filtreleme işlevi
function haberleriFiltrele() {
	const aramaMetni = aramaKutusu.value.toLowerCase();
	const secilenKategori = kategoriFiltresi.value;

	filtrelenmisHaberler = mockHaberler.filter((haber) => {
		const baslikEslesme = haber.baslik.toLowerCase().includes(aramaMetni);
		const ozetEslesme = haber.ozet.toLowerCase().includes(aramaMetni);
		const kategoriEslesme =
			secilenKategori === "" || haber.kategori === secilenKategori;
		return (baslikEslesme || ozetEslesme) && kategoriEslesme;
	});
	haberleriGoster(filtrelenmisHaberler);
}

aramaKutusu.addEventListener("input", haberleriFiltrele);
kategoriFiltresi.addEventListener("change", haberleriFiltrele);

// sayfa yüklendiğinde haberleri getir
document.addEventListener("DOMContentLoaded", haberleriYukle);
