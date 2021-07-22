import axios from 'axios';
import { parseCookies } from 'nookies';

const cookies = parseCookies();

export const api = axios.create({
  baseURL: 'https://patch-notes-erin.herokuapp.com/',
  headers: {
    Authorization: `Bearer ${cookies['patchnotes.token']}`
  }
});