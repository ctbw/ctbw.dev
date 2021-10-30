import React from 'react';
import { NotionAPI } from 'notion-client';
import { NotionRenderer, Collection, CollectionRow } from 'react-notion-x';

const notion = new NotionAPI();

export const getStaticProps = async (context) => {
  const recordMap = await notion.getPage('08804191115447ce8532a9d67a5ee397');

  return {
    props: {
      recordMap,
    },
  };
};

const Home = ({ recordMap }) => (
  <NotionRenderer
    recordMap={recordMap}
    fullPage={true}
    darkMode={true}
    components={{
      collection: Collection,
      collectionRow: CollectionRow,
    }}
  />
);

export default Home;

// const UnderConstruction = () => <>Under Construction</>;

// export default UnderConstruction;
