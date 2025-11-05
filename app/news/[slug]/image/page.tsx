import { notFound } from 'next/navigation';
import { DUMMY_NEWS } from '@/dummy-news';

export default async function ImagePage({ params }) {
    const param = await params;
    const newsSlug = param.slug;

    const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

    if (!newsItem) {
        notFound();
    }

    return (
        <div className="fullscreen-image">
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
    );
}