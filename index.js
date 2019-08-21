const resultBlock = document.querySelector('#result');

const resultTask = document.querySelector('#resultTask');

const clickMeButton = document.querySelector('#click-me');

const getTasksButton = document.querySelector('#get-task');

const pageNumberEl = document.querySelector('#page-number');

const APIkey = 'https://api.unsplash.com/photos/random/?client_id=818fcd1d1047300379afae3e5c33cb9cd88b68d7d81253632ba4e09a331246a5&count=30';
const APIkeyTasksGet = 'https://repetitora.net/api/JS/Tasks?widgetId=85429'
const APIkeyTasksPost = 'https://repetitora.net/api/JS/Tasks'
// clickMeButton.addEventListener('click', () => {
//   const promise = getImagesNew();
//   promise
//     .then((promise) => console.log(promise))
// })

// const getImagesFetchUsual = fetch(APIkey)
//                               .then(response => response.json())
//                               .then(data => successGet(data));

// async function getImagesFetchAwait () {
//   const jsonData = await fetch(APIkey).then(response => response.json()).then(data => console.log(data))
// }

// async function getImagesFetchAwaitShort () {
//   const jsonData = await (await fetch(APIkey)).json();
// }

// $('#result').masonry({
//   // options
//   itemSelector: '.grid-item',
//   columnWidth: 200,
//   //columnWidth: '.grid-item',
// });



const successGet = (data) => {
  data.forEach(el => {
    const img = document.createElement('img');
    img.className = 'grid-item';
    img.src = el.urls.thumb;
    resultBlock.appendChild(img)
  });
};

const successGetPost = (data) => {
  data.forEach(el => {
    const li = document.createElement('li');
    li.innerHTML = el.title;
    resultTask.appendChild(li)
  });
};

clickMeButton.addEventListener('click', () => {
  const promise = getImagesAxios();
  promise.then(data => successGet(data))
});

// clickMeButton.addEventListener('click', () => {
//     const div = document.createElement('div');
//     document.querySelector('#resultTask').appendChild(div)
//   })

getTasksButton.addEventListener('click', () => {
  const promise = getTasksAxios();
  promise.then(data => successGetPost(data))
})


 //     jQeury    \\
function getImagesJQuery() {
  const promise = $.ajax(APIkey)
  return promise;
}

 //     Axios    \\

 function getImagesAxios() {
  const promise = axios.get(APIkey)
  return promise.then(response => response.data)
}

function getTasksAxios() {
  const promise = axios.get(APIkeyTasksGet)
  return promise.then(response => response.data)
}

function postTasksAxios() {
  const promise = axios.post(APIkeyTasksPost, {
    widgetId : 85429,
    title : 'ZAKAZAKA'
  });
  return promise.then(response => response.data)
}

//postTasksAxios()

function deleteTasksAxios(id) {
  const promise = axios.delete(`https://repetitora.net/api/JS/Tasks?widgetId=85429&taskId=${id}`)
  return promise.then(response => response.data)
}

//deleteTasksAxios('567b82d6-c5e7-419e-91f1-eb4e00ffea60')

//postTasksAxios();

 //     Fetch    \\

async function getImagesFetch () {
  const response = await fetch(APIkey);
  const data = await response.json();
  return data;
}

async function getTasksFetch () {
  const response = await fetch(APIkeyTasks);
  const data = await response.json();
  return data;
}

async function postTasksFetch () {
  const response = await fetch(APIkeyTasksPost + '&title=WorkOut', {method: 'POST'});
  const data = await response.json();
  return data;
}

class Man {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.people = [
      {name: 'Dima', age: 18},
      {name: 'Julia', age: 19}
    ];
    this.Manelement = this.people.map(m => {
      const man = document.createElement('li');
      man.innerHTML = m.name;
      document.querySelector('#resultTask').appendChild(man)
    })
  }

  render() {
    return this.Manelement
  }
}

let m1 = new Man('Dima', 31)
m1.render();



// postTasksFetch();
// 818fcd1d1047300379afae3e5c33cb9cd88b68d7d81253632ba4e09a331246a5