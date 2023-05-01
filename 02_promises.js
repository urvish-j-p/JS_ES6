const datas = [
  {
    name: "Urvish",
    profession: "Software Engineer",
  },
  {
    name: "Priyank",
    profession: "Software Engineer",
  },
];

const getDatas = () => {
  setTimeout(() => {
    let output = "";
    datas.forEach((data) => {
      output += `<li>${data.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000); //Deep will only inserted into datas if setTimeout is > 2000 because of the synchronous nature of javascript but we can change this nature to asynchronous by using callback, Promises and async/await
};

const createData = (newdata) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      datas.push(newdata);
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
};

createData({ name: "Deep", profession: "Software Engineer" })
  .then(getDatas)
  .catch((err) => console.log(err));

