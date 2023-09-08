const createButton = (text, className) => {
  const button = document.createElement("button");
  button.textContent = text;
  button.className = className;
  return button;
};

export default createButton;
