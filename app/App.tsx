import { RouterProvider } from 'react-router';
import { Suspense } from 'react';
import { router } from './routes';

function App() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-[#0072C3] border-r-transparent"></div>
          <p className="mt-4 text-[#525252] font-['Apercu_Avnet:Regular',sans-serif]">Loading...</p>
        </div>
      </div>
    }>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;