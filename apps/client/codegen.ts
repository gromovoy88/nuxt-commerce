import 'dotenv/config';
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.API_BASE_URL,
  documents: ['./**/*.{ts,vue,gql,graphql}'],
  ignoreNoDocuments: true,
  generates: {
    '../../packages/magento/graphql/generated/': {
      preset: 'client',
      presetConfig: {
        fragmentMasking: false,
        dedupeFragments: true
      },
      config: {
        useTypeImports: true,
        exportFragmentSpreadSubTypes: true,
        dedupeFragments: true,
        scalars: {
          Date: 'string',
          DateTime: 'string',
          Decimal: 'number',
          JSONString: 'string',
          Metadata: 'Record<string, string>',
          PositiveDecimal: 'number',
          UUID: 'string',
          WeightScalar: 'number'
        },
        nonOptionalTypename: true,
        avoidOptionals: {
          field: true,
          inputValue: false,
          object: true,
          defaultValue: true
        }
      }
    }
  }
};

export default config;
