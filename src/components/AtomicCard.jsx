import React from "react";

const AtomicCard = ({ element, onClick, isSelected }) => {
  const { atomicNumber, symbol, atomicMass, color, category } = element;
  
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  const rgb = hexToRgb(color);
  const rgbString = rgb ? `${rgb.r}, ${rgb.g}, ${rgb.b}` : "255, 255, 255";

  return (
    <div 
      className="relative rounded border-2 transition-all duration-300 cursor-pointer group transform hover:scale-105"
      style={{
        width: "60px",
        height: "60px",
        backgroundColor: "#1a1a1a",
        borderColor: isSelected ? color : `rgba(${rgbString}, 0.3)`,
        boxShadow: isSelected 
          ? `0 0 20px rgba(${rgbString}, 0.8), inset 0 0 20px rgba(${rgbString}, 0.2)`
          : `0 0 10px rgba(${rgbString}, 0.4)`,
      }}
      onClick={() => onClick(element)}>

      <div 
        className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
        style={{
          background: `radial-gradient(circle, rgba(${rgbString}, 0.3) 0%, transparent 70%)`,
          filter: "blur(8px)",
        }}/>
      
      {isSelected && (
        <div 
          className="absolute inset-0 rounded animate-pulse -z-20"
          style={{
            background: `radial-gradient(circle, rgba(${rgbString}, 0.4) 0%, transparent 70%)`,
            filter: "blur(15px)",
            transform: "scale(1.2)",
          }}
        />
      )}
      
      
      <div className="p-1 h-full flex flex-col justify-between text-center relative z-10">
        
        <div className="text-gray-300 text-xs font-medium leading-none">
          {atomicNumber}
        </div>
        
        
        <div className="flex-1 flex items-center justify-center">
          <span 
            className="font-bold leading-none text-shadow-lg"
            style={{ 
              fontSize: symbol.length > 2 ? "14px" : "18px",
              color: color,
              textShadow: `0 0 10px rgba(${rgbString}, 0.8)`
            }}>
            {symbol}
          </span>
        </div>
        
        <div className="text-gray-400 text-xs leading-none">
          {parseFloat(atomicMass).toFixed(1)}
        </div>

      </div>
      
    </div>
  );
};

export default AtomicCard;