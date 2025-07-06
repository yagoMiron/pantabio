import axios from "axios";

const API_URL = process.env.REACT_APP_API_KEY;

const sendEmail = async (name: string, email: string, message: string) => {
  try {
    const response = await axios.post(`${API_URL}/contato`, {
      name,
      email,
      message,
    });
    console.log(response);
  } catch (error) {
    console.log("Erro");
    console.log(error);
  }
};

export default sendEmail;
