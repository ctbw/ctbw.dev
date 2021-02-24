import React from 'react';
import { NotionRenderer, BlockMapType } from 'react-notion';
import Head from 'next/head';
import Link from 'next/link';
import fetch from 'node-fetch';
import { Flex } from 'rebass/styled-components';

export const getStaticProps = async () => {
  const main = 'https://notion.ctbw.workers.dev/v1/table/640e552fa68b4433a43b5078b7e4099c';
  const data = await fetch(main).then((res: any) => res.json());

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
  console.log('Table data:', blockMap);

  return (
    <>
      <Head>
        <style>{`body { margin: 0;}`}</style>
        <title>react-notion example</title>
      </Head>
      {blockMap.map((post: any) => {
        return (
          <Flex>
            <Link href={`/${post.id}`}>{post.description}</Link>
          </Flex>
        );
      })}
    </>
  );
};

export default Index;
