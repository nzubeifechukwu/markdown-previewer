import { useState } from "react";
import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";
import { defaultMarkdown } from "./utils/defaultMarkdown";

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleChange = (e) => {
    const heading = DOMPurify.sanitize(marked.parse(e.target.value));
    setMarkdown(heading);
  };

  return (
    <>
      <main>
        <form className="editor">
          <h3 className="heading">
            <label htmlFor="markdown">Editor</label>
          </h3>

          <textarea
            name="markdown"
            id="markdown"
            onChange={handleChange}
            defaultValue={defaultMarkdown}
          ></textarea>
        </form>
        <section className="preview">
          <h3 className="heading">Preview</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(marked.parse(markdown)),
            }}
          ></div>
        </section>
      </main>
      <footer>
        <a href="https://github.com/nzubeifechukwu/markdown-previewer">
          &copy; Nzube Ifechukwu
        </a>
      </footer>
    </>
  );
}

export default App;
