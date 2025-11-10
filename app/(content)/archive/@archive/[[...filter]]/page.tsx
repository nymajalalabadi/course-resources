import Link from 'next/link';
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from '@/lib/news';
import NewsList from '@/components/news-list';
import { Suspense } from 'react';

async function FilteredNews({ year, month }: { year?: string; month?: string }) {

  let news;

  if (year && !month) {
    news = await getNewsForYear(year);
  }
  if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>No news found for this year.</p>;

    if (news && news.length > 0) {
        newsContent = <NewsList newsItems={news} />;
    }

  return newsContent;
}

export default async function FilteredNewsPage({ params }: { params: Promise<{ filter?: string[] }> }) {
    const param = await params;
    const filter = param.filter;

    const selectedYear = filter?.[0];
    const selectedMonth = filter?.[1];

    const availableYears = await getAvailableNewsYears();
    let links = await availableYears;

    if (selectedYear && !selectedMonth) 
    {
        links = getAvailableNewsMonths(selectedYear);
    }

    if (selectedYear && selectedMonth) 
    {
        links = [];
    }


    if (selectedYear && !availableYears.includes(selectedYear) || selectedMonth && !getAvailableNewsMonths(selectedYear).includes(selectedMonth)) 
    {
        throw new Error('Invalid year');
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
  <Suspense>
    <FilteredNews year={selectedYear} month={selectedMonth} />
  </Suspense>
  </>
  );
}