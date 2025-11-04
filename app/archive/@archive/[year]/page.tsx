import NewsList from '@/components/news-list';
import { getNewsForYear } from '@/lib/news';

export default async function FilteredNewsPage({ params }) {
    const param = await params;
    const year = param.year;

    const newsItems = getNewsForYear(year);


  return (
      <NewsList newsItems={newsItems} />
  );
}