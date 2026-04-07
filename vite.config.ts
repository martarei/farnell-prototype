import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import type { Plugin } from 'vite'

// Resolves Figma Make's figma:asset/... imports to real or placeholder images
function figmaAssetPlugin(): Plugin {
  const PLACEHOLDER =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='

  // Map figma asset hashes to local public image paths
  const ASSET_MAP: Record<string, string> = {
    // MPS751RLRAG - main product image and gallery
    '580e8f84889cd96b874412abc16381ee0ab5f6d6': '/images/transistor.jpg',
    '194cb70d43678ba2df1d4092d674b9559a965000': '/images/transistor.jpg',
    // Compatible parts thumbnails
    '60524fa9953542f14535850be50bb6b44de5e5d3': '/images/mps651.jpg',   // MPS651RLRAG - NPN TO-92
    'f295eeeeb153879270180aac34b39c0931487a8f': '/images/2n2907.jpg',   // 2N2907AG - PNP TO-18 metal can
    'a968229396c3e4ad1ace3a253fde9a678c4b6f7e': '/images/mps651.jpg',   // BC327-40 - PNP TO-92
    '4997279be9063caf461174a0a1b425c040dc337e': '/images/mps651.jpg',   // MPSA92RL1G - PNP TO-92
    '7c63fd46a52589220e00f482dc90611473b06506': '/images/mps651.jpg',   // 2N3906 - PNP TO-92
    // Alternative products comparison section
    '285fa9ec9a5214e5fa157a27c94578ee88cb34ed': '/images/transistor.jpg',    // currently viewing
    '7a65f262fa51fd227a6c6135a7028630266cae6d': '/images/to92_a.jpg',        // alternative 1
    '446d9059a446e1dba059a04f333833028aaa4e7a': '/images/to92_b.jpg',        // alternative 2
    '5bd7f2f2ee8de3c2950f9c822d8109d4c616aa18': '/images/2n2907.jpg',        // alternative 3
    'ac74f6197f2cef6102874fd9c0e6f829c8a1ad97': '/images/to18_white.jpg',    // alternative 4
  }

  return {
    name: 'figma-asset',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) return '\0' + id
    },
    load(id) {
      if (id.startsWith('\0figma:asset/')) {
        const hash = id.replace('\0figma:asset/', '').replace('.png', '')
        const mapped = ASSET_MAP[hash]
        return `export default "${mapped ?? PLACEHOLDER}"`
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetPlugin(),
    react(),
    tailwindcss(),
  ],
})
