import ReactMarkdown from 'react-markdown'
import { useTranslation } from 'next-i18next';

export default function ContentSection(props) {
  const { t } = useTranslation('common');
  return (<>
    {props.data.content_sections && props.data.content_sections.map( section => (
      <div className="mx-auto py-5 px-4 max-w-7xl sm:px-6 lg:px-8" key={`section_${section.title}`}>
        <div className="text-lg max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{t(section.title)}</h2>
          <h3 className="text-3xl font-bold tracking-tight sm:text-2xl">{section.subtitle}</h3>
          <div className="mt-6 text-gray-700 markdown">
            <ReactMarkdown>
              {t(section.body)}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    ))}
    </>
  )
}