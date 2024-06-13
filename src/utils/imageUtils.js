import fs from 'fs';
import sizeOf from 'image-size';
import path from 'path';

// 재귀적으로 디렉토리를 순회하면서 이미지를 수집하는 함수
export function collectImages(directory, year, basePath = '') {
  let images = [];
  const items = fs.readdirSync(directory);

  items.forEach(item => {
    if (item === 'home') return; //home은 제외

    const fullPath = path.join(directory, item);
    const relativePath = path.join(basePath, item);
    if (fs.statSync(fullPath).isDirectory()) {
      images = images.concat(collectImages(fullPath, year, relativePath));
    } else if (/\.(jpg|jpeg|png|gif)$/.test(item)) {
      const dimensions = getImageDimensions(fullPath); // 이미지 크기를 가져오는 함수 호출
      images.push({
        src: `/images/${year}/${relativePath}`,
        meta: { ...parseImageMeta(item), ...dimensions },
      });
    }
  });

  return images;
}

// 이미지 파일명을 파싱하여 메타 데이터를 추출하는 함수
function parseImageMeta(filename) {
  const [title = '', description = '', size = '', year = ''] = filename
    .replace(/\.[^/.]+$/, '')
    .split(',')
    .map(part => part.replace(/_/g, ' '));
  return { title, description, size, year };
}

// 이미지 크기를 가져오는 함수
function getImageDimensions(filePath) {
  const dimensions = sizeOf(filePath);
  return { width: dimensions.width, height: dimensions.height };
}

// 연도 목록을 가져오는 함수
export function getYears() {
  const imagesPath = path.join(process.cwd(), 'src', 'public', 'images');
  return fs
    .readdirSync(imagesPath)
    .filter(
      name =>
        fs.statSync(path.join(imagesPath, name)).isDirectory() &&
        name !== 'home',
    )
    .sort((a, b) => b - a);
}
