const config = {
  '*.(ts|tsx)': () => 'tsc --skipLibCheck --noEmit',
  '*.(ts|tsx|js|jsx)': 'eslint',
};

export default config;
