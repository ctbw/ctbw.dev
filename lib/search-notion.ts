import fetch from 'isomorphic-unfetch';
import pMemoize from 'p-memoize';

import { SearchParams, SearchResults } from '../types';

export const searchNotion = pMemoize(searchNotionImpl);

export const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV;
export const host = isDev ? `http://localhost:3000` : `https://ctbw.dev`;

export const apiBaseUrl = `${host}/api`;

export const api = {
  createPreviewImage: `${apiBaseUrl}/create-preview-image`,
  searchNotion: `${apiBaseUrl}/search-notion`,
};

async function searchNotionImpl(params: SearchParams): Promise<SearchResults> {
  return fetch(api.searchNotion, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((res) => {
      console.log(res);
      if (res.ok) {
        return res;
      }

      const error: any = new Error(res.statusText);
      error.response = res;
      return Promise.reject(error);
    })
    .then((res) => res.json());
}
