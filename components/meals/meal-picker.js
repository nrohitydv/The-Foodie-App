"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import classes from "./meal-picker.module.css";
function MealPicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();
  function handlePick() {
    imageInput.current.click();
  }
  //function to preview the uploaded image
  function handleImageChange(event) {
    let file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    let fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No Image Picked yet.</p>}
          {pickedImage && <Image src={pickedImage} alt="" fill />}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png , image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button className={classes.button} type="button" onClick={handlePick}>
          Pick a Image
        </button>
      </div>
    </div>
  );
}

export default MealPicker;
