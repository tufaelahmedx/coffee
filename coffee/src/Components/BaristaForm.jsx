import React, {Component, useState} from "react";
const BaristaForm = () => {

    const onNewDrink = () => {

    };

    const onCheckAnswer = () => {

    };
  
  return (
    <div>

        <h2>Hi, I'd like to order a:</h2>
        <form>
            
        </form>

        <button className="button" type="submit" onClick={onCheckAnswer()}>Check Answer</button>
        <button className="button" type="submit" onClick={onNewDrink()}>New Drink</button>
    </div>
  );
  
};

export default BaristaForm;