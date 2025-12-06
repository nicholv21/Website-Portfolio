import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  return (
    <>
      {/* HERO SECTION PREMIUM */}
      <div className="hero grid md:grid-cols-2 items-center pt-32 gap-10">
        {/* Left */}
        <div className="animate__animated animate__fadeInUp">
          {/* Badge */}
          <div className="flex items-center gap-3 mb-6 bg-zinc-900/60 backdrop-blur-md border border-zinc-700 p-4 rounded-2xl shadow-lg">
            <img src={DataImage.Foto} className="w-10 h-10 rounded-lg" alt="Nicho" />
            <q className="text-white/70">
              A miracle comes from those who keep going when others stop.
            </q>
          </div>

          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            Hi, Saya <span className="text-violet-400">Nicholas Valentino</span>
          </h1>

          <p className="text-base leading-relaxed text-white/60 mb-6">
           <span className="text-white">Saya adalah mahasiswa Sistem Informasi yang suka mengeksplorasi bagaimana desain, data, dan teknologi bisa bekerja bersama untuk membuat solusi yang berguna dan mudah dipahami. 
           Saya sering terlibat dalam berbagai project kampus dan kegiatan organisasi, yang membantu saya belajar melihat masalah dari berbagai sudut seperti memahami kebutuhan pengguna, dan mencari cara yang lebih efisien untuk menyelesaikannya.</span>
          </p>

          <div className="flex items-center gap-4 mt-5">
            <a
              href="https://www.linkedin.com/in/nicholasvalentino21"
              className="px-6 py-3 bg-violet-600 rounded-full shadow-md hover:bg-violet-500 hover:shadow-violet-600/30 transition"
            >
              LinkedIn <i className="ri-arrow-right-up-line ml-1"></i>
            </a>

            <a
              href="#project"
              className="px-6 py-3 bg-zinc-800 border border-zinc-700 rounded-full hover:bg-zinc-700 transition"
            >
              Lihat Project <i className="ri-arrow-down-line ml-1"></i>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={DataImage.Foto2}
            alt="Foto Nicho"
            className="w-full max-w-md rounded-2xl shadow-[0_0_40px_#7c3aed50] animate__animated animate__fadeInUp"
          />
        </div>
      </div>

      {/* ABOUT SECTION */}
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

        {/* Tools */}
        <div className="tools mt-32">
          <h1 className="text-4xl font-bold mb-4 text-violet-400">Tools Yang Digunakan</h1>
          <p className="text-white/60 max-w-xl">
            Berikut ini beberapa tools yang biasa saya gunakan.
          </p>

          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                className="flex items-center gap-3 p-4 bg-zinc-900/50 border border-zinc-700 backdrop-blur-lg rounded-xl hover:bg-zinc-900 transition shadow-md"
              >
                <img
                  src={tool.gambar}
                  className="w-14 bg-zinc-800 p-2 rounded-lg"
                  alt={tool.nama}
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="text-white/60 text-sm">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PROJECT SECTION */}
      <div className="proyek mt-32 py-10" id="project">
        <h1 className="text-center text-4xl font-bold mb-3 text-violet-400">Project</h1>
        <p className="text-center text-white/60 mb-14">
          Beberapa project terbaik yang pernah saya bangun.
        </p>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {listProyek.map((project) => (
            <div
              key={project.id}
              className="bg-zinc-900/50 backdrop-blur-md border border-zinc-700 p-6 rounded-2xl 
              shadow-xl hover:-translate-y-2 hover:shadow-[0_0_25px_#7c3aed60] 
              transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div className="w-full h-56 overflow-hidden rounded-xl mb-4">
                <img
                  src={project.gambar}
                  alt={project.nama}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <h2 className="text-2xl font-bold mb-2">{project.nama}</h2>
              <p className="text-white/60 leading-relaxed mb-4">{project.desk}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="text-sm px-3 py-1 bg-zinc-800/80 border border-zinc-600 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="block text-center bg-violet-600 hover:bg-violet-500 p-3 rounded-full transition"
              >
                Lihat Project
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT FORM */}
      <div className="kontak mt-32 px-4" id="message">
        <h1 className="text-4xl font-bold text-center mb-3">Kontak</h1>
        <p className="text-center text-white/60 mb-10">Mari terhubung dengan saya.</p>

        <form
          action="https://formsubmit.co/nicholasvalentino09@gmail.com"
          method="POST"
          className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-700 p-10 rounded-2xl shadow-xl max-w-lg mx-auto"
        >
          <div className="flex flex-col gap-6">
            <div>
              <label className="font-semibold mb-2 block">Nama Lengkap</label>
              <input
                type="text"
                name="nama"
                className="w-full p-3 rounded-xl bg-zinc-800 border border-zinc-700 focus:border-violet-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="font-semibold mb-2 block">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-3 rounded-xl bg-zinc-800 border border-zinc-700 focus:border-violet-500"
                required
              />
            </div>

            <div>
              <label className="font-semibold mb-2 block">Pesan</label>
              <textarea
                name="pesan"
                rows="6"
                className="w-full p-3 rounded-xl bg-zinc-800 border border-zinc-700 focus:border-violet-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-violet-600 hover:bg-violet-500 rounded-full shadow-lg hover:shadow-violet-500/30 transition"
            >
              Kirim Pesan
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
