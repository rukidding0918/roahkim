import Image from 'next/image';

export default function ImageCard({ src, meta }, index) {
  return (
    <div key={index}>
      <div>
        <Image
          src={src}
          alt={meta.title}
          width={meta.width}
          height={meta.height}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div>
        <h2>{meta.title}</h2>
        <p>{meta.description}</p>
        <p>{meta.size}</p>
        <p>{meta.year}</p>
      </div>
    </div>
  );
}
