import React, { useState } from "react";

const App = () => {
  const [length, setLength] = useState("8");
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);

  function generatepassword() {
    const inputValue = length;
    const minimumLength = 4;
    if (
      inputValue === "" ||
      isNaN(parseInt(inputValue)) ||
      inputValue < minimumLength
    ) {
      setLength(minimumLength);
      alert("Give number More than 4");
      return;
    } else {
      setLength(parseInt(inputValue));
    }

    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    var generatepassword = "";
    let charset = lowercase;
    if (includeNumbers) charset += numbers;
    if (includeSymbols) charset += symbols;
    if (includeUppercase) charset += uppercase;

    for (let i = 0; i < length; i++) {
      const randomi = Math.floor(Math.random() * charset.length);
      generatepassword += charset[randomi];
    }
    setPassword(generatepassword);
  }

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000); // Reset success message after 2 seconds
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="flex flex-col gap-4 justify-center items-start  bg-gray-800 p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-white text-3xl font-bold mb-4">
            Strong Password Generator
          </h1>

          <div>
            <label className="text-gray-300 flex w-full gap-2 text-xl">
              Length:
              <input
                type="number"
                value={length}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
                min="4"
                max="20"
                className="ml-2 w-16 p-1 px-2 outline-none text-black rounded"
              />
            </label>
          </div>
          <div>
            <label className="text-gray-300 flex w-full gap-2 text-xl">
              <input
                type="checkbox"
                className="w-6"
                checked={includeUppercase}
                onChange={() => setIncludeUppercase(!includeUppercase)}
              />
              Include Uppercase Letters
            </label>
          </div>
          <div>
            <label className="text-gray-300 flex w-full gap-2 text-xl">
              <input
                type="checkbox"
                className="w-6"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers(!includeNumbers)}
              />
              Include Numbers
            </label>
          </div>
          <div>
            <label className="text-gray-300 flex w-full gap-2 text-xl">
              <input
                type="checkbox"
                className="w-6"
                checked={includeSymbols}
                onChange={() => setIncludeSymbols(!includeSymbols)}
              />
              Include Symbols
            </label>
          </div>

          <div className="w-full max-w-sm">
            <div className="mb-2 flex justify-between items-center">
              <label
                htmlFor="url-shortener"
                className="text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
            </div>
            <div className="flex items-center">
              <button
                onClick={generatepassword}
                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-blue-700 dark:bg-blue-600 border hover:bg-blue-800 dark:hover:bg-blue-700 rounded-s-lg border-blue-700 dark:border-blue-600 hover:border-blue-700 dark:hover:border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                Generate
              </button>
              <div className="relative w-full">
                <input
                  type="text"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 pl-5 border border-e-0 border-gray-300 text-gray-500 dark:text-gray-400 text-sm border-s-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={password}
                  readOnly
                  disabled
                />
              </div>
              <button
                onClick={copyToClipboard}
                className="flex-shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-gray-500 dark:text-gray-400 hover:text-gray-900 bg-gray-100 border border-gray-300 rounded-e-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:hover:text-white"
                type="button"
              >
                <span id="default-icon">
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                  </svg>
                </span>
                <span className={`ml-2 ${copySuccess ? "" : "hidden"}`}>
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <div
              role="tooltip"
              className={`absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-green-500 rounded-lg shadow-sm ${
                copySuccess ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              <span>{copySuccess ? "Copied!" : "Copy link"}</span>
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
