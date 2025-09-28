import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import AtomicCard from "./AtomicCard";
import DetailView from "./DetailView";
import CategorySidebar from "./CategorySidebar";
import TitleBar from "./TitleBar";

const PeriodicTable = ({ jsonData }) => {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const vantaRef = useRef(null);

  useEffect(() => {
    let effect = null;
    if (window.VANTA && window.VANTA.WAVES) {
      effect = window.VANTA.WAVES({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: false,
        gyroControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x101010,
        shininess: 50.0,
        waveHeight: 20,
        waveSpeed: 0.9,
        zoom: 0.85,
      });
    }
    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  useEffect(() => {
    if (selectedElement) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedElement]);

  useEffect(() => {
    const allElements = jsonData.groups.flatMap((group) =>
      group.elements.map((element) => ({
        ...element,
        category: group.category,
      }))
    );
    allElements.sort((a, b) => a.atomicNumber - b.atomicNumber);
    setElements(allElements);
  }, [jsonData]);

  const getElementPosition = (atomicNum) => {
    const positions = {
      1: [1, 1],
      2: [1, 18],
      3: [2, 1],
      4: [2, 2],
      5: [2, 13],
      6: [2, 14],
      7: [2, 15],
      8: [2, 16],
      9: [2, 17],
      10: [2, 18],
      11: [3, 1],
      12: [3, 2],
      13: [3, 13],
      14: [3, 14],
      15: [3, 15],
      16: [3, 16],
      17: [3, 17],
      18: [3, 18],
      19: [4, 1],
      20: [4, 2],
      21: [4, 3],
      22: [4, 4],
      23: [4, 5],
      24: [4, 6],
      25: [4, 7],
      26: [4, 8],
      27: [4, 9],
      28: [4, 10],
      29: [4, 11],
      30: [4, 12],
      31: [4, 13],
      32: [4, 14],
      33: [4, 15],
      34: [4, 16],
      35: [4, 17],
      36: [4, 18],
      37: [5, 1],
      38: [5, 2],
      39: [5, 3],
      40: [5, 4],
      41: [5, 5],
      42: [5, 6],
      43: [5, 7],
      44: [5, 8],
      45: [5, 9],
      46: [5, 10],
      47: [5, 11],
      48: [5, 12],
      49: [5, 13],
      50: [5, 14],
      51: [5, 15],
      52: [5, 16],
      53: [5, 17],
      54: [5, 18],
      55: [6, 1],
      56: [6, 2],
      72: [6, 4],
      73: [6, 5],
      74: [6, 6],
      75: [6, 7],
      76: [6, 8],
      77: [6, 9],
      78: [6, 10],
      79: [6, 11],
      80: [6, 12],
      81: [6, 13],
      82: [6, 14],
      83: [6, 15],
      84: [6, 16],
      85: [6, 17],
      86: [6, 18],
      87: [7, 1],
      88: [7, 2],
      104: [7, 4],
      105: [7, 5],
      106: [7, 6],
      107: [7, 7],
      108: [7, 8],
      109: [7, 9],
      110: [7, 10],
      111: [7, 11],
      112: [7, 12],
      113: [7, 13],
      114: [7, 14],
      115: [7, 15],
      116: [7, 16],
      117: [7, 17],
      118: [7, 18],
      57: [9, 4],
      58: [9, 5],
      59: [9, 6],
      60: [9, 7],
      61: [9, 8],
      62: [9, 9],
      63: [9, 10],
      64: [9, 11],
      65: [9, 12],
      66: [9, 13],
      67: [9, 14],
      68: [9, 15],
      69: [9, 16],
      70: [9, 17],
      71: [9, 18],
      89: [10, 4],
      90: [10, 5],
      91: [10, 6],
      92: [10, 7],
      93: [10, 8],
      94: [10, 9],
      95: [10, 10],
      96: [10, 11],
      97: [10, 12],
      98: [10, 13],
      99: [10, 14],
      100: [10, 15],
      101: [10, 16],
      102: [10, 17],
      103: [10, 18],
    };
    return positions[atomicNum] || [11, 1];
  };

  const categories = jsonData.groups.map((group) => ({
    name: group.category,
    color: group.color,
    count: group.elements.length,
  }));

  const handleCategoryFilter = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
    setSelectedElement(null);
    setMenuOpen(false);
  };

  const clearFilter = () => {
    setSelectedCategory(null);
    setMenuOpen(false);
  };

  const handleElementClick = (element) => {
    setSelectedElement(element);
    setMenuOpen(false);
  };

  return (
    <div ref={vantaRef} className="min-h-min p-4 relative overflow-hidden pt-24">
      <TitleBar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategoryFilter={handleCategoryFilter}
        clearFilter={clearFilter}/>

      <div className={`relative max-w-7xl mx-auto z-10 transition-all duration-300 ${selectedElement ? "blur-sm" : ""}`}>
        <div className="flex flex-col items-center">
          <div
            className="grid gap-1 mb-8"
            style={{
              gridTemplateColumns: "repeat(18, 60px)",
              gridTemplateRows: "repeat(10, 60px)",
            }}>

            {elements.map((element) => {
              const [row, col] = getElementPosition(element.atomicNumber);
              const isHighlighted = selectedCategory
                ? element.category === selectedCategory
                : true;

              return (
                <div
                  key={element.atomicNumber}
                  style={{
                    gridRow: row,
                    gridColumn: col,
                    opacity: isHighlighted ? 1 : 0.3,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  <AtomicCard
                    element={element}
                    onClick={handleElementClick}
                    isSelected={
                      selectedElement?.atomicNumber === element.atomicNumber
                    }
                  />
                </div>
              );
            })}
          </div>

          <div className="mt-6 text-white text-center font-semibold">
            <a
              href="https://nikhil-keshri2213.github.io/MyPortfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>@Developed by Nikhil Keshri</p>
            </a>
          </div>
        </div>
      </div>

      {selectedElement && (
        <div className="fixed inset-0 flex items-center justify-center z-[60]">
          <div
            className="bg-black/50 absolute inset-0 z-40"
            onClick={() => setSelectedElement(null)}
          ></div>
          <div className="relative z-50">
            <DetailView
              selectedElement={selectedElement}
              onClose={() => setSelectedElement(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PeriodicTable;
