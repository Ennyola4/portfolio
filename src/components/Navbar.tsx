import { useState } from "react"
import {  Download, Menu, X } from "lucide-react"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: "01. About", href: "#about" },
    { label: "02. Skills", href: "#skills" },
    { label: "03. Projects", href: "#projects" },
    { label: "04. Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-main backdrop-blur border-b shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src="https://upaa.org/sites/default/files/styles/feature_1x_large/public/02photo_6.JPG.webp?itok=AzIKkD0Iz" 
            alt="Devenny Logo"
            className="h-12 w-12 object-contain rounded-full"
          />
        </a>


        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[#D8C99B] hover:text-gray-200 transition"
            >
              {item.label}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            className="px-4 rounded-lg py-2 text-sm text-[#D8C99B] font-medium border border-[#D8C99B] rounded hover:bg-gray-900 hover:text-white transition"
          >
            <Download className="w-5 h-5 inline mr-2 items-center justify-center " />
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-900"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-6 py-6 gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-gray-800"
              >
                {item.label}
              </a>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              className="w-fit px-4 py-2 border border-gray-900 rounded text-sm font-medium"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
