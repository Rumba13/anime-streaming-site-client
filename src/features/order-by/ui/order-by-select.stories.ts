import {Meta, type StoryObj} from "@storybook/react-vite";
import {OrderBySelect} from "./order-by-select.tsx";
import {OrderByStore} from "../model/order-by.store.ts";

const meta = {
    component: OrderBySelect,
    title: "Order By Select",
    args: {}
} satisfies Meta<typeof OrderBySelect>

export default meta

type Story = StoryObj<typeof meta>;

const orderByStore = new OrderByStore()

export const Default: Story = {
    args: {
      orderByStore
    }
}
