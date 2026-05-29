(function () {
// image-upload.jsx
// Exposes: window.ImageUpload
// Props: imageUrl, onUploaded, bucket, pathPrefix, shape ('hex'|'circle'|'square'), width, height

const { useState, useRef } = React;
const h = React.createElement;

function ImageUpload({ imageUrl, onUploaded, bucket, pathPrefix, shape = 'square', width, height, objectPosition }) {
  const fileRef = useRef(null);
  const [uploading, setUploading] = useState(false);

  const w  = width  !== undefined ? width  : (shape === 'hex' ? 280 : 140);
  const ht = height !== undefined ? height : (shape === 'hex' ? 324 : 140);

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

  return h('div', {
    onClick: () => !uploading && fileRef.current && fileRef.current.click(),
    style: { width: w, height: ht, cursor: uploading ? 'wait' : 'pointer', position: 'relative', flexShrink: 0, margin: '0 auto' },
  },
    h('div', {
      style: {
        position: 'absolute', inset: 0,
        clipPath,
        borderRadius: shape === 'square' ? 4 : undefined,
        overflow: 'hidden',
        background: 'linear-gradient(160deg, rgba(20,12,46,0.92), rgba(10,7,28,0.96))',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      },
    },
      imageUrl
        ? h('img', { src: imageUrl, style: { width: '100%', height: '100%', objectFit: 'cover', objectPosition: objectPosition || '50% 50%', display: 'block' }, alt: '' })
        : h('div', {
            style: {
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
              fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.18em',
              color: 'rgba(124,77,255,0.4)', textTransform: 'uppercase',
            },
          },
            uploading
              ? h('span', null, 'hochladen…')
              : h(React.Fragment, null,
                  h('span', { style: { fontSize: 18 } }, '+'),
                  h('span', null, 'Bild wählen')
                )
          )
    ),
    // Border overlay
    shape === 'hex' && window.HexBorder
      ? h(window.HexBorder, { selected: true })
      : shape !== 'hex'
        ? h('div', {
            style: {
              position: 'absolute', inset: 0,
              borderRadius: shape === 'circle' ? '50%' : 4,
              border: '1px solid rgba(124,77,255,0.35)',
              pointerEvents: 'none',
            },
          })
        : null,
    h('input', {
      ref: fileRef,
      type: 'file',
      accept: 'image/*',
      style: { display: 'none' },
      onChange: ev => upload(ev.target.files[0]),
    })
  );
}

window.ImageUpload = ImageUpload;
})();
