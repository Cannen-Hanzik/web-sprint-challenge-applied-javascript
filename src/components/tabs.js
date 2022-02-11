import axios from 'axios';

const Tabs = (topics) => {
  const topicsWrapper = document.createElement('div');
  const topicsTab = document.createElement('div');
  const topicsTab2 = document.createElement('div');
  const topicsTab3 = document.createElement('div');
  const topicsTab4 = document.createElement('div');
  const topicsTab5 = document.createElement('div');

  topicsWrapper.classList.add('topics');
  topicsTab.classList.add('tab');

  topicsWrapper.appendChild(topicsTab);
  topicsWrapper.appendChild(topicsTab2);
  topicsWrapper.appendChild(topicsTab3);
  topicsWrapper.appendChild(topicsTab4);
  topicsWrapper.appendChild(topicsTab5);
  
  topicsTab.textContent = topics;
  return topicsWrapper;
}
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
const tabsAppender = (topics) => {
  const axios.get(`http://localhost:5000/api/${topics}`)
    .then(res => {
      document.querySelector('.tabs-container').appendChild(Tabs(res.data.topics));
    })
    .catch(err => console.error(err))
}
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
export { Tabs, tabsAppender }
