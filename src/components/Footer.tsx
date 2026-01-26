import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-8 bg-sage-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-sage-700 flex items-center justify-center">
              <svg className="w-5 h-5 text-sage-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <Link href="/" className="text-sage-300 font-medium hover:text-sage-200 transition-colors">
              Rekindle
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <a
              href="https://pauloviawe.nl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage-400 hover:text-sage-200 transition-colors text-sm"
            >
              Content by Paul Oviawe
            </a>
            <span className="hidden sm:inline text-sage-600">|</span>
            <a
              href="https://www.linkedin.com/in/shubhamchitranshi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage-400 hover:text-sage-200 transition-colors text-sm flex items-center gap-1"
            >
              Developed by Shubham Chitranshi
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
