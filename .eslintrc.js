// Các cảnh báo lỗi nếu code ko đúng quy tác...
//  Document ESlint: https://eslint.org/docs/latest/use/getting-started#configuration
// Chú ý: tương thích phiên bản nếu không sẽ bị lỗi

module.exports = {
  parserOptions: {
    ecmaVersion: 2023, // versionz
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "react-app",
    "prettier",
  ],
  rules: {
    // Nếu thiếu ';'
    // semi: 'error', // Hoặc 2
    // // nếu "" => error | '' => true
    // quotes: [1, 'single'],
    "react/prop-types": "off", // thong báo kiem tra hop le cua props
    // 'react/jsx-max-props-per-line': 1,
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "linebreak-style": 0,
    "import/no-extraneous-dependencies": 0,
    "class-methods-user-this": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/forbid-prop-types": 0,
    "react/require-default-props": 0,
    "prettier/prettier": 0,
  },
  plugins: ["prettier"],
}

// semi => yeu cau dấu ';'
// ========================
// "off" or 0 - turn the rule off
// "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code) => cảnh báo nhưng vẫn chạy.
// "error" or 2 - turn the rule on as an error (exit code will be 1) // lỗi và dừng chạy
