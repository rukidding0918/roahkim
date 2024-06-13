import ImageCard from '@/components/ImageCard';
import LayoutWorks from '@/components/LayoutWorks';
import { collectImages, getYears } from '@/utils/imageUtils';
import path from 'path';

export async function getStaticPaths() {
  const years = getYears();

  const paths = years.map(year => ({
    params: { year },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const years = getYears();

  const year = params.year;
  const imagesPath = path.join(process.cwd(), 'src', 'public', 'images', year);
  const images = collectImages(imagesPath, year);

  return {
    props: {
      year,
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
          {images.map(
            ({ src, meta }, index) => (
              <ImageCard key={index} src={src} meta={meta}></ImageCard>
            ),
            // <div key={index}>
            //   <div>
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
          )}
        </div>
      </div>
    </LayoutWorks>
  );
}
