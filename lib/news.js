import sql from 'better-sqlite3';

const db = sql('data.db');

export function getAllNews() {
  const news = db.prepare('SELECT * FROM news').all();
  return news;
}

export function getLatestNews() {
    const news = db.prepare('SELECT * FROM news ORDER BY date DESC LIMIT 3').all();
    return news;
}

export function getAvailableNewsYears() {
  const years = db.prepare('SELECT DISTINCT YEAR(date) AS year FROM news ORDER BY year DESC').all();
  return years.map(year => year.year);
}

export function getAvailableNewsMonths(year) {
  const months = db.prepare('SELECT DISTINCT MONTH(date) AS month FROM news WHERE YEAR(date) = ? ORDER BY month DESC').all(year);
  return months.map(month => month.month);
}

export function getNewsForYear(year) {
  const news = db.prepare('SELECT * FROM news WHERE YEAR(date) = ?').all(year);
  return news;
}

export function getNewsForYearAndMonth(year, month) {
  const news = db.prepare('SELECT * FROM news WHERE YEAR(date) = ? AND MONTH(date) = ?').all(year, month);
  return news;
}