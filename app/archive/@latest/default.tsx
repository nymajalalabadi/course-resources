import NewsList from '@/components/news-list';
import { getLatestNews } from '@/lib/news';

export default function LatestNewsPage() {
    const newsItems = getLatestNews();

    return (
        <NewsList newsItems={newsItems} />
    );
}