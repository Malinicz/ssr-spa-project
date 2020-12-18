const root = document.getElementById('root');

interface MyInterface {
  props1: string
}

const paragraph = document.createElement('p');
const text = document.createTextNode('This is SPA javascript code');
paragraph.append(text);

if (root) {
  root.append(paragraph);
}