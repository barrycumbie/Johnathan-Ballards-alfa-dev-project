// old school reminder that JS is hooked up
alert('Garflix is live!');

var characters = [
  'Garfield',
  'Odie',
  'Jon',
  'Nermal',
  'Arlene',
  'Dr.Liz',
  'Minerva',
  'Squeak',
  'Aunt Ivy',
  'Dr. Wipple'
];

// Additional Garfield Characters
// alert('Other Garfield Characters!');
// var characters = [
//   'Dr.Liz',
//   'Minerva',
//   'Squeak',
//   'Aunt Ivy',
//   'Dr. Wipple',
// ]


// picks a random character line from the array and logs it

console.log('/* <Garflix is live/> *');
function greetRandomCharacter() {
  var pick = characters[Math.floor(Math.random() * characters.length)];
  console.log('Your daily Garfield character is ' + pick);
  return pick;
}
// list of items
// Primary_list = ['Garfield', 'Odie', 'Jon', 'Nermal', 'Arlene'];
// selected_item_1 = random.choice(Primary_list);
// Secondary_list = ['Dr. Liz', 'Minerva', 'Squeak', 'Aunt Ivy', 'Dr. Wipple'];
// // random selection
// selected_item_2 = random.choice(Secondary_list)
// print(selected_item_1 and selected_item_2)

// defensive: only run once the DOM is actually ready
document.addEventListener('DOMContentLoaded', function () {
  console.log('Garflix loaded! Try calling greetRandomCharacter() in the console.');
  greetRandomCharacter();
});

  document.addEventListener('DOMContentLoaded', function () {
    console.log('Other Garfeild Characters! Try calling greetRandomCharacter() in the console.');
    greetRandomCharacter();
  });
