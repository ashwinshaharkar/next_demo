import React from 'react';
import { promises as fs } from 'fs';


export default async function Questions({ params }) {
  const file = await fs.readFile(process.cwd() + '/data.json', 'utf8');
  const data = JSON.parse(file);
  const id = 1;

  if (params.id) {
    const id = params.id;
  }

  return (
    <div className="container">
      <h3 className="h3">{data[id].title}</h3>
      <div className="answer_wrapper pt-3" dangerouslySetInnerHTML={{ __html: data[id].content }} suppressHydrationWarning={true} />
    </div>
  );
}
