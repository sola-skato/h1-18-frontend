import { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/test";
import { HomeHeader } from "./HomeHeader";

const meta = {
  component: HomeHeader,
  title: "Components/HomeHeader",
  tags: ["autodocs"],
  args: {
    onLogout: fn(),
  },
} satisfies Meta<typeof HomeHeader>;

export default meta;
type Story = StoryObj<typeof HomeHeader>;

export const Default: Story = {};
