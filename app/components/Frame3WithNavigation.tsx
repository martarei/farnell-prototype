import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import Frame3Component from '../../imports/Frame3';

export function Frame3WithNavigation() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if the clicked element is the first product name
      const productNameElement = target.closest('[data-name="matts/plp/row/column-cell/manufacturer-part-no"]');
      if (productNameElement) {
        const textContent = productNameElement.textContent?.trim();
        // Check if it's the first product (MPS751RLRAG.)
        if (textContent === 'MPS751RLRAG.') {
          e.preventDefault();
          navigate('/product/mps751rlrag');
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [navigate]);

  return <Frame3Component />;
}
