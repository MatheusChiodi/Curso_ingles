import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2; // Define o número total de páginas

  // Função que atualiza a página atual para a próxima página
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Função que atualiza a página atual para a página anterior
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
        <div className="page h-screen mx-5 mt-1" style={{ display: currentPage === 1 ? 'block' : 'none' }}>
            <div className="margin"></div>
            <p>
            Oi mozao, tudo bem? 
            </p>
        </div>
        <div className="page h-screen mx-5 mt-1" style={{ display: currentPage === 2 ? 'block' : 'none' }}>
            <div className="margin"></div>
            <p>
            teste 2<br />
            </p>
        </div>
        <div className="mt-5 absolute top-[50%] w-full flex justify-between">
            <button onClick={handlePreviousPage} disabled={currentPage === 1} className="p-2 ms-1 bg-gray-300 hover:bg-slate-50 rounded transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#38352e" viewBox="0 0 256 256"><path d="M208,72H128V32a8,8,0,0,0-13.66-5.66l-96,96a8,8,0,0,0,0,11.32l96,96A8,8,0,0,0,128,224V184h80a16,16,0,0,0,16-16V88A16,16,0,0,0,208,72Zm0,96H120a8,8,0,0,0-8,8v28.69L35.31,128,112,51.31V80a8,8,0,0,0,8,8h88Z"></path></svg></button>
            <button onClick={handleNextPage} disabled={currentPage === totalPages} className="p-2 me-1 bg-gray-300 hover:bg-slate-50 rounded transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#38352e" viewBox="0 0 256 256"><path d="M237.66,122.34l-96-96A8,8,0,0,0,128,32V72H48A16,16,0,0,0,32,88v80a16,16,0,0,0,16,16h80v40a8,8,0,0,0,13.66,5.66l96-96A8,8,0,0,0,237.66,122.34ZM144,204.69V176a8,8,0,0,0-8-8H48V88h88a8,8,0,0,0,8-8V51.31L220.69,128Z"></path></svg></button>
        </div>
    </>
  )
}

export default App;