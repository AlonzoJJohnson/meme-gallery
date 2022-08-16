var imageUrls = [
  'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg', 'https://c.tenor.com/uYP_Nkq8VPsAAAAd/coding-hello-world.gif', 'https://wiki.godvillegame.com/images/thumb/7/76/Prap.jpg/298px-Prap.jpg', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcaliforniamemes.com%2Fwp-content%2Fuploads%2F2019%2F01%2FTop-16-Funny-Memes-3-1.jpg&f=1&nofb=1', 'https://ca.slack-edge.com/T1EHQUJ8J-UH2DX47S8-500962933591-192', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FdEdmW17JnZhiU%2F200.gif&f=1&nofb=1', 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.reactiongifs.com%2Fwp-content%2Fuploads%2F2011%2F06%2Fhomer_lurk.gif&f=1&nofb=1'
];
var $gallery = document.querySelector('main');
var $imageUrlInput = document.querySelector('input');
var $addImageButton = document.querySelector('button');

$addImageButton.addEventListener('click', function () {
  if ($imageUrlInput.value !== '') {
    imageUrls.push($imageUrlInput.value);
    $imageUrlInput.value = '';
    updateGallery();
  }
});

function updateGallery() {
  $gallery.innerHTML = '';
  for (var i = 0; i < imageUrls.length; i++) {
    var $imageElement = document.createElement('img');
    $imageElement.className = 'gallery-image';
    $imageElement.src = imageUrls[i];
    $gallery.appendChild($imageElement);
  }
}

updateGallery();
