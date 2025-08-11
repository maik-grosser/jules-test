import { getMarkdownContent } from '../lib/markdown';

export default async function HomePage() {
  const { title, contentHtml } = await getMarkdownContent('home');

  return (
    <div>
      <h1 className="text-4xl font-bold">{title as string}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}
