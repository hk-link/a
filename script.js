window.onload = () => {
  const path = window.location.pathname.split("/a/")[1]; // Get the part after /q/
  if (!path) return; // If no short code, stay on index.html

  const key = path.replace(/\/$/, ""); // Remove trailing slash
  if (links[key]) {
    window.location.href = links[key];
  } else {
    document.body.innerHTML = `<h1>404 - Short link not found</h1><p>No link found for: <code>${key}</code></p>`;
  }
};
