import axios from "axios";

export default class ViaCep {
  static async getAddress(cep: string) {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return response.data;
  }
}