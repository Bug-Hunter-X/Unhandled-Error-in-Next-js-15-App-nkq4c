```javascript
// pages/aboutSolution.js
import { ErrorBoundary } from 'next/error-boundary';

function MyErrorBoundary({ error }) {
  return (
    <div style={{ padding: '20px', border: '1px solid red' }}>
      <h2>Something went wrong!</h2>
      <p>Error: {error.message}</p>
    </div>
  );
}

export default function About() {
  throw new Error('Intentional error!');
}

function MyComponent() {
  return (
    <ErrorBoundary errorComponent={MyErrorBoundary}>
        <About/>
    </ErrorBoundary>
  );
}
export default MyComponent
```