import Link from 'next/link';
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear } from '@/lib/news';
import NewsList from '@/components/news-list';

export default async function FilteredNewsPage({ params }: { params: Promise<{ filter?: string[] }> }) {
    const param = await params;
    const filter = param.filter;

    const selectedYear = filter?.[0];
    const selectedMonth = filter?.[1];

    let news;
    let links = getAvailableNewsYears();

    if (selectedYear && !selectedMonth) 
    {
        news = getNewsForYear(selectedYear);
        links = getAvailableNewsMonths(selectedYear);
    }

    let newsContent = <p>No news found for this year.</p>;

    if (news && news.length > 0) {
        newsContent = <NewsList newsItems={news} />;
    }


  return (
    <>
    <header id="archive-header">
    <nav id="archive-filter">
      <ul>
          {links.map((link) => {
            const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`;
            return (
              <li key={link}>
                  <Link href={href}>{link}</Link>
              </li>
            );
          })}
      </ul>
    </nav>
  </header>
  {newsContent}
  </>
  );
}