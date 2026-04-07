import { ProductListContext, PlpPageConfig } from '../../imports/Frame3';
import { Frame3WithNavigation } from './Frame3WithNavigation';

export function Frame3WithData({ config }: { config: PlpPageConfig }) {
  return (
    <ProductListContext.Provider value={config}>
      <Frame3WithNavigation />
    </ProductListContext.Provider>
  );
}
