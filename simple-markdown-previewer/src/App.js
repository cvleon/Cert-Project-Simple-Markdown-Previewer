import { useState } from "react";
import { marked } from "marked";
import "./App.css";

function App() {
  let [text, setText] = useState(`
  # H1
  ## H2
  **bold text**
  [title](https://www.example.com)
  ![alt text](image.jpg)

  1. First item
  2. Second item
  3. Third item

  - First item
  - Second item
  - Third item

  \`code\`

  \`\`\` 
  {
    "firstName": "Christian",
    "lastName": "Vasquez Leon",
    "age": 24
  }
  \`\`\`

  > blockquote
  
  `);

  marked.setOptions({
    breaks: true
  })
  
  return (
    <div className="App">
      <textarea
        id="editor"
        onChange={(event) => setText(event.target.value)}
        value={text}
      ></textarea>
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(text),
        }}
      ></div>
    </div>
  );
}

export default App;
