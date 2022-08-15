import * as yup from 'yup';

export const schema = yup.object().shape({
  url: yup.string().url().required(),
});
