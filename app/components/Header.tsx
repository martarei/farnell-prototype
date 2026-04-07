import { Search, ShoppingCart, User, ChevronDown, Menu, Phone, Mail, MapPin, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export function Header() {
  return (
    <header className="w-full bg-white">
      {/* Top Utility Bar */}
      <div className="border-b border-gray-200 bg-[#f8f9fa]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-between py-2 text-xs">
            <div className="flex items-center gap-6">
              <a href="#" className="flex items-center gap-1.5 text-gray-600 hover:text-[#00A859]">
                <Phone className="h-3.5 w-3.5" />
                <span>+44 (0) 113 544 9555</span>
              </a>
              <a href="#" className="flex items-center gap-1.5 text-gray-600 hover:text-[#00A859]">
                <Mail className="h-3.5 w-3.5" />
                <span>Contact Us</span>
              </a>
              <a href="#" className="flex items-center gap-1.5 text-gray-600 hover:text-[#00A859]">
                <MapPin className="h-3.5 w-3.5" />
                <span>Store Locator</span>
              </a>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-[#00A859]">Track Orders</a>
              <a href="#" className="text-gray-600 hover:text-[#00A859]">Help Centre</a>
              <a href="#" className="text-gray-600 hover:text-[#00A859]">Technical Support</a>
              <button className="flex items-center gap-1 text-gray-600 hover:text-[#00A859]">
                <Globe className="h-3.5 w-3.5" />
                <span>UK - English</span>
                <ChevronDown className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 py-4">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-[#00A859] rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 7H17M7 12H17M7 17H13" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                  <circle cx="17" cy="17" r="2" fill="white"/>
                </svg>
              </div>
              <div>
                <div className="text-[22px] font-bold leading-tight text-gray-900">TechSource</div>
                <div className="text-[9px] text-gray-500 tracking-wide">ELECTRONIC COMPONENTS</div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 flex items-center gap-2 max-w-2xl">
              <Select defaultValue="all">
                <SelectTrigger className="w-40 bg-white border-gray-300 text-sm h-11">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="semiconductors">Semiconductors</SelectItem>
                  <SelectItem value="passives">Passives</SelectItem>
                  <SelectItem value="interconnect">Interconnect</SelectItem>
                  <SelectItem value="power">Power Supplies</SelectItem>
                  <SelectItem value="tools">Tools & Test</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex-1 flex">
                <Input 
                  type="text" 
                  placeholder="Enter keyword, part number or manufacturer..." 
                  className="rounded-r-none border-r-0 h-11 text-sm"
                />
                <Button className="rounded-l-none bg-[#00A859] hover:bg-[#008f4a] h-11 px-6">
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-5">
              <button className="flex items-center gap-2.5 text-sm hover:text-[#00A859] transition">
                <User className="h-5 w-5 text-gray-700" />
                <div className="text-left">
                  <div className="text-[10px] text-gray-500">Hello, Sign In</div>
                  <div className="font-semibold text-gray-900 flex items-center gap-1">
                    My Account
                    <ChevronDown className="h-3 w-3" />
                  </div>
                </div>
              </button>
              
              <div className="h-8 w-px bg-gray-300"></div>
              
              <button className="flex items-center gap-2.5 text-sm hover:text-[#00A859] transition relative">
                <div className="relative">
                  <ShoppingCart className="h-6 w-6 text-gray-700" />
                  <span className="absolute -top-2 -right-2 bg-[#00A859] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span>
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-gray-500">Basket</div>
                  <div className="font-semibold text-gray-900">£247.85</div>
                </div>
              </button>

              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Ex VAT</span>
                <label className="relative inline-block w-11 h-6 cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <span className="absolute inset-0 bg-gray-300 rounded-full peer-checked:bg-[#00A859] transition"></span>
                  <span className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition peer-checked:translate-x-5 shadow"></span>
                </label>
                <span className="text-xs text-gray-500">Inc VAT</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-[#2c2c2c] text-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <nav className="flex items-center gap-1 text-sm">
            <button className="flex items-center gap-1.5 px-4 py-3 hover:bg-[#3c3c3c] transition">
              <Menu className="h-4 w-4" />
              <span className="font-medium">All Products</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <button className="flex items-center gap-1.5 px-4 py-3 hover:bg-[#3c3c3c] transition">
              <span>Manufacturers</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <button className="flex items-center gap-1.5 px-4 py-3 hover:bg-[#3c3c3c] transition">
              <span>Development Kits</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <a href="#" className="px-4 py-3 hover:bg-[#3c3c3c] transition">New Products</a>
            <a href="#" className="px-4 py-3 hover:bg-[#3c3c3c] transition">Offers</a>
            <a href="#" className="px-4 py-3 hover:bg-[#3c3c3c] transition">Technical Resources</a>
            <div className="ml-auto flex items-center gap-1">
              <a href="#" className="px-4 py-3 hover:bg-[#3c3c3c] transition">BOM Manager</a>
              <button className="flex items-center gap-1.5 px-4 py-3 hover:bg-[#3c3c3c] transition">
                <span>Tools & Services</span>
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
