var addToReadingButton = document.getElementById('addToReadingBtn');
addToReadingButton.onclick = function () {
  addToReadingButton.style.backgroundColor = addToReadingButton.style.backgroundColor === 'rgb(255, 158, 116)' ? '#629D9A' : '#FF9E74'
  addToReadingButton.innerHTML = addToReadingButton.innerHTML === "Add to currently reading" ? "in currently reading" : "Add to currently reading"
}

var newBooks = [
  {
    title: 'The Non-Designer\'s Design Book',
    author: 'by Robin Williams',
    src: '/images/lbook19.png',
  },
  {
    title: 'UX/UI Design',
    author: 'by Thomas Charles',
    src: '/images/lbook20.png',
  },
  {
    title: 'UX Magic',
    author: 'by Daniel Rosenberg',
    src: '/images/lbook21.png',
  },
  {
    title: 'Bottlenecks',
    author: 'by David C. Evans',
    src: '/images/lbook22.png',
  },
  {
    title: 'The Lean Startup',
    author: 'by Eric Ries',
    src: '/images/lbook23.png',
  },
  {
    title: 'The User Experience Guide Book for Product Managers',
    author: 'by Marcin Treder',
    src: '/images/lbook24.png',
  }
]
var expandButton = document.getElementById('expandBtn');
var expandableDiv = document.getElementById('expandableDiv');
var expandText = document.getElementById('expandText');
var expandChevron = document.getElementById('expandChevron');
expandButton.onclick = function () {
  if (expandText.innerHTML === 'Close') {
    while (expandableDiv.lastChild && expandableDiv.children.length > 6) {
      expandableDiv.removeChild(expandableDiv.lastChild);
    }
    expandText.innerHTML = "Expand"
    expandChevron.src = '/images/expandarrow.png'
  } else {
    newBooks.forEach(book => {
      const bookTab = document.createElement('div');
      bookTab.classList.add('bookTab');
      const bookImage = document.createElement('img')
      bookImage.src = book.src
      bookTab.appendChild(bookImage)
      const firstP = document.createElement('p')
      firstP.innerHTML = book.title
      bookTab.appendChild(firstP)
      const secondP = document.createElement('p')
      secondP.innerHTML = book.author
      bookTab.appendChild(secondP)

      expandableDiv.appendChild(bookTab);
    })
    expandText.innerHTML = "Close"
    expandChevron.src = '/images/closearrow.png'
  }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
