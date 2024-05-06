import dynamic from 'next/dynamic';

const MyComponentNoSSR = dynamic(() => import('./tree'), {
  ssr: false,
});

const Page = () => <MyComponentNoSSR />;
export default Page;
