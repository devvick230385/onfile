import axios from "axios";
import Server from "./Server";
const ClientServer = axios.create({ baseURL: Server });

export default ClientServer;
