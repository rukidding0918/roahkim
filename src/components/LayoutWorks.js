import Link from 'next/link';

export default function LayoutWorks({ children, years }) {
  return (
    <div>
      <header>
        <nav>
          <ul>
            {years.map(year => (
              <li key={year}>
                <Link href={`/works/${year}`}>{year}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
