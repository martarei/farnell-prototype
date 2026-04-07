// Optimized Buybox Component - consolidates repetitive price table rows
import svgPaths from "../svg-wt8pemywxi";
import { usePdpContext } from '../PdpContext';

interface PriceRowProps {
  quantity: string;
  price: string;
}

function PriceTableRow({ quantity, price }: PriceRowProps) {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-quantity">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[4px] relative shrink-0 w-full" data-name="item-quantity">
          <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#161616] text-[16px] text-center whitespace-nowrap">{quantity}</p>
        </div>
        <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-price">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[4px] relative shrink-0 w-full" data-name="item-price">
          <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#161616] text-[16px] text-center whitespace-nowrap">{price}</p>
        </div>
        <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
      </div>
    </div>
  );
}

function PriceTableHeader() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices/header-row">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
        <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[4px] relative shrink-0 w-full" data-name="header-item">
          <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#525252] text-[16px] text-center whitespace-nowrap">Quantity</p>
        </div>
        <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
        <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[4px] relative shrink-0 w-full" data-name="header-item">
          <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#525252] text-[16px] text-center whitespace-nowrap">Price per unit</p>
        </div>
        <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
      </div>
    </div>
  );
}

export function Prices() {
  const ctx = usePdpContext();
  const priceData = ctx?.priceBreaks ?? [
    { quantity: "5", price: "£6.334" },
    { quantity: "10", price: "£6.003" },
    { quantity: "25", price: "£5.837" },
    { quantity: "50", price: "£5.671" },
    { quantity: "100+", price: "£5.588" }
  ];

  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start pt-[8px] relative shrink-0 w-full" data-name="prices">
      <PriceTableHeader />
      {priceData.map((row, index) => (
        <PriceTableRow key={index} quantity={row.quantity} price={row.price} />
      ))}
    </div>
  );
}

function PackagingLabelPriceTable() {
  return (
    <div className="content-stretch flex font-['Apercu_Avnet:Regular',sans-serif] gap-[8px] items-start leading-[16px] not-italic relative shrink-0 text-[13px] w-full whitespace-nowrap" data-name="packaging-label/price-table">
      <p className="relative shrink-0 text-[#525252]">Packaging: </p>
      <p className="relative shrink-0 text-[#161616]">Each</p>
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex h-[48px] items-center overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px pl-[16px] pr-[8px] py-[12px] relative" data-name="Field">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px]">5</p>
      </div>
    </div>
  );
}

function InputButtons() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start relative rounded-[4px] shrink-0 w-[48px]" data-name="Input + buttons">
      <Input />
    </div>
  );
}

function BottomBorder() {
  return <div className="bg-[#8d8d8d] h-px shrink-0 w-full" data-name="bottom-border" />;
}

function InputButtonsBorder() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[48px]" data-name="Input + buttons + border">
      <InputButtons />
      <BottomBorder />
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="absolute inset-[6.25%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
            <path clipRule="evenodd" d={svgPaths.p1835840} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[19px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Add</p>
    </div>
  );
}

function InnerFrame4() {
  return (
    <div className="h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Inner Frame">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] relative size-full">
          <Icon2 />
          <Label2 />
        </div>
      </div>
    </div>
  );
}

function RowInputAdd() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="row-input-add">
      <InputButtonsBorder />
      <div className="bg-[#2a8442] h-[48px] relative rounded-[4px] shrink-0 w-[144px]" data-name="matts/button">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
          <InnerFrame4 />
        </div>
      </div>
    </div>
  );
}

function Min() {
  return (
    <div className="content-stretch flex font-['Apercu_Avnet:Regular',sans-serif] gap-[8px] items-start leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] w-full whitespace-nowrap" data-name="min">
      <p className="relative shrink-0">Min: </p>
      <p className="relative shrink-0">5</p>
    </div>
  );
}

function Mult() {
  return (
    <div className="content-stretch flex font-['Apercu_Avnet:Regular',sans-serif] gap-[8px] items-start leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] w-full whitespace-nowrap" data-name="mult">
      <p className="relative shrink-0">Mult: </p>
      <p className="relative shrink-0">5</p>
    </div>
  );
}

function MinMult() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="min-mult">
      <Min />
      <Mult />
    </div>
  );
}

function Vat() {
  return (
    <div className="content-stretch flex gap-[4px] items-baseline relative shrink-0" data-name="vat">
      <div className="flex flex-col font-['Apercu_Avnet:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[13px] text-right">
        <p className="leading-[16px] whitespace-nowrap">(ex VAT)</p>
      </div>
    </div>
  );
}

function PriceVat() {
  return (
    <div className="content-stretch flex gap-[4px] items-baseline relative shrink-0" data-name="price+vat">
      <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#2a8442] text-[20px] tracking-[-0.3px] whitespace-nowrap">£2.00</p>
      <Vat />
    </div>
  );
}

function BuyboxStickyTop() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start pb-[32px] relative shrink-0 w-full" data-name="buybox-sticky-top">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full\" data-name=\"matts/pdp/top/purchase-box/messaging+table-quantity+prices\">
        <PackagingLabelPriceTable />
        <Prices />
      </div>
      <div className="content-stretch flex flex-col gap-[8px] h-[96px] items-start pt-[8px] relative shrink-0 w-full" data-name="button-bar">
        <div className="content-stretch flex font-['Apercu_Avnet:Regular',sans-serif] gap-[8px] items-start leading-[16px] not-italic relative shrink-0 text-[13px] w-full whitespace-nowrap" data-name="matts/pdp/top/purchase-box/price+quantity+add/price-for-each-supplied">
          <p className="relative shrink-0 text-[#525252]">Price for: </p>
          <p className="relative shrink-0 text-[#161616]">Each</p>
        </div>
        <RowInputAdd />
        <MinMult />
      </div>
      <PriceVat />
    </div>
  );
}

export default function Buybox() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[344px]" data-name="buybox">
      <BuyboxStickyTop />
    </div>
  );
}
