import { useState } from 'react';

export interface PLPProduct {
  partNo: string;
  orderCode: string;
  description: string[];
  manufacturer: string;
  stock: number;
  delivery: string;
  packaging: string;
  priceBreaks: Array<{ qty: string; price: string }>;
  priceEa: string;
  minOrder: number;
  multiple: number;
  attrs: string[]; // exactly 4 extended attributes
}

export interface PLPConfig {
  searchTerm: string;
  breadcrumbs: string[]; // categories between Home and Results
  attrHeaders: string[]; // exactly 4 extended column headers
  products: PLPProduct[];
}

// ── USB2HAB50CM ──────────────────────────────────────────────────────────────
export const USB_CONFIG: PLPConfig = {
  searchTerm: 'USB2HAB50CM',
  breadcrumbs: ['Cables & Connectivity', 'USB Cables', 'USB 2.0 Cables'],
  attrHeaders: ['Connector A', 'Connector B', 'Cable Length', 'Colour'],
  products: [
    {
      partNo: 'USB2HAB50CM',
      orderCode: '4524401',
      description: ['USB 2.0 Cable', 'Type A to Type B', 'Male to Male', '0.5m', 'Black'],
      manufacturer: 'StarTech.com',
      stock: 4521,
      delivery: 'Delivery in 2-4 business days from our UK warehouse',
      packaging: 'Each',
      priceBreaks: [
        { qty: '1 +', price: '£3.99' },
        { qty: '10 +', price: '£3.59' },
        { qty: '50 +', price: '£3.29' },
      ],
      priceEa: '£3.99',
      minOrder: 1,
      multiple: 1,
      attrs: ['USB Type A', 'USB Type B', '0.5m', 'Black'],
    },
    {
      partNo: 'USB2HAB1M',
      orderCode: '4524402',
      description: ['USB 2.0 Cable', 'Type A to Type B', 'Male to Male', '1m', 'Black'],
      manufacturer: 'StarTech.com',
      stock: 7823,
      delivery: 'Delivery in 2-4 business days from our UK warehouse',
      packaging: 'Each',
      priceBreaks: [
        { qty: '1 +', price: '£4.49' },
        { qty: '10 +', price: '£3.99' },
        { qty: '50 +', price: '£3.69' },
      ],
      priceEa: '£4.49',
      minOrder: 1,
      multiple: 1,
      attrs: ['USB Type A', 'USB Type B', '1m', 'Black'],
    },
    {
      partNo: 'USB2HAB2M',
      orderCode: '4524403',
      description: ['USB 2.0 Cable', 'Type A to Type B', 'Male to Male', '2m', 'Black'],
      manufacturer: 'StarTech.com',
      stock: 3102,
      delivery: 'Delivery in 2-4 business days from our UK warehouse',
      packaging: 'Each',
      priceBreaks: [
        { qty: '1 +', price: '£5.99' },
        { qty: '10 +', price: '£5.49' },
        { qty: '50 +', price: '£4.99' },
      ],
      priceEa: '£5.99',
      minOrder: 1,
      multiple: 1,
      attrs: ['USB Type A', 'USB Type B', '2m', 'Black'],
    },
  ],
};

