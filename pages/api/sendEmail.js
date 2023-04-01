import { data } from "autoprefixer";
import axios from "axios";

export default async function sendEmail({ query: { message } }, res) {
  let public_key = process.env.public_key;
  let priv_key = process.env.priv_key;
  let template_id = process.env.template_id;
  let service_id = process.env.service_id;
  const api_url = "https://api.emailjs.com/api/v1.0/email/send";
  const data = {
    service_id,
    template_id,
    user_id: public_key,
    template_params: {
      from_name: "Guidr Support Team",
      message,
    },
  };

  await axios.post(api_url, data);
  res.send({ message: "sent" });
}
