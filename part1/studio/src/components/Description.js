import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor() {
    let authorLink = 'https://www.allrecipes.com/recipe/23431/to-die-for-fettuccine-alfredo/';
    let authorPhoto = 'https://unsplash.com/photos/Qzpqhe9bC3U';
    let authorName = 'Marika Jung-Sook';

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Blog name</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {
    render(){ 
        return (
        <div> 
      <div>
         <h1>Recipe Title</h1>
         <p>Short recipe description</p>
      </div>
      <RecipeAuthor />
   </div>
    );
    }
}

export default RecipeDescription;