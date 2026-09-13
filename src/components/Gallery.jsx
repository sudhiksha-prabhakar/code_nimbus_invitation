import { useMemo, useRef, useState } from "react";
import { HeartDivider } from "./Decor";
import Reveal from "./Reveal";

const PER_PAGE = 8;

export default function Gallery() {
  const fileInputRef = useRef(null);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(photos.length / PER_PAGE));
  const visible = useMemo(
    () => photos.slice((page - 1) * PER_PAGE, page * PER_PAGE),
    [photos, page]
  );

  const handleUploadClick = () => fileInputRef.current?.click();

  const handleFiles = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    const urls = files.map((f) => URL.createObjectURL(f));
    setPhotos((p) => [...p, ...urls]);
    setPage(1);
    e.target.value = "";
  };

  return (
    <Reveal as="section" className="gallery-page">
      <h2 className="script-heading">Cherished moments, beautifully captured</h2>
      <HeartDivider />

      <input
        type="file"
        accept="image/*"
        multiple
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFiles}
      />
      <button className="upload-btn" onClick={handleUploadClick}>
        Upload
      </button>

      {photos.length === 0 ? (
        <p className="gallery-empty">
          No photos yet — click Upload to add some to the album.
        </p>
      ) : (
        <div className="gallery-grid">
          {visible.map((src, i) => (
            <div className="gallery-item" key={src + i}>
              <img src={src} alt={`Uploaded ${i + 1}`} />
            </div>
          ))}
        </div>
      )}

      <div className="gallery-pager">
        <button
          aria-label="Previous page"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page <= 1}
        >
          &#8592;
        </button>
        <span>Page {page}</span>
        <button
          aria-label="Next page"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page >= totalPages}
        >
          &#8594;
        </button>
      </div>
    </Reveal>
  );
}
