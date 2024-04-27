import React from 'react';
import { promises as fs } from 'fs';
import path from 'path';

export default async function Questions({ params }) {
  const jsonPath = path.join(process.cwd(), 'public', 'data.json');
  const file = await fs.readFile(jsonPath, 'utf8');
  const data = JSON.parse(file);
  const id = params.id;

  return (
    <div className="container">
      <h3 className="h3" dangerouslySetInnerHTML={{ __html: data[id].title }} suppressHydrationWarning={true} />
      <div className="answer_wrapper pt-3" dangerouslySetInnerHTML={{ __html: data[id].content }} suppressHydrationWarning={true} />
    </div>
  );
}
