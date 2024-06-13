import ImageCard from '@/components/ImageCard';
import { collectImages } from '@/utils/imageUtils';
import path from 'path';

export async function getStaticProps() {
  const imagesPath = path.join(
    process.cwd(),
    'src',
    'public',
    'images',
    'home',
  );
  const images = collectImages(imagesPath);

  return {
    props: {
      images,
    },
  };
}

export default function Home({ images }) {
  const image = images[0]; // 첫 번째 이미지를 사용
  image.src = image.src.replace(/undefined/g, 'home');

  return (
    <div>
      <h1>Welcome to the Roah Kim`s Portfolio</h1>
      <div>
        <ImageCard src={image.src} meta={image.meta} />
      </div>
    </div>
  );
}
