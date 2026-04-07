import { HelpCircle } from 'lucide-react';
import { HeaderWithSearch } from '../components/HeaderWithSearch';
import { HeroSection } from '../components/HeroSection';
import { Categories } from '../components/Categories';
import { ServicesBar } from '../components/ServicesBar';
import { PopularProducts } from '../components/PopularProducts';
import { FeaturedManufacturers } from '../components/FeaturedManufacturers';
import { PromotionalBanners } from '../components/PromotionalBanners';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="h-auto lg:h-[102px]">
        <HeaderWithSearch />
      </div>
      <main>
        <HeroSection />
        <Categories />
        <ServicesBar />
        <PopularProducts />
        <FeaturedManufacturers />
        <PromotionalBanners />
      </main>
      <Footer />
      
      {/* Floating Help Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-[#0072C3] hover:bg-[#036bb4] text-white rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110 z-50">
        <HelpCircle className="w-7 h-7" />
      </button>
    </div>
  );
}