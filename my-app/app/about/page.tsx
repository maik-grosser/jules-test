import { getMarkdownContent } from '../../lib/markdown';

export default async function AboutPage() {
  const { title, contentHtml } = await getMarkdownContent('about');

  return (
    <div>
      <h1 className="text-4xl font-bold">{title as string}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}
