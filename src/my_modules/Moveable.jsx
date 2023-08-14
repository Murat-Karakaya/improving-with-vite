import { useState, useEffect } from 'react';

export default function Moveable ({children}) {
  const [position, setPosition] = useState({x: 260, y: 195});

  const handleArrowPress = (event) => {
    switch (event.keyCode) {
      case 37:
        setPosition((prevPosition) => ({ x: prevPosition.x - 10, y: prevPosition.y }));
        break;
      case 38:
        setPosition((prevPosition) => ({ x: prevPosition.x, y: prevPosition.y - 10 }));
        break;
      case 39:
        setPosition((prevPosition) => ({ x: prevPosition.x + 10, y: prevPosition.y }));
        break;
      case 40:
        setPosition((prevPosition) => ({ x: prevPosition.x, y: prevPosition.y + 10 }));
        break;
      default:
        break;
    }
  };
  
  
  useEffect(() => {
    document.addEventListener("keydown", handleArrowPress);
    return () => {
      document.removeEventListener("keydown", handleArrowPress);
    };
  }, []);
  
  return (
    <>
    <p>{`x: ${position.x}, y: ${position.y}`}</p>
    <div
      style={{
        width: 'fit-content',
        height: 'fit-content',
        position: 'absolute',
        display: 'flex',
        cursor: 'context-menu',
        justifyContent: 'center',
        alignItems: 'center',
        transform: `translate(
          ${position.x}px,
          ${position.y}px
        )`,
      }}
    >{children}</div>
    </>
  );
}