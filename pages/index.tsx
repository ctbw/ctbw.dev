import { NotionRenderer, BlockMapType } from "react-notion";
// import Head from "next/head";
// import Link from "next/link";
import fetch from "node-fetch";

export const getStaticProps = async () => {
  const data: BlockMapType = await fetch(
    "https://notion-api.splitbee.io/v1/page/459d756a55764fc0968bc30331086f4a"
  ).then((res: any) => res.json());

  return {
    props: {
      blockMap: data
    },
    revalidate: 1
  };
}

export interface IndexPropsType {
    blockMap: BlockMapType;
}

const Index = ({ blockMap }: IndexPropsType) => {
    console.log('Block Map:', blockMap);

    return (<div>under construction</div>)
};

export default Index;