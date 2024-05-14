const USER_EMAIL = 'my@email.com';
const USER_PASSWORD = '1234';

const SignIn = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === USER_EMAIL && password === USER_PASSWORD) {
        resolve(email);
      } else {
        reject('가입정보가 다릅니다.');
      }
    }, 1000);
  });
};

export default SignIn;
