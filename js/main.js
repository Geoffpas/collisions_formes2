


function test_collision_rectangles(rect1, rect2) {

    let rect1Droit = rect1.x + rect1.width
    let rect1Bas = rect1.y + rect1.heigt
    
}

function test_collision_cercles(cercle1, cercle2) {
    console.log(cercle1)
    return false
}



// function isTouching(rect1, rect2) {
//     // Calcul des positions des côtés des carrés
//     const rect1Right = rect1.x + rect1.width;
//     const rect1Bottom = rect1.y + rect1.height;
//     const rect2Right = rect2.x + rect2.width;
//     const rect2Bottom = rect2.y + rect2.height;
//     // Vérification si les carrés se touchent
//     if (rect1.x < rect2Right &&
//         rect1Right > rect2.x &&
//         rect1.y < rect2Bottom &&
//         rect1Bottom > rect2.y) {
//       return true;
//     } else {
//       return false;
//     }
//   }