"use client";
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Award,
  Flame,
  Rocket,
  Zap,
  BookOpen,
  GraduationCap,
  Building2,
  BadgeCheck,
  Sparkles,
  Gem,
  Diamond,
  Hexagon,
  Shield,
  Flag,
  Target,
  TrendingUp,
  Trophy,
  Medal,
  Crown,
} from "lucide-react";

const Ranking = () => {
  // Estado para controlar la pestaña activa
  const [activeTab, setActiveTab] = useState("aprendices");
  // Estado para la paginación
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [displayedItems, setDisplayedItems] = useState([]);

  // Datos para cada categoría (ampliados para demostrar la paginación)
  const categoryData = {
    ficha: {
      podium: [
        { position: 2, name: "Carlos M.", points: 685 },
        { position: 1, name: "Laura S.", points: 890 },
        { position: 3, name: "Miguel A.", points: 542 },
      ],
      currentUser: {
        position: 5,
        name: "Laura S.",
        points: 890,
        ficha: "2889927-801",
      },
      ranking: [
        { id: 1, name: "Laura S.", points: 890, ficha: "2889927-801" },
        { id: 2, name: "Carlos M.", points: 685, ficha: "2889927-801" },
        { id: 3, name: "Miguel A.", points: 542, ficha: "2889927-801" },
        { id: 4, name: "Ana Gómez", points: 520, ficha: "2889927-801" },
        { id: 5, name: "Pedro Ruiz", points: 480, ficha: "2889927-801" },
        { id: 6, name: "Sofía Vargas", points: 450, ficha: "2889927-801" },
        { id: 7, name: "Daniel López", points: 420, ficha: "2889927-801" },
        { id: 8, name: "Valentina Torres", points: 410, ficha: "2889927-801" },
        { id: 9, name: "Javier Mendoza", points: 390, ficha: "2889927-801" },
        { id: 10, name: "Camila Rojas", points: 370, ficha: "2889927-801" },
        { id: 11, name: "Andrés Morales", points: 350, ficha: "2889927-801" },
        { id: 12, name: "Gabriela Sánchez", points: 340, ficha: "2889927-801" },
        { id: 13, name: "Roberto Jiménez", points: 335, ficha: "2889927-801" },
        { id: 14, name: "Lucía Fernández", points: 330, ficha: "2889927-801" },
        { id: 15, name: "Martín Gutiérrez", points: 325, ficha: "2889927-801" },
        { id: 16, name: "Carolina Díaz", points: 320, ficha: "2889927-801" },
        { id: 17, name: "Fernando Ruiz", points: 315, ficha: "2889927-801" },
        { id: 18, name: "Valeria Moreno", points: 310, ficha: "2889927-801" },
        { id: 19, name: "Alejandro Torres", points: 305, ficha: "2889927-801" },
        { id: 20, name: "Natalia Vargas", points: 300, ficha: "2889927-801" },
        { id: 21, name: "Eduardo Mendoza", points: 295, ficha: "2889927-801" },
        { id: 22, name: "Daniela Rojas", points: 290, ficha: "2889927-801" },
        { id: 23, name: "Ricardo Morales", points: 285, ficha: "2889927-801" },
        { id: 24, name: "Isabel Sánchez", points: 280, ficha: "2889927-801" },
        { id: 25, name: "Jorge Jiménez", points: 275, ficha: "2889927-801" },
      ],
    },
    aprendices: {
      podium: [
        { position: 2, name: "Brayan R.", points: 724 },
        { position: 1, name: "Rafael P.", points: 967 },
        { position: 3, name: "Zurangely P.", points: 601 },
      ],
      currentUser: {
        position: 8,
        name: "Rafael P.",
        points: 967,
        ficha: "2889927-801",
      },
      ranking: [
        { id: 1, name: "Rafael P.", points: 967, ficha: "2889927-801" },
        { id: 2, name: "Dickson Mosquera", points: 508, ficha: "2889927-801" },
        { id: 3, name: "Zurangely Mota", points: 490, ficha: "2889927-801" },
        { id: 4, name: "Juan Pérez", points: 475, ficha: "2889927-801" },
        { id: 5, name: "Diego Alejandro", points: 450, ficha: "2889927-801" },
        { id: 6, name: "María González", points: 430, ficha: "2889927-801" },
        { id: 7, name: "Juan Martínez", points: 410, ficha: "2889927-801" },
        { id: 8, name: "Brayan Cortez", points: 400, ficha: "2889927-801" },
        { id: 9, name: "Ana Martínez", points: 395, ficha: "2889927-801" },
        { id: 10, name: "Carlos Rodríguez", points: 390, ficha: "2889927-801" },
        {
          id: 11,
          name: "Zurangely Portillo",
          points: 382,
          ficha: "2889927-801",
        },
        { id: 12, name: "Luisa Ramírez", points: 375, ficha: "2889927-801" },
        { id: 13, name: "Andrés Gómez", points: 370, ficha: "2889927-801" },
        { id: 14, name: "Valentina López", points: 365, ficha: "2889927-801" },
        { id: 15, name: "Santiago Torres", points: 360, ficha: "2889927-801" },
        { id: 16, name: "Camila Herrera", points: 355, ficha: "2889927-801" },
        { id: 17, name: "Javier Díaz", points: 350, ficha: "2889927-801" },
        { id: 18, name: "Isabella Vargas", points: 345, ficha: "2889927-801" },
        { id: 19, name: "Mateo Sánchez", points: 340, ficha: "2889927-801" },
        { id: 20, name: "Sofía Mendoza", points: 335, ficha: "2889927-801" },
        { id: 21, name: "Daniel Rojas", points: 330, ficha: "2889927-801" },
        { id: 22, name: "Mariana Castro", points: 325, ficha: "2889927-801" },
        {
          id: 23,
          name: "Sebastián Morales",
          points: 320,
          ficha: "2889927-801",
        },
        { id: 24, name: "Gabriela Jiménez", points: 315, ficha: "2889927-801" },
        { id: 25, name: "Alejandro Ruiz", points: 310, ficha: "2889927-801" },
        { id: 26, name: "Valeria Ortiz", points: 305, ficha: "2889927-801" },
        {
          id: 27,
          name: "Nicolás Fernández",
          points: 300,
          ficha: "2889927-801",
        },
        {
          id: 28,
          name: "Luciana Gutiérrez",
          points: 295,
          ficha: "2889927-801",
        },
        { id: 29, name: "Emilio Ramírez", points: 290, ficha: "2889927-801" },
        { id: 30, name: "Antonella Díaz", points: 285, ficha: "2889927-801" },
      ],
    },
    programa: {
      podium: [
        { position: 2, name: "Alejandro G.", points: 845 },
        { position: 1, name: "Carolina M.", points: 1024 },
        { position: 3, name: "Santiago R.", points: 780 },
      ],
      currentUser: {
        position: 4,
        name: "Carolina M.",
        points: 1024,
        ficha: "2889927-801",
      },
      ranking: [
        { id: 1, name: "Carolina M.", points: 1024, ficha: "2889927-801" },
        { id: 2, name: "Alejandro G.", points: 845, ficha: "2889927-801" },
        { id: 3, name: "Santiago R.", points: 780, ficha: "2889927-801" },
        { id: 4, name: "Valentina T.", points: 720, ficha: "2889927-801" },
        { id: 5, name: "Mateo L.", points: 650, ficha: "2889927-801" },
        { id: 6, name: "Isabella S.", points: 580, ficha: "2889927-801" },
        { id: 7, name: "Sebastián V.", points: 520, ficha: "2889927-801" },
        { id: 8, name: "Camila F.", points: 490, ficha: "2889927-801" },
        { id: 9, name: "Nicolás H.", points: 450, ficha: "2889927-801" },
        { id: 10, name: "Mariana L.", points: 420, ficha: "2889927-801" },
        { id: 11, name: "Daniel C.", points: 380, ficha: "2889927-801" },
        { id: 12, name: "Luciana I.", points: 375, ficha: "2889927-801" },
        { id: 13, name: "Emilio P.", points: 370, ficha: "2889927-801" },
        { id: 14, name: "Antonella O.", points: 365, ficha: "2889927-801" },
        { id: 15, name: "Joaquín E.", points: 360, ficha: "2889927-801" },
        { id: 16, name: "Renata A.", points: 355, ficha: "2889927-801" },
        { id: 17, name: "Benjamín C.", points: 350, ficha: "2889927-801" },
        { id: 18, name: "Martina D.", points: 345, ficha: "2889927-801" },
        { id: 19, name: "Felipe S.", points: 340, ficha: "2889927-801" },
        { id: 20, name: "Victoria I.", points: 335, ficha: "2889927-801" },
      ],
    },
  };

  // Función para obtener el icono según la categoría y posición
  const getPodiumIcon = (category, position) => {
    // Iconos para la categoría "ficha"
    if (category === "ficha") {
      if (position === 1)
        return <Diamond className="w-8 h-8 text-yellow-500" />;
      if (position === 2) return <Gem className="w-7 h-7 text-gray-400" />;
      if (position === 3) return <Hexagon className="w-7 h-7 text-amber-700" />;
    }
    // Iconos para la categoría "aprendices"
    else if (category === "aprendices") {
      if (position === 1) return <Flame className="w-8 h-8 text-yellow-500" />;
      if (position === 2) return <Zap className="w-7 h-7 text-gray-400" />;
      if (position === 3) return <Rocket className="w-7 h-7 text-amber-700" />;
    }
    // Iconos para la categoría "programa"
    else if (category === "programa") {
      if (position === 1) return <Target className="w-8 h-8 text-yellow-500" />;
      if (position === 2) return <Shield className="w-7 h-7 text-gray-400" />;
      if (position === 3) return <Flag className="w-7 h-7 text-amber-700" />;
    }

    return <BadgeCheck className="w-6 h-6 text-gray-500" />;
  };

  // Función para obtener el color de fondo según la posición
  const getPodiumBgColor = (position) => {
    if (position === 1) return "bg-gradient-to-b from-yellow-400 to-yellow-500";
    if (position === 2) return "bg-gradient-to-b from-gray-300 to-gray-400";
    if (position === 3) return "bg-gradient-to-b from-amber-600 to-amber-700";
    return "bg-gray-200";
  };

  // Actualizar los elementos mostrados cuando cambia la página o la pestaña
  useEffect(() => {
    const currentData = categoryData[activeTab];
    const total = Math.ceil(currentData.ranking.length / itemsPerPage);
    setTotalPages(total);

    // Asegurarse de que la página actual es válida
    const validPage = Math.min(currentPage, total);
    if (validPage !== currentPage) {
      setCurrentPage(validPage);
    }

    // Calcular los elementos a mostrar
    const startIndex = (validPage - 1) * itemsPerPage;
    const endIndex = Math.min(
      startIndex + itemsPerPage,
      currentData.ranking.length
    );
    setDisplayedItems(currentData.ranking.slice(startIndex, endIndex));
  }, [activeTab, currentPage, itemsPerPage]);

  // Cambiar de página
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Obtener los datos actuales según la pestaña seleccionada
  const currentData = categoryData[activeTab];

  // Generar los números de página para la paginación
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5; // Número máximo de páginas visibles en la paginación

    if (totalPages <= maxVisiblePages) {
      // Si hay pocas páginas, mostrar todas
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Mostrar un subconjunto de páginas con elipsis
      if (currentPage <= 3) {
        // Estamos cerca del inicio
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Estamos cerca del final
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Estamos en el medio
        pages.push(1);
        pages.push("...");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  // Función para obtener el icono de la categoría
  const getCategoryIcon = (category) => {
    switch (category) {
      case "ficha":
        return <BookOpen className="w-5 h-5 mr-1" />;
      case "aprendices":
        return <GraduationCap className="w-5 h-5 mr-1" />;
      case "programa":
        return <Building2 className="w-5 h-5 mr-1" />;
      default:
        return null;
    }
  };

  // Función para obtener el icono de posición en la lista
  const getPositionIcon = (position) => {
    if (position === 1) return <Diamond className="w-5 h-5 text-yellow-500" />;
    if (position === 2) return <Gem className="w-5 h-5 text-gray-400" />;
    if (position === 3) return <Hexagon className="w-5 h-5 text-amber-700" />;
    return null;
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header con tabs */}
      <div className="border-b">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex justify-center gap-8 py-3">
            <button
              className={`px-4 py-2 text-sm flex items-center ${
                activeTab === "ficha"
                  ? "text-white bg-[#1f384c] rounded-md"
                  : "text-gray-600"
              }`}
              onClick={() => {
                setActiveTab("ficha");
                setCurrentPage(1); // Resetear a la primera página al cambiar de pestaña
              }}
            >
              <BookOpen className="w-4 h-4 mr-1" />
              Ficha
            </button>
            <button
              className={`px-4 py-2 text-sm flex items-center ${
                activeTab === "aprendices"
                  ? "text-white bg-[#1f384c] rounded-md"
                  : "text-gray-600"
              }`}
              onClick={() => {
                setActiveTab("aprendices");
                setCurrentPage(1);
              }}
            >
              <GraduationCap className="w-4 h-4 mr-1" />
              Aprendices
            </button>
            <button
              className={`px-4 py-2 text-sm flex items-center ${
                activeTab === "programa"
                  ? "text-white bg-[#1f384c] rounded-md"
                  : "text-gray-600"
              }`}
              onClick={() => {
                setActiveTab("programa");
                setCurrentPage(1);
              }}
            >
              <Building2 className="w-4 h-4 mr-1" />
              Programa
            </button>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-xl font-medium text-[#1f384c] mb-8 flex items-center">
          {getCategoryIcon(activeTab)}
          Tabla de clasificación
        </h1>

        {/* Nuevo diseño del podio */}
        <div className="mb-12 relative">
          <div className="flex justify-center items-end">
            {/* Tarjetas de podio con diseño moderno */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-2xl">
              {/* Segundo lugar */}
              <div className="flex flex-col items-center">
                <div className="relative mb-2">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center shadow-md">
                      <span className="text-gray-700 text-xs font-bold">2</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg p-4 pt-5 shadow-md">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-full mb-3 flex items-center justify-center border-2 border-white shadow-sm overflow-hidden">
                        <GraduationCap className="w-8 h-8 text-gray-500" />
                      </div>
                      <h3 className="font-medium text-gray-800 text-center">
                        {currentData.podium[0].name}
                      </h3>
                      <div className="flex items-center mt-1">
                        <Medal className="w-4 h-4 text-gray-500 mr-1" />
                        <span className="text-gray-700 font-semibold">
                          {currentData.podium[0].points} pts
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Primer lugar */}
              <div className="flex flex-col items-center -mt-6">
                <div className="relative mb-2">
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <Crown className="w-8 h-8 text-yellow-500 drop-shadow-md" />
                  </div>
                  <div className="bg-gradient-to-br from-blue-600 to-[#1f384c] rounded-lg p-4 pt-6 shadow-lg">
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 bg-blue-500 rounded-full mb-3 flex items-center justify-center border-4 border-white shadow-md overflow-hidden">
                        <Trophy className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="font-bold text-white text-center">
                        {currentData.podium[1].name}
                      </h3>
                      <div className="flex items-center mt-1">
                        <Sparkles className="w-4 h-4 text-yellow-300 mr-1" />
                        <span className="text-white font-semibold">
                          {currentData.podium[1].points} pts
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tercer lugar */}
              <div className="flex flex-col items-center">
                <div className="relative mb-2">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-amber-600 rounded-full w-6 h-6 flex items-center justify-center shadow-md">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg p-4 pt-5 shadow-md">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-amber-50 rounded-full mb-3 flex items-center justify-center border-2 border-white shadow-sm overflow-hidden">
                        <GraduationCap className="w-8 h-8 text-amber-600" />
                      </div>
                      <h3 className="font-medium text-gray-800 text-center">
                        {currentData.podium[2].name}
                      </h3>
                      <div className="flex items-center mt-1">
                        <Medal className="w-4 h-4 text-amber-600 mr-1" />
                        <span className="text-gray-700 font-semibold">
                          {currentData.podium[2].points} pts
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tu posición */}
        <div className="border rounded-lg p-4 mb-6 flex items-center shadow-sm hover:shadow-md transition-shadow bg-gradient-to-r from-blue-50 to-white">
          <div className="w-10 h-10 bg-[#1f384c] rounded-full flex items-center justify-center mr-4 shadow-sm">
            <span className="text-white font-medium">
              {currentData.currentUser.position}
            </span>
          </div>
          <div className="flex-1">
            <p className="font-medium text-[#1f384c]">
              {currentData.currentUser.name}
            </p>
            <p className="text-sm text-gray-600">
              Ficha: {currentData.currentUser.ficha}
            </p>
          </div>
          <div className="font-semibold text-[#1f384c] flex items-center bg-blue-100 px-3 py-1 rounded-full">
            <Sparkles className="w-5 h-5 text-yellow-500 mr-1" />
            {currentData.currentUser.points} Puntos
          </div>
        </div>

        {/* Selector de elementos por página */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm text-gray-600 flex items-center">
            <Award className="w-4 h-4 mr-1 text-[#1f384c]" />
            Mostrando {displayedItems.length} de {currentData.ranking.length}{" "}
            participantes
          </div>
          <div className="flex items-center">
            <label
              htmlFor="itemsPerPage"
              className="text-sm text-gray-600 mr-2 flex items-center"
            >
              <TrendingUp className="w-4 h-4 mr-1" />
              Mostrar:
            </label>
            <select
              id="itemsPerPage"
              className="border rounded px-2 py-1 text-sm"
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1); // Resetear a la primera página al cambiar elementos por página
              }}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>

        {/* Lista de ranking */}
        <div className="space-y-3 mb-6">
          {displayedItems.map((user) => (
            <div
              key={user.id}
              className={`rounded-lg p-4 flex items-center ${
                user.id === 1
                  ? "bg-gradient-to-r from-blue-600 to-[#1f384c] text-white shadow-md"
                  : user.id === 2
                  ? "bg-gradient-to-r from-gray-200 to-gray-300 shadow-sm"
                  : user.id === 3
                  ? "bg-gradient-to-r from-amber-100 to-amber-200 shadow-sm"
                  : "bg-white border shadow-sm"
              } hover:shadow-md transition-shadow`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                  user.id === 1
                    ? "bg-blue-500 text-white"
                    : user.id === 2
                    ? "bg-gray-100 text-gray-700"
                    : user.id === 3
                    ? "bg-amber-50 text-amber-700"
                    : "bg-gray-100 text-gray-700"
                } border-2 border-white`}
              >
                <span className="text-sm font-medium">{user.id}</span>
              </div>
              <div className="flex-1">
                <p
                  className={`font-medium ${
                    user.id === 1 ? "text-white" : "text-[#1f384c]"
                  }`}
                >
                  {user.name}
                </p>
                <p
                  className={`text-sm ${
                    user.id === 1 ? "text-blue-200" : "text-gray-600"
                  }`}
                >
                  Ficha: {user.ficha}
                </p>
              </div>
              <div
                className={`font-semibold flex items-center ${
                  user.id === 1 ? "text-white" : "text-[#1f384c]"
                }`}
              >
                {user.id <= 3 && (
                  <span className="mr-2">
                    {user.id === 1 && (
                      <Crown className="w-5 h-5 text-yellow-300" />
                    )}
                    {user.id === 2 && (
                      <Medal className="w-5 h-5 text-gray-400" />
                    )}
                    {user.id === 3 && (
                      <Medal className="w-5 h-5 text-amber-600" />
                    )}
                  </span>
                )}
                {user.points} Puntos
              </div>
            </div>
          ))}
        </div>

        {/* Paginación */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-6">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded-md ${
                currentPage === 1
                  ? "text-gray-400"
                  : "text-[#1f384c] hover:bg-gray-100"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex mx-2">
              {getPageNumbers().map((page, index) => (
                <button
                  key={index}
                  onClick={() =>
                    typeof page === "number" ? goToPage(page) : null
                  }
                  className={`w-8 h-8 mx-1 rounded-md ${
                    page === currentPage
                      ? "bg-[#1f384c] text-white"
                      : page === "..."
                      ? "text-gray-600 cursor-default"
                      : "text-[#1f384c] hover:bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-md ${
                currentPage === totalPages
                  ? "text-gray-400"
                  : "text-[#1f384c] hover:bg-gray-100"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ranking;
