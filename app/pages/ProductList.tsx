import { useSearchParams } from 'react-router';
import { HelpCircle } from 'lucide-react';
import { HeaderWithSearch } from '../components/HeaderWithSearch';
import { Frame3WithNavigation } from '../components/Frame3WithNavigation';
import { Frame3WithData } from '../components/Frame3WithData';
import { Footer } from '../components/Footer';
import type { PlpPageConfig } from '../../imports/Frame3';

// ── USB2HAB50CM ──────────────────────────────────────────────────────────────
const USB_CONFIG: PlpPageConfig = {
  searchTerm: 'USB2HAB50CM',
  breadcrumbs: ['Cables & Connectivity', 'USB Cables', 'USB 2.0 Cables', 'USB 2.0 A-Male to B-Male'],
  attrHeaders: ['Connector A', 'Connector B', 'Cable Length', 'Colour'],
  filters: ['Manufacturer', 'Connector A Type', 'Connector B Type', 'Cable Length', 'Colour', 'USB Version', 'Cable Type', 'Shielding', 'Transfer Speed', 'Packaging'],
  rows: [
    {
      partNo: 'USB2HAB50CM',
      productId: 'usb2hab50cm',
      image: '/images/usb-cable.webp',
      orderCode: '4524401',
      description: ['USB 2.0 Cable', 'Type A to Type B', 'Male to Male', '0.5m', 'Black'],
      manufacturer: 'StarTech.com',
      stock: '4,521 In Stock',
      delivery: 'Delivery in 2-4 business days from our UK warehouse',
      packaging: 'Each',
      priceBreaks: [
        { qty: '1+', price: '£3.99' },
        { qty: '10+', price: '£3.59' },
        { qty: '50+', price: '£3.29' },
      ],
      minQty: '1',
      multiple: '1',
      attrs: ['USB Type A', 'USB Type B', '0.5m', 'Black'],
    },
    {
      partNo: 'USB2HAB1M',
      productId: 'usb2hab50cm',
      image: '/images/usb-cable.webp',
      orderCode: '4524402',
      description: ['USB 2.0 Cable', 'Type A to Type B', 'Male to Male', '1m', 'Black'],
      manufacturer: 'StarTech.com',
      stock: '7,823 In Stock',
      delivery: 'Delivery in 2-4 business days from our UK warehouse',
      packaging: 'Each',
      priceBreaks: [
        { qty: '1+', price: '£4.49' },
        { qty: '10+', price: '£3.99' },
        { qty: '50+', price: '£3.69' },
      ],
      minQty: '1',
      multiple: '1',
      attrs: ['USB Type A', 'USB Type B', '1m', 'Black'],
    },
    {
      partNo: 'USB2HAB2M',
      productId: 'usb2hab50cm',
      image: '/images/usb-cable.webp',
      orderCode: '4524403',
      description: ['USB 2.0 Cable', 'Type A to Type B', 'Male to Male', '2m', 'Black'],
      manufacturer: 'StarTech.com',
      stock: '3,102 In Stock',
      delivery: 'Delivery in 2-4 business days from our UK warehouse',
      packaging: 'Each',
      priceBreaks: [
        { qty: '1+', price: '£5.99' },
        { qty: '10+', price: '£5.49' },
        { qty: '50+', price: '£4.99' },
      ],
      minQty: '1',
      multiple: '1',
      attrs: ['USB Type A', 'USB Type B', '2m', 'Black'],
    },
  ],
};

// ── MCWR08X4301FTL ───────────────────────────────────────────────────────────
const RESISTOR_CONFIG: PlpPageConfig = {
  searchTerm: 'MCWR08X4301FTL',
  breadcrumbs: ['Passive Components', 'Resistors', 'Chip / SMD Resistors', '0805 Resistors'],
  attrHeaders: ['Resistance', 'Resistor Case Style', 'Power Rating', 'Resistance Tolerance'],
  filters: ['Manufacturer', 'Resistance', 'Resistor Case Style', 'Power Rating', 'Resistance Tolerance', 'Mounting Type', 'Temperature Coefficient', 'Voltage Rating', 'Operating Temperature Max', 'Packaging'],
  rows: [
    {
      partNo: 'MCWR08X4301FTL',
      productId: 'mcwr08x4301ftl',
      image: '/images/resistor.jpg',
      orderCode: '2447553',
      description: ['Thick Film Resistor', '430 Ohm', '0805 [2012 Metric]', '1%', '125 mW', 'SMD'],
      manufacturer: 'Multicomp Pro',
      stock: '89,420 In Stock',
      delivery: 'Delivery in 2-4 business days from our UK warehouse',
      packaging: 'Each (Reel of 5000)',
      priceBreaks: [
        { qty: '50+', price: '£0.013' },
        { qty: '500+', price: '£0.010' },
        { qty: '2000+', price: '£0.008' },
      ],
      minQty: '50',
      multiple: '50',
      attrs: ['430Ω', '0805 [2012 Metric]', '125mW', '±1%'],
    },
    {
      partNo: 'MCWR08X4751FTL',
      productId: 'mcwr08x4301ftl',
      image: '/images/resistor.jpg',
      orderCode: '2447562',
      description: ['Thick Film Resistor', '475 Ohm', '0805 [2012 Metric]', '1%', '125 mW', 'SMD'],
      manufacturer: 'Multicomp Pro',
      stock: '64,200 In Stock',
      delivery: 'Delivery in 2-4 business days from our UK warehouse',
      packaging: 'Each (Reel of 5000)',
      priceBreaks: [
        { qty: '50+', price: '£0.013' },
        { qty: '500+', price: '£0.010' },
        { qty: '2000+', price: '£0.008' },
      ],
      minQty: '50',
      multiple: '50',
      attrs: ['475Ω', '0805 [2012 Metric]', '125mW', '±1%'],
    },
    {
      partNo: 'MCWR08X3900FTL',
      productId: 'mcwr08x4301ftl',
      image: '/images/resistor.jpg',
      orderCode: '2447547',
      description: ['Thick Film Resistor', '390 Ohm', '0805 [2012 Metric]', '1%', '125 mW', 'SMD'],
      manufacturer: 'Multicomp Pro',
      stock: '72,100 In Stock',
      delivery: 'Delivery in 2-4 business days from our UK warehouse',
      packaging: 'Each (Reel of 5000)',
      priceBreaks: [
        { qty: '50+', price: '£0.013' },
        { qty: '500+', price: '£0.010' },
        { qty: '2000+', price: '£0.008' },
      ],
      minQty: '50',
      multiple: '50',
      attrs: ['390Ω', '0805 [2012 Metric]', '125mW', '±1%'],
    },
  ],
};

