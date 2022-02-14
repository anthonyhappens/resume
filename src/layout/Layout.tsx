import React, { ReactNode, useState, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';

interface IProps {
  children: ReactNode;
}

const Index: React.FC<IProps> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState('');
  console.log('currentPath:', currentPath);
  const location = useLocation();

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  return (
    <div className="container p-4 mx-auto max-w-screen-lg">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-start-1 col-end-3">
          <div>
            <div className="text-xl font-medium text-slate-600">
              Anthony Liao
            </div>
          </div>
        </div>
        <div className="col-span-2 col-end-7 text-right">
          {/* {currentPath.includes('resume') || currentPath === '/' ? (
            <span className="text-slate-600">Resume</span>
          ) : (
            <Link to="/" className="text-blue-600 underline underline-offset-1">
              Resume
            </Link>
          )}
          {currentPath.includes('portifolio') ? (
            <span className="ml-2 text-slate-600">Portifolio</span>
          ) : (
            <Link
              to="/portifolio"
              className="ml-2 text-blue-600 underline underline-offset-1"
            >
              Portifolio
            </Link>
          )} */}
          <a
            className="inline-flex items-center ml-2 text-blue-600 underline underline-offset-1"
            href="https://github.com/anthonyhappens/resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ width: '1rem' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
      {children}
      <footer className="text-center">
        <button className="p-4 mt-10 mb-4 text-white bg-slate-400 rounded-lg">
          <a
            className="flex items-center"
            href="https://github.com/anthonyhappens/resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
            <svg
              version="1.1"
              width="16"
              height="16"
              className="ml-2 text-blue-600"
              fill="#FFFF"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </a>
        </button>
      </footer>
    </div>
  );
};

export default Index;
