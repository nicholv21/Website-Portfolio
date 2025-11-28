const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap- justify-between items-center" id="contact">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <div className="flex gap-7 items-center lg:ml-20 md:ml-15 ml-0">
            <a href="#">© 2025 Nicholas Valentino</a>
        </div>
        <div className="flex items-center gap-3">
            <a href="https://wa.me/6283894096886" target="_blank" rel="noopener noreferrer">
                <i className="ri-whatsapp-fill ri-2x"></i>
            </a>
            <a href="https://www.instagram.com/nicholas.nv" target="_blank" rel="noopener noreferrer">
                <i className="ri-instagram-fill ri-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/nicholasvalentino21" target="_blank" rel="noopener noreferrer">
                <i className="ri-linkedin-fill ri-2x"></i>
            </a>
            <a href="https://github.com/nicholv21" target="_blank" rel="noopener noreferrer">
                <i className="ri-github-fill ri-2x"></i>
            </a>
        </div>
    </div>
  )
}

export default Footer