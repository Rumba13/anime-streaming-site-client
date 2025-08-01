import {Meta, type StoryObj} from "@storybook/react-vite";
import {BasePopup} from "./base-popup";
import {BasePopupStore} from "../../model";

const meta = {
    component: BasePopup,
    title: "BasePopup",
    args: {}
} satisfies Meta<typeof BasePopup>

export default meta

type Story = StoryObj<typeof meta>;

const basePopupStore = new BasePopupStore();

export const Default: Story = {
    args: {
        popupStore: basePopupStore,
        children: <>
            Base Popup
        </>
    },
    decorators: [
        (Story) => <div style={{position:"relative"}}>
            <button onClick={basePopupStore.open} style={{color:"white"}}>open popup</button>
            <Story/>
        </div>
    ]
}
