import {Meta, StoryObj} from "@storybook/react-vite";
import {SignUpModal} from "./sign-up-modal";
import {useInjection} from "inversify-react";
import {SignUpModalStore} from "../model/sign-up-modal.store";
import { useEffect } from "react";

const isOpenByDefault = true;

const meta = {
    component: SignUpModal,
    title: "SignUpModal",
    decorators: [
        (Story) => {
            const signUpModalStore = useInjection(SignUpModalStore)

            if (isOpenByDefault) signUpModalStore.modalStore.open();

            useEffect(() => {
            }, []);

            return <div style={{color: "white"}}>
                <button onClick={signUpModalStore.modalStore.open}>Open Modal</button>
                <Story/>
            </div>
        }
    ]
} satisfies Meta<typeof SignUpModal>

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        openSignInModal: () => void 0
    }
}

