import Link from "next/link";
import { InputText } from "../../../components/UI/Input";
import FormContainer from "../../../components/UI/containers/formContainer";

export default function IndivisualRegistration(props) {
  async function registerIndivisual(formData) {
    "use server";
    console.log(formData);
    // mutate data
    // revalidate cache
  }

  return (
    <div>
      <div>
        Indivisual Form:
        <FormContainer redirectTo={"/"} action={registerIndivisual}>
          <InputText label={"Name"} name={"NAME"} />
          <InputText label={"Email"} name={"EMAIL"} />
          <InputText label={"Mobile"} name={"MOBILE"} />
          <InputText label={"Address"} name={"ADDRESS"} />
        </FormContainer>
      </div>
      <Link href={"/registration/organization"}>Organization</Link>
    </div>
  );
}
