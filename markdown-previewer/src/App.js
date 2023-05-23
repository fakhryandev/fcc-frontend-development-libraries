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
      <h1>Markdown Previewer</h1>
      <div className="row justify-content-between py-3 vh-100">
        <div className="col-5">
          <textarea
            className="form-control h-100"
            id="editor"
            onChange={(event) => setText(event.target.value)}
            value={text}
          ></textarea>
        </div>
        <div className="col-5">
          <div
            id="preview h-100"
            dangerouslySetInnerHTML={{ __html: markdown }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
