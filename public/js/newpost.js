const newPostFormHandler = async event => {
    event.preventDefault();
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    const image = document.querySelector('input[type=file]').files[0];
    const movieId = document.querySelector('#movies').value.trim();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('movieId', movieId);
    formData.append('image', image);


    const response = await fetch('/api/post', {
        method: 'POST',
        body: formData,
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Something went wrong!')
    }
}
document
    .querySelector('#post-create-form')
    .addEventListener('submit', newPostFormHandler);