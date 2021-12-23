import axios from "axios";

export default class Dolar {
    
    static async getValue(){

        const { data } = await axios.get("https://economia.awesomeapi.com.br/last/USD-BRL");
        return data.USDBRL;

    }

}