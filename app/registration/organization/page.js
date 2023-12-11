import Link from "next/link";
import { InputText, InputRadio } from "../../../components/UI/Input";
import FormContainer from "../../../components/UI/containers/formContainer";

export default function RegisterAsPage(props) {
  async function create(formData) {
    "use server";
    console.log(formData);
    // mutate data
    // revalidate cache
  }

  return (
    <div>
      <div>
        Organization Form:
        <FormContainer redirectTo={"/"} action={create}>
          <InputText label={"Name"} name={"NAME"} />
          <InputText label={"Email"} name={"EMAIL"} />
          <InputText label={"Mobile"} name={"MOBILE"} />
          <InputText label={"Address"} name={"ADDRESS"} />
          <InputRadio />
          <hr></hr>
        </FormContainer>
      </div>
      <Link href={"/registration/indivisual"}>Register As Indivisual</Link>
    </div>
  );
}