// ── MCWR08X4301FTL ───────────────────────────────────────────────────────────
export const RESISTOR_CONFIG: PLPConfig = {
  searchTerm: 'MCWR08X4301FTL',
  breadcrumbs: ['Passive Components', 'Resistors', 'Chip / SMD Resistors'],
  attrHeaders: ['Resistance', 'Resistor Case Style', 'Power Rating', 'Resistance Tolerance'],
  products: [
    {
      partNo: 'MCWR08X4301FTL',
      orderCode: '2447553',
      description: ['Thick Film Resistor', '430 Ohm', '0805 [2012 Metric]', '1%', '125 mW', 'SMD'],
      manufacturer: 'Multicomp Pro',
      stock: 89420,
      delivery: 'Delivery in 2-4 business days from our UK warehouse',
      packaging: 'Each (Reel of 5000)',
      priceBreaks: [
        { qty: '50 +', price: '£0.013' },
        { qty: '500 +', price: '£0.010' },
        { qty: '2000 +', price: '£0.008' },
      ],
      priceEa: '£0.013',
      minOrder: 50,
      multiple: 50,
      attrs: ['430Ω', '0805 [2012 Metric]', '125mW', '±1%'],
    },
    {
      partNo: 'MCWR08X4751FTL',
      orderCode: '2447562',
      description: ['Thick Film Resistor', '475 Ohm', '0805 [2012 Metric]', '1%', '125 mW', 'SMD'],
      manufacturer: 'Multicomp Pro',
      stock: 64200,
      delivery: 'Delivery in 2-4 business days from our UK warehouse',
      packaging: 'Each (Reel of 5000)',
      priceBreaks: [
        { qty: '50 +', price: '£0.013' },
        { qty: '500 +', price: '£0.010' },
        { qty: '2000 +', price: '£0.008' },
      ],
      priceEa: '£0.013',
      minOrder: 50,
      multiple: 50,
      attrs: ['475Ω', '0805 [2012 Metric]', '125mW', '±1%'],
    },
    {
      partNo: 'MCWR08X3900FTL',
      orderCode: '2447547',
      description: ['Thick Film Resistor', '390 Ohm', '0805 [2012 Metric]', '1%', '125 mW', 'SMD'],
      manufacturer: 'Multicomp Pro',
      stock: 72100,
      delivery: 'Delivery in 2-4 business days from our UK warehouse',
      packaging: 'Each (Reel of 5000)',
      priceBreaks: [
        { qty: '50 +', price: '£0.013' },
        { qty: '500 +', price: '£0.010' },
        { qty: '2000 +', price: '£0.008' },
      ],
      priceEa: '£0.013',
      minOrder: 50,
      multiple: 50,
      attrs: ['390Ω', '0805 [2012 Metric]', '125mW', '±1%'],
    },
  ],
};

// ── BM05B-ACHSS-A-GAN-ETF ────────────────────────────────────────────────────
export const CONNECTOR_CONFIG: PLPConfig = {
  searchTerm: 'BM05B-ACHSS-A-GAN-ETF(LF)(SN)',
  breadcrumbs: ['Connectors', 'Wire-to-Board Connectors', 'JST Connectors'],
  attrHeaders: ['Contact Count', 'Pitch', 'Mounting', 'Series'],
  products: [
    {
      partNo: 'BM05B-ACHSS-A-GAN-ETF(LF)(SN)',
      orderCode: '2359841',
      description: ['Male Header', '5 Contacts', '1.5mm Pitch', 'Surface Mount', 'Straight', 'ACH Series'],
      manufacturer: 'JST',
      stock: 12340,
      delivery: 'Delivery in 2-4 business days from our UK warehouse',
      packaging: 'Each',
      priceBreaks: [
        { qty: '1 +', price: '£0.52' },
        { qty: '100 +', price: '£0.44' },
        { qty: '500 +', price: '£0.38' },
      ],
      priceEa: '£0.52',
      minOrder: 10,
      multiple: 10,
      attrs: ['5', '1.5mm', 'SMD', 'ACH'],
    },
    {
      partNo: 'BM04B-ACHSS-A-GAN-ETF(LF)(SN)',
      orderCode: '2359840',
      description: ['Male Header', '4 Contacts', '1.5mm Pitch', 'Surface Mount', 'Straight', 'ACH Series'],
      manufacturer: 'JST',
      stock: 8710,
      delivery: 'Delivery in 2-4 business days from our UK warehouse',
      packaging: 'Each',
      priceBreaks: [
        { qty: '1 +', price: '£0.48' },
        { qty: '100 +', price: '£0.41' },
        { qty: '500 +', price: '£0.35' },
      ],
      priceEa: '£0.48',
      minOrder: 10,
      multiple: 10,
      attrs: ['4', '1.5mm', 'SMD', 'ACH'],
    },
    {
      partNo: 'BM06B-ACHSS-A-GAN-ETF(LF)(SN)',
      orderCode: '2359842',
      description: ['Male Header', '6 Contacts', '1.5mm Pitch', 'Surface Mount', 'Straight', 'ACH Series'],
      manufacturer: 'JST',
      stock: 9870,
      delivery: 'Delivery in 2-4 business days from our UK warehouse',
      packaging: 'Each',
      priceBreaks: [
        { qty: '1 +', price: '£0.56' },
        { qty: '100 +', price: '£0.48' },
        { qty: '500 +', price: '£0.41' },
      ],
      priceEa: '£0.56',
      minOrder: 10,
      multiple: 10,
      attrs: ['6', '1.5mm', 'SMD', 'ACH'],
    },
  ],
};

