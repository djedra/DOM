const buttonFont = Array.from(document.querySelectorAll('.font-size'));
const arrayColor = Array.from(document.querySelectorAll('.color'));
const bookMenu = document.querySelector('#book');

buttonFont.forEach((item) => {
  item.onclick = (event) => {
    event.preventDefault();
    const size = event.target.dataset.size;


    buttonFont.forEach(button => button.classList.remove('font-size_active'));

    if (size) {
      item.classList.add('font-size_active');
      bookMenu.classList.remove('book_fs-small', 'book_fs-big');
      bookMenu.classList.add(`book_fs-${size}`);
    } else {
      bookMenu.classList.remove('book_fs-small', 'book_fs-big');
    }
  };
});

const textColorButtons = arrayColor.filter(item => item.dataset.textColor);
const bgColorButtons = arrayColor.filter(item => item.dataset.bgColor);

textColorButtons.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    const textColor = event.target.dataset.textColor;


    textColorButtons.forEach(button => button.classList.remove('color_active'));

    if (textColor) {
      item.classList.add('color_active');
      bookMenu.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
      bookMenu.classList.add(`book_color-${textColor}`);
    }
  });
});

bgColorButtons.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    const bgColor = event.target.dataset.bgColor;


    bgColorButtons.forEach(button => button.classList.remove('color_active'));

    if (bgColor) {
      item.classList.add('color_active');
      bookMenu.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');
      bookMenu.classList.add(`book_bg-${bgColor}`);
    }
  });
});






// arrayColor.forEach((item, i) => {
//   item.addEventListener('click', () => {
//
//     if (textColor) {
//       item.classList.add('font-size_active')
//       bookMenu.className = `book book_fs-${textColor}`;
//     } else {
//       bookMenu.className = "book";
//     }
//   })
// })
//
// arrayColor.forEach((item, i) => {
//   item.addEventListener('click', () => {
//     const bgColor = event.target.dataset.bgColor;
//     if (bgColor) {
//       item.classList.add('font-size_active')
//       bookMenu.className = `book book_fs-${bgColor}`;
//     } else {
//       bookMenu.className = "book";
//     }
//   })
// })





// if (size) {
//
//   reader.className = `book__content book_fs-${size}`;
//
// } else {
//
//   reader.className = "book__content";
//
// }

    // console.log(size)
    // let dataName = item.dataset.size






    // switch(dataName) {
    //   case 'small':
    //     fontSize.classList.add('book_fs-small')
    //     fontSize.classList.remove('font-size_big')
    //     if(item.classList.contains('font-size_active')){
    //       break
    //     } else {
    //       // console.log(buttonFont[1].className)
    //       item.classList.add('font-size_active')
    //       buttonFont[1].className = 'font-size'
    //       buttonFont[2].className = 'font-size font-size_big'
    //       break
    //     }
    //   case 'big':
    //     fontSize.classList.add('book_fs-big')
    //     fontSize.classList.remove('book_fs-small')
    //     if(item.classList.contains('font-size_active')){
    //       break
    //     } else {
    //       item.classList.add('font-size_active')
    //       buttonFont[0].className = 'font-size font-size_small'
    //       buttonFont[1].className = 'font-size'
    //       break
    //     }
    //   case undefined:
    //     // fontSize.className = 'book'
    //     fontSize.classList.remove('book_fs-big')
    //     fontSize.classList.remove('book_fs-small')
    //     if(item.classList.contains('font-size_active')){
    //       break
    //     } else {
    //       item.classList.add('font-size_active')
    //       buttonFont[0].className = 'font-size'
    //       buttonFont[2].className = 'font-size font-size_big'
    //       break
    //     }
    // }

// arrayColor.forEach((item, i) => {
//   let textColorName = item.dataset.textColor
//   let bgColorName = item.dataset.bgColor
//   // console.log(textColorName)
//   item.addEventListener('click', () => {
//     switch(textColorName) {
//       case 'black':
//         fontSize.classList.add('book_color-black')
//         fontSize.classList.remove('book_color-gray')
//         fontSize.classList.remove('book_color-whitesmoke')
//         if (item.classList.contains('color_active')) {
//           break
//         } else {
//           item.classList.add('color_active')
//           arrayColor[1].className = 'color text_color_gray'
//           arrayColor[2].className = 'color text_color_whitesmoke'
//           break
//         }
//       case 'gray':
//         fontSize.classList.add('book_color-gray')
//         fontSize.classList.remove('book_color-black')
//         fontSize.classList.remove('book_color-whitesmoke')
//         if (item.classList.contains('color_active')) {
//           break
//         }else {
//           item.classList.add('color_active')
//           arrayColor[0].className = 'color text_color_black'
//           arrayColor[2].className = 'color text_color_whitesmoke'
//           break
//         }
//       case 'whitesmoke':
//         fontSize.classList.remove('book_color-black')
//         fontSize.classList.remove('book_color-gray')
//         fontSize.classList.add('book_color-whitesmoke')
//         if (item.classList.contains('color_active')) {
//           break
//         }else {item.classList.add('color_active')
//           arrayColor[0].className = 'color text_color_black'
//           arrayColor[1].className = 'color text_color_gray'
//           break}
//
//     }
//     switch(bgColorName) {
//       case 'black':
//         fontSize.classList.add('book_bg-black')
//         fontSize.classList.remove('book_bg-gray')
//         fontSize.classList.remove('book_bg-white')
//         if (item.classList.contains('color_active')) {
//           break
//         } else {
//           item.classList.add('color_active')
//           arrayColor[4].className = 'color bg_color_gray'
//           arrayColor[5].className = 'color bg_color_white'
//           break
//         }
//       case 'gray':
//         fontSize.classList.add('book_bg-gray')
//         fontSize.classList.remove('book_bg-black')
//         fontSize.classList.remove('book_bg-white')
//         if (item.classList.contains('color_active')) {
//           break
//         } else {
//           item.classList.add('color_active')
//           arrayColor[3].className = 'color text_color_black'
//           arrayColor[5].className = 'color bg_color_white'
//           break
//         }
//       case 'white':
//         fontSize.classList.add('book_bg-white')
//         fontSize.classList.remove('book_bg-gray')
//         fontSize.classList.remove('book_bg-white')
//         if (item.classList.contains('color_active')) {
//           break
//         } else {
//           item.classList.add('color_active')
//           arrayColor[3].className = 'color text_color_black'
//           arrayColor[4].className = 'color text_color_gray'
//           break
//         }
//     }
//   })
// })
