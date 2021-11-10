import React from 'react';
import dynamic from 'next/dynamic';
import { NotionAPI } from 'notion-client';
import { NotionRenderer, Collection, CollectionRow } from 'react-notion-x';
import { searchNotion } from 'lib/search-notion';

const notion = new NotionAPI();

export const getStaticProps = async () => {
  const recordMap = await notion.getPage('08804191115447ce8532a9d67a5ee397');

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};

const Modal = dynamic(() => import('react-notion-x').then((notion) => notion.Modal), {
  ssr: false,
});

const Home = ({ recordMap }) => (
  <NotionRenderer
    recordMap={recordMap}
    fullPage={true}
    darkMode={true}
    searchNotion={searchNotion}
    rootDomain="localhost:3000"
    components={{
      collection: Collection,
      collectionRow: CollectionRow,
      modal: Modal,
    }}
  />
);

export default Home;
