import React from "react";
import AtomicStructure from "./AtomicStructure";

const DetailView = ({ selectedElement, onClose }) => {
  if (!selectedElement) {
    return null;
  }

  return (
    <div
      className="border-2 rounded-lg p-6 max-w-4xl mx-auto transition-all duration-300 relative min-h-[400px] flex flex-col"
      style={{
        backgroundColor: "#1a1a1a",
        borderColor: selectedElement.color,
        boxShadow: `0 0 30px ${selectedElement.color}60`,
      }}>

      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors duration-200 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-700"
        aria-label="Close detail view">
        ×
      </button>

      <h2 className="text-white text-3xl font-bold mb-8 text-center pr-8">
        {selectedElement.name}
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 items-center justify-center flex-1">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-base flex-1 max-w-md">
          <div className="text-gray-300 flex flex-col">
            <strong className="text-white mb-1">Symbol:</strong>
            <span style={{ color: selectedElement.color }} className="text-lg font-semibold">
              {selectedElement.symbol}
            </span>
          </div>

          <div className="text-gray-300 flex flex-col">
            <strong className="text-white mb-1">Atomic Number:</strong>
            <span className="text-lg">{selectedElement.atomicNumber}</span>
          </div>

          <div className="text-gray-300 flex flex-col">
            <strong className="text-white mb-1">Atomic Mass:</strong>
            <span className="text-lg">{selectedElement.atomicMass}</span>
          </div>

          <div className="text-gray-300 flex flex-col">
            <strong className="text-white mb-1">Category:</strong>
            <span style={{ color: selectedElement.color }} className="text-lg font-semibold">
              {selectedElement.category}
            </span>
          </div>

          <div className="text-gray-300 flex flex-col">
            <strong className="text-white mb-1">Protons:</strong>
            <span className="text-lg">{selectedElement.protons}</span>
          </div>

          <div className="text-gray-300 flex flex-col">
            <strong className="text-white mb-1">Electrons:</strong>
            <span className="text-lg">{selectedElement.electrons}</span>
          </div>

          <div className="text-gray-300 flex flex-col">
            <strong className="text-white mb-1">Neutrons:</strong>
            <span className="text-lg">{selectedElement.neutrons}</span>
          </div>

          <div className="text-gray-300 flex flex-col">
            <strong className="text-white mb-1">Electron Shells:</strong>
            <span className="text-lg">{selectedElement.orbits}</span>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center min-h-[300px]">
          <AtomicStructure
            protons={selectedElement.protons}
            neutrons={selectedElement.neutrons}
            electrons={selectedElement.electrons}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailView;