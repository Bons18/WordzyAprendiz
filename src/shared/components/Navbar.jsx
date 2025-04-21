"use client"

import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import NavItem from "./NavItem"
import logo from "../../assets/logo.png"
import {
  LayoutDashboard,
  TrendingUp,
  MessageSquare,
  ChevronDown
} from "lucide-react"
import { useAuth } from "../../features/auth/hooks/useAuth"
import ConfirmationModal from "./ConfirmationModal"

const Navbar = () => {
  const navigate = useNavigate()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false)
  const dropdownRef = useRef(null)
  const { logout } = useAuth()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleLogoClick = () => {
    navigate('/Inicio')
  }

  const handleNavigation = (path) => {
    navigate(path)
  }

  const handleLogoutClick = () => {
    setIsDropdownOpen(false)
    setShowLogoutConfirm(true)
  }

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  return (
    <div className="w-full bg-[#1f384c] text-white flex flex-row items-center shadow-lg h-16">
      {/* Logo */}
      <div 
        className="p-4 flex items-center shrink-0 cursor-pointer hover:bg-[#2a4a64] transition-colors"
        onClick={handleLogoClick}
      >
        <img src={logo || "/placeholder.svg"} alt="Wordzy Logo" className="h-8 w-8 mr-2" />
        <h1 className="text-xl font-bold font-['Poppins']">WORDZY</h1>
      </div>

      {/* Menu Items - Better positioning */}
      <div className="flex-1 flex justify-center items-center font-['Poppins'] font-medium">
        <NavItem
          icon={<LayoutDashboard size={18} />}
          label="Inicio"
          text="Inicio"
          onClick={() => handleNavigation("/Inicio")}
          className="mx-8"
        />

        <NavItem
          icon={<TrendingUp size={18} />}
          text="Ranking"
          onClick={() => handleNavigation("/Ranking")}
          className="mx-8"
        />
        
        <NavItem
          icon={<MessageSquare size={18} />}
          text="Retroalimentación"
          onClick={() => handleNavigation("/Retroalimentacion")}
          className="mx-8"
        />
      </div>
      
      {/* User dropdown with logout option */}
      <div className="p-4">
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 text-white font-medium px-4 py-2 rounded-lg hover:bg-[#2a4a64] transition-colors"
          >
            <span>Aprendiz</span>
            <ChevronDown className={`w-5 h-5 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 z-50">
              <button
                onClick={handleLogoutClick}
                className="w-full text-left px-4 py-2 text-[#f44144] hover:bg-gray-50 rounded-lg"
              >
                Cerrar Sesión
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Logout confirmation modal */}
      <ConfirmationModal
        isOpen={showLogoutConfirm}
        onClose={() => setShowLogoutConfirm(false)}
        onConfirm={handleLogout}
        title="Cerrar Sesión"
        message="¿Está seguro de que desea cerrar la sesión actual?"
        confirmText="Cerrar Sesión"
        cancelText="Cancelar"
      />
    </div>
  )
}

export default Navbar

