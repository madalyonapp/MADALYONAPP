USE [Madalyon]
GO
/****** Object:  Table [dbo].[Book_Table]    Script Date: 16.05.2020 10:40:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Book_Table](
	[book_id] [int] IDENTITY(0,1) NOT NULL,
	[user_id] [int] NULL,
	[book_choise] [nvarchar](50) NULL,
	[book_name] [nvarchar](50) NULL,
	[writer_name] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[book_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Currency_Table]    Script Date: 16.05.2020 10:40:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Currency_Table](
	[currency_id] [int] IDENTITY(0,1) NOT NULL,
	[currency_name] [nvarchar](50) NULL,
	[currency_nick] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[currency_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Dictionary_Table]    Script Date: 16.05.2020 10:40:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Dictionary_Table](
	[dictionary_id] [int] IDENTITY(0,1) NOT NULL,
	[dictionary_tr] [nvarchar](50) NULL,
	[dictionary_en] [nvarchar](50) NULL,
	[dictionary_fr] [nvarchar](50) NULL,
	[dictionary_de] [nvarchar](50) NULL,
	[dictionary_es] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[dictionary_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Experience_Table]    Script Date: 16.05.2020 10:40:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Experience_Table](
	[experience_id] [int] IDENTITY(0,1) NOT NULL,
	[user_id] [int] NOT NULL,
	[experience_name] [nvarchar](max) NULL,
	[experience_text] [nvarchar](max) NULL,
	[experience_photo] [nvarchar](max) NULL,
	[experience_location] [nvarchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[experience_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Read_Questions_Table]    Script Date: 16.05.2020 10:40:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Read_Questions_Table](
	[read_questions_id] [int] IDENTITY(0,1) NOT NULL,
	[user_id] [int] NULL,
	[read_questions_from_id] [int] NULL,
	[read_questions_message] [nvarchar](100) NULL,
	[read_questions_date] [datetime] NULL,
	[read_answers_message] [nvarchar](100) NULL,
	[read_answers_date] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[read_questions_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Review_Table]    Script Date: 16.05.2020 10:40:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Review_Table](
	[review_id] [int] IDENTITY(0,1) NOT NULL,
	[user_id] [int] NOT NULL,
	[review_name] [nvarchar](max) NULL,
	[review_text] [nvarchar](max) NULL,
	[review_photo] [nvarchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[review_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Top_Book]    Script Date: 16.05.2020 10:40:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Top_Book](
	[book_id] [int] IDENTITY(0,1) NOT NULL,
	[book_name] [nvarchar](50) NOT NULL,
	[write_name] [nvarchar](50) NULL,
 CONSTRAINT [PK_Top_Book] PRIMARY KEY CLUSTERED 
(
	[book_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Translate_Table]    Script Date: 16.05.2020 10:40:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Translate_Table](
	[lang_id] [int] IDENTITY(0,1) NOT NULL,
	[lang_name] [nvarchar](50) NULL,
	[lang_nick] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[lang_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Travel_Map_Table]    Script Date: 16.05.2020 10:40:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Travel_Map_Table](
	[Travel_id] [int] IDENTITY(0,1) NOT NULL,
	[user_id] [int] NULL,
	[travel_choise] [nvarchar](50) NULL,
	[travel_city] [nvarchar](50) NULL,
	[travel_country] [nvarchar](50) NULL,
	[travel_date] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[Travel_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Travel_Questions_Table]    Script Date: 16.05.2020 10:40:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Travel_Questions_Table](
	[travel_questions_id] [int] IDENTITY(0,1) NOT NULL,
	[user_id] [int] NULL,
	[travel_questions_from_id] [int] NULL,
	[travel_questions_message] [nvarchar](100) NULL,
	[travel_questions_date] [datetime] NULL,
	[travel_answers_message] [nvarchar](100) NULL,
	[travel_answers_date] [date] NULL,
PRIMARY KEY CLUSTERED 
(
	[travel_questions_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User_Info_Table]    Script Date: 16.05.2020 10:40:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User_Info_Table](
	[user_info_id] [int] IDENTITY(1,1) NOT NULL,
	[user_id] [int] NOT NULL,
	[user_info_contact_no] [int] NULL,
	[user_info_contact_email] [nvarchar](50) NULL,
	[user_info_hobby] [nvarchar](max) NULL,
	[user_info_travel] [nvarchar](max) NULL,
	[user_info_date] [datetime] NULL,
	[user_info_book] [nvarchar](50) NULL,
	[user_info_reliability] [int] NULL,
	[user_info_city] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[user_info_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User_Table]    Script Date: 16.05.2020 10:40:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User_Table](
	[user_id] [int] IDENTITY(0,1) NOT NULL,
	[user_nickname] [nvarchar](50) NULL,
	[user_name] [nvarchar](50) NULL,
	[user_surname] [nvarchar](50) NULL,
	[user_email] [nvarchar](50) NULL,
	[user_photo] [nvarchar](max) NULL,
	[user_password] [nchar](10) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[user_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Book_Table] ON 

INSERT [dbo].[Book_Table] ([book_id], [user_id], [book_choise], [book_name], [writer_name]) VALUES (0, 0, N'1', N'Uğultulu Tepeler ', N'Emily Bronte')
INSERT [dbo].[Book_Table] ([book_id], [user_id], [book_choise], [book_name], [writer_name]) VALUES (1, 0, N'1', N'Deniz Küstü', N'Yaşar Kemal')
INSERT [dbo].[Book_Table] ([book_id], [user_id], [book_choise], [book_name], [writer_name]) VALUES (2, 0, N'1', N'İnce Memed', N'Yaşar Kemal')
INSERT [dbo].[Book_Table] ([book_id], [user_id], [book_choise], [book_name], [writer_name]) VALUES (3, 0, N'1', N'Ana', N'Gorki')
INSERT [dbo].[Book_Table] ([book_id], [user_id], [book_choise], [book_name], [writer_name]) VALUES (4, 0, N'1', N'İnsanın Düşünmekten Canı Yanar Mı?', N'Nevşin Mengü')
INSERT [dbo].[Book_Table] ([book_id], [user_id], [book_choise], [book_name], [writer_name]) VALUES (5, 0, N'0', N'Otuzların Kadını', N'Tomris Uyar')
INSERT [dbo].[Book_Table] ([book_id], [user_id], [book_choise], [book_name], [writer_name]) VALUES (6, 0, N'0', N'Kalanlar', N'Tezer Özlü')
INSERT [dbo].[Book_Table] ([book_id], [user_id], [book_choise], [book_name], [writer_name]) VALUES (7, 0, N'0', N'Jane Eyre', N'Charlotte Bronte')
INSERT [dbo].[Book_Table] ([book_id], [user_id], [book_choise], [book_name], [writer_name]) VALUES (8, 0, N'0', N'Zar Yıllar', N'Charles Dickens')
INSERT [dbo].[Book_Table] ([book_id], [user_id], [book_choise], [book_name], [writer_name]) VALUES (9, 1, N'1', N'Serenad', N'Zülfü Livaneli')
INSERT [dbo].[Book_Table] ([book_id], [user_id], [book_choise], [book_name], [writer_name]) VALUES (10, 1, N'1', N'Kırmızı Saçlı Kadın', N'Orhan Pamuk')
INSERT [dbo].[Book_Table] ([book_id], [user_id], [book_choise], [book_name], [writer_name]) VALUES (11, 1, N'1', N'Bir Çift Yürek', N'Marlo Morgan')
INSERT [dbo].[Book_Table] ([book_id], [user_id], [book_choise], [book_name], [writer_name]) VALUES (12, 1, N'0', N'Veba', N'Albert Camus')
INSERT [dbo].[Book_Table] ([book_id], [user_id], [book_choise], [book_name], [writer_name]) VALUES (13, 1, N'0', N'Matmazel Noraliya''nın Koltuğu', N'Peyami Safa')
INSERT [dbo].[Book_Table] ([book_id], [user_id], [book_choise], [book_name], [writer_name]) VALUES (14, 0, N'1', N'Nana', N'Emile Zola')
INSERT [dbo].[Book_Table] ([book_id], [user_id], [book_choise], [book_name], [writer_name]) VALUES (15, 0, N'1', N'Notre Dame''in Kamburu', N'Victor Hugo')
INSERT [dbo].[Book_Table] ([book_id], [user_id], [book_choise], [book_name], [writer_name]) VALUES (16, 0, N'0', N'Şato', N'Franz Kafka')
SET IDENTITY_INSERT [dbo].[Book_Table] OFF
GO
SET IDENTITY_INSERT [dbo].[Currency_Table] ON 

INSERT [dbo].[Currency_Table] ([currency_id], [currency_name], [currency_nick]) VALUES (0, N'Avusturalya Doları', N'AUD')
INSERT [dbo].[Currency_Table] ([currency_id], [currency_name], [currency_nick]) VALUES (1, N'Bulgar Levası', N'BGN')
INSERT [dbo].[Currency_Table] ([currency_id], [currency_name], [currency_nick]) VALUES (2, N'Brezilya Reali', N'BRL')
INSERT [dbo].[Currency_Table] ([currency_id], [currency_name], [currency_nick]) VALUES (3, N'Kanada Doları', N'CAD')
INSERT [dbo].[Currency_Table] ([currency_id], [currency_name], [currency_nick]) VALUES (4, N'İsviçre Frangı', N'CHF')
INSERT [dbo].[Currency_Table] ([currency_id], [currency_name], [currency_nick]) VALUES (5, N'Çin Yuanı', N'CNY')
INSERT [dbo].[Currency_Table] ([currency_id], [currency_name], [currency_nick]) VALUES (6, N'Çek Korunası', N'CZK')
INSERT [dbo].[Currency_Table] ([currency_id], [currency_name], [currency_nick]) VALUES (7, N'Danimarka', NULL)
SET IDENTITY_INSERT [dbo].[Currency_Table] OFF
GO
SET IDENTITY_INSERT [dbo].[Dictionary_Table] ON 

INSERT [dbo].[Dictionary_Table] ([dictionary_id], [dictionary_tr], [dictionary_en], [dictionary_fr], [dictionary_de], [dictionary_es]) VALUES (0, N'Merhaba', N'Hi', N'bonjour', N'Hallo', N'¡Hola')
SET IDENTITY_INSERT [dbo].[Dictionary_Table] OFF
GO
SET IDENTITY_INSERT [dbo].[Experience_Table] ON 

INSERT [dbo].[Experience_Table] ([experience_id], [user_id], [experience_name], [experience_text], [experience_photo], [experience_location]) VALUES (0, 0, N'OSLO YEME İÇME REHBERİ: NORVEÇLİ BALIKÇILAR, ENSENİZDEYİZ!', N'Oslo ile aramız bir iyi, bir iyi sormayın. Daha önce İzlanda gezisi öncesinde kavuşmuş, şimdi de Tromso gezisi öncesi biraz kaynaştık ve her Oslo’dan geçişimizde kuzey ışıklarını görebildiğimiz için Oslo resmen bizim bu konudaki totemimize dönüşmüş durumda. Sen bizim kuzey ışıklarından önceki istasyonumuzsun Oslo, seni sevmememiz mümkün değil. Hatırlarsanız ya da yeni tanıştıysak ilk Oslo ziyaretimizde detaylısından bir Oslo Gezi Rehberi yazarak şehir ile ilgili ne biliyorsak anlatmıştık. Bu seferki Oslo ziyaretimizde ise şehrin farklı bir yönüne odaklanalım, Oslo yeme içme notlarımızı da buraya yığalım dedik. Bayağı da güzel yerler bulduk, o yüzden Oslo gezinizde ne yiyip içeceğiniz konusunda gayet huzurlu olabilirsiniz, bize güvenin.Dayanamıyoruz, karşı koyamıyoruz, Amerikan filmlerinde sabah uyandığı gibi kahveye koşan karakterlere dönüştük, kalbimiz kahve için atıyor. Geçen gün en sevdiğimiz kahve dükkanındaki kahve çekirdeğini değiştirdiklerini fark edebildik diye “ALLAHIM BİZ YANLIŞLIKLA KAHVE UZMANI MI OLDUK YA” sevinci bile yaşadık, resmen en uzun ilişkimizi kahve ile yaşıyoruz. Bu kadar yükseltmeye artık Oslo’daki en iyi kahveciler önerilerimizi alırsınız diye düşünüyoruz.', N'https://oitheblog.com/wp-content/uploads/2018/02/Oslo-Yeme-%C4%B0%C3%A7me-Rehberi-9.jpg', N'Oslo, Norveç')
INSERT [dbo].[Experience_Table] ([experience_id], [user_id], [experience_name], [experience_text], [experience_photo], [experience_location]) VALUES (1, 0, N' Noel’de Bir Gün Zengin Gibi!', N'Lüksemburg öyle yolunuzun düşeceği bir yer değil. Avrupa’nın 600 bin nüfuslu minik bir ülkesi. Benim gibi özellikle gitmek istemeniz gerekli. Ama ulasımı çok zor değil, Türkiye’den direkt uçuş da var, Paris ve Amsterdam gibi şehirlerden direkt trenler de.Peki ben hangi yolla gidiyorum? Evet bir süredir Brescia, İtalya’da yaşadığımdan Milano Bergamo’dan direkt olarak Lüksemburg’a uçacağım. Hem de sadece 10 euro’ya aldım bileti! Sabah saat 6 da uçağım var 🙂

Artık evime dönüşen Milano Bergamo Havalimanı’ndan 06.25 uçağıyla direkt Lüksemburg’a uçuyorum. Soğuk bir kasım günü sıcacık uçağı bulunca 1 saat uyumuşum 🙂 Daha gün yeni aydınlanıyorken kendimi Lüksemburg’da buluverdm.Lüksemburg ilk bakışta şu lüks havasını hissettirmeye başladı bana. İlk izlenimi size gördüklerimle anlatmak isterdim ama hayır 🙂 bu şehrin havalimanına giden otobüsler ücretsiz! 55’ten fazla ülkeye giden bendeniz ilk kez böyle birşey görüyorum..

E boşuna lüks demedik 🙂 Lüksemburg kişi başına düşen milli gelire göre dünyanın en zengin ülkesi!Lüksemburg havalimanından 16 ve 29 nolu otobüsler direkt olarak şehir merkezine gidiyor. Burası zaten küçücük bir ülke 15-20 dakika sonra kendinizi büyülü bir ortamda buluyorsunuz.

Otobüs aslında şehir turu atar gibi gittiğinden çoğu şeyi daha başta görmüş oldum 🙂 Fragman gibi düşünelim…Şehrin güneyindeki merkez tren istasyonunun orada iniyorum. Hava 3-5 derece civarında ve uyku sersemliği ile beraber biraz üşüdüm doğrusu 🙂 Şehir ilk bakışta Amsterdam, Köln, Paris ve Londra’nın zengin ve tarihi semtlerini anımsatıyor. Bulutlu bir hava da olunca o tarihi görkemli binalar daha bir heybetli gözüküyor gözüme.Lüksemburg tren istasyonunu gezilmesi görülmesi gereken yerlerden biri olarak düşünebilirsiniz. Tipik Fransız gar örneklerinden biri gibi kanımca, biraz seyredip, Avenue de la Liberte’ üzerinden merkeze doğru yürümeye başlıyorum.Bu arada Cadde İsmi Fransızca 🙂 Lüksemburg’da Almanca, Fransızca, İngilizce her dilde işinizi halledebilirsiniz. Ama ana dil Fransızca gibi düşünün.

Düzenli, temiz ve zengin olduğunu her karesinde hissettiren Lüksemburg’da yürüyüş yapmak büyük bir keyif. Bahsettiğim caddenin sonuna gelince, sizleri şaşırtacak bir manzara beni bekliyor.

', N'https://ichef.bbci.co.uk/news/410/cpsprodpb/DCFF/production/_104657565_gettyimages-566435933.jpg', N'Lüksemburg')
INSERT [dbo].[Experience_Table] ([experience_id], [user_id], [experience_name], [experience_text], [experience_photo], [experience_location]) VALUES (2, 0, N'Vilnius, Litvanya Gezi Notlarım', N'12 Aralık 2016 Pazartesi. Güne Riga, Letonya’da uyanıyorum. Sabahın erken saatleri olduğundan hava epey soğuk. Riga Tren İstasyonu’nun oradaki otobüs terminaline gidiyorum. Aylar öncesinden biletini aldığım otobüsümle bugün Vilnius’a doğru yol alacağım.

Bugün katedeceğim mesafe 300 kilometre olacak. Riga’dan Vilnius’a benim gibi otobüslerle ulaşabiliyorsunuz. Lux Express firması bana göre bu hatta kullanabileceğiniz en mantıklı seçenek. Bilet fiyatları da 5-15 euro aralığında değişiyor.

Kaunas ve Minsk’ten ise trenlerle buraya ulaşabilirsiniz.Türkiye’den Litvanya’ya direk uçuşlar ile ulaşabilirsiniz. Ancak sefer sayılarının azlığından ötürü biraz masraflı olabiliyor. Benim rotamdaki şekilde çevre şehirlerden buraya ulaşmayı deneyebilirsiniz.Kısaca Litvanya ve Vilnius’tan söz etmek istiyorum. Litvanya, Avrupa’nın kuzeyinde bunan küçük bir Baltık Ülkesi. 1990 yılında SSCB’den ayrılıp bağımsızlıklarını ilan etmişler. Günümüzde nüfusları yalnızca 3.5 milyon kadar. Resmi dilleri Litvanca, para birimleri ise Euro.Vilnius, Litvanya’nın başkenti ve en büyük şehri. Ülkenin güneydoğusunda, Belarus sınırının yakınlarında bulunuyor. Ülkenin ticari ve sosyo-kültürel anlamda da en önemli şehri konumunda, nüfusu 550 bin civarında.Vilnius’a olan ziyaretlerinizde Schengen Vizesi almanız gerekiyor. Litvanya Avrupa Birliği üyesi bir ülke. Resmi pasaport sahipleri ise kısa süreli seyahatlerinde vizeden muaflar. Diğer Schengen ülkelerinden Vilnius’a geçerken pasaport kontrolü yapılmıyor.

Yaklaşık dört saatlik bir yolculuğun ardından Vilnius’a varıyorum. Yol boyunca dümdüz ovalardan geldik buraya. Riga’da hava soğuktu ama yağış yoktu. Vilnius’ta ise her yer bembeyaz ! Otobüsten izlerken keyifli olabilir ancak dışarısı -10 derece. Bu sıcaklık benim gibi sıcak iklimden gelenler için fazlasıyla soğuk.', N'https://www.gorkemliyollar.com/wp-content/uploads/2017/08/IMG_4015-Custom.jpg', N'Vilnius,Litvanya')
INSERT [dbo].[Experience_Table] ([experience_id], [user_id], [experience_name], [experience_text], [experience_photo], [experience_location]) VALUES (3, 0, N'Minsk, Belarus', N'13 Aralık 2016 Salı. Sabahın daha ilk ışıklarını görmeden Vilnius, Litvanya’da uyanıyorum. Saat 06.15’teki Minsk trenim için Vilnius Tren İstasyonu’na doğru yola çıkıyorum.

Dışarıda hava -10 derece civarlarında, sokak lambalarının ışıkları yerdeki buz tutmuş yoldan yansıyor. Sonunda Vilnius İstasyonu’ndayım. Buradan Minsk, Belarus’a olan yolculuğum yaklaşık 2.5 saat sürecek.

Ülkemizden Minsk ve Belarus’a ulaşmak isteyenler, Türk Hava Yolları’nın direkt uçuşları ile 3 saatte buraya gelebilirler.Ben Schengen bölgesindeki Litvanya ülkesindeyim. Belarus ise Avrupa Birliği üyesi bir ülke değil. Bu yüzden istasyonda trene binmeden ülkeden çıkış için pasaport kontrolünden geçiyorum.

Trene binmeden önce keyifli bir kar yağışı başlıyor, ben yerimi alıp hafif bir uyku eşliğinde Minsk yoluna koyuluyorum.Öncelikle Belarus ve Minsk’ten bahsetmek istiyorum.

Belarus ya da bilinen diğer bir adıyla Beyaz Rusya, Avrupa’nın doğusunda ve Rusya Federasyonu’nun batı ucunda bulunan küçük bir ülke. SSCB’nin dağılmasıyla beraber kurulan ülkelerden biri olan Belarus, diğer dağılanlar arasında şuan Rusya ile en yakın ilişkide olan diyebiliriz.Belarus’da Beyaz Rusça ve Rusça konuşuluyor bu diller de birbirine oldukça yakın. Para birimleri ise Belarus Rublesi. Litvanya ve kalan Avrupa’dan farklı olarak Kril Alfabesi kullanıyorlar ve ülke Rusya Federasyonu ile sınır birliği içinde. Belarus, ülkemiz vatandaşlarından, kısa süreli ziyaretlerinde vize istemiyor.

Başkent Minsk ülkenin en önemli şehri. Tarihi 11. yüzyıldaki Minsk Prensliği’ne kadar dayanan bu şehir birinci ve ikinci dünya savaşlarında çokça el değiştirdikten sonra SSCB ve Belarus egemenliğine ulaşmış. Şehrin günümüzdeki nüfusu 2 milyon kadar ve turistik anlamda yükselen bir değeri var.Sabahın ilk ışıklarıyla Minsk’e yaklaşıyoruz. Belarus’a giriş için pasaport kontrolü trende yapılıyor. Doldurmanız için Immigration Formu verilıyor. Aynısı uçakla gelirken de dağıtılıyormuş. Form nerede, kaç gün kalacağımız ve benzeri konularlarla ilgili.Bu form Rusya’ya girerken doldurduğumun aynısı. Rusya ile Belarus sınır birliği içinde. Enteresan olan sınır birliği olan iki ülkeden Rusya vize isterken Belarus’un istememesi. Teknik olarak Belarus’a giriş yapıp oradan Rusya’ya vizesiz ulaşmak mümkün. Tabii ki bu yasak ve yapılmaması gerekli !

Trenim Minsk Tren İstasyonu’na varıyor. Herhangi bir gümrük bölgesinden geçmeden direkt olarak şehre giriş yapıyorum. Bu sırada saatimi de 1 saat ileriye aldım. Belarus, ülkemiz ile aynı saat dilimi içerisinde. Hemen batısındaki Litvanya ile 1 saat farkı bulunuyor.Saat sabahın erken saatleri ve oldukça soğuk. Ancak bulutların arasından sızan hafif bir güneş var. Güneş eşliğindeki kar manzarası ile gezmek ayrı bir keyif olacak.', N'https://www.gorkemliyollar.com/wp-content/uploads/2017/06/IMG_4181-Customs.jpg', N'Minsk')
INSERT [dbo].[Experience_Table] ([experience_id], [user_id], [experience_name], [experience_text], [experience_photo], [experience_location]) VALUES (4, 1, N'SANTİAGO GEZİ REHBERİ: ŞİLİ’NİN BAŞKENTİNE YOLCULUK', N'Şili’nin başkenti Santiago, hava kirliliği bol olan (bu da And dağlarının havayı şehrin içine hapsetmesiyle alakalıymış) kalabalık, kaotik, fazla sayıda gökdelen barındıran ve dünyanın birçok başkenti ile benzer özellikler taşıyan kozmopolit bir şehir. Özellikle sonradan gelişmiş bölgelerine ayak bastığınızda resmen bir Amerika simülasyonun orta yerindeymiş gibi hissediyorsunuz. Öyle ki, bazen Güney Amerika’da olduğunuzu anımsatan tek şey ortalıkta yüksek sesle İspanyolca konuşan insanlarmış gibi geliyor. Santiago’nun Amerika’ya olan benzerliği ve modern, düzgün bir yapıda gelişmiş olması, Şili’nin tarihini incelediğinizde çok da şaşırtıcı gelmeyebilir. Zira 1973-1990 yılları arasında Amerika desteğiyle darbe girişiminde bulunan diktatör Pinochet’in (bu durum tanıdık geliyor olabilir) şehrin değişiminde de büyük bir etkisi olmuş. Konudan alakasız olarak, şehrin gelişiminde büyük bir etken de depremler. 8.6 şiddetinde bir depremin insanlar tarafından anormal kabul edilmediği bir ülkede binaları düzgün yapmak bir seçenek değil.

Yukarıdaki paragrafı okuduğunuzda Santiago’yu sevmediğimiz izlenimize kapılmış olabilirsiniz ama durum aslında hiç de böyle değil. Evet Santiago hayalimizdeki otantik Güney Amerika deneyimini yaşatmamış olabilir ama bu bizi birçok yönüyle mutlu etmediği anlamına da gelmiyor. Lafı fazla uzatmayalım; karşınızda Santiago Gezi Rehberi !', N'https://oitheblog.com/wp-content/uploads/2016/02/SAM_6863-1024x683.png', N'Santiago')
INSERT [dbo].[Experience_Table] ([experience_id], [user_id], [experience_name], [experience_text], [experience_photo], [experience_location]) VALUES (5, 1, N'VALPARAİSO GEZİ NOTLARI: BİR GÜNDE NE YAPILIR?', N'Valparaiso, turistlerin çoğunlukla Santiago’dan günübirlik gitmeyi tercih ettiği, sokak sanatıyla nam salmış, küçük, renkli bir liman şehri. Ulaşımı birkaç vasıta gerektirdiği için turisti daha az ve Santiago’ya kıyasla daha gerçek bir Güney Amerika deneyimi yaşattığını söyleyebiliriz. Eğer yalnızca turistik zaman geçirmek istiyorsanız gerçekten de bir günden fazla kalmanın alemi yok , çünkü yapacak onlarca şeyinizin olduğu bir şehirden bahsetmiyoruz. Daha çok lokal hayatı gözlemleyeceğiniz, sokaklarında kaybolacağınız bir şehir tadında. Ayrıca inceden bir güvenlik problemi olduğu için genellikle geceleri turistlerin sokaklarda cirit attığı türden bir yer de değil. Tüm bunlara rağmen Valparaiso’da geçireceğiniz bir gün sizi bayağı mutlu edebilir. Özellikle yaz döneminde, yani Kuzey Yarımküre’nin Kasım-Aralık-Ocak-Şubat döneminde denk gelecek bir zamanda giderseniz, rengarenk sokaklarda küçük çaplı bir müzik festivali simülasyonu içinde gibi hissedebilirsiniz.', N'https://oitheblog.com/wp-content/uploads/2016/02/SAM_6863-1024x683.png', N'Valparaiso')
INSERT [dbo].[Experience_Table] ([experience_id], [user_id], [experience_name], [experience_text], [experience_photo], [experience_location]) VALUES (6, 1, N'SANTİAGO YEME İÇME NOTLARI: ŞİLİ MUTFAĞIYLA TANIŞALIM', N'Santiago gezi rehberimizde size oralarda ne kadar mutlu olabileceğinizin garantisini verdiysek, şimdi sıra geldi Santiago yeme içme meselesine. Merak etmeyin, Santagio’da her alanda olduğu gibi yemek konusunda da gayet mesut olabilirsiniz. Çünkü hem Güney Amerika mutfağının her çeşidini bulabilmeniz, hem de dünya mutfağından çok başarılı seçenekler bulabilmeniz mümkün. İlk etapta lokal şeyler denemeye çalışıp, sonlara doğru gelen “yok mu bi’ burger, pizza falan?” hissine teslim olursanız da sorun yok, burada her aradığınızın güzel bir versiyonu mevcut.

Başlamadan gelen not: Güney Amerika ile ilgili tüm notlarımızı görmek isterseniz diğer Güney Amerika yazılarımıza bakabilirsiniz.

Santiago’da restoran önerilerine geçmeden önce hazır Şili gezisine çıkmışken genel olarak tüketmeden dönmemeniz gerekenlerle ya da tüketmekten kaçamayacağınız şeylerle ilgili şöyle bir özet geçelim:Şili Şarabı: Şarap konusunda hiçbir bilginiz olmasa dahi Şili’nin bu konuda dünyanın en iyilerinden biri olduğundan bir şekilde haberdarsınızdır. Haliyle Santiago’da her gün en az bir öğününüzün yanında şarap içmeden dönmeyin, çünkü döndükten sonra bu kadar iyi şarapları bu kadar uygun fiyata içmeyi bayağı özleyebilir, neden daha çok içmedim pişmanlığı yaşayabilirsiniz. Bizim deneyip de çok sevdiğimiz birkaç şarabı da söylemeden geçmeyelim: Casillero del Diablo, Conca y Toro ve Almaviva.

Pisco: Pisco Şili’nin ulusal içkisi olarak kabul edilebilir. Aslına bakarsanız Güney Amerika genelinde çok yaygın, ancak özellikle Şili ve Peru’ya özgü olduğu biliniyor. Hal böyle olunca bizim Şilili arkadaşlar pisco’yu onunla bununla karıştıra karıştıra türlü türlü kokteyl ve içki üretmişler. En yaygın olanları Piscola (pisco ve kola karışımı) ve Pisco Sour (lim suyu, pisco, simple syrup, yumurta beyazı karışımı). Ancak tabii ki bunlar dışında daha yaratıcı ve enteresan denemelerde de bulunuyorlar, bizce kesinlikle seversiniz, kaçırmayın.

Mote con Huesillo: Adını söyleyince kendinizi 1 saniye için İspanyolca konuşabiliyormuş gibi hissettiğiniz bu alkolsüz içecek, aslında komposto/hoşaf benzer bir şey. İçinde çoğunlukla kayısı ya da şeftali ve buğday oluyor ve soğuk olarak servis ediliyor. Biliyoruz böyle söyleyince kulağa müthiş çekici gelmiyor, çünkü bizim kültürümüze çok da uzak bir şey değil, ancak tadına bakarsanız çok seveceğinize eminiz. Özellikle yaz döneminde gidiyorsanız sokak satıcılarının bundan bol bol sattığını göreceksiniz, kapın bir tane!', N'https://oitheblog.com/wp-content/uploads/2016/02/SAM_6565-1024x683.png', N'Santiago')
SET IDENTITY_INSERT [dbo].[Experience_Table] OFF
GO
SET IDENTITY_INSERT [dbo].[Read_Questions_Table] ON 

INSERT [dbo].[Read_Questions_Table] ([read_questions_id], [user_id], [read_questions_from_id], [read_questions_message], [read_questions_date], [read_answers_message], [read_answers_date]) VALUES (0, 0, 1, N'Oğuz Atay''ın hangi kitaplarını önerirsiniz?', CAST(N'2020-05-14T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[Read_Questions_Table] ([read_questions_id], [user_id], [read_questions_from_id], [read_questions_message], [read_questions_date], [read_answers_message], [read_answers_date]) VALUES (1, 0, 1, N'Kya''nın şarkı söylediği yer kitabını hangi yayından okudunuz', CAST(N'2020-05-14T00:00:00.000' AS DateTime), N'Salon yayın evinin basımı D&R da bulabilirsiniz.', NULL)
INSERT [dbo].[Read_Questions_Table] ([read_questions_id], [user_id], [read_questions_from_id], [read_questions_message], [read_questions_date], [read_answers_message], [read_answers_date]) VALUES (2, 1, 0, N'Yaşar kemal kitaplarını hangi basım evinden okuyorsunuz? ', CAST(N'2020-05-14T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[Read_Questions_Table] ([read_questions_id], [user_id], [read_questions_from_id], [read_questions_message], [read_questions_date], [read_answers_message], [read_answers_date]) VALUES (3, 1, 0, N'YKY basımları sizce başarılımı', CAST(N'2020-05-14T00:00:00.000' AS DateTime), NULL, NULL)
SET IDENTITY_INSERT [dbo].[Read_Questions_Table] OFF
GO
SET IDENTITY_INSERT [dbo].[Review_Table] ON 

INSERT [dbo].[Review_Table] ([review_id], [user_id], [review_name], [review_text], [review_photo]) VALUES (0, 0, N'Umudun Ölmesi, İnce Memed 4', N'Biz çocukken kar yağdığında, dinsin de hemen dik aşağı bir yokuş bulalım, buz tutturalım diye beklerdik. Sonra herkes canla başla uğraşır, orda buzdan yol yapıp elimize ne geçirdiysek (demir tepsi, plastik leğen, kalın branda) o buzdan dikten kendimizi aşağı salardık ve bu heyecan bizim yüreğimizi ağzımıza getirirdi. O dikten kaymak bir şey değil, kaydıktan sonra çıkmak da sabırsız bir hal alırdı. Önünde bir sürü kişi, çıkman gereken sarp sayılabilecek bir dik ( çocuk olduğumuz için küçük ayaklarımız ve kocaman bir yol var önümüzde ) ama o heyecanı yaşamak için, tekrar tekrar o yola çıkardık. Hava güneş açınca da o buz tutmuş yolun eridiğini görmek yüreğimize tarifsiz bir acı bırakırdı. Bir daha kar yağsa da tekrar o heyecanı yaşasak diye, gözümüz yollarda beklerdik...

İşte Yaşar Kemal''in İnce Memed eserini bitirince, benim de gözüm yollarda kaldı. Yüreğime bir burukluk geldi oturdu. Şimdi büyümüş olduğum için belki de. Tekrar o yoldan aşağı kayamayacağımı bildiğim için. Aynı acı, İnce Memed 5 gelmeyecek ve Şahinimin yeni maceralarını göremeyeceğim için de geçerli. İlk kitabını okuduğumda duyduğum heyecan, aynı; plastik leğenimle o dik yoldan ilk kayışımdaki heyecan gibi. Tadı damağıma tarifsiz bir şekilde yapıştı. 2. ve 3. kitabı okurken yaşadıklarımsa yokuş aşağı indiğim diki çıkmaya, dikin başından kendimi tekrar aşağı salmaya hazırlanırken ki hevesim ve duygularıma denkti. Son kitaba geldiğimde ise o dikten son kez kendimi bırakıyordum. Bunun bilmek, bilmemekten daha zor geliyor insana. O sayfaların devamının gelmeyeceği ve bir daha böyle bir heyecanla gözlerini kırpmayacağın, yüreğinin çarpmayacağını bilmek... Ben bu seriyi bitirerek, çocukluğumun en güzel anlarını da anımsadım ve o heyecana en yakın duyguların tadını tekrar damağımda, yüreğimde hissettim.

Şöyle bir düşünürsek, kötülük, zulüm, yoksulluk, haksızlık, insanın insanı köle gibi kullanması sürüp gittiğine göre, biz hep yenilmişiz.(S.278)
Bu zulüm ancak biz birlik olursak biter. Sımsıkı durursak. Zalimlerin dünyasında, hayatta kalmanın çok ağır bedelleri vardır. Baş eğdiremeyince taş üstünde taş, omzun üstünde baş, kırılmadık kemik bırakmıyor insanda bu canavarlar. Ancak onların karşısında İnce Memed gibi gözleri yalım yalım parlayan bir şahin karşı durabilir. Bütün köyün, Anavarza''dan tutun da bütün Çukurova''nın boğazına yapışmış kanını içen bu vampirlerden bizi yalnızca O kurtarabilir. Yüreğimizde yaşattığımız, her bir çocuğumuza daha doğmadan adını verdiğimiz, Anacık Sultanın efsunladığı, yıldırım işlemez, gömleğinden kurşun geçmez, dualarımıza sarılmış da güvenle yatıp kalkan Memedim.. Yüzümüzü kara çıkarmadın ya, hakkımız sana da yanında çarpışan yiğitlere de ananızın ak sütü gibi helal olsun.

Umudun ölmesi, insanın ölmesinden daha beterdir.(S.391)
Demiş yazarımız. Hiçbir zaman sana olan umudumu yitirmedim... İçimde besliyorum o umudu. En derin karanlığımda yeşerttiğim umudumsun sen benim..

İnanmasak hiç böyle derin bir sevgiyle bağlanır mıydık? Böyle özleyip bir an önce kavuşmak için gün sayar mıydık? Gözümde tütüyordu her an. Bitmesi biraz acı olsa da, bu kitabı okumak, İnce Memed, Hürü Ana, Anacık Sultan, Topal Ali, Ferhat Hoca, Hatçe, ve daha niceleri.. İyi ki tanıştık ve yüreğimde silinmez izler bıraktınız. Umarım siz yazarla ve karakterleriyle benden daha önce tanışırsınız...', N'https://i.dr.com.tr/cache/500x400-0/originals/0000000147922-1.jpg')
INSERT [dbo].[Review_Table] ([review_id], [user_id], [review_name], [review_text], [review_photo]) VALUES (8, 0, N'Yaşar Kemal Ağıtlar', N'Babamın bir sürü kitabı vardı. Ama okumazdı. Süs olsun diye bulundururdu. Ne yapacaksın bu kitapları diye sorana kızım büyüyünce okuyacak derdi. Bilinçaltıma kitap okuma zorunluluğunu böyle yerleştirdi. Bu kitap yine babamın hiç ellemediği kitaplığında duran kitaplardan biriydi. Ağıt ne demek diye sordum babama. Ağlarken söylenen şarkıya ağıt denir diyerek yaşıma uygun açıklama yapmıştı.

Yıllar sonra işte bugün bu kitabı tekrar okudum. İçinde çeşitli insanların yürek acıları yaşarken yani ağlarken söyledikleri şarkılar vardı. Yaşar Kemal en güzel ağıtları bir kitapta toplamış, ağıt yakılan kişilerin hikayelerinden bahsetmiş ve anlamı bilinmeyen kelimelere dair ufak açıklamalar yapmış. İnsanı yıkan, hüzünlendiren, yaşanan acıları yüreklerde hissettiren bir kitap. Yaşar Kemal''in doğum gününde böyle bir inceleme yapmak düştü bana. Nur içinde yatıyorsun umarım büyük insan. Kitaptaki tüm ağıtlar senin için bugun tekrar okundu.', N'https://i.dr.com.tr/cache/500x400-0/originals/0000000147969-1.jpg')
INSERT [dbo].[Review_Table] ([review_id], [user_id], [review_name], [review_text], [review_photo]) VALUES (9, 0, N'Uğultulu Tepeler (Rüzgarlı Bayır)', N'Bu evrensel başyapıtla ilgili birkaç gözlemimi (tez) dile getirmeden önce, İngiliz yazını üzerine Türkçe’de en yetkin kaynak sayılan Mina Urgan yapıtı hakkında bir iki şey söylemek istiyorum. Nasıl değerli, güzel bir insan olduğunu bilmez değilim. Onu iyilikle anıyor, ululuyorum.

Bu çalışma (Mina Urgan’ınki), öğretim izlencesi (program) için hazırlanmış, belli anlayışı taşıyan bir girişim. Doyurucu değil. Çünkü, hani Halide Edip sığlığı akademik bir ölçünle (standart) biraz derinleştirilmiş gibi geldi bana ve dokundu birazca. Çünkü İngiliz yazını üzerine, yazınbilim kuramlarıyla pekiştirilmiş çok özgün, yaratıcı çalışmalar yapılalı nicedir…

Bizim okura (yani öğrenciye), romanın genişçe bir özetini ver, birkaç yerleşik kanıyı kişiselleştir, devam et.

Yargılamak kolaydır diyenleri elbette duyuyorum ve yargılamanın kolaycılığına sığındığım falan da yok. Hele insan harcamak gibi bir derdim hiç yok. Yaklaşık 50-60 sayfalık Bronte Kardeşleri konu alan iki bölüm bana ne verdi, diye soruyorum. Ben İngiliz Dili ve Edebiyatı öğrencisi olsaydım da, bu bana yetmezdi. Sorun bilgi yığmak, yığınak yapmak (depolamak) değil.

Yine de haksızlık etmek istemiyorum. Temel eğitim yoksulu ülke insanımız belki abecenin (alfabe)  ilk harfinden başlamak zorunda.

Eleştirim öz olarak şudur. Bu yazıların bakış açısı, sorunsallaştırma gücü yok. Aktarıyor, özetliyor, bununla yetiniyor. O zaman yapılacak en iyi öneri, yapıtın kendini bul ve oku, olmalı. Yalnızca bu.', N'https://i.dr.com.tr/cache/500x400-0/originals/0000000387483-1.jpg')
INSERT [dbo].[Review_Table] ([review_id], [user_id], [review_name], [review_text], [review_photo]) VALUES (10, 1, N'Bir Bilim Adamının Romanı', N'Kitabı ikinci okuyuşum. Kitaplığımda bana dost gelen nadir kitaplardandır. Dün raflarda göz gezdirirken denk geldim ve tekrar okumaya karar verdim. Mustafa İNAN gibi bir türk aydınını gayet güzel akıcı anlatan bu kitap ilham veren cinsten bir eser. Herkesin kesinlikle en az bir kere okumasını tavsiye ederim.', N'https://i.dr.com.tr/cache/500x400-0/originals/0000000061471-1.jpg')
INSERT [dbo].[Review_Table] ([review_id], [user_id], [review_name], [review_text], [review_photo]) VALUES (11, 1, N'Kya''nın Şarkı Söylediği Yer', N'Kya nin daha 6 yasinda o bataklikta yer alan kulubede ayyas babasi ile yalniz kalmasi ve daha sonra tamamen tek basina olmasi ve hayatta kalma mücadelesini okuduk. Ah be kizim ne cektin diye diye okudum...

Kitapta aslinda bir yandan gecmisi okurken günümüzde ise Kya''nın bir cinayet davasinda bas supheli olmasini okuyoruz...Eş zamanlı olarak olaylar bir yerde birlesiyor ve konu devam ediyor. Kya neler yasadi ve cinayeti o mu isledi sorusunu devam ettikce cözümlemeye basliyoruz...

Ve kitap öyle bir yerde bitti ki Kya’ya olan acıma duygularım yaşadığı hayatı göz önünde bulundurduğumda ona hak vererek derin bir nefes aldım ve kitabı kapattım...', N'https://i.dr.com.tr/cache/500x400-0/originals/0001806895001-1.jpg')
SET IDENTITY_INSERT [dbo].[Review_Table] OFF
GO
SET IDENTITY_INSERT [dbo].[Top_Book] ON 

INSERT [dbo].[Top_Book] ([book_id], [book_name], [write_name]) VALUES (0, N'Bir Ömür Nasıl Yaşanır', N'İlber Ortaylı')
INSERT [dbo].[Top_Book] ([book_id], [book_name], [write_name]) VALUES (1, N'Şeker Portakalı', N'Jose Mauro De Vasconcelos')
INSERT [dbo].[Top_Book] ([book_id], [book_name], [write_name]) VALUES (2, N'Momo', N'Michael Ende')
INSERT [dbo].[Top_Book] ([book_id], [book_name], [write_name]) VALUES (3, N'Fahrenheit', N'Ray Bradbury')
INSERT [dbo].[Top_Book] ([book_id], [book_name], [write_name]) VALUES (4, N'Hayvan Çiftliği', N'George Orwell')
INSERT [dbo].[Top_Book] ([book_id], [book_name], [write_name]) VALUES (5, N'Bir İdam Mahkumunun Son Günü', N'Victor Hugo')
INSERT [dbo].[Top_Book] ([book_id], [book_name], [write_name]) VALUES (6, N'İçimizdeki Şeytan', N'Sebahattin Ali')
INSERT [dbo].[Top_Book] ([book_id], [book_name], [write_name]) VALUES (7, N'1984', N'George Orwell')
INSERT [dbo].[Top_Book] ([book_id], [book_name], [write_name]) VALUES (8, N'Olağan Üstü Bir Gece', N'Stefan Zweig')
INSERT [dbo].[Top_Book] ([book_id], [book_name], [write_name]) VALUES (9, N'Bilinmeyen Bir Kadının Mektubu', N'Stefan Zweig')
SET IDENTITY_INSERT [dbo].[Top_Book] OFF
GO
SET IDENTITY_INSERT [dbo].[Travel_Map_Table] ON 

INSERT [dbo].[Travel_Map_Table] ([Travel_id], [user_id], [travel_choise], [travel_city], [travel_country], [travel_date]) VALUES (0, 0, N'0', N'Oslo', N'Norveç', CAST(N'2020-07-01T00:00:00.000' AS DateTime))
INSERT [dbo].[Travel_Map_Table] ([Travel_id], [user_id], [travel_choise], [travel_city], [travel_country], [travel_date]) VALUES (1, 0, N'0', N'Bergen', N'Norveç', CAST(N'2020-07-03T00:00:00.000' AS DateTime))
INSERT [dbo].[Travel_Map_Table] ([Travel_id], [user_id], [travel_choise], [travel_city], [travel_country], [travel_date]) VALUES (2, 0, N'1', N'Berlin', N'Germany', CAST(N'2020-04-08T00:00:00.000' AS DateTime))
INSERT [dbo].[Travel_Map_Table] ([Travel_id], [user_id], [travel_choise], [travel_city], [travel_country], [travel_date]) VALUES (3, 0, N'0', N'Buenos Aires', N'Argentina', CAST(N'2021-02-18T00:00:00.000' AS DateTime))
INSERT [dbo].[Travel_Map_Table] ([Travel_id], [user_id], [travel_choise], [travel_city], [travel_country], [travel_date]) VALUES (4, 0, N'0', N'lofoten', N'Norveç', CAST(N'2020-07-03T00:00:00.000' AS DateTime))
INSERT [dbo].[Travel_Map_Table] ([Travel_id], [user_id], [travel_choise], [travel_city], [travel_country], [travel_date]) VALUES (5, 0, N'0', N'Stolholm', N'İsveç', CAST(N'2020-08-01T00:00:00.000' AS DateTime))
INSERT [dbo].[Travel_Map_Table] ([Travel_id], [user_id], [travel_choise], [travel_city], [travel_country], [travel_date]) VALUES (6, 0, N'0', N'Kopenhag', N'Danimarka', CAST(N'2020-08-04T00:00:00.000' AS DateTime))
INSERT [dbo].[Travel_Map_Table] ([Travel_id], [user_id], [travel_choise], [travel_city], [travel_country], [travel_date]) VALUES (7, 0, N'1', N'Berlin', N'Almanya', CAST(N'2019-12-05T00:00:00.000' AS DateTime))
INSERT [dbo].[Travel_Map_Table] ([Travel_id], [user_id], [travel_choise], [travel_city], [travel_country], [travel_date]) VALUES (8, 0, N'1', N'Prag', N'Çekya', CAST(N'2019-12-05T00:00:00.000' AS DateTime))
INSERT [dbo].[Travel_Map_Table] ([Travel_id], [user_id], [travel_choise], [travel_city], [travel_country], [travel_date]) VALUES (9, 1, N'0', N'Dallas', N'ABD', CAST(N'2020-07-07T00:00:00.000' AS DateTime))
INSERT [dbo].[Travel_Map_Table] ([Travel_id], [user_id], [travel_choise], [travel_city], [travel_country], [travel_date]) VALUES (10, 1, N'0', N'New Orleans', N'ABD', CAST(N'2020-07-10T00:00:00.000' AS DateTime))
INSERT [dbo].[Travel_Map_Table] ([Travel_id], [user_id], [travel_choise], [travel_city], [travel_country], [travel_date]) VALUES (11, 1, N'1', N'La Paz', N'Bolivya', CAST(N'2020-08-10T00:00:00.000' AS DateTime))
INSERT [dbo].[Travel_Map_Table] ([Travel_id], [user_id], [travel_choise], [travel_city], [travel_country], [travel_date]) VALUES (12, 1, N'1', N'Calama', N'Şili', CAST(N'2019-08-15T00:00:00.000' AS DateTime))
SET IDENTITY_INSERT [dbo].[Travel_Map_Table] OFF
GO
SET IDENTITY_INSERT [dbo].[Travel_Questions_Table] ON 

INSERT [dbo].[Travel_Questions_Table] ([travel_questions_id], [user_id], [travel_questions_from_id], [travel_questions_message], [travel_questions_date], [travel_answers_message], [travel_answers_date]) VALUES (0, 0, 1, N'Santiago''ya seyahatinizde nasıl bir yol izlediniz?', CAST(N'2020-05-13T00:00:00.000' AS DateTime), N'Latin amerika seyahatimin sonunda Santiagoya uğradım.', CAST(N'2020-05-13' AS Date))
INSERT [dbo].[Travel_Questions_Table] ([travel_questions_id], [user_id], [travel_questions_from_id], [travel_questions_message], [travel_questions_date], [travel_answers_message], [travel_answers_date]) VALUES (1, 0, 1, N'Güney Amerika''yı seyahat etmek için en uygun aylar sizce hangileri?', CAST(N'2020-05-13T00:00:00.000' AS DateTime), NULL, CAST(N'2020-05-13' AS Date))
INSERT [dbo].[Travel_Questions_Table] ([travel_questions_id], [user_id], [travel_questions_from_id], [travel_questions_message], [travel_questions_date], [travel_answers_message], [travel_answers_date]) VALUES (2, 1, 0, N'Norveç''de dil problemi yaşadınız mı?', CAST(N'2020-05-13T00:00:00.000' AS DateTime), N'İngilizce biliyorsanız bir sorun yaşamazsınız', CAST(N'2020-05-13' AS Date))
INSERT [dbo].[Travel_Questions_Table] ([travel_questions_id], [user_id], [travel_questions_from_id], [travel_questions_message], [travel_questions_date], [travel_answers_message], [travel_answers_date]) VALUES (3, 2, 0, N'Oslo''da nerde konakladınız öneriniz var mı?', CAST(N'2020-05-13T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[Travel_Questions_Table] ([travel_questions_id], [user_id], [travel_questions_from_id], [travel_questions_message], [travel_questions_date], [travel_answers_message], [travel_answers_date]) VALUES (4, 0, 1, N'Uçuş kampanyalarını nereden takip ediyorsunuz?', CAST(N'2020-05-14T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[Travel_Questions_Table] ([travel_questions_id], [user_id], [travel_questions_from_id], [travel_questions_message], [travel_questions_date], [travel_answers_message], [travel_answers_date]) VALUES (5, 0, 1, N'Tur şirketleriyle mi seyahat ediyorsunuz?', CAST(N'2020-05-14T00:00:00.000' AS DateTime), NULL, NULL)
INSERT [dbo].[Travel_Questions_Table] ([travel_questions_id], [user_id], [travel_questions_from_id], [travel_questions_message], [travel_questions_date], [travel_answers_message], [travel_answers_date]) VALUES (6, 1, 0, N'Lüksemburg''a Amsterdam''dan trenle mi gittiniz', CAST(N'2020-04-14T00:00:00.000' AS DateTime), NULL, NULL)
SET IDENTITY_INSERT [dbo].[Travel_Questions_Table] OFF
GO
SET IDENTITY_INSERT [dbo].[User_Info_Table] ON 

INSERT [dbo].[User_Info_Table] ([user_info_id], [user_id], [user_info_contact_no], [user_info_contact_email], [user_info_hobby], [user_info_travel], [user_info_date], [user_info_book], [user_info_reliability], [user_info_city]) VALUES (1, 0, 555555, N'merveg@gmail.com', N'resim yapmak, Basketbol maçı seyretmek', N'kamp yapmak, orta asya ülkelerine seyahat etmek.', NULL, N'Kişisel gelişim, Don Richard Riso, Russ Hudson', 0, N'İstanbul')
INSERT [dbo].[User_Info_Table] ([user_info_id], [user_id], [user_info_contact_no], [user_info_contact_email], [user_info_hobby], [user_info_travel], [user_info_date], [user_info_book], [user_info_reliability], [user_info_city]) VALUES (2, 1, 222222, N'lutfk@gmail.com', N'Seyahet etmek, Yemek yapmak', N'Kamp, Latin Amerika turları', NULL, N'Polisiye Romanları', 0, N'Şanslıurfa')
SET IDENTITY_INSERT [dbo].[User_Info_Table] OFF
GO
SET IDENTITY_INSERT [dbo].[User_Table] ON 

INSERT [dbo].[User_Table] ([user_id], [user_nickname], [user_name], [user_surname], [user_email], [user_photo], [user_password]) VALUES (0, N'mguzel', N'Merve', N'Guzel', N'merveg@gmail.com', N'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/600px-User_icon_2.svg.png', N'123456    ')
INSERT [dbo].[User_Table] ([user_id], [user_nickname], [user_name], [user_surname], [user_email], [user_photo], [user_password]) VALUES (1, N'lufiyek', N'Lutfiye', N'Karagecili', N'lutf@gmail.com', N'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/User_with_smile.svg/1200px-User_with_smile.svg.png', N'123789    ')
INSERT [dbo].[User_Table] ([user_id], [user_nickname], [user_name], [user_surname], [user_email], [user_photo], [user_password]) VALUES (2, N'guzelg', N'merve', N'guzel', N'guzelm@gmail.com', NULL, N'123456    ')
INSERT [dbo].[User_Table] ([user_id], [user_nickname], [user_name], [user_surname], [user_email], [user_photo], [user_password]) VALUES (3, N'merveguzel', N'Merve', N'Guzel', N'guzelmerve@gmail.com', NULL, N'789456    ')
INSERT [dbo].[User_Table] ([user_id], [user_nickname], [user_name], [user_surname], [user_email], [user_photo], [user_password]) VALUES (4, N'merveguzell', N'merve', N'guzel', N'guzelmerve@gmail.com', NULL, N'1245678   ')
INSERT [dbo].[User_Table] ([user_id], [user_nickname], [user_name], [user_surname], [user_email], [user_photo], [user_password]) VALUES (5, N'merveguzelmerve', N'merve', N'guzel', N'guzelmerve@gmail.com', NULL, N'1245678   ')
INSERT [dbo].[User_Table] ([user_id], [user_nickname], [user_name], [user_surname], [user_email], [user_photo], [user_password]) VALUES (6, N'deneme', N'merve', N'guzel', N'guzelmerve@gmail.com', NULL, N'1245678   ')
INSERT [dbo].[User_Table] ([user_id], [user_nickname], [user_name], [user_surname], [user_email], [user_photo], [user_password]) VALUES (7, N'deneme2', N'merve', N'guzel', N'merveguzelmerve@gmail.com', NULL, N'123456    ')
INSERT [dbo].[User_Table] ([user_id], [user_nickname], [user_name], [user_surname], [user_email], [user_photo], [user_password]) VALUES (8, N'deneme3', N'merve', N'güzel', N'merveguzelmerveguzel@gmaiil.com', NULL, N'12345678  ')
INSERT [dbo].[User_Table] ([user_id], [user_nickname], [user_name], [user_surname], [user_email], [user_photo], [user_password]) VALUES (9, N'merveguzel123456', N'merve', N'guzel', N'merve123@gmail.com', NULL, N'123456    ')
INSERT [dbo].[User_Table] ([user_id], [user_nickname], [user_name], [user_surname], [user_email], [user_photo], [user_password]) VALUES (10, N'merveson', N'm', N'g', N'mervesong@gmail.com', NULL, N'123456    ')
INSERT [dbo].[User_Table] ([user_id], [user_nickname], [user_name], [user_surname], [user_email], [user_photo], [user_password]) VALUES (11, N'merveguuuuuuu', N'merve', N'g', N'merve', NULL, N'123456    ')
SET IDENTITY_INSERT [dbo].[User_Table] OFF
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__User_Tab__E1E179E2ED42DFF7]    Script Date: 16.05.2020 10:40:46 ******/
ALTER TABLE [dbo].[User_Table] ADD UNIQUE NONCLUSTERED 
(
	[user_nickname] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Book_Table]  WITH CHECK ADD  CONSTRAINT [FK_Book_Table_User_Table] FOREIGN KEY([user_id])
