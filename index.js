// @ts-check

/**
 * @type {import('prettier').Config & import('@ianvs/prettier-plugin-sort-imports').PrettierConfig}
 */
module.exports = {
  singleQuote: true,
  jsxSingleQuote: false,
  arrowParens: 'avoid',
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  quoteProps: 'preserve',
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'ignore',
  overrides: [
    {
      files: '*.html',
      options: {
        parser: 'angular',
      },
    },
    {
      files: ['*.json', '*.json5', '*.jsonc', '.eslintrc'],
      options: {
        trailingComma: 'none',
      },
    },
    ...['package-lock.json', 'pnpm-lock.yaml', '.yarn/**'].map(filename => ({
      files: [filename],
      options: {
        requirePragma: true,
      },
    })),
  ],
  plugins: ['prettier-plugin-tailwindcss', '@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '^(astro/(.*)$)|(astro:(.*)$)|^(astro$)',
    '<BUILTIN_MODULES>',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^types$',
    '^@/types/(.*)$',
    '^@/config/(.*)$',
    '^@/lib/(.*)$',
    '^@/hooks/(.*)$',
    '^@/components/(.*)$',
    '^@/styles/(.*)$',
    '^@/app/(.*)$',
    '^@/(.*)$',
    '',
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',
}
