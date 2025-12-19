import React from 'react';
import { ErrorProvider } from './utils/ErrorHandler';

// Define the Root component for Docusaurus
const Root = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorProvider>
      {children}
    </ErrorProvider>
  );
};

export default Root;