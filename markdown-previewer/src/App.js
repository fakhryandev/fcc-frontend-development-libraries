import { marked } from "marked";
import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState(`
  This is a paragraph

  # Heading 1
  ## Heading 2

  - list item 1
  - list item 2
  - list item 3

  [example](https://example.com/)

  \`code\`
  \`\`\`
    let a = 2;
    let b = 3;
    let c = a + b;
  \`\`\`

  > blockquote

  **bold text**

  ![alt text](image.png)
  `);

  marked.setOptions({
    breaks: true,
  });

  const markdown = marked(text);
  return (
    <div className="App container-fluid">
      <div className="py-3">
        <h1>Markdown Previewer</h1>
      </div>
      <div className="row justify-content-around align-items-center py-3">
        <div className="col-5">
          <div className="card">
            <div className="card-header text-left">Editor</div>
            <div className="card-body">
              <textarea
                className="form-control"
                id="editor"
                onChange={(event) => setText(event.target.value)}
                value={text}
                style={{ height: "70vh" }}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="card">
            <div className="card-header text-left">Preview</div>
            <div className="card-body">
              <div
                id="preview"
                className="form-control"
                style={{ height: "70vh", overflowY: "auto" }}
                dangerouslySetInnerHTML={{ __html: markdown }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
