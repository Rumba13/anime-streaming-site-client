import {Meta, type StoryObj} from "@storybook/react-vite";
import {RatingRange} from "./rating-range.tsx";
import {RatingFilterStore} from "../model/rating-filter.store.ts";

const meta = {
    component: RatingRange,
    title: "Rating Range",
    args: {}
} satisfies Meta<typeof RatingRange>

export default meta

type Story = StoryObj<typeof meta>;

const ratingFilterStore = new RatingFilterStore()

export const Default: Story = {
    args: {
        ratingFilterStore:ratingFilterStore
    }
}
