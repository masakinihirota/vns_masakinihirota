import Footer from '@/components/ui/Footer';
import Link from 'next/link';

// import Footer from "@/components/nav/Footer"
// import TopNav from "@/components/nav/TopNav"

// 動的レンダリングを強制します。
export const dynamic = 'force-dynamic';

export default async function Index() {
  return (
    // 全体を縦にならべている、幅いっぱいに並べている
    // <div className="flex flex-col items-center w-full">
    <div>
      <Link className="hover:bg-gray-400" href="/pricing">
        Pricing
      </Link>
      <br />1
      <br />
      {/* <TopNav /> */}
      {/* メイン部分 */}
      {/* <div className="flex flex-col items-center w-full max-w-4xl p-3 text-xl text-foreground">
        <h1>Welcome to vns_masakinihirota</h1>


      </div>
      <div className="flex flex-col gap-2">
        <Link href="./examples/client-component">Client Component Example</Link>
        <Link href="./examples/route-handler">Route Handler Example</Link>
        <Link href="./examples/server-action">Server Action Example</Link>
        <Link href="./examples/server-component">Server Component Example</Link>
      </div> */}
    </div>
  );
}
