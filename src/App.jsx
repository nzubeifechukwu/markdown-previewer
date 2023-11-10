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
      <h1 className="main-heading">Markdown Previewer</h1>
      <main>
        <form className="editor">
          <h2 className="heading">
            <label htmlFor="markdown">Editor</label>
          </h2>

          <textarea
            name="markdown"
            id="markdown"
            onChange={handleChange}
            defaultValue={defaultMarkdown}
          ></textarea>
        </form>
        <section className="preview">
          <h2 className="heading">Preview</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(marked.parse(markdown)),
            }}
          ></div>
        </section>
      </main>
      <footer>
        <p>
          <a href="https://github.com/nzubeifechukwu/markdown-previewer">
            &copy; Nzube Ifechukwu
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
