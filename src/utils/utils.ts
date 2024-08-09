export const getCookieValue = (name: string) => {
  const cookies = document.cookie.split(';');
  const cookie = cookies.find((cookie) => cookie.trim().startsWith(`${name}=`));
  return cookie?.split('=')[1];
};


export const getImageUrl = (path: string) => {
  return path ? `${import.meta.env.VITE_API_URL_APP}/storage/files/view/${path}` : '';
};

export const rgba = (color: string, opacity: number): string => {

  let r: number = 0,
    g: number = 0,
    b: number = 0;

  // Ensure color is a valid color string
  if (color[0] !== "#" || (color.length !== 4 && color.length !== 7)) {
    throw new Error("Invalid color color format");
  }

  // 3 digits
  if (color.length === 4) {
    r = parseInt(color[1] + color[1], 16);
    g = parseInt(color[2] + color[2], 16);
    b = parseInt(color[3] + color[3], 16);
  }
  // 6 digits
  else if (color.length === 7) {
    r = parseInt(color.slice(1, 3), 16);
    g = parseInt(color.slice(3, 5), 16);
    b = parseInt(color.slice(5, 7), 16);
  }

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
