import type {Meta, StoryObj} from '@storybook/react-vite';

import {Loading} from './loading';

const meta = {
    component: Loading,
    title: 'Loading',
    tags: ['autodocs'],
    excludeStories: /.*Data$/,

} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        styles: undefined
    },
};