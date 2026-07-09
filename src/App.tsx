/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Catalog } from './components/Catalog';
import { B2BPortal } from './components/B2BPortal';
import { Legacy } from './components/Legacy';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-500 selection:text-white">
      <Header />
      <Hero />
      <div className="flex flex-col lg:flex-row p-6 lg:p-10 gap-8 bg-white shrink-0">
        <Catalog />
        <B2BPortal />
      </div>
      <Legacy />
    </div>
  );
}
