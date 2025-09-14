import {Meta, StoryObj} from "@storybook/react-vite";
import {SignInModal} from "./sign-in-modal.tsx";
import {SignInModalStore} from "../model/sign-in-modal.store.ts";
import {useInjection} from "inversify-react";

const isOpenByDefault = true;

const meta = {
    component: SignInModal,
    title: "Sign in modal",
    args: {},
    decorators: [
        (Story) => {
            const signInModalStore = useInjection(SignInModalStore)

            if (isOpenByDefault) signInModalStore.modalStore.open();

            return <div style={{color: "white"}}>
                <button onClick={signInModalStore.modalStore.open}>Open Modal</button>
                <Story/>
            </div>
        }
    ]
} satisfies Meta<typeof SignInModal>

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        openSignUpModal: () => void 0
    }
}