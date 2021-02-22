import { NotionRenderer, BlockMapType } from 'react-notion';
// import Head from "next/head";
// import Link from "next/link";
import fetch from 'node-fetch';

export const getStaticProps = async () => {
  const main = 'https://notion.ctbw.workers.dev/v1/page/08804191115447ce8532a9d67a5ee397';
  const data = await fetch(main, {
    method: 'get',
    headers: {
      Authorization: `Bearer 44d8782f3fcafa2f206a09b525535711f4ed3b50afbe6a4deb358f6333c8ef8e90a8bc485e0b94d93722e397a91add0163b3244bfff648579cad7da0e7e5fd604ade837de613ad4c1ee72f95d41b`,
    },
  }).then((res: any) => res.json());

  return {
    props: {
      blockMap: data,
    },
    revalidate: 1,
  };
};

export interface IndexPropsType {
  blockMap: BlockMapType;
}

const Index = ({ blockMap }: IndexPropsType) => {
  console.log('Block Map:', blockMap);

  // return (
  //   <>
  //     <NotionRenderer blockMap={blockMap} />
  //   </>
  // );

  return <>hello world</>;
};

export default Index;
