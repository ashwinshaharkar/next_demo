import React from 'react';
import { promises as fs } from 'fs';
import path from 'path';
import ReactHtmlParser from 'react-html-parser';

export default async function Questions({ params }) {
  const jsonPath = path.join(process.cwd(), 'public', 'data.json');
  const file = await fs.readFile(jsonPath, 'utf8');
  const data = JSON.parse(file);
  const id = 1;

  return (
    <div className="container">
      <h3 className="h3">{ReactHtmlParser(data[id].title)}</h3>
      <div className="answer_wrapper pt-3">{ReactHtmlParser(data[id].content)}</div>
    </div>
  );
}
