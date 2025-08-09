import {Meta, StoryObj} from "@storybook/react-vite";
import {SignUpForm} from "./sign-up-form.tsx";

const meta = {
    title: "Sign Up Form",
    component: SignUpForm,
} satisfies Meta<typeof SignUpForm>

export default meta

type Story = StoryObj<typeof SignUpForm>;

export const Default: Story = {
    args: {}
}

export const Filled: Story = {
    args: {
        initialValues: {
            email: "senderium1@gmail.com",
            password: "password",
            firstName: "Kirill",
            lastName: "Tsar",
            repeatedPassword: "password",
        }
    }
}
