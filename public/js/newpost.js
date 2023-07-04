const newPostFormHandler = async event => {
    event.preventDefault();
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();

    const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Something went wrong!')
    }
}
document
    .querySelector('#new-post-form')
    .addEventListener('submit', newPostFormHandler);