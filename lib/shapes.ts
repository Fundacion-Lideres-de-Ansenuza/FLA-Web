export function generateBlobRadius(text: string): string {
  // Use the text length and character codes to generate a deterministic seed
  let seed = text.length;
  for (let i = 0; i < text.length; i++) {
    seed += text.charCodeAt(i);
  }

  // Helper to get a random-ish number between min and max based on seed
  const getVal = (min: number, max: number, offset: number) => {
    const x = Math.sin(seed + offset) * 10000;
    const random = x - Math.floor(x);
    return Math.floor(random * (max - min + 1)) + min;
  };

  // Generate 8 values for the blob radius (4 for top/bottom/left/right, 4 for corners)
  // Format: top-left top-right bottom-right bottom-left / top-left top-right bottom-right bottom-left
  
  const v1 = getVal(30, 70, 1);
  const v2 = getVal(30, 70, 2);
  const v3 = getVal(30, 70, 3);
  const v4 = getVal(30, 70, 4);
  


  return `${v1}% ${100 - v1}% ${v2}% ${100 - v2}% / ${v3}% ${v4}% ${100 - v4}% ${100 - v3}%`;
}
