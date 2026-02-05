document.addEventListener('DOMContentLoaded', () => {

  const navbarNav = document.querySelector('.navbar-nav');
  const hamburger = document.querySelector('#hamburger-menu');
  const modal = document.querySelector('#item-detail-modal');
  const ctaButtons = document.querySelectorAll('.cta');
  const closeIcon = document.querySelector('.close-icon');
  const dropdown = document.querySelector('.dropdown');
  const dropbtn = document.querySelector('.dropbtn');

  tampilkanArtikel();
  tampilkanAdmin();
  tampilkanProgram();
  tampilkanSemuaPengurus();

  if (typeof feather !== 'undefined') {
    feather.replace();
  }

  // --- LOGIKA UI ---
  // Hamburger Menu
  if (hamburger && navbarNav) {
    hamburger.onclick = (e) => {
      navbarNav.classList.toggle('active');
      e.preventDefault();
    };
  }
  // Klik di luar sidebar untuk menghilangkan nav
  document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove('active');
    }
  });

  // Klik di luar dropdown untuk menutup dropdown
  document.addEventListener('click', function (e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
    }
  });

  // Dropdown Logic
  if (dropbtn && dropdown) {
    dropbtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropdown.classList.toggle('active');
    });
  }

  // Modal Logic
  ctaButtons.forEach((btn) => {
    if (!btn.closest('.modal-content') && modal) {
      btn.onclick = (e) => {
        modal.style.display = 'flex';
        e.preventDefault();
      };
    }
  });

  if (closeIcon) {
    closeIcon.onclick = (e) => {
      modal.style.display = 'none';
      e.preventDefault();
    };
  };

  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
    if (dropdown && !dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
    }
  };

  // Mengambil tahun saat ini secara otomatis
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// --- FUNGSI RENDER ---
function tampilkanArtikel() {
  const wrapper = document.getElementById('artikel-wrapper');
  
  if (wrapper) {
    const daftarArtikel = [
      {
        judul: "🌙Marhaban Ya Ramadhan🌙",
        gambar: "img/artikel/artikel_1.jpg",
        ringkasan: "Bulan penuh berkah telah tiba. Saatnya kita berbagi dan menyulam kebahagiaan di Rumah Yatim Bina Anak Sholeh (RYBAS).",
        link: "https://www.instagram.com/reel/DUK05sLE0e_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
      },
      {
        judul: "Pendaftaraan Santri Baru",
        gambar: "img/artikel/artikel_2.jpg",
        ringkasan: "Rumah Yatim Bina Anak Sholeh membuka pendaftaraan santri baru",
        link: "https://www.instagram.com/p/DT9KHPHE842/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
      },
      {
        judul: "Juara Lomba Adzan",
        gambar: "img/artikel/artikel_3.jpg",
        ringkasan: "Alhamdulillah, Mas Haqqul Yakin berhasil meraih Juara 2 Lomba Adzan di Almaz Fried Chicken Tegal.",
        link: "https://www.instagram.com/p/DPA6-6BEQpv/"
      },
      {
        judul: "Juara Lomba Video Kreasi",
        gambar: "img/artikel/artikel_4.jpg",
        ringkasan: "Alhamdulillah, Rumah Yatim Bina Anak Sholeh Putri meraih JUARA 3 dalam Lomba Video Kreasi!",
        link: "https://www.instagram.com/p/DMmg2rBzwhP/"
      },
      {
        judul: "🔧Renovasi Rumah Yatim Sedang Dilakukan",
        gambar: "img/artikel/artikel_5.jpg",
        ringkasan: "Alhamdulillah, hari ini kami mulai memperbaiki beberapa kerusakan di Rumah Yatim Bina Anak Sholeh.",
        link: "https://www.instagram.com/p/DSC74YqE49d/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
      },
      {
        judul: "Juara Lomba Karate",
        gambar: "img/artikel/artikel_6.jpg",
        ringkasan: "Alhamdulillah, Prestasi Membanggakan dari Dojo RYBAS! 🌟",
        link: "https://www.instagram.com/p/DSCiRWpk33r/"
      },
    ];

    const dataTampil = daftarArtikel.slice(0, 6);

    wrapper.innerHTML = dataTampil.map(item => `
      <div class="artikel-card">
        <img src="${item.gambar}" class="artikel-img" alt="${item.judul}">
        <div class="artikel-content">
          <h3>${item.judul}</h3>
          <p>${item.ringkasan}</p>
          <a href="${item.link}" target="_blank" class="read-more">...Lihat Selengkapnya</a>
        </div>
      </div>
    `).join('');
  }
}

function tampilkanProgram() {
  const wrapper = document.getElementById('program-wrapper');
  if (!wrapper) return;

const daftarProgram = [
    { judul: "Pendidikan Formal", deskripsi: "Memastikan seluruh anak asuh mendapatkan akses pendidikan di sekolah formal mulai dari tingkat SD hingga SMA.", icon: "book-open" },
    { judul: "Tahfidz Qur'an", deskripsi: "Program menghafal Al-Qur'an dan pemahaman ilmu agama untuk mencetak generasi yang berakhlaqul karimah.", icon: "heart" },
    { judul: "Kemandirian", deskripsi: "Pelatihan keterampilan seperti memasak, menjahit, dan komputer agar mereka siap mandiri di masa depan.", icon: "award" },
    { judul: "Kesehatan & Gizi", deskripsi: "Pemberian nutrisi seimbang dan pemeriksaan kesehatan berkala untuk memastikan tumbuh kembang anak optimal.", icon: "activity" }
  ];

  wrapper.innerHTML = daftarProgram.map(item => `
    <div class="program-card">
      <i data-feather="${item.icon}" class="program-icon"></i>
      <h3>${item.judul}</h3>
      <p>${item.deskripsi}</p>
    </div>
  `).join('');
  
  if (typeof feather !== 'undefined') feather.replace();
}

