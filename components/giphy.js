class Giphy {
  constructor() {
    this.getGiphy = this.getGiphy.bind(this);
    this.handleGetGiphySuccess = this.handleGetGiphySuccess.bind(this);
    this.handleGetGiphyError = this.handleGetGiphyError.bind(this);
  }

  getGiphy() {
    $.ajax({
      method: 'GET',
      url: 'https://api.giphy.com/v1/gifs/search',
      data: {
        'api_key': 'kGoW8DFKOAQFLvSz22dA6SU8VTzK28Rf',
        'q': 'random'
      },
      success: this.handleGetGiphySuccess,
      error: this.handleGetGiphyError
    })
  }

  handleGetGiphySuccess(data) {
    console.log('Giphy:', data);
    const img = document.createElement('img');
    const giphy = document.getElementById('giphy');
    let min = Math.ceil(0);
    let max = Math.floor(24);
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    img.src = data.data[random].images.downsized_large.url;
    img.setAttribute('width', '250');
    img.setAttribute('height', '200');
    giphy.append(img);
  }

  handleGetGiphyError(error) {
    console.log(error);
  }
}
