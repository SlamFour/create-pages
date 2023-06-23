document.addEventListener('DOMContentLoaded', function() {
    fetch('header.html')
    .then(response => response.text())
    .then(data => {
        const targetElement = document.querySelector('.header-container');

        console.log(data)

        targetElement.innerHTML = data;


        // Due to it having to be called after the fetch
        const button = document.getElementById('submit-page');


        
        buttonEvent(button)
        
    });
})


function buttonEvent(element) {
    element.addEventListener('click', function() {

        // const options = {
        //     hostname: 'localhost',
        //     port: 3000,
        //     path: '/nodejs',
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Content-Length': postData.length
        //     }
        // };

        // const request = http.request(options, response => {
        //     if (response.statusCode === 200) {
        //         console.log('Page saved successfully');
        //     } else {
        //         console.log('Failed to save page');
        //     }
        // });

        // request.on('error', error => {
        //     console.log('An error occurred while saving the page:', error);
        // });

        // request.write(postData);
        // request.end();

        //Send off page content to server

    //     const newPageContent = 'New Page Content';

    //     const postData = JSON.stringify({ content: newPageContent });

    //     const options = {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Content-Length': postData.length,
    //                 'Access-Control-Allow-Origin': '*',
    //                 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    //             },
    //             body: postData
    //         };


    //     fetch('http://localhost:3000/nodejs', options)
    //     .then(response => {
    //         if (response.ok) {
    //             console.log('Page saved successfully');
    //         } else {
    //             console.log('Failed to save page');
    //         }
    //     })
    //     .catch(error => {
    //         console.log('An error occurred while saving the page:', error);
    //     })
    // });

    const data = 'Some dynamic data'; // Modify this with your own data

    fetch('/nodejs/pages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    })
      .then(response => response.text())
      .then(htmlContent => {
        // Inject the generated HTML content into the page
        document.body.innerHTML = htmlContent;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
}
