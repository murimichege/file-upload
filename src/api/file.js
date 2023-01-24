import { uploadXHR } from '../utils/xhr';

export const upload = formData => {
  return uploadXHR({
    method: 'POST',
    url: 'https://api.imgur.com/3/upload',
    body: formData,
  });
};

export const rxUpload = formData => ({
  url: 'https://api.imgur.com/3/upload',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: formData,
});
