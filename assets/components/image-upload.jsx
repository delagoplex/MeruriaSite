// image-upload.jsx
// Exposes: window.ImageUpload
// Props: imageUrl, onUploaded, bucket, pathPrefix, shape ('hex'|'circle'|'square'), width, height

const { useState: _iu_useState, useRef: _iu_useRef } = React;

function ImageUpload({ imageUrl, onUploaded, bucket, pathPrefix, shape = 'square', width, height }) {
  const fileRef = _iu_useRef(null);
  const [uploading, setUploading] = _iu_useState(false);

  const w = width  !== undefined ? width  : (shape === 'hex' ? 280 : 140);
  const h = height !== undefined ? height : (shape === 'hex' ? 324 : 140);

  const upload = async (file) => {
    if (!file || !window._sb) return;
    setUploading(true);
    const clean = file.name.replace(/[^a-z0-9._-]/gi, '_');
    const path = `${pathPrefix}/${Date.now()}-${clean}`;
    const { error } = await window._sb.storage.from(bucket).upload(path, file, { upsert: true });
    if (error) { console.error('ImageUpload error:', error); setUploading(false); return; }
    const { data } = window._sb.storage.from(bucket).getPublicUrl(path);
    onUploaded(data.publicUrl);
    setUploading(false);
  };

  const clipPath = shape === 'hex'
    ? 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
    : shape === 'circle'
    ? 'circle(50% at 50% 50%)'
    : undefined;

  return (
    <div
      onClick={() => !uploading && fileRef.current?.click()}
      style={{ width: w, height: h, cursor: uploading ? 'wait' : 'pointer', position: 'relative', flexShrink: 0, margin: '0 auto' }}
    >
      <div style={{
        position: 'absolute', inset: 0,
        clipPath,
        borderRadius: shape === 'square' ? 4 : undefined,
        overflow: 'hidden',
        background: 'linear-gradient(160deg, rgba(20,12,46,0.92), rgba(10,7,28,0.96))',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {imageUrl
          ? <img src={imageUrl} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt=""/>
          : <div style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
              fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.18em',
              color: 'rgba(124,77,255,0.4)', textTransform: 'uppercase',
            }}>
              {uploading
                ? <span>hochladen…</span>
                : <React.Fragment>
                    <span style={{ fontSize: 18 }}>+</span>
                    <span>Bild wählen</span>
                  </React.Fragment>
              }
            </div>
        }
      </div>

      {/* Border overlay */}
      {shape === 'hex' && window.HexBorder
        ? <window.HexBorder selected={true}/>
        : shape !== 'hex' &&
          <div style={{
            position: 'absolute', inset: 0,
            borderRadius: shape === 'circle' ? '50%' : 4,
            border: '1px solid rgba(124,77,255,0.35)',
            pointerEvents: 'none',
          }}/>
      }

      <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={ev => upload(ev.target.files[0])}/>
    </div>
  );
}

window.ImageUpload = ImageUpload;
