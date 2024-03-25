import Footer from '@/components/ui/Footer';
import Counter from '@/app/sample/component';
import ClientComponent from '@/app/sample/page';
import Link from 'next/link';
import Page from '@/app/sample_rsc/page';

// import Footer from "@/components/nav/Footer"
// import TopNav from "@/components/nav/TopNav"

// 動的レンダリングを強制します。
export const dynamic = 'force-dynamic';

export default async function Index() {
  const blogId = '123';
  return (
    // 全体を縦にならべている、幅いっぱいに並べている
    // <div className="flex flex-col items-center w-full">
    <div>
      <Link className="hover:bg-gray-400" href="/pricing">
        Pricing
      </Link>
      <br />
      <h1>Welcome to vns_masakinihirota</h1>
      <br />
      テストとストーリーファイル 4種類
      <ClientComponent />
      <Counter />
      <Link href={`/sample/${blogId}`}>Blogページ</Link>
      <br />
      <Page />
      {/* <TopNav /> */}
      {/* メイン部分 */}
      {/* <div className="flex flex-col items-center w-full max-w-4xl p-3 text-xl text-foreground">


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
