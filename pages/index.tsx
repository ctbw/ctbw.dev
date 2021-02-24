import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import fetch from 'node-fetch';
import { InferGetStaticPropsType } from 'next';
import { Flex } from 'rebass/styled-components';
export interface BlogPostType {
  id: string;
  description: string;
  name: string;
}

export const getStaticProps = async () => {
  const main = 'https://notion.ctbw.workers.dev/v1/table/640e552fa68b4433a43b5078b7e4099c';
  const data = await fetch(main).then((res: any) => res.json());

  return {
    props: {
      blogPosts: data,
    },
    revalidate: 1,
  };
};

const Index = ({ blogPosts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log('Table data:', blogPosts);

  return (
    <>
      <Head>
        <style>{`body { margin: 0;}`}</style>
        <title>ctbw.dev</title>
      </Head>
      <Flex flexDirection="column">
        {blogPosts.map(({ id, description }: BlogPostType) => {
          return (
            <Link key={id} href={`/${id}`}>
              {description}
            </Link>
          );
        })}
      </Flex>
    </>
  );
};

export default Index;
