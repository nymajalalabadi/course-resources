import { notFound } from 'next/navigation';
import { getNewsItem } from '@/lib/news';

export default async function ImagePage({ params }) {
    const param = await params;
    const newsSlug = param.slug;

    const newsItem = await getNewsItem(newsSlug);

    if (!newsItem) {
        notFound();
    }

    return (
        <div className="fullscreen-image">
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
    );
}