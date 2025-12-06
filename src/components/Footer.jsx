const Footer = () => {
    return(
<div className="mt-32 py-10 border-t border-zinc-800 text-center">
  <h1 className="text-2xl font-bold mb-3">Nicholas Valentino</h1>

  <div className="flex justify-center gap-6 mb-4">
    <a href="https://www.instagram.com/nicholas.nv" className="hover:text-violet-400 transition">
      <i className="ri-instagram-line text-2xl"></i>
    </a>
    <a href="https://www.linkedin.com/in/nicholasvalentino21" className="hover:text-violet-400 transition">
      <i className="ri-linkedin-fill text-2xl"></i>
    </a>
    <a href="https://github.com/nicholv21" className="hover:text-violet-400 transition">
      <i className="ri-github-fill text-2xl"></i>
    </a>
    <a   href="https://mail.google.com/mail/?view=cm&fs=1&to=nicholasvalentino09@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition">
      <i className="ri-mail-fill text-2xl"></i>
    </a>
  </div>

  <p className="text-white/50">
    © 2025 Nicholas Valentino
  </p>
</div>
    )
}

export default Footer
