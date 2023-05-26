const user = {
  name: "test@luxpmsoft.com",
  password: "test1234!",
};

export const login = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === user.name && password === user.password)
        resolve({ status: 200, message: "Success" });
      else reject({ status: 401, message: "Fail" });
    }, 1000);
  });
};
