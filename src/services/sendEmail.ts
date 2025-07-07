import axios from "axios";

const API_URL = process.env.REACT_APP_API_KEY;

const sendEmail = async (nome: string, email: string, mensagem: string) => {
  try {
    const response = await axios.post(`${API_URL}/contato`, {
      nome,
      email,
      mensagem,
    });
    console.log(response);
  } catch (error) {
    console.log("Erro");
    console.log(error);
  }
};

export default sendEmail;
