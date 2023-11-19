
import Input from "./Input";

export default {
    title: 'Form/Input',
    component: Input,
    // decorators: [story => <Center>{story()}</Center>]
}

export const Small = () => <Input variant="small">Small</Input>
export const Medium = () => <Input variant="medium">Medium</Input>
export const Large = () => <Input variant="large">Large</Input>

Small.storyName = "Small Input"