export default function ContentSection(props) {
    const defaultData = props.data.default || {};
    const contentSections = defaultData.content_sections || [];
  
    return (
      <>
        {contentSections.map((section, index) => (
          <div key={`section_${index}`}>
            <p>{section}</p>
            <hr /> {/* Optional: Adding a horizontal line for separation */}
          </div>
        ))}
      </>
    );
  }
  