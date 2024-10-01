npm install axios
npm install json-server --save-dev
{
  // ... 
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",

    "server": "json-server -p3001 --watch db.json"
  },
}
npm run server

![Capture1](https://github.com/user-attachments/assets/826e920c-506f-428d-93c5-46700d1d08b0)
