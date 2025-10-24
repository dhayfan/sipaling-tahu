document.addEventListener('DOMContentLoaded', (event) => {
    const triviaBox = document.getElementById('trivia-popup');
    const showTriviaBtn = document.getElementById('show-trivia-btn');
    const closeBtn = triviaBox.querySelector('.close-btn');
    const nextTriviaBtn = document.getElementById('next-trivia-btn');
    const triviaText = triviaBox.querySelector('.trivia-text');

    // Array berisi trivia bebas
    const triviaFacts = [
        "Tahu kah Anda bahwa di planet Saturnus dan Jupiter hujan bisa berupa berlian sungguhan?",
        "Tahu kah Anda bahwa di Tanzania ada danau bernama Natron yang bisa mengawetkan hewan seperti patung karena kadar alkalinya ekstrem?",
        "Tahu kah Anda bahwa Gurun Atacama di Chili pernah tidak turun hujan selama lebih dari 400 tahun?",
        "Tahu kah Anda bahwa di Jepang ada pulau berisi ribuan kelinci liar bernama Ōkunoshima?",
        "Tahu kah Anda bahwa pohon tertua di dunia, Methuselah, berusia lebih dari 4.800 tahun di California?",
        "Tahu kah Anda bahwa Laut Mati begitu asin hingga manusia bisa mengapung tanpa tenggelam?",
        "Tahu kah Anda bahwa Gunung Everest tumbuh sekitar 4 milimeter setiap tahun akibat pergeseran lempeng tektonik?",
        "Tahu kah Anda bahwa di Australia ada danau berwarna merah muda alami bernama Lake Hillier?",
        "Tahu kah Anda bahwa Antartika adalah satu-satunya benua tanpa semut?",
        "Tahu kah Anda bahwa Islandia tidak memiliki nyamuk sama sekali?",
        "Tahu kah Anda bahwa sungai bawah laut sungguhan ada di Meksiko karena perbedaan kadar garam air?",
        "Tahu kah Anda bahwa petir menyambar Bumi sekitar 8 juta kali per hari?",
        "Tahu kah Anda bahwa gua Sơn Đoòng di Vietnam begitu besar hingga memiliki awannya sendiri?",
        "Tahu kah Anda bahwa Laut Sargasso adalah laut tanpa garis pantai yang dikelilingi arus laut, bukan daratan?",
        "Tahu kah Anda bahwa Oymyakon di Rusia adalah desa terdingin di dunia dengan suhu mencapai -67°C?",
        "Tahu kah Anda bahwa letusan Gunung Tambora di Indonesia pada tahun 1815 mengubah iklim dunia selama berbulan-bulan?",
        "Tahu kah Anda bahwa hutan Amazon menghasilkan lebih dari 20% oksigen dunia?",
        "Tahu kah Anda bahwa di gurun Sahara kadang turun salju pada musim dingin?",
        "Tahu kah Anda bahwa beberapa spesies ubur-ubur bisa hidup abadi melalui regenerasi sel?",
        "Tahu kah Anda bahwa benua Asia memiliki jumlah penduduk lebih banyak dari semua benua lain digabungkan?",
        "Tahu kah Anda bahwa Bumi bukan planet paling padat di tata surya, melainkan Merkurius?",
        "Tahu kah Anda bahwa di Alaska ada gunung yang bisa memantulkan suara sendiri selama beberapa detik?",
        "Tahu kah Anda bahwa hujan di Venus terbuat dari asam sulfat, bukan air?",
        "Tahu kah Anda bahwa burung kolibri adalah satu-satunya burung yang bisa terbang mundur?",
        "Tahu kah Anda bahwa Finlandia memiliki lebih dari 180.000 danau?",
        "Tahu kah Anda bahwa lebah madu dapat mengenali wajah manusia seperti manusia mengenali wajah sesamanya?",
        "Tahu kah Anda bahwa cacing pita bisa hidup di dalam tubuh manusia hingga 30 tahun?",
        "Tahu kah Anda bahwa 80% aktivitas vulkanik dunia terjadi di bawah laut?",
        "Tahu kah Anda bahwa koala memiliki sidik jari hampir identik dengan manusia?",
        "Tahu kah Anda bahwa Danau Baikal di Rusia menyimpan lebih dari 20% air tawar dunia?",
        "Tahu kah Anda bahwa tulang paha manusia lebih kuat daripada beton?",
        "Tahu kah Anda bahwa ada ikan yang bisa berjalan di darat bernama ikan gabus lumpur?",
        "Tahu kah Anda bahwa di Swedia ada hotel yang seluruhnya terbuat dari es dan dibangun ulang setiap tahun?",
        "Tahu kah Anda bahwa Antartika secara teknis juga merupakan gurun karena hampir tidak turun hujan?",
        "Tahu kah Anda bahwa ada air terjun bawah laut di Mauritius yang sebenarnya adalah ilusi optik pasir yang tenggelam?",
        "Tahu kah Anda bahwa bahasa manusia tertua yang masih digunakan adalah bahasa Tamil?",
        "Tahu kah Anda bahwa gurita memiliki tiga jantung dan darah berwarna biru?",
        "Tahu kah Anda bahwa paus biru memiliki jantung seberat mobil kecil?",
        "Tahu kah Anda bahwa mata burung unta lebih besar dari otaknya?",
        "Tahu kah Anda bahwa tanaman bambu bisa tumbuh lebih dari 90 cm dalam satu hari?",
        "Tahu kah Anda bahwa di Swiss dilarang memelihara satu marmut saja karena dianggap kesepian?",
        "Tahu kah Anda bahwa suara tidak bisa merambat di ruang angkasa karena tidak ada udara?",
        "Tahu kah Anda bahwa petir bisa lebih panas dari permukaan matahari?",
        "Tahu kah Anda bahwa ada cacing laut yang bisa bersinar di kegelapan seperti lampu neon?",
        "Tahu kah Anda bahwa jerapah tidak memiliki pita suara?",
        "Tahu kah Anda bahwa di Norwegia ada kota yang selama dua bulan setiap tahun tidak pernah melihat matahari?",
        "Tahu kah Anda bahwa katak bisa membeku total selama musim dingin dan hidup kembali di musim semi?",
        "Tahu kah Anda bahwa di Belanda jumlah sepeda lebih banyak dari jumlah penduduknya?",
        "Tahu kah Anda bahwa lumba-lumba memberi nama panggilan pada sesama dengan siulan unik?",
        "Tahu kah Anda bahwa ada spesies pohon di Afrika yang bisa ‘memperingatkan’ pohon lain lewat senyawa kimia?",
        "Tahu kah Anda bahwa di Kanada ada danau yang berwarna merah muda setiap musim panas?",
        "Tahu kah Anda bahwa tubuh manusia menghasilkan sekitar 25 juta sel baru setiap detik?",
        "Tahu kah Anda bahwa beberapa gunung berapi di Indonesia masih aktif meski sudah ribuan tahun meletus?",
        "Tahu kah Anda bahwa ada jam biologis dalam tubuh yang bisa mengenali siang dan malam bahkan tanpa cahaya?",
        "Tahu kah Anda bahwa paus bisa tidur dengan satu sisi otaknya tetap aktif?",
        "Tahu kah Anda bahwa manusia dan pisang memiliki sekitar 60% kesamaan genetik?",
        "Tahu kah Anda bahwa segelas air yang Anda minum mungkin mengandung molekul yang pernah diminum dinosaurus?",
        "Tahu kah Anda bahwa di China ada jembatan kaca transparan di atas lembah sedalam 300 meter?",
        "Tahu kah Anda bahwa suara singa jantan bisa terdengar hingga 8 kilometer jauhnya?",
        "Tahu kah Anda bahwa di Peru ada gunung pelangi alami bernama Vinicunca dengan tujuh warna berbeda?",
        "Tahu kah Anda bahwa suhu terpanas di bumi pernah tercatat 56,7°C di Furnace Creek, AS?",
        "Tahu kah Anda bahwa matahari menyumbang 99,8% massa seluruh tata surya?",
        "Tahu kah Anda bahwa ada lebih banyak bintang di alam semesta daripada butir pasir di seluruh pantai bumi?",
        "Tahu kah Anda bahwa bayangan di bulan bisa menjadi sangat gelap karena tidak ada atmosfer yang memantulkan cahaya?",
        "Tahu kah Anda bahwa manusia tidur rata-rata 25 tahun sepanjang hidupnya?",
        "Tahu kah Anda bahwa siput bisa tidur hingga tiga tahun dalam kondisi tertentu?",
        "Tahu kah Anda bahwa sidik lidah manusia juga unik seperti sidik jari?",
        "Tahu kah Anda bahwa cumi-cumi raksasa memiliki mata sebesar bola sepak?",
        "Tahu kah Anda bahwa gajah tidak bisa melompat?",
        "Tahu kah Anda bahwa kucing memiliki lebih dari 30 otot hanya untuk menggerakkan telinganya?",
        "Tahu kah Anda bahwa huruf paling sering muncul dalam bahasa Inggris adalah huruf E?",
        "Tahu kah Anda bahwa hujan di Titan, bulan Saturnus, bukan air melainkan metana cair?",
        "Tahu kah Anda bahwa bunga matahari sebenarnya terdiri dari ribuan bunga kecil yang menyatu?",
        "Tahu kah Anda bahwa unta bisa menutup lubang hidungnya agar tidak kemasukan pasir?",
        "Tahu kah Anda bahwa di Yunani kuno, ungu adalah warna kerajaan karena pewarnanya sangat langka?",
        "Tahu kah Anda bahwa gunung tertinggi di tata surya adalah Olympus Mons di Mars?",
        "Tahu kah Anda bahwa di Arab Saudi ada gedung pencakar langit yang lebih tinggi dari 1 km yang sedang dibangun?",
        "Tahu kah Anda bahwa jam di pesawat terbang berjalan sedikit lebih lambat karena efek relativitas waktu?",
        "Tahu kah Anda bahwa pelangi ganda bisa muncul ketika cahaya matahari terpantul dua kali dalam tetesan air?",
        "Tahu kah Anda bahwa jagung pertama kali dibudidayakan lebih dari 9.000 tahun lalu di Meksiko?",
        "Tahu kah Anda bahwa di bawah lapisan es Antartika terdapat danau cair yang belum pernah tersentuh manusia?",
        "Tahu kah Anda bahwa lebah berkomunikasi dengan menari untuk memberi tahu lokasi bunga?",
        "Tahu kah Anda bahwa di dunia ada lebih dari 7.000 bahasa yang masih digunakan?",
        "Tahu kah Anda bahwa tulang manusia jumlahnya lebih banyak saat bayi daripada saat dewasa?",
        "Tahu kah Anda bahwa bintang jatuh sebenarnya adalah meteor yang terbakar di atmosfer bumi?",
        "Tahu kah Anda bahwa ada jenis batu yang bisa ‘bergerak’ sendiri di Death Valley, AS?",
        "Tahu kah Anda bahwa setiap manusia memiliki aroma tubuh unik seperti sidik jari?",
        "Tahu kah Anda bahwa otak manusia mengonsumsi sekitar 20% energi tubuh walau hanya 2% dari berat tubuh?",
        "Tahu kah Anda bahwa beberapa kura-kura bisa bernapas melalui bagian belakang tubuhnya saat berhibernasi?",
        "Tahu kah Anda bahwa tidak ada dua kepingan salju yang benar-benar identik?",
        "Tahu kah Anda bahwa di Ethiopia ada danau asam dengan suhu lebih dari 50°C dan warna air kuning kehijauan?",
        "Tahu kah Anda bahwa bunga Rafflesia arnoldii dari Indonesia adalah bunga terbesar di dunia?",
        "Tahu kah Anda bahwa ada spesies katak yang bisa berubah menjadi transparan untuk bersembunyi?",
        "Tahu kah Anda bahwa manusia pertama kali mencapai puncak Everest pada tahun 1953?",
        "Tahu kah Anda bahwa bentuk Bumi sebenarnya bukan bulat sempurna, melainkan agak pepat di kutubnya?",
        "Tahu kah Anda bahwa beberapa burung bisa tidur sambil terbang ribuan kilometer?",
        "Tahu kah Anda bahwa sebagian besar debu di rumah berasal dari sel kulit mati manusia?",
        "Tahu kah Anda bahwa cahaya dari Matahari memerlukan sekitar 8 menit 20 detik untuk sampai ke Bumi?",
        "Tahu kah Anda bahwa lautan menyimpan lebih banyak artefak sejarah daripada seluruh museum di dunia?",
        "Tahu kah Anda bahwa paus pembunuh sebenarnya bukan paus, melainkan jenis lumba-lumba besar?",
        "Tahu kah Anda bahwa detak jantung paus biru dapat terdengar dari jarak lebih dari 3 kilometer di bawah air?"
    ];

    let currentTriviaIndex = 0;

    // Safe-guard: ensure required elements exist
    if (!triviaBox || !showTriviaBtn || !closeBtn || !nextTriviaBtn || !triviaText) {
        console.warn('trivia.js: missing required DOM elements.');
        return;
    }

    // Ensure popup is hidden initially
    triviaBox.style.display = triviaBox.style.display || 'none';

    function showTrivia() {
        triviaText.textContent = triviaFacts[currentTriviaIndex];
        triviaBox.style.display = 'flex';
    }

    function hideTrivia() {
        triviaBox.style.display = 'none';
    }

    showTriviaBtn.addEventListener('click', function() {
        showTrivia();
    });

    closeBtn.addEventListener('click', function() {
        hideTrivia();
    });

    nextTriviaBtn.addEventListener('click', function() {
        currentTriviaIndex = (currentTriviaIndex + 1) % triviaFacts.length;
        triviaText.textContent = triviaFacts[currentTriviaIndex];
    });

    // Close when clicking outside the content area (overlay)
    triviaBox.addEventListener('click', function(e) {
        if (e.target === triviaBox) hideTrivia();
    });

    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') hideTrivia();
    });
});
