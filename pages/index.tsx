import Input from "@/src/component/Input"
export default function Home(): JSX.Element {
  return (
    <div>
      <Input
        title="Title text here"
        isVisibleHelperButton={true}
        isVisibleShowButton={true}
        helperText="Helper text here"
      />
    </div>
  )
}