// ── Sub-components ────────────────────────────────────────────────────────────

function ColDivider({ white }: { white?: boolean }) {
  return (
    <div className={`${white ? 'bg-white' : 'bg-[#e0e0e0]'} self-stretch shrink-0 w-px`} />
  );
}

function HeaderCell({ label }: { label: string }) {
  return (
    <div className="bg-[#e0e0e0] h-[84px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start justify-between p-[8px] relative size-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-pre-wrap">{label}</p>
      </div>
    </div>
  );
}

function StockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
      <circle cx="10" cy="10" r="9" fill="#2A8442" />
      <path d="M5.5 10.5L8.5 13.5L14.5 7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckboxIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="absolute block size-full">
      <rect x="0.75" y="0.75" width="13.5" height="13.5" rx="0.75" stroke="#525252" strokeWidth="1.5" />
    </svg>
  );
}

function ProductRow({ product }: { product: PLPProduct }) {
  const [qty, setQty] = useState(product.minOrder);

  const decrement = () => setQty(q => Math.max(product.minOrder, q - product.multiple));
  const increment = () => setQty(q => q + product.multiple);

  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full border-b border-[#e0e0e0]">
      {/* Col 01: Compare */}
      <div className="content-stretch flex flex-col items-center justify-center relative self-stretch shrink-0 w-[71px]">
        <div className="relative shrink-0 size-[20px]">
          <CheckboxIcon />
        </div>
      </div>
      <ColDivider />

      {/* Col 02: Manufacturer Part No + Image */}
      <div className="content-stretch flex flex-col items-start px-[8px] py-[8px] relative shrink-0 w-[160px]">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#0072c3] text-[12px] whitespace-nowrap mb-[8px]">{product.partNo}</p>
        <div className="bg-[#f4f4f4] border border-[#e0e0e0] flex items-center justify-center relative shrink-0 w-full rounded-[2px]" style={{ aspectRatio: '326/222' }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="opacity-30">
            <rect x="2" y="6" width="28" height="20" rx="2" stroke="#525252" strokeWidth="1.5" fill="none" />
            <circle cx="11" cy="13" r="3" stroke="#525252" strokeWidth="1.5" fill="none" />
            <path d="M2 22L9 16L14 21L20 14L30 22" stroke="#525252" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
          </svg>
        </div>
      </div>
      <ColDivider />

      {/* Col 03: Order Code */}
      <div className="content-stretch flex flex-col items-start px-[8px] py-[8px] relative shrink-0 w-[92px]">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#161616] text-[12px] w-full mb-[8px]">{product.orderCode}</p>
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#0072c3] text-[12px] mb-[4px]">Data Sheet</p>
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#525252] text-[12px]">RoHS</p>
      </div>
      <ColDivider />

      {/* Col 04: Description / Manufacturer */}
      <div className="content-stretch flex flex-col items-start px-[8px] py-[8px] relative shrink-0 w-[224px]">
        <ul className="list-disc pl-[16px] mb-[8px]">
          {product.description.map((item, i) => (
            <li key={i} className="mb-0">
              <span className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic text-[12px] text-[#0072c3]">{item}</span>
            </li>
          ))}
        </ul>
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#161616] text-[12px] w-full">{product.manufacturer}</p>
      </div>
      <ColDivider />

      {/* Col 05: Availability */}
      <div className="content-stretch flex flex-col items-start px-[8px] py-[8px] relative shrink-0 w-[125px]">
        <div className="mb-[8px]"><StockIcon /></div>
        <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#2a8442] text-[12px] mb-[8px]">{product.stock.toLocaleString('en-GB')} In Stock</p>
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#525252] text-[12px]">{product.delivery}</p>
      </div>
      <ColDivider />

      {/* Col 06: Price For / Packaging */}
      <div className="content-stretch flex flex-col items-start px-[8px] py-[8px] relative shrink-0 w-[169px]">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#161616] text-[12px] w-full mb-[8px]">{product.packaging}</p>
        <div className="content-stretch flex flex-col gap-[4px] w-full">
          {product.priceBreaks.map((pb, i) => (
            <div key={i} className="content-stretch flex justify-between w-full">
              <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] text-[#525252] text-[12px]">{pb.qty}</p>
              <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] text-[#161616] text-[12px]">{pb.price}</p>
            </div>
          ))}
        </div>
      </div>
      <ColDivider />

      {/* Col 07: Price (ex VAT) */}
      <div className="content-stretch flex flex-col items-start px-[8px] py-[8px] relative shrink-0 w-[118px]">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#161616] text-[12px] mb-[8px]">{product.priceEa} ea</p>
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] relative shrink-0 text-[#6f6f6f] text-[12px] underline [text-decoration-skip-ink:none] decoration-solid text-right w-full">More Pricing...</p>
      </div>
      <ColDivider />

      {/* Col 08: Quantity + Add to Basket */}
      <div className="content-stretch flex flex-col items-start px-[8px] py-[8px] relative shrink-0 w-[140px]">
        <div className="border border-[#8d8d8d] flex items-stretch w-full mb-[8px]">
          <button
            onClick={decrement}
            className="px-[8px] py-[5px] text-[#161616] font-['Apercu_Avnet:Regular',sans-serif] text-[12px] border-r border-[#8d8d8d] leading-none"
          >−</button>
          <input
            type="text"
            value={qty}
            onChange={e => {
              const v = parseInt(e.target.value);
              if (!isNaN(v) && v > 0) setQty(v);
            }}
            className="flex-1 text-center font-['Apercu_Avnet:Regular',sans-serif] text-[12px] text-[#161616] py-[5px] outline-none min-w-0"
          />
          <button
            onClick={increment}
            className="px-[8px] py-[5px] text-[#161616] font-['Apercu_Avnet:Regular',sans-serif] text-[12px] border-l border-[#8d8d8d] leading-none"
          >+</button>
        </div>
        <button className="bg-[#0072c3] text-white font-['Apercu_Avnet:Regular',sans-serif] text-[12px] leading-[15px] py-[8px] w-full rounded-[4px] mb-[8px]">
          Add to Basket
        </button>
        <div className="content-stretch flex gap-[3px] w-full font-['Apercu_Avnet:Regular',sans-serif] text-[#525252] text-[12px] leading-[15px]">
          <p className="whitespace-nowrap">Min: {product.minOrder}</p>
          <p className="whitespace-nowrap">/</p>
          <p>Mult: {product.multiple}</p>
        </div>
      </div>
      <ColDivider />

      {/* Cols 09–12: Extended attributes */}
      {product.attrs.map((attr, i) => (
        <>
          <div key={`a${i}`} className="flex-[1_0_0] min-h-px min-w-px relative self-stretch">
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col items-start justify-center px-[8px] relative size-full">
                <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">{attr}</p>
              </div>
            </div>
          </div>
          {i < product.attrs.length - 1 && <ColDivider key={`d${i}`} />}
        </>
      ))}
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────

export default function GenericProductList({ config }: { config: PLPConfig }) {
  const { searchTerm, breadcrumbs, attrHeaders, products } = config;

  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">

      {/* Breadcrumb */}
      <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-[1506px]">
        <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0">
          {/* Home */}
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
            <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0072c3] text-[13px] whitespace-nowrap">Home</p>
            <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">/</p>
          </div>
          {breadcrumbs.map((crumb, i) => (
            <div key={i} className="content-stretch flex gap-[8px] items-start relative shrink-0">
              <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0072c3] text-[13px] whitespace-nowrap">{crumb}</p>
              <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">/</p>
            </div>
          ))}
          {/* Results (current page, not a link) */}
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
            <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">Results</p>
          </div>
        </div>
      </div>

      {/* Results count + filter checkboxes */}
      <div className="content-stretch flex flex-col gap-[16px] items-start mt-[30px] relative shrink-0 w-[1506px]">
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[0] min-h-px min-w-px not-italic relative text-[#161616] text-[20px] tracking-[-0.3px]">
            <span className="leading-[26px] text-[#2a8442]">{products.length} </span>
            <span className="leading-[26px]">Products Found for &ldquo;{searchTerm}&rdquo;</span>
          </p>
        </div>
        {/* Filter toggles bar */}
        <div className="content-start flex flex-wrap gap-[8px_24px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
            <div className="bg-[#8d8d8d] content-stretch flex items-start overflow-clip p-[3px] relative rounded-[12px] shrink-0 w-[32px]">
              <div className="bg-white rounded-[20px] shrink-0 size-[10px]" />
            </div>
            <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">Expand Filters</p>
          </div>
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
            <div className="relative shrink-0 size-[20px]">
              <svg className="absolute block size-full" fill="none" viewBox="0 0 15 15">
                <rect x="0.75" y="0.75" width="13.5" height="13.5" rx="0.75" stroke="#161616" strokeWidth="1.5" />
              </svg>
            </div>
            <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">In Stock <span className="text-[#525252]">({products.reduce((s, p) => s + p.stock, 0).toLocaleString('en-GB')})</span></p>
          </div>
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[223px]">
            <div className="relative shrink-0 size-[20px]">
              <svg className="absolute block size-full" fill="none" viewBox="0 0 15 15">
                <rect x="0.75" y="0.75" width="13.5" height="13.5" rx="0.75" stroke="#161616" strokeWidth="1.5" />
              </svg>
            </div>
            <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">No Delivery Surcharges</p>
          </div>
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[223px]">
            <div className="relative shrink-0 size-[20px]">
              <svg className="absolute block size-full" fill="none" viewBox="0 0 15 15">
                <rect x="0.75" y="0.75" width="13.5" height="13.5" rx="0.75" stroke="#161616" strokeWidth="1.5" />
              </svg>
            </div>
            <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">Suitable For New Design</p>
          </div>
        </div>
      </div>

      {/* Product table */}
      <div className="content-stretch flex flex-col gap-[30px] items-start mt-[30px] relative shrink-0 w-full">
        {/* "Search within" bar */}
        <div className="content-stretch flex items-start justify-end relative shrink-0 w-[1506px]">
          <div className="bg-white flex-none h-[32px] w-[224px] relative border border-[#8d8d8d]">
            <p className="absolute font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] left-[14px] not-italic right-[35px] text-[#a8a8a8] text-[13px] top-[calc(50%-10px)]">Search Within...</p>
          </div>
          <div className="bg-[#0072c3] shrink-0 size-[32px]" />
        </div>

        {/* Table */}
        <div className="bg-white content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[1505px]">

          {/* Header row */}
          <div className="content-stretch flex items-start pb-px relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[71px]">
              <HeaderCell label="Compare" />
            </div>
            <ColDivider white />
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[160px]">
              <HeaderCell label={"Manufacturer \nPart No"} />
            </div>
            <ColDivider white />
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[92px]">
              <HeaderCell label="Order Code" />
            </div>
            <ColDivider white />
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[224px]">
              <HeaderCell label="Description / Manufacturer" />
            </div>
            <ColDivider white />
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[125px]">
              <HeaderCell label="Availability" />
            </div>
            <ColDivider white />
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[169px]">
              <HeaderCell label="Price For" />
            </div>
            <ColDivider white />
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[118px]">
              <HeaderCell label="Price (ex VAT)" />
            </div>
            <ColDivider white />
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]">
              <HeaderCell label="Quantity" />
            </div>
            <ColDivider white />
            {attrHeaders.map((h, i) => (
              <>
                <div key={`hh${i}`} className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                  <HeaderCell label={h} />
                </div>
                {i < attrHeaders.length - 1 && <ColDivider key={`hd${i}`} white />}
              </>
            ))}
          </div>

          {/* Data rows */}
          {products.map((product, i) => (
            <ProductRow key={i} product={product} />
          ))}

          {/* Pagination bar */}
          <div className="bg-[#f4f4f4] h-[48px] relative shrink-0 w-full border-t border-[#e0e0e0]">
            <div className="flex items-center h-full px-[16px]">
              <p className="font-['Apercu_Avnet:Regular',sans-serif] text-[13px] text-[#525252] leading-[18px]">
                1–{products.length} of {products.length} items
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
