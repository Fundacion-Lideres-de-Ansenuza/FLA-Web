import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import NewArrivalsSection from '@/components/sections/NewArrivalsSection';

export const metadata: Metadata = {
  title: 'Home - Seasonal Collections & Best Prices', // More specific title for the home page
  description: 'Welcome to Your Awesome Brand! Explore our new seasonal collections and find the best prices on high-quality fashion items. Shop now for exclusive deals.',
  // Example for page-specific Open Graph data
  // openGraph: {
  //   title: 'Home - Seasonal Collections & Best Prices | Your Awesome Brand',
  //   description: 'Welcome to Your Awesome Brand! Explore our new seasonal collections...',
  //   // If you have a specific hero image for the homepage, you might list it here
  //   // images: [{ url: '/homepage-hero.jpg', width: 1200, height: 630, alt: 'Hero image for Your Awesome Brand homepage' }],
  // },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NewArrivalsSection />
      {/* Other page-specific sections can be added here */}
    </>
  );
}
