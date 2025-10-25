'use client';

import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import Hero from '@/components/Hero';
import LatestCollection from '@/components/LatestCollection';
import BestSeller from '@/components/BestSeller';
import OutPolicy from '@/components/OutPolicy';
import NewsLetterBox from '@/components/NewsLetterBox';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <SearchBar />
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OutPolicy />
      <NewsLetterBox />
      <Footer />
    </div>
  );
}
