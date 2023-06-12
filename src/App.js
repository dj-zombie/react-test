import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import ExpenseItem from './ExpenseItem.js';
import {ClassComponent} from './ExpenseItem.js';
import './App.css';

const MyComponent = () => {
  const [images, setImages] = useState(0);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/albums/1/photos')
      .then(response => setImages(response.data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    console.log("Changed Images: ", images)
  }, [images])


  return (
    <>
      {images.length > 0 ? images.map((image) => (
        <img src={image.url} key={image.id} />
      )) : 'loading...'}
    </>
  );
}

function App() {
  return (
    <>
      <ExpenseItem sauce="sauce!">Ayoo</ExpenseItem>
      <ClassComponent name="Zombie"></ClassComponent>
      <MyComponent />
    </>
  );
}

export default App;
