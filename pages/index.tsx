import React from 'react';
import { NotionRenderer } from 'react-notion-x';
import { NotionAPI } from 'notion-client';

const notion = new NotionAPI();

const recordMap = await notion.getPage('08804191115447ce8532a9d67a5ee397');

export default () => <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />;
