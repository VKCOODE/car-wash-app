import axios from 'axios';
import END_POINT from '../EndPoints';

const CWF = axios.create({
  baseURL: END_POINT.BASE_URL,
});

export {CWF};
