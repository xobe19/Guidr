import { data } from "autoprefixer";
import axios from "axios";

export default async function sendEmail({ query: { message } }, res) {
  let public_key = "kDtTwPjPyGxxUySm5";
  let priv_key = "r3X6hw0CbAdzqZSMM71TF";
  let template_id = "template_27ktgkn";
  let service_id = "service_3e14pbv";
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
