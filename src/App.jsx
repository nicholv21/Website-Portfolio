import DataImage from "./data"
import { listTools, listProyek } from "./data"

function App() {
  return (
    <>
    {/* Hero Section */}
    <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
      <div className="animate__animated animate__fadeInUp">
        {/* Border foto kecil dan quotes */}
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
        <img src={DataImage.Foto} alt="Image Nicho" className="w-10 rounded-md" loading="lazy" />
        <q>A miracle doesn’t come from luck, but from someone who keeps trying when others stop.</q>
        </div> {/* Border foto kecil dan quotes */}

        <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Nicholas Valentino</h1>
        <p className="text-base/loose mb-6 opacity-50">
        Saya adalah mahasiswa Sistem Informasi yang suka mengeksplorasi bagaimana desain, data, dan teknologi bisa bekerja bersama untuk membuat solusi yang berguna dan mudah dipahami. 
        Saya sering terlibat dalam berbagai proyek kampus dan kegiatan organisasi, yang membantu saya belajar melihat masalah dari berbagai sudut, memahami kebutuhan pengguna, dan mencari cara yang lebih efisien untuk menyelesaikannya. 
        Saya menikmati proses belajar hal baru, mencoba ide-ide berbeda, dan mengembangkan diri lewat pengalaman nyata, baik dalam tim maupun secara mandiri.</p>
        {/* Download dan Lihat */}
        <div className="flex items-center sm:gap-4 gap-2">
          <a href="https://www.linkedin.com/in/nicholasvalentino21" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"> 
            LinkedIn <i className="ri-download-line ri-lg"></i>
          </a>
          <a href="#project" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"> 
            Lihat Project <i className="ri-arrow-down-line ri-lg"></i>
          </a>
        </div> {/* Download dan Lihat */}

      </div> 
      <img src={DataImage.Foto2} alt="Image Nicho" className="w-[500px] md:ml-auto
      animate__animated animate__fadeInUp" loading="lazy"/>
    </div> {/* Hero Section */}

    {/* Tentang */}
    <div className="tentang mt-32 py-10" id="tentang">
      <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <img src={DataImage.Foto} alt="Image Nicho" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy" />
        <p className="text-base/loose mb-10">
          Hi, perkenalkan saya Nicholas Valentino, seorang mahasiswa jurusan Sistem Informasi yang berkuliah di Universitas Tarumanagara. saya memiliki pengalaman organisasi dan kepemimpinan sebagai pelatih futsal dan anggota BEM, yang mengembangkan kemampuan komunikasi, teamwork, dan problem-solving serta minat besar untuk terus mengembangkan diri melalui pengalaman baru. 
          Secara akademik dan praktik, memiliki ketertarikan pada pengembangan software, backend engineering, dan analisis data. Berpengalaman membangun aplikasi sederhana dan bekerja dengan database, serta memahami cara kerja sistem di balik layar melalui clean code, basic testing, dan problem-solving terstruktur. 
          Terbiasa menggunakan Spring Boot, SQL, dan konsep dasar web development, serta terus meningkatkan kemampuan melalui proyek pribadi, perkuliahan, dan pembelajaran mandiri. Termotivasi untuk berkontribusi dalam tim profesional, mengerjakan proyek nyata, dan belajar dari developer ataupun engineer yang lebih berpengalaman.
        </p>
        <div className="flex items-center justify-between">
          <img src= {DataImage.Foto} alt="Image Nicho" className="w-12 rounded-md sm:block hidden" loading="lazy"/>
          <div className="flex items-center gap-6">
            {/* Project Yang dikerjakan */}
            <div>
              <h1 className="text-4xl mb-1">
                4<span className="text-violet-500">+</span>
                </h1>
                <p>Project Selesai</p>
            </div>
            {/* Project Yang dikerjakan */}
          
            {/* Tahun Pengalaman */}
            <div>
              <h1 className="text-4xl mb-1">
                2<span className="text-violet-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
            </div>
            {/* Tahun Pengalaman */}

          </div>
        </div>
      </div>

      <div className="tools mt-32">
        <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        Tools Yang Digunakan</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
        Berikut ini beberapa tools yang biasa saya gunakan untuk 
        pembuatan Project yang telah saya buat</p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sl:grid-cols-1 gap-4">
          {listTools.map((tool) => (
            <div className="flex items-center gap-2 p-3 border 
            border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" 
            data-aos-delay={tool.dad} data-aos-once="true">
            <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-50">{tool.ket}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
    {/* Tentang */}

    {/* Proyek */}
    <div className="proyek mt-32 py-10" id="project">
      <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Project</h1>
      <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut ini beberapa 
      Project yang telah saya buat.</p>
      <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {listProyek.map(project => (
          <div key={project.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={project.dad} data-aos-once="true">
            <img src={project.gambar} alt="Image Project" loading="lazy"/>
            <div>
              <h1 className="text-2xl font-bold my-4">{project.nama}</h1>
              <p className="text-base/loose mb-4">{project.desk}</p>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, index) => (
                  <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>
                  {tool}</p>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a href="#" className="bg-violet-700 p-3 rounded-lg block border
              border-zinc-600 hover:bg-violet-600">Lihat Project</a>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
    {/* Proyek */}

    {/* Kontak */}
    <div className="kontak mt-32 sm:p-10 p-0" id="message">
      <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Kontak</h1>
      <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay="300">Mari terhubung dengan saya.</p>
      <form action="https://formsubmit.co/nicholasvalentino09@gmail.com" method="POST" 
      className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-delay="500">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Nama Lengkap</label>
            <input type="text" name="nama" className="border-zinc-500 p-2 rounded-md" placeholder="Masukkan Nama..." required />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Email</label>
            <input type="email" name="email" className="border-zinc-500 p-2 rounded-md" placeholder="Masukkan Email..." required />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-semibold">Pesan</label>
            <textarea name="pesan" id="pesan" cols="45" rows="7" className="border-zinc-500 p-2 rounded-md" placeholder="Masukkan Pesan..." required></textarea>
          </div>
          <div className="text-center">
          <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer block border border-zinc-600 hover:bg-violet-600">Kirim Pesan</button>
          </div>
        </div>
      </form>
    </div>
    {/* Kontak */}
    </>
  )
}

export default App