// ── BM05B-ACHSS-A-GAN-ETF ────────────────────────────────────────────────────
const CONNECTOR_CONFIG: PlpPageConfig = {
  searchTerm: 'BM05B-ACHSS-A-GAN-ETF(LF)(SN)',
  breadcrumbs: ['Connectors', 'Wire-to-Board Connectors', 'JST Connectors', 'JST ACH Series'],
  attrHeaders: ['Contact Count', 'Pitch', 'Mounting', 'Series'],
  filters: ['Manufacturer', 'Contact Count', 'Pitch', 'Mounting Type', 'Series', 'Contact Material', 'Current Rating', 'Voltage Rating', 'Gender', 'Packaging'],
  rows: [
    {
      partNo: 'BM05B-ACHSS-A-GAN-ETF(LF)(SN)',
      productId: 'bm05b-achss',
      image: '/images/jst-connector.jpg',
      orderCode: '2359841',
      description: ['Male Header', '5 Contacts', '1.5mm Pitch', 'Surface Mount', 'Straight', 'ACH Series'],
      manufacturer: 'JST',
      stock: '12,340 In Stock',
      delivery: 'Delivery in 2-4 business days from our UK warehouse',
      packaging: 'Each',
      priceBreaks: [
        { qty: '1+', price: '£0.52' },
        { qty: '100+', price: '£0.44' },
        { qty: '500+', price: '£0.38' },
      ],
      minQty: '10',
      multiple: '10',
      attrs: ['5', '1.5mm', 'SMD', 'ACH'],
    },
    {
      partNo: 'BM04B-ACHSS-A-GAN-ETF(LF)(SN)',
      productId: 'bm05b-achss',
      image: '/images/jst-connector.jpg',
      orderCode: '2359840',
      description: ['Male Header', '4 Contacts', '1.5mm Pitch', 'Surface Mount', 'Straight', 'ACH Series'],
      manufacturer: 'JST',
      stock: '8,710 In Stock',
      delivery: 'Delivery in 2-4 business days from our UK warehouse',
      packaging: 'Each',
      priceBreaks: [
        { qty: '1+', price: '£0.48' },
        { qty: '100+', price: '£0.41' },
        { qty: '500+', price: '£0.35' },
      ],
      minQty: '10',
      multiple: '10',
      attrs: ['4', '1.5mm', 'SMD', 'ACH'],
    },
    {
      partNo: 'BM06B-ACHSS-A-GAN-ETF(LF)(SN)',
      productId: 'bm05b-achss',
      image: '/images/jst-connector.jpg',
      orderCode: '2359842',
      description: ['Male Header', '6 Contacts', '1.5mm Pitch', 'Surface Mount', 'Straight', 'ACH Series'],
      manufacturer: 'JST',
      stock: '9,870 In Stock',
      delivery: 'Delivery in 2-4 business days from our UK warehouse',
      packaging: 'Each',
      priceBreaks: [
        { qty: '1+', price: '£0.56' },
        { qty: '100+', price: '£0.48' },
        { qty: '500+', price: '£0.41' },
      ],
      minQty: '10',
      multiple: '10',
      attrs: ['6', '1.5mm', 'SMD', 'ACH'],
    },
  ],
};

function resolveConfig(q: string): PlpPageConfig | null {
  const u = q.toUpperCase();
  if (u.includes('USB2HAB')) return USB_CONFIG;
  if (u.includes('MCWR08X4301')) return RESISTOR_CONFIG;
  if (u.includes('BM05B')) return CONNECTOR_CONFIG;
  return null;
}

export default function ProductList() {
  const [searchParams] = useSearchParams();
  const q = searchParams.get('q') || '';
  const config = resolveConfig(q);

  return (
    <div className="min-h-screen bg-white">
      <div className="h-auto lg:h-[102px]">
        <HeaderWithSearch />
      </div>
      <main>
        {config ? (
          <Frame3WithData config={config} />
        ) : (
          <Frame3WithNavigation />
        )}
      </main>
      <Footer />

      {/* Floating Help Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-[#0072C3] hover:bg-[#036bb4] text-white rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110 z-50">
        <HelpCircle className="w-7 h-7" />
      </button>
    </div>
  );
}
