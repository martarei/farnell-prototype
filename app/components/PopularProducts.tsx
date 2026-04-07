import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star, Heart } from 'lucide-react';

const products = [
  {
    partNumber: 'ATMEGA328P-PU',
    manufacturer: 'Microchip',
    description: '8-bit Microcontroller with 32KB Flash',
    price: '2.84',
    stock: 'In Stock',
    minQty: 1,
    image: 'https://images.unsplash.com/photo-1631376604263-5d803038b389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGUEdBJTIwZGV2ZWxvcG1lbnQlMjBib2FyZHxlbnwxfHx8fDE3NzQ0NTM1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    partNumber: 'LM358P',
    manufacturer: 'Texas Instruments',
    description: 'Dual Operational Amplifier',
    price: '0.42',
    stock: 'In Stock',
    minQty: 1,
    image: 'https://images.unsplash.com/photo-1631376604263-5d803038b389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGUEdBJTIwZGV2ZWxvcG1lbnQlMjBib2FyZHxlbnwxfHx8fDE3NzQ0NTM1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    partNumber: 'BC547B',
    manufacturer: 'ON Semiconductor',
    description: 'NPN General Purpose Transistor',
    price: '0.08',
    stock: 'In Stock',
    minQty: 10,
    image: 'https://images.unsplash.com/photo-1631376604263-5d803038b389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGUEdBJTIwZGV2ZWxvcG1lbnQlMjBib2FyZHxlbnwxfHx8fDE3NzQ0NTM1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    partNumber: 'ESP32-WROOM-32',
    manufacturer: 'Espressif',
    description: 'WiFi & Bluetooth Module',
    price: '3.95',
    stock: 'In Stock',
    minQty: 1,
    image: 'https://images.unsplash.com/photo-1631376604263-5d803038b389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGUEdBJTIwZGV2ZWxvcG1lbnQlMjBib2FyZHxlbnwxfHx8fDE3NzQ0NTM1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    partNumber: 'STM32F407VGT6',
    manufacturer: 'STMicroelectronics',
    description: '32-bit ARM Cortex-M4 MCU',
    price: '8.76',
    stock: 'In Stock',
    minQty: 1,
    image: 'https://images.unsplash.com/photo-1631376604263-5d803038b389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGUEdBJTIwZGV2ZWxvcG1lbnQlMjBib2FyZHxlbnwxfHx8fDE3NzQ0NTM1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function PopularProducts() {
  return (
    <section className="bg-white">
      
    </section>
  );
}
