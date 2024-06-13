import ImageCard from '@/components/ImageCard';
import LayoutWorks from '@/components/LayoutWorks';
import { collectImages, getYears } from '@/utils/imageUtils';
import path from 'path';

export async function getStaticProps() {
  const years = getYears();

  const latestYear = years[0];
  const latestImagesPath = path.join(
    process.cwd(),
    'src',
    'public',
    'images',
    latestYear,
  );
  const images = collectImages(latestImagesPath, latestYear);

  return {
    props: {
      year: latestYear,
      images,
      years,
    },
  };
}

export default function Works({ year, images, years }) {
  return (
    <LayoutWorks years={years}>
      <div>
        <h1>Works of {year}</h1>
        <div>
          {images.map(({ src, meta }, index) => (
            <ImageCard key={index} src={src} meta={meta}></ImageCard>

            // <div key={index} style={{ marginBottom: '20px' }}>
            //   <div
            //     style={{
            //       position: 'relative',
            //       width: '100%',
            //       marginBottom: '10px',
            //     }}
            //   >
            //     <Image
            //       src={src}
            //       alt={meta.title}
            //       width={meta.width}
            //       height={meta.height}
            //     />
            //   </div>
            //   <div>
            //     <h2>{meta.title}</h2>
            //     <p>{meta.description}</p>
            //     <p>{meta.size}</p>
            //     <p>{meta.year}</p>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </LayoutWorks>
  );
}
