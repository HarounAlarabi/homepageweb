var array;


array = ['https://farm3.staticflickr.com/2747/4453505148_b47c2e40a1_o.jpg', 
'https://i.pinimg.com/originals/12/b4/4f/12b44f2cd384e9b6d4e4ff3d6ba8fe30.jpg',
 'https://www.e-architect.com/images/jpgs/saudi_arabia/breakwater_beacon_jeddah_ing230909_1.jpg',
'https://welcometosocotra.webcommy.it/wp-content/uploads/2020/08/header-temp.jpg',
'https://media.voloscontato.it/images/2015/10/2347943166_87219ece5f.jpg'];


document.getElementById('next').addEventListener('click', (event) => {
  let element_pic = document.getElementById('pic');
  array.push(array[0]);
  element_pic.setAttribute("src", array.shift());

});
if (!true) {
}


document.getElementById('prev').addEventListener('click', (event) => {
  let element_pic2 = document.getElementById('pic');
  array.unshift(array.slice(-1)[0]);
  element_pic2.setAttribute("src", array.pop());

});