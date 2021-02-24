import React from 'react';
import { NotionRenderer, BlockMapType } from 'react-notion';
import Head from 'next/head';
import Link from 'next/link';
import fetch from 'node-fetch';
import { Text } from 'rebass/styled-components';

export async function getServerSideProps(context: any) {
  const pageId = context.params?.postId;

  if (!pageId) {
    return;
  }

  const data: BlockMapType = await fetch(
    `https://notion.ctbw.workers.dev/v1/page/${pageId}`,
  ).then((res) => res.json());

  return {
    props: {
      blockMap: data,
    },
  };
}

const NotionPage = ({ blockMap }) => {
  console.log('Post Data: ', blockMap);
  if (!blockMap || Object.keys(blockMap).length === 0) {
    return (
      <div>
        <h3>No data found.</h3>
        <div> Make sure the pageId is valid.</div>
        <div>Only public pages are supported in this example.</div>
      </div>
    );
  }

  const title = blockMap[Object.keys(blockMap)[0]]?.value.properties.title[0][0];

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NotionRenderer hideHeader blockMap={blockMap} />
    </>
  );
};

export default NotionPage;
