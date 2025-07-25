import type {Meta, StoryObj} from '@storybook/react-vite';
import {Logo} from './logo';

const meta = {
    component: Logo,
    title: 'Logo',
    tags: ['autodocs'],
    excludeStories: /.*Data$/,

} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {

    },
};