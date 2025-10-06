
import { useRef } from "react";
import { MdAddAPhoto } from "react-icons/md";
import { useState } from "react";

function UploadBox() {

    const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click(); // trigger hidden input
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected file:", file);
      // preview logic etc.
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const uploaded = e.dataTransfer.files[0];
    if (uploaded) {
      setFile(uploaded);
      setPreview(URL.createObjectURL(uploaded));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={`d-flex flex-column align-items-center justify-content-center text-center`}
      onClick={handleClick}   // 👉 div click triggers file input
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{ cursor: "pointer" }}
    >
      {preview ? (
        <img src={preview} alt="Uploaded" className="previewImage" />
      ) : (
        <>
          <div className="text-danger mb-2">
            <MdAddAPhoto size={30} />
          </div>
          <p className="fw-semibold text-danger m-0 small">Upload photo</p>
        </>
      )}

      {/* hidden input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        style={{ display: "none" }}
      />
    </div>
  );
}

export default UploadBox;

