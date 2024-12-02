import { createRoot } from 'react-dom/client';

const element = <h1>Hello from jsx!</h1>

const root = createRoot(document.getElementById('root'));

root.render(
  element
);
