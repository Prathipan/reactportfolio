import React from "react";
import ProjectCard from "./ProjectCard";
import "./projects.css";
import tictactoe from '../../assets/tictactoe.png'
import todo from '../../assets/todoApp.png'
import moviesApp from '../../assets/moviesApp.png'
import shoppingCart from '../../assets/shoppingCart.png'

// todo = https://flourishing-strudel-9a7e18.netlify.app/
//tic tac toe https://vocal-flan-61c2f4.netlify.app/

const Projects = () => {
  const project = [
    {
      title : "Tic Tac Toe",
      description : "It is created using basic React.I have used basic hook 'useState' . I have used conditional rendering and conditional styling.",
      url : "https://vocal-flan-61c2f4.netlify.app/",
      img :  tictactoe
    },
    {
      title : "Shopping cart",
      description : "It is a simple shopping cart page , which is having set of products. we can add to cart and remove from cart. Total can be calculated based on cart added and removed",
      url : "https://prathipan-shopping-cart.netlify.app",
      img : shoppingCart
    },
    {
      title : "ToDo App",
      description : "Performed CRUD operations . I have used fetch API to perform get , put, post, delete operations. I have used basic hooks like 'useState'&'useEffect",
      url : "https://flourishing-strudel-9a7e18.netlify.app/",
      img :  todo
    },
    {
      title : "Movies App",
      description : "List of movies with description. we can like and dislike movies. Performed CRUD Operations.Added trailer inside webpage.",
      url : "https://cosmic-croquembouche-c40e58.netlify.app/",
      img : moviesApp
    }
    
  ]
  return (
    <>
      <div className="project-container">
        <div className="project-content text-center">
          <h2>Projects</h2>
          <p>My recent works</p>
        </div>
        <div className="media d-lg-flex flex-wrap d-md-flex justify-content-around .d-sm-flex ">
          {
            project.map((project) =>{
              return <ProjectCard project={project}/>
            }
              
            )
          }
          
        </div>
      </div>
    </>
  );
};

export default Projects;
