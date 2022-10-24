export default function InputSubmit({ name, inf, image }) {
  const inputSubmit = <input type="submit" value="Upload the New Diet" />;
  return name && inf && image && inputSubmit;
}
