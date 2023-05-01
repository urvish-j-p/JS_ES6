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
  }, 1000); //Deep will only inserted if setTimeout is > 2000 because of the synchronous nature of javascript but we can change this nature to asynchronous by using callback, Promises and async/await
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

const start = async () => {
  await createData({ name: "Deep", profession: "Software Engineer" });  
  getDatas();
  //It will wait for this data to be inserted into datas and then further tasks will happen
};

start();
