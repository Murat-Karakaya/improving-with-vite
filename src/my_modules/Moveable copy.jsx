import { useState, useEffect } from 'react';

export default function Moveable ({children}) {
  const [lastCoordinates, setLastCoordinates] = useState(null);
  const [position, setPosition] = useState({x: 0, y: 0});
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const handleRightArrowPress = (event) => {
    if (event.keyCode === 39) {
      setIsAlertVisible(true);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleRightArrowPress);
    return () => {
      document.removeEventListener("keydown", handleRightArrowPress);
    };
  }, []);

  function handleMove(dx, dy) {
    setPosition({
        x: position.x + dx,
        y: position.y + dy,
      });
  }
  
  function handlePointerDown(e) {
    e.target.setPointerCapture(e.pointerId);
    setLastCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
  }

  function handlePointerMove(e) {
    if (lastCoordinates) {
      setLastCoordinates({
        x: e.clientX,
        y: e.clientY,
      });
      const dx = e.clientX - lastCoordinates.x;
      const dy = e.clientY - lastCoordinates.y;
      handleMove(dx, dy);
    }
  }

  function handlePointerUp(e) {
    setLastCoordinates(null);
  }

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        width: 'fit-content',
        height: 'fit-content',
        cursor: isAlertVisible ? 'grab' : "progress",
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: `translate(
          ${position.x}px,
          ${position.y}px
        )`,
      }}
    >{children}</div>
  );
}