import './App.css';
import { marked } from 'marked';
import { useState } from 'react'

function App() {

  const [text, setText] = useState(`
  # H1

  ## H2

  [title](https://www.example.com)

  \`code\`

  \`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

1. First item
2. Second item
3. Third item

  > blockquote

  ![alt text](image.jpg)

  **bold text**
  `)
  //a header (H1 size), a sub header (H2 size), 
  //a link, inline code, a code block, a list item, 
  //a blockquote, an image, and bolded text
  marked.setOptions({
    breaks: true
  })

  return (
    <div id='page'>
      <header>
        <h1>Convert your Markdown</h1>
      </header>
      <div className="row">
        
        <div className="col-6">
          <textarea
            id="editor"
            onChange={(event) => { setText(event.target.value) }}
            value={text} />
        </div>

        <div className="col-6" id="preview"
          dangerouslySetInnerHTML={
            {
              __html: marked(text),


            }
          }
        >

        </div>
      </div>
    </div>

  );
}



export default App;
