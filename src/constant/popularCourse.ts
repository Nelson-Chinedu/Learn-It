import Thumbnail1 from 'src/assets/images/thumbnailSample.webp';
import Thumbnail2 from 'src/assets/images/thumbnail.jpeg';

export const POPULAR_COURSE = [
  {
    img: Thumbnail1,
    title: 'Intro. to JavaScript',
    category: 'programming',
    lessonNumber: '18 Lesson',
    price: '$225',
  },
  {
    img: Thumbnail2,
    title: 'Intro. to Golang',
    category: 'programming',
    lessonNumber: '10 Lesson',
    price: '$300',
  },
  {
    img: Thumbnail1,
    title: 'Intro. to Python',
    category: 'programming',
    lessonNumber: '14 Lesson',
    price: '$150',
  },
  {
    img: Thumbnail2,
    title: 'Intro. to Data Science',
    category: 'programming',
    lessonNumber: '14 Lesson',
    price: '$150',
  },
] as const;
