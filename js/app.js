function showPoster(comicTitle, comicImage) {
  $('#comicTitle').text(comicTitle);
  $('#comicImg').attr("src", comicImage);
  $('#posterModal').modal('show');
}