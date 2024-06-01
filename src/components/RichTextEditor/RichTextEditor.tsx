import { Box, Button, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import StorageUtils from '../../utils/storageUtils';

const modules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image'],
    ['clean']
  ],
};

const formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
];


interface RichTextEditorProps {}

const RichTextEditor: FC<RichTextEditorProps> = () => {
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    // Load saved content from localStorage
    const lsUserData = StorageUtils.getFromLocalStorage('userData');
    if(lsUserData && Object.keys(lsUserData).length){
      const formattedData = `
      <h1>${lsUserData.name}</h1>
      <h2>${lsUserData.address}</h2>
      <h3>${lsUserData.email}</h3>
      <h4>${lsUserData.phone}</h4>
    `;
      setContent(formattedData);
    } else  {
      const savedContent = localStorage.getItem('richTextContent');
      if (savedContent) {
        setContent(savedContent);
      }
    }

  }, []);

  const handleSave = () => {
    localStorage.setItem('richTextContent', content);
    alert('Content saved!');
  };

  return (
    <Box sx={{ p: 2, maxWidth: '800px', mx: 'auto' }}>
      <Typography variant="h4" gutterBottom>Rich Text Editor</Typography>
      <Box sx={{ minHeight: '400px', '& .ql-container': { minHeight: '350px' } }}>
        <ReactQuill
          value={content}
          onChange={setContent}
          modules={modules}
          formats={formats}
        />
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSave}
        sx={{ mt: 2 }}
      >
        Save
      </Button>
    </Box>
  );
};

export default RichTextEditor;