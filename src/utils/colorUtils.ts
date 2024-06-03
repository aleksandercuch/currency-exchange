// Handles line chart color changes
export const handleColorChange = (setLineColor: React.Dispatch<React.SetStateAction<string>>, color: string) => {
    setLineColor(color);
    localStorage.setItem('lineColor', color);
  };