import { useState } from "react";
//En funktioon för att ladda upp bilder
function imageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);
}

//hantera när användaren väljer en bild
function handleImageChange(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      setPreview(base64);
      onImageSelect(base64);
    };
    reader.readAsDataURL(file); // Läser filen som Data URL (base64)
  }
}
//Rensa vald bild
function handleRemoveImage() {
  setPreview(null);
  onImageSelect(null);
}

return (
  <div style={{ textAlign: "center" }}>
    <label style={{ fontWeight: "bold" }}>Ladda upp en bild:</label>
    <input type="file" accept="image/*" onChange={handleImageChange} />

    {preview && (
      <div style={{ marginTop: "10px" }}>
        <img
          src={preview}
          alt="Förhandsvisning"
          style={{
            width: "150px",
            height: "150px",
            objectFit: "cover",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          }}
        />
        <div>
          <button
            onClick={handleRemove}
            style={{
              backgroundColor: "#F49899",
              color: "white",
              border: "none",
              borderRadius: "6px",
              padding: "6px 12px",
              marginTop: "8px",
              cursor: "pointer",
            }}
          >
            Ta bort bild
          </button>
        </div>
      </div>
    )}
  </div>
);
export default imageUpload;
