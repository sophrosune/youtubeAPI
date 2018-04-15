
// attach submit event to form and find value
$('.js-search-form').submit(function(event){
    event.preventDefault();
    let searchValue = $('.js-query').val();
    getRequest(searchValue);
      });
    function getRequest(searchValue){
    let params = {
      part: 'snippet',
      key: 'AIzaSyDoQ-SbIAaPYIuTQ0FfY-6lv5HvaXcy8w8',
      q: searchValue,
      maxResults: 15
    };
    url='https://www.googleapis.com/youtube/v3/search';
    $.getJSON(url, params, function(data) {
      $('.js-query').val("");
      $('.js-search-results').html("");
      showResults(data.items);
    });
  }
  // ^^ should I switch up JSON for AJAX? Not necessary.
  
function showResults(results){
  // console.log(results);
    let output = "";
      $.each(results, function (key, value){
        console.log(value);
        if (value.id.kind === 'youtube#video'){
          let thumb = value.snippet.thumbnails.medium.url;
          let title = value.snippet.title;
          let videoId = value.id.videoId;
          output +=`<li>
            <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">
              <p>${title}</p>
              <img src="${thumb}"/>
            </a>
          </li>`;
        }
    });
    $('.js-search-results').prepend(output);
    }

  // $('.js-search-results').html('<ul></ul>').find('ul').prepend(output);
  // to add a new container while placing info into it, use find to redirect
  

// const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

// // attach submit event to form and find value of input
// $('.js-search-form').submit(function(event){
//     event.preventDefault();
//     let searchValue = $('.js-query').val();
//     getDataFromApi(searchValue);
//       });
//     function getDataFromApi(searchTerm, callback) {
//     const settings = {
//       url: YOUTUBE_SEARCH_URL,
//       data: {
//         part: `snippet`,
//         key: 'AIzaSyDhnIujdeGLw6Wm86Ppje9eWeDLhfONNqw',
//         q: '${searchTerm} in:name'
//     },
//     dataType: 'json',
//     type: 'GET',
//     success: callback
//   };
  
//   $.ajax(settings);
//   }
// function showResults(results){
//     let output = "";
//       $.each(results, function (key, value){
//         let thumb = value.snippet.thumbnails.medium.url;
//         let title = value.snippet.title;
//         let videoId = value.id.videoId;
//         console.log(thumb);
//         output += '<ul><li><p>' + title + ' - ' + videoId + '</p><img src="' + thumb +'></li></ul>';
//           $('.js-search-results').prepend(output);
//     });
//     }













// const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

// function getDataFromApi(searchTerm, callback) {
//   const settings = {
//     url: YOUTUBE_SEARCH_URL,
//     data: {
//       part: `snippet`,
//       key: 'AIzaSyDhnIujdeGLw6Wm86Ppje9eWeDLhfONNqw',
//       q: '${searchTerm} in:name'
//   },
//   dataType: 'json',
//   type: 'GET',
//   success: callback
// };

// $.ajax(settings);
// }

// function renderResult(result) {
//   return `
//     <div>
//       <h2>
//       <a class="js-result-name" href="${result.html_url}" target="_blank">${result.name}</a> by <a class="js-user-name" href="${result.owner.html_url}" target="_blank">${result.owner.login}</a></h2>
//       <p>Number of watchers: <span class="js-watchers-count">${result.watchers_count}</span></p>
//       <p>Number of open issues: <span class="js-issues-count">${result.open_issues}</span></p>
//     </div>
//   `;
// }

// function displayYouTubeSearchData(data) {
//   const results = data.items.map((item, index) => renderResult(item));
//   $('.js-search-results').html(results);
// }

// function watchSubmit() {
//   $('.js-search-form').submit(event => {
//     event.preventDefault();
//     const queryTarget = $(event.currentTarget).find('.js-query');
//     const query = queryTarget.val();
//     // clear out the input
//     queryTarget.val("");
//     getDataFromApi(query, displayYouTubeSearchData);
//   });
// }

// $(watchSubmit);
