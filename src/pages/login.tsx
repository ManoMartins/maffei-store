import { FieldText } from "../components/UI/atoms/FieldText";

export default function Login() {
  return (
    <div>
      <FieldText label="E-mail" name="email"  />
      <FieldText label="Senha" name="password"  />
    </div>
  )
}