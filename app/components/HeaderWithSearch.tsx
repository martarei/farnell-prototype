import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import Header from '../../imports/Header-2-24763';
import SearchOverlay from '../../imports/Search';

export function HeaderWithSearch() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  // Add click handler to search bar and logo
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if click is on logo
      const logo = target.closest('[data-name="farnell logo"]');
      if (logo) {
        navigate('/');
        return;
      }
      
      // Check if click is on search bar
      const searchBar = target.closest('[data-name="search-bar"]') || target.closest('[data-name="Search-bar"]') || target.closest('[data-name="search"]');
      if (searchBar) {
        setIsSearchOpen(true);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [navigate]);

  // Auto-focus the input when search overlay opens
  useEffect(() => {
    if (isSearchOpen) {
      // Wait for the overlay to render
      setTimeout(() => {
        const input = document.querySelector('[data-name="search"] input') as HTMLInputElement;
        if (input) {
          input.focus();
        }
      }, 100);
    }
  }, [isSearchOpen]);

  // Close search when clicking close button
  useEffect(() => {
    if (!isSearchOpen) return;

    const handleClose = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if click is on close button
      const closeButton = target.closest('[data-name="close"]');
      if (closeButton) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('click', handleClose);
    return () => document.removeEventListener('click', handleClose);
  }, [isSearchOpen]);

  // Handle Enter key press in search
  useEffect(() => {
    if (!isSearchOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        const target = e.target as HTMLElement;
        if (target.tagName === 'INPUT') {
          const inputValue = (target as HTMLInputElement).value.trim();
          if (inputValue) {
            setIsSearchOpen(false);
            navigate('/search?q=' + encodeURIComponent(inputValue));
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, navigate]);

  // Prevent body scroll when search is open
  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSearchOpen]);

  return (
    <>
      <Header />
      
      {/* Search Overlay */}
      {isSearchOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-[99] bg-black/40"
            onClick={() => setIsSearchOpen(false)}
          />
          
          {/* White content box */}
          <div className="fixed top-0 left-0 right-0 z-[100] bg-white pb-[538px]">
            <SearchOverlay />
          </div>
        </>
      )}
    </>
  );
}