REFERENCES [dbo].[User_Table] ([user_id])
GO
ALTER TABLE [dbo].[Book_Table] CHECK CONSTRAINT [FK_Book_Table_User_Table]
GO
ALTER TABLE [dbo].[Experience_Table]  WITH CHECK ADD  CONSTRAINT [FK_Experience_Table_User_Table] FOREIGN KEY([user_id])
REFERENCES [dbo].[User_Table] ([user_id])
GO
ALTER TABLE [dbo].[Experience_Table] CHECK CONSTRAINT [FK_Experience_Table_User_Table]
GO
ALTER TABLE [dbo].[Read_Questions_Table]  WITH CHECK ADD  CONSTRAINT [FK_Read_Questions_Table_User_Table] FOREIGN KEY([user_id])
REFERENCES [dbo].[User_Table] ([user_id])
GO
ALTER TABLE [dbo].[Read_Questions_Table] CHECK CONSTRAINT [FK_Read_Questions_Table_User_Table]
GO
ALTER TABLE [dbo].[Review_Table]  WITH CHECK ADD  CONSTRAINT [FK_Review_Table_User_Table] FOREIGN KEY([user_id])
REFERENCES [dbo].[User_Table] ([user_id])
GO
ALTER TABLE [dbo].[Review_Table] CHECK CONSTRAINT [FK_Review_Table_User_Table]
GO
ALTER TABLE [dbo].[Travel_Map_Table]  WITH CHECK ADD  CONSTRAINT [FK_Travel_Map_Table_User_Table] FOREIGN KEY([user_id])
REFERENCES [dbo].[User_Table] ([user_id])
GO
ALTER TABLE [dbo].[Travel_Map_Table] CHECK CONSTRAINT [FK_Travel_Map_Table_User_Table]
GO
ALTER TABLE [dbo].[Travel_Questions_Table]  WITH CHECK ADD  CONSTRAINT [FK_Travel_Questions_Table_User_Table] FOREIGN KEY([user_id])
REFERENCES [dbo].[User_Table] ([user_id])
GO
ALTER TABLE [dbo].[Travel_Questions_Table] CHECK CONSTRAINT [FK_Travel_Questions_Table_User_Table]
GO
ALTER TABLE [dbo].[User_Info_Table]  WITH CHECK ADD FOREIGN KEY([user_id])
REFERENCES [dbo].[User_Table] ([user_id])
GO
ALTER TABLE [dbo].[Book_Table]  WITH CHECK ADD CHECK  (([book_choise]=(0) OR [book_choise]=(1)))
GO
