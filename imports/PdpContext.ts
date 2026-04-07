import { createContext, useContext } from 'react';

export interface PdpPriceBreak {
  quantity: string;
  price: string;
}

export interface PdpOrderCode {
  icon: 'reel' | 'scissors';
  label: string;
  code: string;
}

export interface PdpProduct {
  partNo: string;
  description: string;
  manufacturer: string;
  orderCode: string;
  orderCodes?: PdpOrderCode[];
  unitPrice: number;
  priceBreaks: PdpPriceBreak[];
  breadcrumbs: string[];
  image?: string; // URL to product image, falls back to transistor photo
}

export const PdpContext = createContext<PdpProduct | null>(null);

export function usePdpContext(): PdpProduct | null {
  return useContext(PdpContext);
}
