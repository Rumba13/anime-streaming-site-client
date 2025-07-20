import { defineConfig } from 'steiger'
import fsd from '@feature-sliced/steiger-plugin'

export default defineConfig([
    ...fsd.configs.recommended,
    {
        rules: {
            'fsd/segments-by-purpose': 'off',
            "fsd/repetitive-naming": "off",
            "fsd/inconsistent-naming": "off"
        },
    },
])