function tampilkanSemuaPengurus() {
  const wrapperPutra = document.getElementById('pengurus-putra-wrapper');
  const wrapperPutri = document.getElementById('pengurus-putri-wrapper');

  if (!wrapperPutra && !wrapperPutri) return;

  const pengurusPutra = [
    { nama: "Sutiman, S.Pd.", jabatan: "Ketua" },
    { nama: "BK.Aribawa, SP. MSi.", jabatan: "Sekretaris I" },
    { nama: "Drs.Sholikhin, MM.", jabatan: "Sekretaris II" },
    { nama: "Drs.Kuswanto", jabatan: "Bendahara" },
    { nama: "Amar Syamsi, Lc.", jabatan: "Pengajar" },
    { nama: "Ibnu Sultoni", jabatan: "Pengasuh" },
    { nama: "Umar Dani", jabatan: "Asisten Pengasuh" },
    { nama: "Dessy Arfianto, S.Sos, MT.", jabatan: "Bina Jaringan" },
    { nama: "Helmi Setiawan, S.Pd, M.Si", jabatan: "Bina Jaringan" },
    { nama: "Teguh Mulyanto, S.Pd.", jabatan: "Bina Jaringan" },
    { nama: "Wigiyatno", jabatan: "Home Schooling" },
    { nama: "Mohamad Nuralim, SE.", jabatan: "Logistik" },
    { nama: "Fachrodin", jabatan: "Logistik" },
    { nama: "Muhamad Al Fanny", jabatan: "Administrasi Organisasi" },
  ];
  
  const pengurusPutri = [
    { nama: "Ike Amalia", jabatan: "Ketua I" },
    { nama: "Elliya Hidayah, S.IP", jabatan: "Ketua II" },
    { nama: "Yessi Ami Purwati, ST.", jabatan: "Sekretaris I" },
    { nama: "Rina Puspitasari", jabatan: "Sekretaris II" },
    { nama: "Hj.Titin Setiyowati", jabatan: "Bendahara I" },
    { nama: "dr. Hj.Endah Pancawati", jabatan: "Bendahara II" },
    { nama: "Rina Puspitasari", jabatan: "Pengasuh" },
    { nama: "Herwin Kurniawan", jabatan: "Pengasuh" },
    { nama: "Daryanti SSTP", jabatan: "Bina Jaringan" },
    { nama: "Eri Sulistiyowati S.Pd", jabatan: "Bina Jaringan" },
    { nama: "Dra. Hj.Nurhayati MM", jabatan: "Bina Jaringan" },
    { nama: "Prasetianingsih SH.", jabatan: "Bina Jaringan" },
    { nama: "Sri Yuniarti S.Pd", jabatan: "Home Schooling" },
    { nama: "Endang Prabandari", jabatan: "Home Schooling" },
    { nama: "Retno KF. S.Pd. AUD", jabatan: "Home Schooling" },
    { nama: "Khoirunissa", jabatan: "Life Skill" },
    { nama: "Mulyo Setiti", jabatan: "Life Skill" },
    { nama: "Nurasiah", jabatan: "Life Skill" },
    { nama: "Bu Nina", jabatan: "Logistik" },
    { nama: "Prihatiningsih", jabatan: "Logistik" },
    { nama: "Susi Herowati", jabatan: "Logistik" },
    { nama: "dr. Neli", jabatan: "Kesehatan" },
    { nama: "dr. Susi S. SpKj, M.Kes", jabatan: "Kesehatan" },
    { nama: "dr. Windy Oliviany ", jabatan: "Kesehatan" },
    { nama: "Diana Ariyani, M.Psi., Psi.", jabatan: "Kesehatan" },
    { nama: "Hj.Ida Novita", jabatan: "Sapras" },
    { nama: "Ir.Rahmi Mardiningsih", jabatan: "Sapras" },

  ];

  const buatTabel = (data) => `
    <table class="pengurus-table">
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Lengkap</th>
          <th>Jabatan</th>
        </tr>
      </thead>
      <tbody>
        ${data.map((p, index) => `
          <tr>
            <td>${index + 1}</td>
            <td>${p.nama}</td>
            <td>${p.jabatan}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;

  if (wrapperPutra) wrapperPutra.innerHTML = buatTabel(pengurusPutra);
  if (wrapperPutri) wrapperPutri.innerHTML = buatTabel(pengurusPutri);
}

function tampilkanAdmin() {
  const container = document.querySelector('.admin-grid');
  if (!container) return;

  const daftarAdmin = [
    { nama: "Admin 1", telp: "+62 822-3275-3843", icon: "phone" },
    { nama: "Admin 2", telp: "+62 857-0071-5614", icon: "phone" },
    { nama: "Pengasuh Putra", telp: "+62 819-9019-1995", icon: "user" },
    { nama: "Pengasuh Putri", telp: "+62 858-8258-8846", icon: "user" }
  ];

  container.innerHTML = daftarAdmin.map(admin => `
    <div class="admin-card">
      <i data-feather="${admin.icon}"></i>
      <h4>${admin.nama}</h4>
      <p>${admin.telp}</p>
    </div>
  `).join('');
  
  if (typeof feather !== 'undefined') feather.replace();
}