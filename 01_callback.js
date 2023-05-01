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
  }, 1000); //Deep will only inserted into data if setTimeout is > 2000 because of the synchronous nature of javascript but we can change this nature to asynchronous by using callback, Promises and async/await
};

const createData = (newdata, callback) => {
  setTimeout(() => {
    datas.push(newdata);
    callback();
  }, 2000);
};

createData({ name: "Deep", profession: "Software Engineer" },getDatas);

// getDatas();
