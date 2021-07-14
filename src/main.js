import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

let fileType = '';
const saveBtn =  document.getElementById('save')

// (function () {
	// create div to avoid needing a HtmlWebpackPlugin template
	const div = document.createElement('div');
	div.id = 'root';
	div.style = 'width:800px; height:600px; border:1px solid #ccc;';

	document.body.appendChild(div);

    const editor = monaco.editor.create(document.getElementById('root'), {
        value: `const foo = () => 0;`,
        language: 'javascript',
        theme: 'vs-dark'
    });
    
    document.getElementById('upload').onclick =async ()=>{
        const [file] = await showOpenFilePicker()  
        const fileContent = await file.getFile()  // 获取文件
        fileType = fileContent.type; // 获取文件类型
        var reader = new FileReader();  // 读取文件
        reader.onload = function(evt) {
            editor.setValue(evt.target.result);
            monaco.editor.setModelLanguage(editor.getModel(), fileType.split('/').pop());
            saveBtn.addEventListener('click',()=>{
                const blob = new Blob([editor.getValue()],{type:fileType})
                const url = URL.createObjectURL(blob)
                const a = document.createElement('a')
                a.href = url
                a.download = 'testfile'
                a.click()
            },{once:true})
        };
        reader.readAsText(fileContent);
    }
    
 
// })();

